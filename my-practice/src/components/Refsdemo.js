import React, { Component } from 'react'
//for focussing input field
class Refsdemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    HandleClick=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.HandleClick}>Yo</button>
            </div>
        )
    }
}

export default Refsdemo
