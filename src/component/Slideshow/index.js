import React, { Component, Fragment } from 'react'

import Card from '../Card'
import data from '../../data/data.js'

import './style.scss'

class Slideshow extends Component {
  constructor(props){
    super(props)
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {
      properties,
      property
    } = this.state

    return (
      <Fragment>
        <button
            onClick={()=> this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
        </button>
        <button
          onClick={()=> this.nextProperty()}
          disabled={property.index === data.properties.length-1}
        >
          Next
        </button>
        <div className="page">
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${property.index*(100/properties.length)}%)`
              }}>
                {
                  properties.map(property => <Card key={property._id} property={property} />)
                }
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }
}

export default Slideshow