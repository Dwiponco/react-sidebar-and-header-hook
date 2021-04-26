import React, { Component } from 'react'
import {connect} from "react-redux"

class MenuLain extends Component {
    render() {
        return (
            <div>
                di menu MenuLain
                {this.props.order}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}
export default connect(mapStateToProps) (MenuLain)