import React, { Component } from 'react'
import styled from "styled-components"
import dumyImage from "../feature2.jpeg"

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto
`

const TitleOverview = styled.h4`
    color: red;
`

export default class Reports2 extends Component {
    render() {
        return (
            <TitleWrap>
                <div>
                    <img src={dumyImage} alt=""/>
                </div>
                <TitleOverview>
                    REPORT  2
                </TitleOverview>
            </TitleWrap>
        )
    }
}
