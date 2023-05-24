import { defineConfig } from 'dumi';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';
const repo = 'GarminBook';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/GarminBook`,
  publicPath: `/GarminBook/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/garmin954/GarminBook',
    },
  ],
  locales: [['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
  chainWebpack(config: any) {
    console.log(config);
    config.plugin('windicss').use(WindiCSSWebpackPlugin);
  },
  sass: {}, ///配这里
  themeConfig: {
    footerConfig:[],
    menu: {
      // 折叠菜单
      collapse: true,
      // 菜单类型
      type: 'inline',
    },
  },
});
