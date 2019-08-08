import React from "react";
import FlickrLightbox from "./Flickr";

export default ({ api }) => (
  <div className="padder">
    <FlickrLightbox
      className="gallery"
      onImagesLoaded={() => api.reBuild()}
      api_key="3a19f674bf359f785ae9de1999183a3e"
      user_id="182945327@N07"
    />
  </div>
);
