import { useState } from 'react';
import './App.scss';
import Header from './components/ComponentName/Header/Header.jsx';
import FilterButton from './components/ComponentName/FilterButton/FilterButton.jsx';
import Mission from './components/ComponentName/Mission/Mission.jsx';
import Gallery from './components/ComponentName/Gallery/Gallery.jsx';
import Footer from './components/ComponentName/Footer/Footer.jsx';
import tagData from './data/tags.json';


function App() {




 const [selectedFilters, setSelectedFilters] = useState(new Set());
 const [isFilterOpen, setIsFilterOpen] = useState("");

 const toggleFilter = (tag) => {
  const newFilters = new Set();
  newFilters.add(tag);
  setSelectedFilters(newFilters);
 }

 const handleFilterButtonClick = () => {
  if (isFilterOpen) {
    setSelectedFilters(new Set());
  }
  setIsFilterOpen(!isFilterOpen);
 };

  return (
    <div className="app">
      <Header
      selectedFilters={selectedFilters}
      onFilterToggle={toggleFilter}
      isFilterOpen={isFilterOpen}
      onFilterButtonClick={handleFilterButtonClick}/>
    
      
      <main className="app__content">
      {isFilterOpen && (
      <FilterButton 
        tags ={tagData}
        selectedFilters={selectedFilters}
        onFilterToggle={toggleFilter}/>)}

        <div>
        <Mission/>
        <Gallery
        selectedFilters={selectedFilters}
        isFilterOpen={isFilterOpen}/>
      </div>
      
      </main>
      
      <Footer/>
    </div>
  
  )
}


export default App;
