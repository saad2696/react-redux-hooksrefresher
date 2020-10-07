import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ParentRef extends Component {
     constructor(props) {
         super(props)
     
         this.compRef = React.createRef();
     }
     refHandler=()=>{
         this.compRef.current.inputMount()
     }
    render() {
        return (
            <div>
                <ChildRef ref={this.compRef}/>
                <button onClick={this.refHandler}>Focus</button>
            </div>
        )
    }
}

export default ParentRef
