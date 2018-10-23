import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NewPoll extends Component {
  state = {
    options: [{ option: "" }],
    chart: {
      title: "",
      labels: [],
      data: [],
      voters: [],
      creator: ""
    }
  };
  componentDidMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      this.props.history.push("/login");
    } else {
      console.log(this.props.user);
    }
  }

  createOption = e => {
    if (this.state.options.length === 10) {
      alert("max options 10");
    } else {
      this.setState(prevState => ({
        options: [...prevState.options, { option: "" }]
      }));
    }
  };

  getInput = e => {
    if (["option"].includes(e.target.className)) {
      let options = [...this.state.options];
      options[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ options }, () => console.log(this.state.options));
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div onSubmit={this.submit} className="row">
          <form className="col s12 center">
            <h1>Create new Chart</h1>
            <div className="row">
              <div className="input-field offset-m3 col s12 m6">
                <input
                  id="chart_title"
                  type="text"
                  name="title"
                  onChange={this.getInput}
                  required
                />
                <label htmlFor="chart_title">Title</label>
              </div>
            </div>

            <div id="options" className="row">
              {this.state.options.map((option, idx) => {
                return (
                  <div className="input-field col s6 m6" key={idx}>
                    <input
                      id={`option-${idx}`}
                      type="text"
                      data-id={idx}
                      name={`option-${idx}`}
                      onChange={this.getInput}
                      className="option"
                    />
                    <label htmlFor={`option-${idx}`}>{`option #${idx +
                      1}`}</label>
                  </div>
                );
              })}
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
