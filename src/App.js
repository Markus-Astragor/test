import React, { useState } from "react";
import { Menu, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';
import burge_menu_icon from './images/menu.png';
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="check">
      <div onClick={() => setIsOpen(!isOpen)}><img src={burge_menu_icon} width="50px" height="50px"/></div>
      <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <Item itemKey={'manage'} text={'User Management'}></Item>
        <Item itemKey={'user'} text={'User Center'}></Item>
        <SubMenu title="Union Management">
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App;