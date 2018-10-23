import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NewPoll extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      this.props.history.push("/login");
    } else {
      console.log(this.props.user);
    }
  }

  createOption = e => {
    const options = document.getElementById("options");
    if (options.children.length === 10) {
      alert("you are only allowed to 10 options per chart");
    } else {
      //create div element
      const div = document.createElement("div");
      div.setAttribute("class", "input-field col s6 m6");
      //create input
      const input = document.createElement("input");
      input.setAttribute("id", "option");
      input.setAttribute("type", "text");
      //create label
      const label = document.createElement("label");
      const textNode = document.createTextNode("option");
      label.setAttribute("for", "option");
      label.appendChild(textNode);
      //append input and label to div
      div.appendChild(input);
      div.appendChild(label);
      //append div to options div
      options.appendChild(div);
    }
  };

  render() {
    return (
      <div>
        <div onSubmit={this.submit} className="row">
          <form className="col s12 center">
            <h1>Create new Chart</h1>
            <div className="row">
              <div className="input-field offset-m3 col s12 m6">
                <input id="chart_title" type="text" required />
                <label htmlFor="chart_title">Title</label>
              </div>
            </div>

            <div id="options" className="row">
              <div className="input-field col s6 m6">
                <input id="option" type="text" />
                <label htmlFor="option">option</label>
              </div>
              <div className="input-field col s6 m6">
                <input id="option" type="text" />
                <label htmlFor="option">option</label>
              </div>
            </div>

            <div className="col s12 m12">
              <p
                onClick={this.createOption}
                className="btn-floating btn-large waves-effect waves-light red"
              >
                <i className="fas fa-plus" />
              </p>
              <br />
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Create Chart
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(withRouter(NewPoll));
