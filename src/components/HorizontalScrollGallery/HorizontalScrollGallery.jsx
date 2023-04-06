//react
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//custom hooks import
import useShuffleArr from "../../hooks/useShuffleArr.js";

//styles
import styles from "./HorizontalScrollGallery.module.css";

export default function HorizontalScrollGallery({ images = [] }) {
  const [galleryItems, setGalleryItems] = useState([]);
  const { shuffleArr } = useShuffleArr();

  useEffect(() => {
    setGalleryItems(shuffleArr(images));
  }, [images, shuffleArr]);

  return (
    <section className={styles["horizontal-scroll-gallery"]}>
      <div className={styles["horizontal-scroll-gallery__scroller"]}>
        {galleryItems.map((item) => {
          return (
            <Link to="#" key={item.id}>
              <article className={styles["horizontal-scroll-gallery__item"]}>
                <div
                  className={styles["horizontal-scroll-gallery__item--img"]}
                  style={{
                    background: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className={styles["horizontal-scroll-gallery__item--name"]}>
                  {item.productCategoryName}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
