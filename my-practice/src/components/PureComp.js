//rpce shortcut
import React, { PureComponent } from 'react'
class PureComp extends PureComponent {
    //pure component does a challow comparison of props and prev states
    //it will render only and only when if there is a difference in prev state or props 
    //a regular component does not make such checks
    //pure component will not re render objects un neccsary and give performance boost 
    //only works with class based components 
    //to work with functions we need React Memos 
    render() {
        console.log("Pure Comp render")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

