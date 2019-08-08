import React, { Component } from "react";
import Lightbox from "react-images";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.loaded = 0;

    this.state = {
      expected: props.images.length,
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <a
          className="thumbnail"
          href={obj.src}
          key={i}
          onClick={e => this.openLightbox(i, e)}
          {...obj.orientation}
        >
          <img
            alt={obj.title}
            className="galleryImg"
            onLoad={() => {
              this.loaded = this.loaded + 1;

              if (this.state.expected === this.loaded) {
                this.props.onImagesLoaded();
                this.loaded = null;
              }
            }}
            src={obj.thumbnail}
          />
        </a>
      );
    });

    return <div className={this.props.className}>{gallery}</div>;
  }

  render() {
    return (
      <>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </>
    );
  }
}

export default Gallery;
