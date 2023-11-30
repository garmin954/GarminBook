(self.webpackChunkGarminBook=self.webpackChunkGarminBook||[]).push([[96],{2923:function($e,rn,s){"use strict";s.d(rn,{Z:function(){return u}});var p=s(97857),an=s.n(p),f=s(87603),Sn=s(51904),N=s(97034),ln=s(1322),wn=s(17542),Cn=s(68400),D=s.n(Cn),q=s(67595),V=s(43281),sn,cn,$,dn,un,pn,_,mn,hn,xn,P=(0,q.kc)(function(B,S){var h=B.token,c=B.prefixCls,j=B.responsive,C=B.css,O=B.stylish,X=B.isDarkMode,L=B.cx,E=S.rowNum,n=S.hasLink,R="".concat(c,"-features"),U="".concat(R,"-cover"),Y="".concat(R,"-description"),F="".concat(R,"-title"),J="".concat(R,"-img"),gn=20,en=function(on){return C(sn||(sn=D()([`
      width: `,`px;
      height: `,`px;
      font-size: `,`px;
    `])),on,on,on*(22/24))},W=C(cn||(cn=D()([`
      transition: all `," ",`;
    `])),h.motionDurationSlow,h.motionEaseInOutCirc);return{cell:C($||($=D()([`
        overflow: hidden;
      `]))),container:C(dn||(dn=D()([`
        `,`;

        z-index: 1;
        padding: 24px;
        border-radius: 24px;

        background: linear-gradient(
          135deg,
          `,`,
          `,`
        );

        position: relative;

        &:hover {
          scale: 1.03;

          background: linear-gradient(
            135deg,
            `,`,
            `,`
          );

          box-shadow: inset 0 0 0 1px `,", ",`;

          .`,` {
            height: `,`px;
            width: 100%;
            padding: 0;
          }

          .`,` {
            `,`;
          }

          .`,` {
            position: absolute;
            visibility: hidden;
            opacity: 0;
          }

          .`,` {
            font-size: `,`px;
          }
        }
      `])),W,h.colorFillContent,h.colorFillQuaternary,(0,V.$n)(.5,h.colorFillContent),(0,V.$n)(.5,h.colorFillQuaternary),h.colorBorder,h.boxShadowSecondary,U,gn*E,J,en(100),Y,F,n?14:20),title:L(F,W,C(un||(un=D()([`
          pointer-events: none;
          font-size: 20px;
          line-height: `,`;
          margin: 16px 0;
          color: `,`;
        `])),h.lineHeightHeading3,h.colorText)),desc:L(Y,W,C(pn||(pn=D()([`
          color: `,`;

          pointer-events: none;
          quotient {
            color: `,`;
            display: block;
            margin: 12px 0;
            padding-left: 12px;
            position: relative;
            &:before {
              position: absolute;
              content: '';
              left: 0;
              display: block;
              border-radius: 2px;
              width: 4px;
              height: 100%;
              background: `,`;
            }
          }
        `])),h.colorTextSecondary,h.colorTextDescription,X?h.colorPrimary:h.colorPrimaryBgHover)),imgContainer:L(U,W,C(_||(_=D()([`
          background: `,`;
          border-radius: 8px;
          opacity: 0.8;

          `,`;
          padding: 4px;

          &[image-style='primary'] {
            background: linear-gradient(135deg, `,", ",`);
          }

          &[image-style='light'] {
            background: `,`;
          }

          &[image-style='soon'] {
            opacity: 0.5;
            background: linear-gradient(
              135deg,
              `,`,
              `,` 50%,
              `,`
            );
          }
        `])),h.colorFillContent,en(24),h.gradientColor1,h.gradientColor2,h.colorBgContainer,(0,V.m4)(h.gradientColor2,.3),(0,V.m4)(h.gradientColor2,.3),(0,V.m4)(h.gradientColor1,.3))),img:L(J,W,C(mn||(mn=D()([`
          `,`;
          color: `,`;
        `])),en(20),h.colorWhite)),link:C(hn||(hn=D()([`
        `,`;

        margin-top: 24px;

        a {
          `,`;

          color: `,`;
          &:hover {
            color: `,`;
          }
        }
      `])),W,O.resetLinkColor,h.colorTextDescription,h.colorPrimaryHover),blur:C(xn||(xn=D()([`
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        `,`;
        scale: 2;
        opacity: `,`;
        `,` {
          display: none;
        }
      `])),O.heroBlurBall,X?.05:.08,j.mobile)}}),z=s(85893),Hn=function(S){var h=S.image,c=S.className,j=S.title,C=/(\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp)$/;return h.startsWith("http")||C.test(h)?(0,z.jsx)("img",{className:c,src:h,alt:j}):(0,z.jsx)(ln.Z,{className:c,children:h})},M=function(S){var h=S.imageType,c=S.row,j=S.column,C=S.hero,O=S.description,X=S.image,L=S.title,E=S.link,n=S.imageStyle,R=S.openExternal,U=c||7,Y=P({rowNum:U,hasLink:!!E}),F=Y.styles,J=Y.theme;return(0,z.jsxs)("div",{className:F.container,style:{gridRow:"span ".concat(U),gridColumn:"span ".concat(j||1),cursor:E?"pointer":"default"},onClick:function(){E&&(R?window.open(E):N.m8.push(E))},children:[(0,z.jsxs)("div",{className:F.cell,children:[X&&(0,z.jsx)(ln.Z,{"image-style":h,className:F.imgContainer,style:n,children:(0,z.jsx)(Hn,{className:F.img,image:X,title:L})}),L&&(0,z.jsxs)(wn.D,{as:"h3",horizontal:!0,gap:8,align:"center",className:F.title,children:[L,h==="soon"?(0,z.jsx)(Sn.Z,{color:J.isDarkMode?"pink-inverse":"cyan-inverse",children:"SOON"}):null]}),O&&(0,z.jsx)("p",{dangerouslySetInnerHTML:{__html:O},className:F.desc}),E&&(0,z.jsx)("div",{className:F.link,children:(0,z.jsxs)(N.rU,{to:E,children:["\u7ACB\u5373\u4E86\u89E3 ",(0,z.jsx)(f.Z,{})]})})]}),C&&(0,z.jsx)("div",{className:F.blur})]})},b=M,I,vn,Tn=(0,q.kc)(function(B){var S=B.token,h=B.prefixCls,c=B.responsive,j=B.css,C=B.cx,O="".concat(h,"-features");return{container:C(O,j(I||(I=D()([`
        max-width: `,`px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: 24px;
        gap: 16px;

        `,`
      `])),S.contentMaxWidth,c({mobile:j(vn||(vn=D()([`
            flex-direction: column;
            display: flex;
          `]))),laptop:{gridTemplateColumns:"repeat(2, 1fr)"}})))}}),nn=function(S){var h=S.items,c=S.style,j=Tn(),C=j.styles;return h!=null&&h.length?(0,z.jsx)("div",{className:C.container,style:c,children:h.map(function(O){return(0,z.jsx)(b,an()({},O),O.title)})}):null},u=nn},72466:function($e,rn,s){"use strict";s.r(rn),s.d(rn,{default:function(){return Oo}});var p=s(67294),an=s(849),f=s(97034),Sn=s(64063),N=s.n(Sn),ln=s(32213),wn=s(19632),Cn=s.n(wn),D=s(13769),q=s.n(D),V=s(9783),sn=s.n(V),cn=s(10562),$=s(42385),dn=["setLoading"],un=["setLoading"],pn=typeof window!="undefined",_={},mn=function(e,t){(0,p.useEffect)(function(){p.startTransition(function(){e()})},t)},hn=function(e,t){(0,cn.Z)(function(){e()},t,{wait:32,maxWait:96})},xn=typeof p.startTransition=="function"?mn:hn,P=function(e,t,o){var a=(0,$.AC)(),l=o||function(i,d){return a.setState(sn()({},i,d))};!pn&&!_[e]&&(l(e,t),_[e]=!0),xn(function(){l(e,t)},[t])},z={title:"\u9996\u9875",link:"/",activePath:"/"},Hn=(0,p.memo)(function(){var r=(0,f.WF)(),e=(0,f.tx)(),t=(0,f.eL)(),o=(0,f.zh)(),a=(0,f.OK)(),l=(0,f.TH)(),i=(0,f.bU)(),d=(0,$.AC)();return P("siteData",r,function(){var g=r.setLoading,x=q()(r,dn),m=d.getState(),v=m.siteData,y=v.setLoading,k=q()(v,un);N()(x,k)||d.setState({siteData:r})}),P("sidebar",e),P("routeMeta",t),P("location",l),P("tabMeta",o),P("locale",i),P("navData",a,function(){var g=r.themeConfig.hideHomeNav?a:[z].concat(Cn()(a));d.setState({navData:g})}),null}),M=s(58401),b=s(17542),I=s(1322),vn=s(21687),Tn=s(97857),nn=s.n(Tn),u=s(31954),B=s(82826),S=s(87603),h=s(68400),c=s.n(h),j=s(67595),C,O,X,L,E=(0,j.kc)(function(r){var e=r.token,t=r.css;return{container:t(C||(C=c()([`
    background: `,`;
    padding: 16px 24px;
    border-radius: 8px;
    cursor: pointer;

    min-width: 250px;
    &:hover {
      background: `,`;
    }
  `])),e.colorBgContainer,e.colorFillTertiary),nav:t(O||(O=c()([`
    color: `,`;
    font-size: 12px;
  `])),e.colorTextTertiary),title:t(X||(X=c()([`
    font-size: 16px;
  `]))),alignmentEnd:t(L||(L=c()([`
    justify-content: flex-end;
  `])))}}),n=s(85893),R=function(e){var t=e.title,o=e.link,a=e.type,l=E(),i=l.styles,d=l.cx,g=(0,p.useMemo)(function(){switch(a){case"prev":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B.Z,{})," \u4E0A\u4E00\u7BC7"]});case"next":return(0,n.jsxs)(n.Fragment,{children:["\u4E0B\u4E00\u7BC7 ",(0,n.jsx)(S.Z,{})]})}},[a]);return(0,n.jsx)(f.rU,{to:o,children:(0,n.jsxs)(b.D,{className:i.container,gap:8,children:[(0,n.jsx)(b.D,{horizontal:!0,gap:4,className:d(i.nav,a==="next"&&i.alignmentEnd),children:g}),(0,n.jsx)(b.D,{horizontal:!0,className:d(i.title,a==="next"&&i.alignmentEnd),children:t})]})})},U=(0,p.memo)(R),Y=function(){var e=(0,u.HX)(u.e9,N()),t=e.prev,o=e.next,a=(0,M.F)(),l=a.mobile;return(0,n.jsxs)(b.D,{horizontal:!l,gap:l?12:0,distribution:"space-between",style:{margin:l?12:0},children:[t?(0,n.jsx)(U,nn()({type:"prev"},t)):(0,n.jsx)("div",{}),o?(0,n.jsx)(U,nn()({type:"next"},o)):(0,n.jsx)("div",{})]})},F=(0,p.memo)(Y),J,gn=(0,j.kc)(function(r){var e=r.token,t=r.responsive,o=r.isDarkMode,a=r.css;return{content:a(J||(J=c()([`
    min-height: 400px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;

    padding: 24px 48px;
    border-radius: 10px;
    background-color: `,`;
    box-shadow: `,`;

    &:has([data-page-tabs='true']) {
      padding-top: 8px;
    }

    `,` {
      padding: 8px 16px;
      border-radius: 0;
    }

    .markdown {
      color: `,`;

      h1,
      h2,
      h3 {
        color: `,`;
      }
      p {
        line-height: 1.8;
      }

      // hyperlink
      a {
        color: `,`;

        &:hover {
          color: `,`;
        }

        &:active {
          color: `,`;
        }
      }

      img {
        max-width: 100%;

        opacity: `,`;
      }

      > [data-code-type='highlighter'] {
        pre {
          margin: 8px 0 !important;
        }
      }
      // inline code
      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        //FIXME: \u7B49\u4E0B\u4E00\u7248 token \u4F18\u5316\u5347\u7EA7
        color: `,`;
        background: `,`;
        border-radius: 4px;
      }

      // pre tag
      pre {
        font-size: 14px;
        padding-left: 24px;
        padding-right: 24px;
      }

      // table
      table {
        width: 100%;
        border-spacing: 1px;
      }

      th {
        background: `,`;
      }

      tr {
      }
      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
        border-bottom: 1px solid `,`;
      }

      // blockquote
      blockquote {
        font-style: italic;

        margin: 16px 0;
        padding: 0 12px;
        color: `,`;
        border-left: 3px solid `,`;
      }

      // list
      ul li {
        line-height: 1.8;
      }

      // anchor of headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          margin-inline-start: -24px;
          color: `,`;
          // hide phantom blank node
          font-size: 0;
          text-align: right;
          line-height: inherit;

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            content: '#';
            color: `,`;
            font-size: 20px;
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    }
  `])),e.colorBgContainer,e.boxShadowTertiary,t.mobile,o?e.colorTextSecondary:e.colorText,e.colorText,e.colorLink,e.colorLinkHover,e.colorLinkActive,o?.8:1,o?e["cyan-7"]:e.colorPrimaryText,o?e["cyan-1"]:e.colorPrimaryBg,e.colorFillTertiary,e.colorBorderSecondary,e.colorTextDescription,e.colorBorder,e.colorText,e.colorTextTertiary)}}),en=function(e){var t=e.children,o=(0,u.HX)(function(x){return x.siteData.loading}),a=gn(),l=a.styles,i=a.cx,d=(0,M.F)(),g=d.mobile;return(0,n.jsxs)(b.D,{width:"100%",gap:g?0:24,children:[(0,n.jsxs)("div",{className:i("dumi-antd-style-content",l.content),children:[(0,n.jsx)(vn.Z,{active:!0,paragraph:!0,loading:o}),(0,n.jsx)("div",{style:{display:o?"none":void 0},children:t})]}),(0,n.jsx)(F,{})]})},W=(0,p.memo)(en),tn=s(96074),on=s(91298),Fn,Ln,Ye=(0,j.kc)(function(r,e){var t=r.css,o=r.responsive,a=r.token,l="rc-footer";return{container:t(Fn||(Fn=c()([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),a.colorSplit,a.colorTextDescription,o.mobile),footer:t(Ln||(Ln=c()([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: `,`;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),a.colorTextSecondary,a.colorBgLayout,l,a.colorTextTertiary,a.colorLinkHover,l,a.contentMaxWidth,e?"0":"60px 0 20px",a.colorText,e?"transparent":a.colorBorderSecondary,o.mobile,l)}}),Je=function(e){var t=e.columns,o=e.bottom,a=e.theme,l=!t||(t==null?void 0:t.length)===0,i=Ye(l),d=i.styles;return(0,n.jsx)("div",{className:d.container,children:(0,n.jsx)(on.Z,{theme:a,className:d.footer,columns:t,bottom:o})})},Qe=Je,qe=s(30932),_e=s(85093),En=s(15668),nt=s(1210),et=s(13923),tt=s(48118),ot=function(e){var t=e.github,o={title:"\u76F8\u5173\u8D44\u6E90",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Umi",description:"React \u5E94\u7528\u5F00\u53D1\u6846\u67B6",url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:"\u7EC4\u4EF6/\u6587\u6863\u7814\u53D1\u5DE5\u5177",url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:"\u5FAE\u524D\u7AEF\u6846\u67B6",url:"https://qiankun.umijs.org",openExternal:!0}]},a={title:"\u793E\u533A",items:[{icon:(0,n.jsx)(qe.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(_e.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"Ant Design \u8BED\u96C0\u4E13\u680F",url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(En.Z,{style:{color:"#056de8"}}),title:"Ant Design \u77E5\u4E4E\u4E13\u680F",url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(En.Z,{style:{color:"#056de8"}}),title:"\u4F53\u9A8C\u79D1\u6280\u4E13\u680F",url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:"SEE Conf-\u8682\u8681\u4F53\u9A8C\u79D1\u6280\u5927\u4F1A",url:"https://seeconf.antfin.com/",openExternal:!0}]},l={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"\u66F4\u591A\u4EA7\u54C1",items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"\u8BED\u96C0",url:"https://yuque.com",description:"\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:"\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"\u4F01\u4E1A\u7EA7 Node.js \u6846\u67B6",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch \u5DE5\u5177\u96C6",url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"\u8682\u8681\u4F53\u9A8C\u79D1\u6280",url:"https://xtech.antfin.com/",openExternal:!0}]},i={title:"\u5E2E\u52A9",items:[t?{icon:(0,n.jsx)(nt.Z,{}),title:"GitHub",url:t,openExternal:!0}:void 0,{icon:(0,n.jsx)(et.Z,{}),title:"\u66F4\u65B0\u65E5\u5FD7",url:"/changelog",LinkComponent:f.rU},t?{icon:(0,n.jsx)(tt.Z,{}),title:"\u8BA8\u8BBA",url:"".concat(t,"/issues"),openExternal:!0}:void 0].filter(Boolean)};return[o,a,i,l]},Zn,An,rt=(0,j.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a="rc-footer";return{container:e(Zn||(Zn=c()([`
      grid-area: footer;
      border-top: 1px solid `,`;
      color: `,`;
      text-align: center;
      align-self: stretch;

      `,` {
        border: none;
        flex-direction: column;
      }
    `])),o.colorSplit,o.colorTextDescription,t.mobile),footer:e(An||(An=c()([`
      color: `,`;
      font-size: 14px;
      line-height: 1.5;
      background-color: `,`;

      &.`,` {
        a {
          color: `,`;
          text-decoration: none;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }

      .`,` {
        &-container {
          width: 100%;
          max-width: `,`px;
          margin: auto;
          padding: 60px 0 20px;
        }

        &-columns {
          display: flex;
          justify-content: space-around;
        }

        &-column {
          //margin-bottom: 60px;

          h2 {
            position: relative;
            margin: 0 auto;
            color: `,`;
            font-weight: 500;
            font-size: 16px;
          }

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 22px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.5em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }
        }

        &-item {
          margin: 12px 0;

          &-icon {
            position: relative;
            top: -1px;
            display: inline-block;
            width: 16px;
            text-align: center;
            vertical-align: middle;
            margin-inline-end: 0.4em;

            > span,
            > svg,
            img {
              display: block;
              width: 100%;
            }
          }

          &-separator {
            margin: 0 0.3em;
          }
        }

        &-bottom {
          &-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 0;
            font-size: 16px;
            line-height: 32px;
            text-align: center;
            border-top: 1px solid `,`;
          }
        }

        &-light {
          color: rgba(0, 0, 0, 0.85);
          background-color: transparent;

          h2,
          a {
            color: rgba(0, 0, 0, 0.85);
          }
        }

        &-light &-bottom-container {
          border-top-color: #e8e8e8;
        }

        &-light &-item-separator,
        &-light &-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }

      `,` {
        .`,` {
          text-align: center;

          &-container {
            padding: 40px 0;
          }

          &-columns {
            display: block;
          }

          &-column {
            display: block;
            margin-bottom: 40px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    `])),o.colorTextSecondary,o.colorBgLayout,a,o.colorTextTertiary,o.colorLinkHover,a,o.contentMaxWidth,o.colorText,o.colorBorderSecondary,t.mobile,a)}}),at=function(){var e=(0,u.HX)(function(H){return H.siteData}),t=e.themeConfig,o=e.pkg,a=(0,u.HX)(u.BB),l=rt(),i=l.styles,d=l.theme,g=(0,M.F)(),x=g.mobile;if(!t.footer)return null;var m=t.footerConfig,v=(m==null?void 0:m.columns)===!1?void 0:ot({github:a||o.homepage}),y=(m==null?void 0:m.bottom)||t.footer,k=(m==null?void 0:m.copyright)||"Copyright \xA9 2022-".concat(new Date().getFullYear());return(0,n.jsx)(Qe,{theme:(m==null?void 0:m.theme)||d.appearance,columns:v,bottom:x?(0,n.jsxs)(I.Z,{className:i.container,children:[k,(0,n.jsx)(b.D,{align:"center",horizontal:!0,dangerouslySetInnerHTML:{__html:y}})]}):(0,n.jsxs)(I.Z,{horizontal:!0,children:[k,(0,n.jsx)(tn.Z,{type:"vertical"}),(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:y}})]})})},Mn=at,it=s(5574),G=s.n(it),fn=s(71577),lt=s(11801);function yn(r){var e=r.pathname,t=r.current,o=r.target,a="base"in t?e.replace(t.base.replace(/\/$/,""),"")||"/":e.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in o?"".concat(o.base.replace(/\/$/,"")).concat(a).replace(/([^/])\/$/,"$1"):"".concat(a).concat(o.suffix)}var st={"zh-CN":"\u{1F1E8}\u{1F1F3}","en-US":"\u{1F1FA}\u{1F1F8}","jp-JP":"\u{1F1EF}\u{1F1F5}","ko-KR":"\u{1F1F0}\u{1F1F7}","ru-RU":"\u{1F1F7}\u{1F1FA}","es-ES":"\u{1F1EA}\u{1F1F8}","fr-FR":"\u{1F1EB}\u{1F1F7}","de-DE":"\u{1F1E9}\u{1F1EA}","pt-BR":"\u{1F1E7}\u{1F1F7}","it-IT":"\u{1F1EE}\u{1F1F9}","tr-TR":"\u{1F1F9}\u{1F1F7}","vi-VN":"\u{1F1FB}\u{1F1F3}"},Pn={"zh-CN":"\u4E2D","en-US":"EN"},ct=function(e){var t=e.locale,o=e.current,a=(0,f.TH)(),l=a.pathname,i=(0,p.useState)(function(){return yn({pathname:l,current:o,target:t})}),d=G()(i,2),g=d[0],x=d[1];return(0,p.useEffect)(function(){x(yn({pathname:l,current:o,target:t}))},[l,o.id,t.id]),(0,n.jsx)(f.rU,{to:g,children:(0,n.jsx)(fn.ZP,{style:{minWidth:34,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:Pn[t.id]})})},dt=function(){var e=(0,u.HX)(function(o){return o.siteData.locales}),t=(0,u.HX)(function(o){return o.locale});return e.length<=1?null:e.length>2?(0,n.jsx)(lt.Z,{value:e.findIndex(function(o){return o.id===t.id}),onChange:function(a){console.log(yn({pathname:location.pathname,current:t,target:e[a]})),f.m8.push(yn({pathname:location.pathname,current:t,target:e[a]}))},options:e.map(function(o){return{value:o.id,label:Pn[o.id]}}),renderItem:function(a,l){return"".concat(st[e[l].id]," ").concat(e[l].name)},style:{height:32,minWidth:32,padding:0,display:"flex",alignItems:"center",justifyContent:"center"}}):(0,n.jsx)(ct,{locale:e.find(function(o){var a=o.id;return a!==t.id}),current:t})},ut=(0,p.memo)(dt),Bn=s(76248),In,pt=(0,j.kc)(function(r){var e=r.css,t=r.responsive,o=r.token;return e(In||(In=c()([`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, `,`;
    color: `,`;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;

    `,` {
      font-size: 18px;
    }

    img {
      margin-inline-end: 10px;
    }
  `])),o.fontFamily,o.colorText,t.mobile)}),mt=function(){var e=(0,u.HX)(function(d){return d.siteData.themeConfig},N()),t=(0,u.HX)(function(d){return d.locale},N()),o=(0,u.HX)(u.b8.logo,Bn.X),a=pt(),l=a.styles,i=a.cx;return e&&(0,n.jsxs)(f.rU,{className:i(l),to:"base"in t?t.base:"/",children:[!!o&&(0,n.jsx)("img",{src:o,alt:e.name,height:32}),e.name]})},Xn=(0,p.memo)(mt),ht=s(50977),xt=s(40123),Rn,Un,vt=(0,j.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a=r.stylish,l=r.prefixCls,i=".".concat(l,"-tabs"),d=16,g=6;return{tabs:e(Rn||(Rn=c()([`
      `,"-tab + ",`-tab {
        margin: `,`px 4px !important;
        padding: 0 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin: `,"px 4px ",`px 0;
          padding: `,`px 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: `,`px;
        }
      }

      `,`-nav {
        margin-bottom: 0;
      }

      `,` {
        display: none;
      }
    `])),i,i,d,i,o.colorTextSecondary,d,d,g,o.colorText,o.colorFillTertiary,o.borderRadius,i,t.mobile),link:e(Un||(Un=c()([`
      `,`
    `])),a.resetLinkColor)}}),gt=function(){var e=vt(),t=e.styles,o=/^(\w+:)\/\/|^(mailto|tel):/,a=(0,u.HX)(function(i){return i.navData},Bn.X),l=(0,u.HX)(u.K1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ht.Z,{onChange:function(d){var g,x=(g=a.find(function(m){return m.activePath===d||m.link===d}))===null||g===void 0?void 0:g.link;!x||o.test(x)||f.m8.push(x)},activeKey:l,className:t.tabs,items:a.map(function(i){return{label:o.test(i.link||"")?(0,n.jsx)("a",{href:i.link,className:t.link,target:"_blank",rel:"noreferrer",children:i.title}):(0,n.jsx)(f.rU,{className:t.link,to:i.link,children:i.title}),key:i.activePath||i.link}})}),(0,n.jsx)(xt.Z,{})]})},ft=(0,p.memo)(gt),Wn=s(68795),Gn=s(56638),Kn=(0,p.forwardRef)(function(r,e){var t=(0,f.YB)(),o=(0,p.useRef)(!1),a=(0,p.useRef)(null);return(0,p.useImperativeHandle)(e,function(){return a.current}),(0,n.jsx)("input",{className:r.className,onCompositionStart:function(){return o.current=!0},onCompositionEnd:function(i){o.current=!1,r.onChange(i.currentTarget.value)},onFocus:r.onFocus,onBlur:r.onBlur,onKeyDown:function(i){["ArrowDown","ArrowUp"].includes(i.key)&&i.preventDefault(),i.key==="Escape"&&!o.current&&i.currentTarget.blur()},onChange:function(i){setTimeout(function(){o.current||r.onChange(i.target.value)},1)},placeholder:t.formatMessage({id:"header.search.placeholder"}),ref:a})}),Vn,$n,Yn,yt=(0,j.kc)(function(r){var e=r.token,t=r.css;return{modal:t(Vn||(Vn=c()([`
      position: fixed;
      top: 0;
      inset-inline-start: 0;
      z-index: 1000;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
    `]))),mask:t($n||($n=c()([`
      background-color: `,`;
      width: 100%;
      height: 100%;
    `])),e.colorBgMask),content:t(Yn||(Yn=c()([`
      position: absolute;
      top: 60px;
      background-color: `,`;
      width: 500px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: inset 1px 1px 0 0 hsla(0deg, 0%, 100%, 50%), 0 3px 8px 0 #555a64;
      border-radius: 8px;
      max-height: calc(100% - 120px);
      display: flex;
      flex-direction: column;
    `])),e.colorBgElevated)}}),bt=function(e){var t=yt(),o=t.styles;return(0,p.useEffect)(function(){if(e.visible)document.body.style.overflow="hidden";else{var a;document.body.style.overflow="",(a=e.onClose)===null||a===void 0||a.call(e)}},[e.visible]),e.visible?(0,n.jsxs)("div",{className:o.modal,children:[(0,n.jsx)("div",{className:o.mask,onClick:e.onMaskClick}),(0,n.jsx)("div",{className:o.content,children:e.children})]}):null},Jn,Qn,qn,_n,ne,jt=(0,j.kc)(function(r){var e=r.token,t=r.responsive,o=r.css,a=r.cx;return{container:o(Jn||(Jn=c()([`
      position: relative;

      // TODO: support search for mobile devices
      `,` {
        display: none;
      }
    `])),t.mobile),shortcut:a("site-header-shortcut",o(Qn||(Qn=c()([`
        position: absolute;
        top: 50%;
        inset-inline-end: 11px;
        display: inline-block;
        padding: 4px 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        background-color: `,`;
        border-radius: 11px;
        border: 1px solid `,`;
        transform: translateY(-50%);
        transition: all 0.3s;
        pointer-events: none;

        `,` {
          display: none;
        }
      `])),e.colorTextDescription,e.colorFillSecondary,e.colorBorderSecondary,t.mobile)),popover:o(qn||(qn=c()([`
      position: absolute;
      top: 100%;
      inset-inline-end: 0;
      display: flex;
      flex-direction: column;
      width: 540px;
      max-height: 460px;
      margin-top: 18px;
      background-color: `,`;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 20%);

      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        inset-inline-end: 100px;
        display: inline-block;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
      }

      > section {
        flex: 1;
        min-height: 60px;
        overflow: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: inherit;
      }
    `])),e.colorBgElevated),svg:a(o(_n||(_n=c()([`
        position: absolute;
        top: 50%;
        margin-top: 1px;
        inset-inline-start: 16px;
        width: 16px;
        color: `,`;
        transform: translateY(-50%);
      `])),e.colorTextPlaceholder)),input:o(ne||(ne=c()([`
      width: 280px;
      height: `,`px;
      padding: 0;
      padding-inline-start: 40px;
      padding-inline-end: 12px;
      color: `,`;
      font-size: 14px;
      border: 1px solid `,`;
      border-radius: 20px;
      box-sizing: border-box;
      outline: none;
      transition: all 0.3s;
      background-color: transparent;

      &:focus {
        border-color: `,`;
        background: `,`;

        ~ .site-header-shortcut {
          opacity: 0;
        }
      }

      &::-webkit-input-placeholder {
        color: `,`;
      }
    `])),e.controlHeightLG,e.colorTextSecondary,e.colorBorder,e.colorBorderSecondary,e.colorBgElevated,e.colorTextPlaceholder)}}),zn,ee=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(zn=navigator)===null||zn===void 0?void 0:zn.platform:""),kt=function(e){return["TEXTAREA","INPUT"].includes(e.tagName)||e.contentEditable==="true"},St=function(){var e=jt(),t=e.styles,o=(0,p.useState)(!1),a=G()(o,2),l=a[0],i=a[1],d=(0,p.useRef)(null),g=(0,p.useRef)(null),x=(0,p.useState)("\u2318"),m=G()(x,2),v=m[0],y=m[1],k=(0,f.OO)(),H=k.keywords,T=k.setKeywords,w=k.result,Z=k.loading,Fo=(0,p.useState)(!1),Ke=G()(Fo,2),Ve=Ke[0],bn=Ke[1];return(0,p.useEffect)(function(){ee||y("Ctrl");var A=function(K){if(((ee?K.metaKey:K.ctrlKey)&&K.key==="k"||K.key==="/"&&!kt(K.target))&&(K.preventDefault(),d.current)){var kn=d.current.getBoundingClientRect(),Lo=kn.top,Eo=kn.bottom,Zo=kn.left,Ao=kn.right,Mo=Lo>=0&&Zo>=0&&Eo<=window.innerHeight&&Ao<=window.innerWidth;Mo?d.current.focus():(T(""),bn(!0),setTimeout(function(){var On;(On=g.current)===null||On===void 0||On.focus()}))}K.key==="Escape"&&(K.preventDefault(),bn(!1))};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[]),(0,n.jsxs)("div",{className:t.container,children:[(0,n.jsx)(Wn.Z,{className:t.svg}),(0,n.jsx)(Kn,{onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(jn){return T(jn)},ref:d,className:t.input}),(0,n.jsxs)("span",{className:t.shortcut,children:[v," K"]}),H.trim()&&l&&(w.length||!Z)&&!Ve&&(0,n.jsx)("div",{className:t.popover,children:(0,n.jsx)("section",{children:(0,n.jsx)(Gn.Z,{data:w,loading:Z})})}),(0,n.jsxs)(bt,{visible:Ve,onMaskClick:function(){bn(!1)},onClose:function(){return T("")},children:[(0,n.jsxs)("div",{style:{position:"relative"},children:[(0,n.jsx)(Wn.Z,{className:t.svg}),(0,n.jsx)(Kn,{className:t.input,onFocus:function(){return i(!0)},onBlur:function(){setTimeout(function(){i(!1)},1)},onChange:function(jn){return T(jn)},ref:g})]}),(0,n.jsx)(Gn.Z,{data:w,loading:Z,onItemSelect:function(){bn(!1)}})]})]})},wt=St,Ct=s(85265),te=s(68354),Ht=s(96486),Q=s(43281),oe,re,ae,ie,le,se,ce,Tt=(0,j.kc)(function(r){var e=r.token,t=r.prefixCls,o=r.cx,a=r.css,l=6;return{rect:a(oe||(oe=c()([`
      background: `,`;

      width: 100%;
    `])),(0,Q.m4)(e.colorBgContainer,.8)),icon:o("site-burger-icon",a(re||(re=c()([`
        position: relative;

        &,
        &::before,
        &::after {
          display: inline-block;
          height: 2px;
          background: `,`;

          width: 16px;

          transition: all 150ms ease;
        }

        &::before,
        &::after {
          position: absolute;
          left: 0;

          content: '';
        }

        &::before {
          top: `,`px;
        }

        &::after {
          top: -`,`px;
        }
      `])),e.colorTextSecondary,l,l)),active:a(ae||(ae=c()([`
      &::before,
      &::after {
        background: `,`;
      }
      & {
        background: transparent;
      }

      &::before {
        top: 0;
        transform: rotate(-135deg);
      }

      &::after {
        top: 0;
        transform: rotate(135deg);
      }
    `])),e.colorText),container:a(ie||(ie=c()([`
      width: `,`px;
      height: `,`px;
      border-radius: `,`px;
      cursor: pointer;
    `])),e.controlHeight,e.controlHeight,e.borderRadius),drawerRoot:a(le||(le=c()([`
      top: `,`px;

      :focus-visible {
        outline: none;
      }

      .`,`-drawer {
        &-mask {
          background: transparent;
          backdrop-filter: blur(7px);
          background: `,`;
        }

        &-content-wrapper {
          box-shadow: none;
        }
      }
    `])),e.headerHeight+1,t,(0,Q.m4)(e.colorBgBase,.5)),drawer:a(se||(se=c()([`
      &.`,`-drawer-content {
        background: transparent;
      }

      .`,`-drawer-body {
        display: flex;
        flex-direction: column;
      }
    `])),t,t),menu:a(ce||(ce=c()([`
      background: transparent;
      border-inline-end: transparent !important;

      > .`,"-menu-item-only-child,.",`-menu-submenu-title {
        background: `,`;
        border-radius: 0;
        margin: 0;
        width: 100%;
        &:active {
          margin-inline: 4px;
          border-radius: `,`px;
        }
      }

      .`,"-menu-sub.",`-menu-inline {
        //background: transparent !important;
        background: `,` !important;
      }
    `])),t,t,(0,Q.m4)(e.colorBgContainer,.8),e.borderRadius,t,t,(0,Q.m4)(e.colorBgContainer,.2))}}),Bt=function(){var e=(0,p.useState)(!1),t=G()(e,2),o=t[0],a=t[1],l=Tt(),i=l.styles,d=l.cx,g=(0,u.HX)(function(y){return y.navData},N()),x=(0,u.HX)(function(y){return y.sidebar},N()),m=(0,u.HX)(u.K1),v=(0,u.HX)(function(y){return y.location.pathname});return(0,n.jsxs)(I.Z,{className:i.container,onClick:function(){a(!o)},children:[(0,n.jsx)("div",{className:d(i.icon,o?i.active:"")}),(0,n.jsxs)(Ct.Z,{open:o,placement:"left",closeIcon:null,rootClassName:i.drawerRoot,className:i.drawer,width:"100vw",headerStyle:{display:"none"},bodyStyle:{padding:0},children:[(0,n.jsx)("div",{style:{height:24},className:i.rect}),(0,n.jsx)(te.Z,{mode:"inline",selectedKeys:(0,Ht.uniq)([m,"s-".concat(v)]),openKeys:[m],className:i.menu,items:g.map(function(y){return{label:(0,n.jsx)(f.rU,{to:y.link,children:y.title}),key:y.activePath||y.link,children:(y.activePath||y.link)===m&&(x==null?void 0:x.map(function(k){return!k.link&&{label:k.title,type:"group",children:k.children.map(function(H){return{label:(0,n.jsx)(f.rU,{to:H.link,onClick:function(){a(!1)},children:H.title}),key:"s-".concat(H.link)}})}}))}})}),(0,n.jsx)("div",{style:{flex:1},className:i.rect})]})]})},zt=Bt,de=s(34116),ue=s(35327),Dt=function(){var e=(0,u.HX)(u.BB);return e?(0,n.jsx)(ue.Z,{arrow:!1,title:"Github",children:(0,n.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(fn.ZP,{icon:(0,n.jsx)(de.Z,{})})})}):null},Nt=(0,p.memo)(Dt),Ot=s(83704),pe=s(53530),me,he,xe,ve,Ft=(0,j.kc)(function(r){var e=r.css,t=r.responsive,o=r.token;return{header:e(me||(me=c()([`
    top: 0;
    position: sticky;
    background-color: transparent;
    backdrop-filter: blur(6px);
    z-index: `,`;
    border-bottom: 1px solid `,`;

    grid-area: head;
    align-self: stretch;

    `,` {
      background: `,`;
    }
  `])),o.zIndexPopupBase-50,o.colorSplit,t.mobile,o.colorBgContainer),content:e(he||(he=c()([`
    padding: 0 24px;
    height: 64px;

    `,` {
      padding: 0 12px;
    }
  `])),t.mobile),left:e(xe||(xe=c()([""]))),right:e(ve||(ve=c()([`
    flex: 1;
    display: flex;
    justify-content: space-between;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        margin: 8px 16px;
        padding-top: 24px;
        justify-content: center;
        border-top: 1px solid `,`;
      }
    }
  `])),t.mobile,o.colorBorder)}}),ge=function(){var e=(0,pe.f)(function(l){return l.themeMode}),t=(0,f.OI)(),o=G()(t,3),a=o[2];return(0,p.useEffect)(function(){return a(e)},[e]),(0,n.jsx)(Ot.Z,{value:e,onChange:function(i){pe.f.setState({themeMode:i})}})},Lt=function(){var e=(0,$.HX)(function(i){return!!i.routeMeta.frontmatter}),t=(0,M.F)(),o=t.mobile,a=Ft(),l=a.styles;return e?(0,n.jsx)("div",{className:l.header,children:(0,n.jsx)(b.D,{horizontal:!0,distribution:"space-between",align:"center",width:"auto",className:l.content,children:o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.D,{children:(0,n.jsx)(zt,{})}),(0,n.jsx)(b.D,{horizontal:!0,className:l.left,children:(0,n.jsx)(Xn,{})}),(0,n.jsx)(b.D,{children:(0,n.jsx)(ge,{})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.D,{horizontal:!0,className:l.left,children:(0,n.jsx)(Xn,{})}),(0,n.jsx)(b.D,{style:{marginLeft:48,alignSelf:"end"},children:(0,n.jsx)(ft,{})}),(0,n.jsxs)("section",{className:l.right,children:[(0,n.jsx)("div",{}),(0,n.jsxs)(b.D,{gap:16,horizontal:!0,align:"center",className:"dumi-default-header-right-aside",children:[(0,n.jsx)(wt,{}),(0,n.jsx)(ut,{}),(0,n.jsx)(Nt,{}),(0,n.jsx)(ge,{})]})]})]})})}):null},fe=(0,p.memo)(Lt),ye,Et=(0,j.kc)(function(r){var e=r.css,t=r.token;return{sidebar:e(ye||(ye=c()([`
    grid-area: sidebar;
    overflow: auto;
    position: sticky;
    top: `,`px;
    max-height: calc(100vh - `,`px);
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 24px;
    padding-inline: 16px;
    border-right: 1px solid `,`;

    > dl {
      margin: 0;
      padding: 0;
      line-height: 1;

      > dt {
        margin: 8px 0;
        color: `,`;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
      }

      > dd {
        margin: 0;
        padding: 2px 0;

        > a {
          padding: 6px 12px;
          border-radius: 6px;
          display: block;
          font-size: `,`px;
          line-height: `,`;
          text-decoration: none;
          transition: all 0.1s;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          color: `,`;

          &:hover {
            color: `,`;
            background: `,`;
          }

          &.active {
            color: `,`;
            background: `,`;

            &:hover {
              color: `,`;
              background: `,`;
            }
          }
        }
      }

      // divider line & gap
      + dl {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px dashed `,`;
      }
    }
  `])),t.headerHeight,t.headerHeight,t.colorSplit,t.colorText,t.fontSize,t.lineHeight,t.colorTextSecondary,t.colorText,t.colorFillTertiary,t.colorPrimaryText,t.colorPrimaryBg,t.colorPrimaryTextHover,t.colorPrimaryBgHover,t.colorBorder)}}),Zt=s(28135),At=function(){var e=(0,$.HX)(function(x){return x.sidebar},N()),t=Et(),o=t.styles,a=!e||e.length===0;function l(x,m,v,y){return{key:m,icon:v,children:y,label:x}}var i=(0,Zt.s0)();function d(x){console.log("item, key, keyPath, domEvent");var m=x.key.split("_"),v=G()(m,3),y=v[0],k=v[1],H=v[2],T=e[k].children[H].link;console.log(T),i(T)}var g=(0,p.useMemo)(function(){var x=[];if(console.log("sidebar",e),e!=null&&e.length)for(var m in e){var v=e[m],y=[];if(v!=null&&v.children)for(var k in v==null?void 0:v.children){var H=v==null?void 0:v.children[k];y.push(l(H.title,"sub_".concat(m,"_").concat(k),null,null))}x.push(l(v.title,"sub_".concat(m),null,y))}return x},[e]);return a?null:(0,n.jsx)(te.Z,{style:{width:256},defaultSelectedKeys:["sub_0_0"],defaultOpenKeys:["sub_0"],mode:"inline",onClick:d,items:g,className:o.sidebar})},Mt=(0,p.memo)(At),Pt=s(77171),It=s(60532),Dn=s(86964),be=s(93617),je=s(67561),Xt=s(76010),ke,Se,we,Ce,Rt=(0,j.kc)(function(r){var e=r.token,t=r.stylish,o=r.prefixCls,a=r.responsive,l=r.css,i=36;return{container:l(ke||(ke=c()([`
      grid-area: toc;
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;
      z-index: 10;
      border-radius: 8px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),e.tocWidth,a.mobile,e.headerHeight+1,e.colorTextDescription),mobileCtn:l(Se||(Se=c()([`
      position: sticky;
      top: `,`px;

      height: `,`px;
      width: 100%;
      z-index: 200;
      background: transparent;
      background: `,`;
    `])),e.headerHeight+1,i,(0,Q.m4)(e.colorBgContainer,.8)),expand:l(we||(we=c()([`
      backdrop-filter: blur(6px);
      border-radius: 0;
      border-bottom: 1px solid `,`;

      box-shadow: `,`;
      width: 100%;
      z-index: 201;
      background: `,`;

      .`,`-collapse-header {
        padding: 8px 16px !important;
      }
    `])),e.colorSplit,e.boxShadowSecondary,(0,Q.m4)(e.colorBgContainer,.8),o),anchor:l(Ce||(Ce=c()([`
      `,`
    `])),t.blur)}}),Ut=(0,p.memo)(function(r){var e=r.items,t=r.activeKey,o=r.onChange,a=(0,Xt.Z)("",{value:t,onChange:o}),l=G()(a,2),i=l[0],d=l[1],g=Rt(),x=g.styles,m=(0,M.F)(),v=m.mobile,y=(0,j.Fg)(),k=e.find(function(T){return T.id===i}),H=(0,p.useMemo)(function(){return e.map(function(T){var w;return{href:"#".concat(T.id),title:T.title,key:T.id,children:(w=T.children)===null||w===void 0?void 0:w.map(function(Z){return{href:"#".concat(Z.id),title:Z==null?void 0:Z.title,key:Z.id}})}})},[e]);return((e==null?void 0:e.length)===0?null:v?(0,n.jsx)(Dn.ZP,{theme:{token:{fontSize:12,sizeStep:3}},children:(0,n.jsx)("div",{className:x.mobileCtn,children:(0,n.jsx)(be.Z,{bordered:!1,ghost:!0,expandIconPosition:"end",expandIcon:function(w){var Z=w.isActive;return Z?(0,n.jsx)(Pt.Z,{}):(0,n.jsx)(It.Z,{})},className:x.expand,children:(0,n.jsx)(be.Z.Panel,{forceRender:!0,header:k?k.title:"\u76EE\u5F55",children:(0,n.jsx)(Dn.ZP,{theme:{token:{fontSize:14,sizeStep:4}},children:(0,n.jsx)(je.Z,{onChange:function(w){d(w.replace("#",""))},targetOffset:y.headerHeight+12,items:H})})},"toc")})})}):(0,n.jsxs)("div",{className:x.container,children:[(0,n.jsx)("h4",{children:"Table of Contents"}),(0,n.jsx)(je.Z,{items:H,className:x.anchor,targetOffset:y.headerHeight+12})]}))||null}),Wt=Ut,Gt=(0,p.memo)(function(){var r=(0,u.HX)(u.TL,N());return(0,n.jsx)(Wt,{items:r})}),Kt=Gt,Vt=s(86548),Nn=s(31666),He=s(434),$t=s(63606),Yt=s(20640),Jt=s.n(Yt),Qt=s(75416),Te=s(84283),qt=s(23538),Be,_t=(0,j.kc)(function(r){var e=r.css,t=r.token;return e(Be||(Be=c()([`
      cursor: pointer;
      &:hover {
        background: `,`;
        border-radius: 4px;
      }
      pre {
        background: none !important;
        padding: 2px 8px !important;
        margin: 0;
      }
      code[class*='language-'] {
        background: none !important;
      }
    `])),t.colorFillSecondary)}),no=function(e){var t=e.children,o=_t(),a=o.styles,l=o.theme,i=(0,M.F)(),d=i.mobile,g=(0,qt.M)(),x=g.copied,m=g.setCopied;return(0,n.jsx)(ue.Z,{placement:d?void 0:"right",title:x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($t.Z,{style:{color:l.colorSuccess}})," \u590D\u5236\u6210\u529F"]}):"\u590D\u5236",children:(0,n.jsx)("div",{className:a,onClick:function(){Jt()(t),m()},children:(0,n.jsx)(Qt.oP,{background:!1,type:"prism",copyable:!1,syntaxThemes:{prism:{dark:Te.YC,light:Te.vs}},language:"js",children:t})})})},eo=no,ze,De,Ne,Oe,Fe,to=(0,j.kc)(function(r){var e=r.css,t=r.token,o=r.responsive,a=r.stylish;return{title:e(ze||(ze=c()([`
    font-family: monospace;
    `,` {
      margin-block: 0;
      font-size: 32px !important;
    }
  `])),o.mobile),label:e(De||(De=c()([`
    width: 80px;
  `]))),desc:e(Ne||(Ne=c()([`
    font-size: `,`px;
    line-height: `,`px;
  `])),t.fontSizeLG,t.lineHeightLG),text:e(Oe||(Oe=c()([`
    `,`
  `])),a.clickableText),meta:e(Fe||(Fe=c()([""])))}}),oo=(0,p.memo)(function(r){var e=r.title,t=r.componentName,o=r.description,a=r.defaultImport,l=r.pkg,i=r.sourceUrl,d=r.docUrl,g=r.serviceList,x=g===void 0?[]:g,m=to(),v=m.styles,y=(0,M.F)(),k=y.mobile,H=[i&&{icon:(0,n.jsx)(de.Z,{}),children:"\u67E5\u770B\u6E90\u7801",url:i},d&&{icon:(0,n.jsx)(Vt.Z,{}),children:"\u7F16\u8F91\u6587\u6863",url:d}].filter(function(w){return w}),T=a?"import ".concat(t," from '").concat(l,"';"):"import { ".concat(t," } from '").concat(l,"';");return(0,n.jsxs)(b.D,{children:[(0,n.jsx)(Nn.Z.Title,{className:v.title,children:e}),o&&(0,n.jsx)("div",{children:(0,n.jsx)(Nn.Z.Text,{type:"secondary",className:v.desc,children:o})}),(0,n.jsxs)(b.D,{style:{marginTop:16},gap:k?16:24,children:[(0,n.jsxs)(b.D,{horizontal:!k,gap:k?12:0,children:[(0,n.jsx)(Nn.Z.Text,{className:v.label,type:"secondary",style:{display:"flex",alignItems:"center"},children:"\u5F15\u5165\u65B9\u6CD5"}),(0,n.jsx)(eo,{children:T})]}),(0,n.jsx)(tn.Z,{dashed:!0,style:{margin:"2px 0"}}),(0,n.jsxs)(b.D,{horizontal:!k,gap:k?24:0,distribution:"space-between",children:[(0,n.jsx)(He.Z,{split:(0,n.jsx)(tn.Z,{type:"vertical"}),wrap:!0,children:x.map(function(w){return(0,n.jsx)("a",{href:w.url,target:"_blank",rel:"noreferrer",title:w.label,children:(0,n.jsxs)(b.D,{horizontal:!0,align:"center",gap:8,className:v.text,children:[(0,n.jsx)(n.Fragment,{children:w.icon}),(0,n.jsx)(n.Fragment,{children:w.children})]})},w.label)})}),(0,n.jsx)(He.Z,{split:(0,n.jsx)(tn.Z,{type:"vertical"}),className:v.meta,children:H.map(function(w){return(0,n.jsx)("a",{href:w.url,target:"_blank",rel:"noreferrer",children:(0,n.jsxs)(b.D,{horizontal:!0,align:"center",gap:8,className:v.text,children:[(0,n.jsx)(n.Fragment,{children:w.icon}),(0,n.jsx)(n.Fragment,{children:w.children})]})},w.url)})})]})]})]})}),ro=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"64 64 896 896",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M503.783 64 960 263.576V761.46L521.625 955.734V473.5h-17.5v486.351l-.342.149L64 761.46V263.576L503.783 64Zm.13 19.158L84.37 273.548 512 466.131 939.386 273.66l-435.473-190.5Z"})})}),ao=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"})})}),io=(0,p.memo)(function(){return(0,n.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 14 14",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,n.jsx)("path",{d:"M13,0 C13.5522847,-1.01453063e-16 14,0.44771525 14,1 L14,13 C14,13.5522847 13.5522847,14 13,14 L1,14 C0.44771525,14 -4.87476137e-16,13.5522847 0,13 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-4.5365845e-16 1,0 L13,0 Z M11.375,2.625 L2.625,2.625 L2.625,11.375 L7,11.375 L7,4.375 L9.625,4.375 L9.625,11.375 L11.375,11.375 L11.375,2.625 Z",fill:"#C12127"})})}),lo=(0,p.memo)(function(){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 108 108",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"main",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#006838"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#32de85"})]})}),(0,n.jsx)("path",{fill:"url(#main)",d:"M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z",transform:"matrix(1.25 0 0 1.25 -8.75 -7.5)"})]})}),so=(0,p.memo)(function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",children:(0,n.jsx)("path",{d:"M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"})})}),co=(0,p.memo)(function(){var r=(0,u.HX)(u.UQ),e=r.pkg,t=(0,p.useMemo)(function(){return[{label:"NPM",icon:(0,n.jsx)(io,{}),children:"NPM",url:"https://www.npmjs.com/package/".concat(e)},{label:"\u9884\u89C8\u4EA7\u7269",icon:(0,n.jsx)(so,{}),children:"UNPKG",url:"https://unpkg.com/browse/".concat(e,"/")},{label:"\u67E5\u9605\u4EA7\u7269\u4F53\u79EF",icon:(0,n.jsx)(ro,{}),children:"BundlePhobia",url:"https://bundlephobia.com/package/".concat(e)},{label:"\u67E5\u9605\u5B89\u88C5\u5305\u4F53\u79EF",icon:(0,n.jsx)(lo,{}),children:"PackagePhobia",url:"https://packagephobia.com/result?p=".concat(e)},{label:"\u5206\u6790\u4F9D\u8D56\u56FE",icon:(0,n.jsx)(ao,{}),children:"Anvaka Graph",url:"https://npm.anvaka.com/#/view/2d/".concat(e)}]},[e]);return(0,n.jsx)(oo,nn()({serviceList:t},r))}),uo=co,Le,Ee,Ze,po=(0,j.kc)(function(r,e){var t=r.css,o=r.cx,a=r.responsive,l=r.token,i=e.hideToc,d=e.hideSidebar;return{layout:t(Le||(Le=c()([`
      background-color: `,`;
      background-image: linear-gradient(
        180deg,
        `,` 0%,
        rgba(255, 255, 255, 0) 10%
      );
      display: grid;
      grid-template-columns: `,"px 1fr ",`;
      grid-template-rows: `,`px auto 1fr auto;
      grid-template-areas:
        'head head head'
        '`," title ",`'
        '`," main ",`'
        '`,` footer footer';
      min-height: 100vh;

      `,` {
        display: flex;
        flex-direction: column;
      }
    `])),l.colorBgLayout,l.colorBgContainer,l.sidebarWidth,i?"":"".concat(l.tocWidth+24,"px"),l.headerHeight,d?"title":"sidebar",i?"title":".",d?"main":"sidebar",i?"main":"toc",d?"footer":"sidebar",a.mobile),toc:t(Ee||(Ee=c()([`
      position: sticky;
      top: 100px;
      width: `,`px;
      margin-inline-end: 24px;
      max-height: 80vh;
      overflow: auto;
      margin-top: 48px;

      `,` {
        z-index: 300;
        top: `,`px;
        margin-top: 0;
        width: 100%;
      }

      overscroll-behavior: contain;
      -webkit-overflow-scrolling: touch;

      > h4 {
        margin: 0 0 8px;
        color: `,`;
        font-size: 12px;
        line-height: 1;
      }
    `])),l.tocWidth,a.mobile,l.headerHeight+1,l.colorTextDescription),content:o(t(Ze||(Ze=c()([`
        max-width: 960px;
        width: 100%;
        margin: 0 24px;
      `]))),t(a({desktop:{maxWidth:l.contentMaxWidth},mobile:{margin:0}})))}}),mo=(0,p.memo)(function(){var r=(0,f.pC)(),e=(0,M.F)(),t=e.mobile,o=(0,u.HX)(function(y){return y.routeMeta.frontmatter},N()),a=(0,u.HX)(u.Yo),l=(0,u.HX)(u.TG),i=(0,u.HX)(function(y){return(0,u.TL)(y).length===0}),d=o.sidebar===!1,g=o.toc===!1||i,x=po({hideToc:g,hideSidebar:d}),m=x.styles,v=x.theme;return(0,n.jsxs)("div",{className:m.layout,children:[(0,n.jsx)(f.ql,{children:o.title&&(0,n.jsxs)("title",{children:[o.title," - ",l]})}),(0,n.jsx)(fe,{}),g?null:(0,n.jsx)(Kt,{}),t||d?null:(0,n.jsx)(Mt,{}),a?(0,n.jsx)(b.D,{style:{gridArea:"title",paddingBlock:t?24:void 0},children:(0,n.jsx)(I.Z,{children:(0,n.jsx)(b.D,{style:{maxWidth:v.contentMaxWidth,width:"100%"},children:(0,n.jsx)(b.D,{style:{paddingBlock:0,paddingInline:t?16:48},children:(0,n.jsx)(uo,{})})})})}):null,(0,n.jsx)(b.D,{style:{zIndex:10,gridArea:"main",margin:t?0:24,marginBottom:t?0:48},children:(0,n.jsx)(I.Z,{width:"100%",children:(0,n.jsx)(b.D,{className:m.content,children:(0,n.jsx)(b.D,{horizontal:!0,children:(0,n.jsx)(W,{children:r})})})})}),(0,n.jsx)(Mn,{})]})}),ho=mo,xo=s(2923),vo=function(){var e=(0,u.HX)(u.SL,Bn.X);return e!=null&&e.length?(0,n.jsx)(xo.Z,{items:e,style:{margin:"0 16px"}}):null},go=vo,Ae,fo=(0,j.kc)(function(r){var e=r.css,t=r.stylish;return{button:e(Ae||(Ae=c()([`
      border: none;

      `,`
      `,`

      background-size: 200% 100%;

      &:hover {
        animation: none;
      }
    `])),t.heroButtonGradient,t.heroGradientFlow)}}),yo=function(e){var t=e.children,o=fo(),a=o.styles;return(0,n.jsx)(fn.ZP,{size:"large",shape:"round",type:"primary",className:a.button,children:t})},bo=yo,Me,Pe,Ie,Xe,Re,Ue,We,jo=(0,j.kc)(function(r){var e=r.css,t=r.responsive,o=r.token,a=r.stylish,l=r.isDarkMode;return{container:e(Me||(Me=c()([`
    position: relative;
    text-align: center;
    box-sizing: border-box;

    + * {
      position: relative;
    }

    > p {
      margin: 32px;
      color: `,`;
      font-size: 20px;
      line-height: 1.6;

      `,`
    }
  `])),o.colorTextSecondary,t({mobile:{fontSize:16}})),titleContainer:e(Pe||(Pe=c()([`
    position: relative;
  `]))),title:e(Ie||(Ie=c()([`
    font-size: 68px;
    z-index: 10;
    color: transparent;
    margin: 0;
    font-family: AliPuHui, `,`;

    `,`

    b {
      position: relative;
      z-index: 5;
      `,`;
      `,`

      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `])),o.fontFamily,t({mobile:{fontSize:40}}),a.heroGradient,a.heroGradientFlow),titleShadow:e(Xe||(Xe=c()([`
    position: absolute;
    z-index: 0;
    color: `,`;

    top: 0;
    left: 0;
    font-size: 68px;
    font-family: AliPuHui, `,`;
    font-weight: bold;
    `,`

    `,`

    b {
      color: transparent;
    }
  `])),l?o.colorWhite:o.colorTextBase,o.fontFamily,t({mobile:{fontSize:40}}),a.heroTextShadow),desc:e(Re||(Re=c()([`
    font-size: `,`px;
    color: `,`;

    `,` {
      font-size: `,`px;
      margin: 24px 16px;
    }
  `])),o.fontSizeHeading3,o.colorTextSecondary,t.mobile,o.fontSizeHeading5),actions:e(Ue||(Ue=c()([`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    `,`
  `])),t({mobile:{marginTop:24}})),canvas:e(We||(We=c()([`
    z-index: 10;
    pointer-events: none;
    position: absolute;
    top: -250px;
    left: 50%;
    transform: translateX(-50%) scale(1.5);
    width: 600px;
    height: 400px;
    opacity: 0.2;
    `,`

    `,` {
      width: 200px;
      height: 300px;
    }
  `])),a.heroBlurBall,t.mobile)}}),ko=function(e){var t=e.title,o=e.description,a=e.actions,l=jo(),i=l.styles,d=l.cx;return(0,n.jsxs)(b.D,{horizontal:!0,distribution:"center",className:i.container,children:[(0,n.jsx)("div",{className:i.canvas}),(0,n.jsxs)(I.Z,{children:[t&&(0,n.jsxs)("div",{className:i.titleContainer,children:[(0,n.jsx)("h1",{className:i.title,dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("div",{className:d(i.titleShadow),dangerouslySetInnerHTML:{__html:t}})]}),o&&(0,n.jsx)("p",{className:i.desc,dangerouslySetInnerHTML:{__html:o}}),!!(a!=null&&a.length)&&(0,n.jsx)(Dn.ZP,{theme:{token:{fontSize:16,controlHeight:40}},children:(0,n.jsx)(b.D,{horizontal:!0,gap:24,className:i.actions,children:a.map(function(g,x){var m=g.text,v=g.link,y=g.openExternal,k=/^(https?:)?\/\//i.test(v),H=x===0?(0,n.jsx)(bo,{children:m}):(0,n.jsx)(fn.ZP,{size:"large",shape:"round",type:"default",children:m});return k?(0,n.jsx)("a",{href:v,target:"_blank",rel:"noopener noreferrer",children:H},"".concat(m,"-").concat(x)):(0,n.jsx)(f.rU,{to:v,target:y?"_blank":void 0,rel:"noreferrer",children:H},m)})})})]})]})},So=ko,wo=function(){var e=(0,u.HX)(u.aH),t=(0,u.HX)(u.S2),o=(0,u.HX)(u.Vd);return(0,n.jsx)(So,{title:e,actions:o,description:t})},Co=wo,Ho=(0,p.memo)(function(){var r=(0,u.HX)(u.TG);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.ql,{children:(0,n.jsx)("title",{children:r})}),(0,n.jsxs)(b.D,{align:"center",gap:80,children:[(0,n.jsx)(fe,{}),(0,n.jsx)(Co,{}),(0,n.jsx)(go,{}),(0,n.jsx)(Mn,{})]})]})}),To=Ho,Ge,Bo=(0,j.vJ)(Ge||(Ge=c()([`
  body {
    margin: 0;
    padding: 0;
    background-color: `,`;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u6837\u5F0F */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // \u5B9A\u4E49\u6EDA\u52A8\u69FD\u7684\u80CC\u666F\u8272

    &-thumb {
      background-color: `,`; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u80CC\u666F\u8272
      border-radius: 4px; // \u5B9A\u4E49\u6EDA\u52A8\u5757\u7684\u5706\u89D2\u534A\u5F84
    }

    &-corner {
      display: none;
    }
  }
`])),function(r){return r.theme.colorBgLayout},function(r){var e=r.theme;return e.colorFill}),zo=(0,p.memo)(function(){var r=(0,f.YB)(),e=(0,f.TH)(),t=e.hash,o=(0,u.HX)(function(i){return i.routeMeta.frontmatter}),a=(0,u.HX)(u.D$),l=(0,u.HX)(function(i){return i.siteData.loading});return(0,p.useEffect)(function(){var i=t.replace("#","");i&&setTimeout(function(){var d=document.getElementById(decodeURIComponent(i));d&&(d.scrollIntoView(),window.scrollBy({top:-80}))},1)},[l,t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.ql,{children:[(0,n.jsx)("html",{lang:r.locale.replace(/-.+$/,"")}),o.title&&(0,n.jsx)("meta",{property:"og:title",content:o.title}),o.description&&(0,n.jsx)("meta",{name:"description",content:o.description}),o.description&&(0,n.jsx)("meta",{property:"og:description",content:o.description}),o.keywords&&(0,n.jsx)("meta",{name:"keywords",content:o.keywords.join(",")}),o.keywords&&(0,n.jsx)("meta",{property:"og:keywords",content:o.keywords.join(",")})]}),a?(0,n.jsx)(To,{}):(0,n.jsx)(ho,{})]})});s.g.__ANTD_CACHE__=an.Y.cache;var Do=function(e){var t=e.children,o=(0,u.HX)(u.HU,N());return(0,n.jsx)(ln.Z,{cache:an.Y.cache,token:o,children:t})},No=(0,p.memo)(function(r){var e=r.initState;return(0,n.jsxs)(u.zt,{createStore:function(){return(0,u.MT)(e)},children:[(0,n.jsx)(Hn,{}),(0,n.jsxs)(Do,{children:[(0,n.jsx)(Bo,{}),(0,n.jsx)(zo,{})]})]})}),Oo=function(){var r=(0,f.WF)(),e=(0,f.tx)(),t=(0,f.eL)(),o=(0,f.zh)(),a=(0,f.OK)(),l=(0,f.TH)(),i=(0,f.bU)(),d=(0,p.useMemo)(function(){return{siteData:r,navData:a,locale:i,location:l,routeMeta:t,tabMeta:o,sidebar:e}},[]);return(0,n.jsx)(No,{initState:d})}},52361:function(){},94616:function(){}}]);
