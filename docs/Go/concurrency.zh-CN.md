---
title: 网络请求
order: 50
nav:
  path: /go
  title: Go
  order: 100
group:
  path: /go/concurrency
  title: 并发
  order: 50
---

### 例子

```go
package main

import (
	"errors"
	"fmt"
	"net/http"
	"sync"

	"golang.org/x/net/html"
)

var GITHUB_URLS = []string{
	"alive.github.com",
	"api.github.com",
	"assets-cdn.github.com",
	"avatars.githubusercontent.com",
	"avatars0.githubusercontent.com",
	"avatars1.githubusercontent.com",
	"avatars2.githubusercontent.com",
	"avatars3.githubusercontent.com",
	"avatars4.githubusercontent.com",
	"avatars5.githubusercontent.com",
	"camo.githubusercontent.com",
	"central.github.com",
	"cloud.githubusercontent.com",
	"codeload.github.com",
	"collector.github.com",
	"desktop.githubusercontent.com",
	"favicons.githubusercontent.com",
	"gist.github.com",
	"github-cloud.s3.amazonaws.com",
	"github-com.s3.amazonaws.com",
	"github-production-release-asset-2e65be.s3.amazonaws.com",
	"github-production-repository-file-5c1aeb.s3.amazonaws.com",
	"github-production-user-asset-6210df.s3.amazonaws.com",
	"github.blog",
	"github.com",
	"github.community",
	"github.githubassets.com",
	"github.global.ssl.fastly.net",
	"github.io",
	"github.map.fastly.net",
	"githubstatus.com",
	"live.github.com",
	"media.githubusercontent.com",
	"objects.githubusercontent.com",
	"pipelines.actions.githubusercontent.com",
	"raw.githubusercontent.com",
	"user-images.githubusercontent.com",
	"vscode.dev",
	"education.github.com",
}

type concurrency struct {
	wg  sync.WaitGroup // 等待多个 Goroutine 执行完毕
	wm  sync.Mutex     // 给修改的ips添加锁
	err chan error     // 返回错误的通道
}

func main() {
	errCh := make(chan error)
	cc := &concurrency{sync.WaitGroup{}, sync.Mutex{}, errCh}

	ips := []string{}
	for _, url := range GITHUB_URLS {
		// 增加 WaitGroup 的计数器
		cc.wg.Add(1)
		go FetchIp(url, &ips, cc)
	}

	go func() {
		// 阻塞调用该方法的 Goroutine 计算器为0时代表完成
		cc.wg.Wait()
		// 关闭通道
		close(cc.err)
	}()

	for err := range errCh {
		fmt.Println("Error:", err)
	}

	fmt.Println(ips)
}

func FetchIp(url string, ips *[]string, cc *concurrency) {
	// 函数执行完时减少计数器
	defer cc.wg.Done()
	ip, err := fetchIpFromURL(url)
	if err != nil {
		cc.err <- err
		return
	}

	// 加锁 （保证每个ip都导入了ips）
	cc.wm.Lock()
	*ips = append(*ips, ip)
	// 解锁
	cc.wm.Unlock()
}

// 请求域名查询页面获取ip
func fetchIpFromURL(url string) (string, error) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", fmt.Sprintf("https://sites.ipaddress.com/%v", url), nil)
	if err != nil {
		s := fmt.Sprintf("%s : %v", url, err.Error())
		return "", errors.New(s)
	}

	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")

	resp, err := client.Do(req)
	if err != nil {
		s := fmt.Sprintf("%s : %v", url, err.Error())
		return "", errors.New(s)
	}
	defer resp.Body.Close()

	doc, err := html.Parse(resp.Body)
	if err != nil {
		s := fmt.Sprintf("%s : %v", url, err.Error())
		return "", errors.New(s)
	}

	node := findNode(doc, func(n *html.Node) bool {
		return n.Type == html.ElementNode && n.Data == "div" && containsAttrClass(n, "tabpanel-dns-a")
	})
	if node == nil {
		s := fmt.Sprintf("%v Node not found.", url)
		return "", errors.New(s)
	}

	ip := findIpVal(node)
	if ip == "" {
		s := fmt.Sprintf("%v no fund ip!", url)
		return "", errors.New(s)
	}

	return ip, nil
}

func findIpVal(n *html.Node) string {
	if n.LastChild != nil {
		return findIpVal(n.LastChild)
	}
	return n.Data
}

func findNode(n *html.Node, match func(*html.Node) bool) *html.Node {
	if match(n) {
		return n
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		if node := findNode(c, match); node != nil {
			return node
		}
	}
	return nil
}

func containsAttrClass(n *html.Node, name string) bool {
	for _, attr := range n.Attr {
		if attr.Key == "id" && attr.Val == name {
			return true
		}
	}
	return false
}

```
