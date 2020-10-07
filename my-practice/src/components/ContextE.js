import React, { Component } from 'react'
import ContextF from './ContextF'
import UserContext from './UserContext'

class ContextE extends Component {
    render() {
        return (
            <div>
                Component E context {this.context}
                <ContextF/>
            </div>
        )
    }
}
ContextE.contextType = UserContext
export default ContextE
