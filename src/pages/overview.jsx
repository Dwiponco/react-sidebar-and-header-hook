import React, { Component } from 'react'
import styled from "styled-components"

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto
`

const TitleOverview = styled.h4`
    color: red;
`

export default class Overview extends Component {
    render() {
        return (
            <TitleWrap>
                <TitleOverview>
                    THIS OVERVIEW
                </TitleOverview>
            </TitleWrap>
        )
    }
}
