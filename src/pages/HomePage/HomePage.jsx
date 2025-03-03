import { useEffect, useState } from "react";
import "./HomePage.scss";
import Header from "../../components/ComponentName/Header/Header.jsx";
import FilterButton from "../../components/ComponentName/FilterButton/FilterButton.jsx";
import Mission from "../../components/ComponentName/Mission/Mission.jsx";
import Gallery from "../../components/ComponentName/Gallery/Gallery.jsx";
import api from "../../utils/api.js";

function HomePage() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const loadTags = async () => {
      try {
        const tagData = await api.fetchTags();
        setTags(tagData);
      } catch (error) {
        setError("Unable to retrieve filters");
        console.error(error);
      }
    };

    loadTags();
  }, []);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const photoData = await api.fetchPhotos();
        setPhotos(photoData);
      } catch (error) {
        setError("Unable to retrieve images");
        console.error(error);
      }
    };

    loadPhotos();
  }, []);

  const getFilteredPhotos = () => {
    if (selectedFilters.size === 0) {
      return photos;
    } else {
      return photos.filter((photo) =>
        photo.tags.some((tag) => selectedFilters.has(tag))
      );
    }
  };

  const toggleFilter = (tag) => {
    setSelectedFilters((selectedFilters) => {
      const newFilters = new Set();
      if (!selectedFilters.has(tag)) {
        newFilters.add(tag);
      }
      return newFilters;
    });
  };

  const handleFilterButtonClick = () => {
    if (isFilterOpen) {
      setSelectedFilters(new Set());
    }
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="">
      <Header
        isFilterOpen={isFilterOpen}
        onFilterButtonClick={handleFilterButtonClick}
      />

      <main className="app__layout">
        {isFilterOpen && (
          <FilterButton
            tags={tags}
            selectedFilters={selectedFilters}
            onFilterToggle={toggleFilter}
          />
        )}

        <div className="app__content">
          <Mission />
          <Gallery
            selectedFilters={selectedFilters}
            isFilterOpen={isFilterOpen}
            photos={photos}
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;