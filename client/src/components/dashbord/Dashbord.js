import React, { Component } from 'react'

class Dashbord extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="collection with-header">
            <h1 className="collection-header">My Polls</h1>
            <a href="#!" className="collection-item"><span className="badge">1 votes</span><i class="fas fa-chart-pie"></i> My polls title</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashbord;
