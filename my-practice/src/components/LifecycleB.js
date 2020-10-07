import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Saad"
        }
        console.log("Life cycle  B constructor")
    }
    static getDerivedStateFromProps(props,state){
       console.log('life cycle B getDerivedstatefromProps') 
       return null
    }

    componentDidMount(){
        console.log('component did mount B ')

    }
    shouldComponentUpdate() {
        console.log("Life Cycle B Should Compnent  update");
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevUpdate) {
        console.log("Life Cycle B Get snapshot before update");
        return null;
      }
      componentDidUpdate() {
        console.log("Life Cycle B Get compnent did update");
        return true;
      }
    
    
    render() {
        console.log('Life Cycle B render')
        return (
            <div>
                LifeCycle B 
            </div>
        )
    }
}

export default LifecycleB
