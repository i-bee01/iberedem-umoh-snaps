import "./HomePage.scss";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import FilterButton from "../../components/FilterButton/FilterButton";
import Mission from "../../components/Mission/Mission";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

function HomePage(){
    const [selectedFilters, setSelectedFilters] = useState(new Set());
    const [isFilterOpen, setIsFilterOpen] = useState(""); 
}