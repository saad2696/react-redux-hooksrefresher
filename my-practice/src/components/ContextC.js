import React, { Component } from 'react'
import ContextE from './ContextE'
import UserContext from './UserContext'

 class ContextC extends Component {
    render() {
        return (
            <div>
                Component C has the Context value {this.context}
                <ContextE/>
            </div>
        )
    }
}
ContextC.contextType = UserContext;

export default ContextC
