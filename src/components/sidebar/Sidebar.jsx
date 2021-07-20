import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElement';




const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer  isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Full Menu</SidebarLink>
        <SidebarLink to='/'>Rolls & Egg Rolls</SidebarLink>
        <SidebarLink to='/'> ICE-CREAM</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'> Pizza</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'   >Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
    )
}

export default Sidebar
