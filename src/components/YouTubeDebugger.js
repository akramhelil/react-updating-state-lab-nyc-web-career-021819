// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends 
Component {
 constructor(props) {
   super(props);
   this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
   }
 }
  
  clickHander = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  clickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video, 
            resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.clickHander}>Bit</button>
       <button className='resolution' onClick={this.clickRes}>Res</button>
      </div>
    )
  }
}
