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
        <SidebarLink to='/login'>Full Menu</SidebarLink>
        <SidebarLink to='/login'>Rolls & Egg Rolls</SidebarLink>
        <SidebarLink to='/login'> ICE-CREAM</SidebarLink>
        <SidebarLink to='/login'>Desserts</SidebarLink>
        <SidebarLink to='/login'> Pizza</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/login'   >Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
    )
}

export default Sidebar
