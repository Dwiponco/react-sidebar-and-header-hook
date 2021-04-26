import React, { useState } from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"


const SidebarLink = styled(Link)`
    display: flex;
    color: #777777;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 20px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #42cccd57;
        border-left: 3px solid #42cccd;
        color: white;
        cursore: pointer;
    }
`
const SidebarLabel = styled.span`
    margin-left: 16px;

`

const DropDownLink = styled(Link)`
    background: #f9f9f9;
    height: 50px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #777777;
    font-size: 18px;

    &:hover{
        background: #42cccd57;
        border-left: 3px solid #42cccd;
        color: white;
        cursore: pointer;
    }
`

const SubMenu = ({item}) => {

    const [subnav, setSubNav] = useState(false)

    const ShowSubNav = () => setSubNav(!subnav)

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && ShowSubNav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
                {
                    item.subNav && subnav ?
                    item.iconOpened :
                    item.subNav ?
                    item.iconCLosed :
                    null
                }
            </SidebarLink>
            {
                subnav && item.subNav.map((item, index) => {
                    return(
                        <DropDownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropDownLink>
                    )
                })
            }
        </>
    )
}

export default SubMenu