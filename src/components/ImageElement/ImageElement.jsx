//react
import { useState } from 'react';

//component
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

//styles
import styles from './ImageElement.module.css';

export default function ImageElement({
  imageSource = '',
  alt = '',
  extraClass = undefined,
  cover = false,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`${styles['image-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {!imageLoaded && (
        <LoadingSpinner
          extraClass={[styles['image-main__loading-spinner']]}
          isPending={imageLoaded ? false : true}
        />
      )}

      <img
        onLoad={() => {
          setImageLoaded(true);
        }}
        className={styles['image-main__image-file']}
        src={imageSource}
        alt={alt}
        style={{
          display: imageLoaded ? 'block' : 'none',
          objectFit: cover ? 'cover' : '',
        }}
      />
    </div>
  );
}
