import React, { useState } from 'react';
import { Image } from 'antd';
import styles from './style.module.css';

const pic = ({ image, previewImage }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Image
        className={styles.Card}
        preview={{
          visible,
          src: previewImage,
          onVisibleChange: vis => setVisible(vis),
        }}
        src={image}
        onClick={() => setVisible(true)}
      />
    </div>
  );
};

export default pic;
