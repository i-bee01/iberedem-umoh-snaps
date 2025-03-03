import "./Gallery.scss";
import Photograph from "../Photographs/Photographs.jsx";
import { Link } from "react-router-dom";

const Gallery = ({ selectedFilters, isFilterOpen, photos }) => {
  let filteredPhotos = photos;
  console.log(filteredPhotos);

  if (selectedFilters.size > 0) {
    filteredPhotos = photos.filter((photo) =>
      photo.tags.some((tag) => selectedFilters.has(tag))
    );
  }

  return (
    <div className={`gallery ${isFilterOpen ? "gallery--filtered" : ""}`}>
      {filteredPhotos.map((photo) => (
        <Link
          className={`gallery__photo-link ${
            isFilterOpen ? "gallery__photo-link--filtered" : ""
          }`}
          to={`/photos/${photo.id}`}
          key={photo.id}
        >
          <Photograph photo={photo} />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;