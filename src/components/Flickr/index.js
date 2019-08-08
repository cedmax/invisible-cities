import React, { Component } from "react";
import buildUrl from "build-url";
import axios from "axios";
import Gallery from "./Gallery";

class FlickrLightbox extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    this.queryFlickrApi(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.queryFlickrApi(nextProps);
  }

  generateApiUrl = props => {
    const extras = ["url_q", "url_c"];
    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method: "flickr.photos.search",
        format: "json",
        api_key: props.api_key || "",
        user_id: props.user_id || "",
        per_page: Number.MAX_SAFE_INTEGER,
        nojsoncallback: "?",
        extras: extras.join(",")
      }
    });
  };

  queryFlickrApi = async props => {
    try {
      const { data } = await axios.get(this.generateApiUrl(props));
      const { photos } = data;
      if (!photos) {
        throw data;
      }

      const images = photos.photo.map(p => ({
        src: p.url_c,
        thumbnail: p.url_q
      }));

      this.setState({
        images
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      !!this.state.images.length && (
        <Gallery
          onImagesLoaded={this.props.onImagesLoaded}
          images={this.state.images}
          className={this.props.className}
        />
      )
    );
  }
}

export default FlickrLightbox;
