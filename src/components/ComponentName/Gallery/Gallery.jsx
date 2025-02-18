import './Gallery.scss';
import Photographs from '../Photographs/Photographs.jsx';
import photoData from "../../../data/photos.json";

const Gallery = ({selectedFilters, isFilterOpen}) =>{
let filteredPhotos = photoData;

if (selectedFilters.size > 0) {
    filteredPhotos = photoData.filter((photo) =>
        photo.tags.some((tag) => selectedFilters.has(tag))
);
}

return(
    <div className={`gallery ${isFilterOpen ? "gallery--filtered": ""}`}>
        {filteredPhotos.map((photo, index) =>(
            <Photographs key={index} photo={photo}/>
        ))}
    </div>
     );
    }

export default Gallery;