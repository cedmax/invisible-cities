import React, { memo, useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import BlockContent from "@sanity/block-content-to-react";

const Artist = memo(({ artist, show }) => {
  return (
    <div className="artist">
      <button type="button" onClick={show(artist)}>
        <img src={artist.image} alt={artist.name} />
      </button>
    </div>
  );
});

export default memo(({ siteData: { artist: artists }, api }) => {
  const [visible, setVisible] = useState(false);
  const show = useCallback(user =>
    useCallback(() => {
      setVisible(user);
    }, [setVisible])
  );
  const hide = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    if (api) {
      api.setAllowScrolling(!visible);
    }
  }, [visible]);

  return (
    <div className="padder">
      <div className="artists">
        {artists.map(artist => (
          <Artist show={show} key={artist.name} artist={artist} />
        ))}
      </div>
      <Modal onRequestClose={hide} isOpen={visible}>
        {visible && (
          <>
            <h3>{visible.name}</h3>
            <h5>{visible.role}</h5>
            <BlockContent blocks={visible.content} />
          </>
        )}
      </Modal>
    </div>
  );
});
