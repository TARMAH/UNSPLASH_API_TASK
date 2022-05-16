import React from 'react';
import Pic from './pic';
import styles from './style.module.css';

const pics = ({ pictures }) => {
  return (
    <>
      <div className={styles.Cards_Container}>
        {pictures?.map(picture => (
          <Pic
            key={picture.id}
            image={picture.urls.small}
            previewImage={picture.urls.full}
          />
        ))}
      </div>
    </>
  );
};

export default pics;
