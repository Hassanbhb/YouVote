import React, { Component } from 'react'

class NewPoll extends Component {
  render() {
    return (
      <div>
      <div onSubmit={this.submit} className="row">
            <form className="col s12 offset-m3">
              <h1>Create new Chart</h1>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="chart_title" type="text" required/>
                  <label htmlFor="chart_title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m2">
                  <input id="chart_option" type="text" required/>
                  <label htmlFor="chart_option">Option</label>
                </div>
                <div className="input-field col s12 m2">
                  <input id="chart_option" type="text" required/>
                  <label htmlFor="chart_option">Option</label>
                </div>
                <div className="input-field col s12 m2">
                  <input id="chart_option" type="text" required/>
                  <label htmlFor="chart_option">Option</label>
                </div>
              </div> 
              
              <button className="btn waves-effect waves-light" type="submit" name="action">Create Chart</button>
            </form>
          </div>
      </div>
    )
  }
}

export default NewPoll;
