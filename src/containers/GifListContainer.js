import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    this.fetchApi();
    console.log("the state");
    console.log(this.state);
    console.log("the props");
    console.log(this.props);
  }

  fetchApi = (query) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.map((gif) => ({ url: gif.images.original.url })),
        });
      });
  };

  render() {
    return (
      <div>
        <GifSearch fetchApi={this.fetchApi} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
