import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import {SidebarData} from "./sidebarData"
import SubMenu from "./subMenu"

const Nav =  styled.div`
    background: #21ccce;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const NavIcons = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
        margin-top: auto;
        margin-bottom: auto;
    }
`

const SidebarNav = styled.nav`
    background: #ffffff;
    box-shadow: 2px 0px 11px -8px rgb(112 112 112);
    border-right: 1px solid #e6e6e6;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? "0" : "-100%")};
    transition: 500ms;
    z-index: 10;
`
const SidebarWrap = styled.div`
    width: 100%
`
const WrapHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;

    div {
        display: flex;

        h1{
            margin-left: 20px;
            color: #ffffff;
        }
    }
`

const WrapNotif = styled.div`
    width: 30vw;
`
const Notif = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;

    span{
        margin-bottom: auto;
        border: 1px solid white;
        width: 50px;
        height: 50px;
        margin-top: auto;
        font-size: 35px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        color: #d1e6f5;

        svg{
            margin-top: auto;
            margin-bottom: auto;
        }
    }
`

const Users = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    padding: 18px;

    div{
        border: 1px solid white;
        height: 50px;
        width: 300px;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 5px;
        color: #d1e6f5;

        span{
            margin-left: 10px;
            margin-bottom: auto;
            margin-top: auto;
            font-size: 35px;
            display: flex;
            justify-content: center;
    
            svg{
                margin-top: auto;
                margin-bottom: auto;
            }
        }

        p{
            margin-left: 10px
        }
    }

`


function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Nav>
                <WrapHeader>
                    <div>
                        <NavIcons to="#">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </NavIcons>
                        <h1>ROOMPANDA</h1>
                    </div>

                    <WrapNotif>
                        <Notif>
                            <span>
                                <IoIcons.IoMdNotifications/>
                            </span>
                        </Notif>
                        <Notif>
                            <span>
                                <IoIcons.IoMdChatboxes/>
                            </span>
                        </Notif>
                        <Users>
                            <div>
                                <span>
                                    <FaIcons.FaUserCircle/>
                                </span>
                                <p>Dwi Ponco Utomo</p>
                            </div>
                        </Users>
                    </WrapNotif>
                </WrapHeader>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcons to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcons>
                    {
                        SidebarData.map((item,index) => {
                            return <SubMenu item={item} key={index}/>
                        })
                    }
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
