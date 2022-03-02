import React, { Component } from 'react'
import PureComp from './PureComp'
import SimpleComp from './SimpleComp'

 class Parent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Maroti'
       }
     }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:"shikhar"
            })
         },2000)
     }
  render() {
      console.log('********Parent component rendered**********')
    return (
      <div>
          <h1>Parent component</h1>
          <SimpleComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parent