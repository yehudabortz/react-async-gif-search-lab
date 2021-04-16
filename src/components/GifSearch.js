import React from "react";

class GifSearch extends React.Component {
  state = {
    query: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.fetchApi(this.state.query);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          Search Here
          <input
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
          ></input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
