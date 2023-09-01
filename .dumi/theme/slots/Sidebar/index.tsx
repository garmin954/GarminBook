import React, {useMemo} from "react";
import { NavLink } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, type FC } from 'react';
import {Menu,MenuProps} from  'antd'

import { useSiteStore } from '../../store/useSiteStore';
import { useStyles } from './style';

const Sidebar: FC = () => {
  const sidebar = useSiteStore((s) => s.sidebar, isEqual);
  const { styles } = useStyles();

  const isEmptySideBar = !sidebar || sidebar.length === 0;
  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  // return isEmptySideBar ? null : (
  //   <div className={styles.sidebar}>
  //     {sidebar.map((item, i) => (
  //       <dl key={String(i)}>
  //         {item.title && <dt>{item.title}</dt>}
  //         {item.children.map((child) => (
  //           <dd key={child.link}>
  //             <NavLink to={child.link} title={child.title} end>
  //               {child.title}
  //             </NavLink>
  //           </dd>
  //         ))}
  //       </dl>
  //     ))}
  //   </div>
  // );

  const menuItems = useMemo<MenuItem[]>(()=>{
    const items:MenuItem[] = []
    if (sidebar?.length){
      for (const pi in sidebar){
        const pf = sidebar[pi]
        const children :MenuItem[]= []
        if (pf?.children){
          for (const si in pf?.children) {
            const sf = pf?.children[si]
            children.push(getItem(sf.title, `sub_${pi}_${si}`, null, null))
          }
        }
        items.push(getItem(pf.title,  `sub_${pi}`, null, children))
      }
    }
    return items
  }, [sidebar])

  return isEmptySideBar ? null : (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['sub_0_0']}
      defaultOpenKeys={['sub_0']}
      mode="inline"
      items={menuItems}
    />
  );
};

export default memo(Sidebar);
