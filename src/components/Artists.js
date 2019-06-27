import React, { memo, useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import BlockContent from "@sanity/block-content-to-react";

const Artist = memo(({ image, name, role, content, api }) => {
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => {
    setVisible(true);
  }, [setVisible]);
  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    if (api) {
      api.setAllowScrolling(!visible);
    }
  }, [visible]);

  return (
    <div className="artist">
      <button type="button" onClick={show}>
        <img src={image} alt={name} />
      </button>
      <Modal onRequestClose={hide} isOpen={visible}>
        <h3>{name}</h3>
        <h5>{role}</h5>
        <BlockContent blocks={content} />
      </Modal>
    </div>
  );
});

export default memo(({ siteData: { artist: artists }, api }) => (
  <div className="padder">
    <div className="artists">
      {artists.map(artist => (
        <Artist key={artist.name} api={api} {...artist} />
      ))}
    </div>
  </div>
));
