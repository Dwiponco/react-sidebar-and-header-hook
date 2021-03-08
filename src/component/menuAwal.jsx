import React, { Component } from 'react'
import {connect} from "react-redux"

class MenuAwal extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                menu awal
                <br/>
                <button onClick={this.props.handlePlus}>
                    plus
                </button>
                <br/>
                <button onClick={this.props.handleMinus}>
                    minus
                </button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type : "PLUS_ORDER"}),
        handleMinus : () => dispatch({type : "MINUS_ORDER"})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MenuAwal)
