import React, { Component } from 'react'

class ChildRef extends Component {
    constructor(props) {
        super(props)
    
      this.inputRef = React.createRef();
    }
    
    inputMount(){
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} ></input>
            </div>
        )
    }
}

export default ChildRef
