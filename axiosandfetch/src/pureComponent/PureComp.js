import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
      console.log('Pure component rendered')
    return (
      <div>
          <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp