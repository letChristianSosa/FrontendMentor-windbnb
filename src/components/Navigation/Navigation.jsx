import { useState } from "react";
import "./NavigationStyle.css";
import NavigationExpanded from "./NavigationExpanded";

const Navigation = () => {
  const [showBar, setShowBar] = useState(false);

  const openSearchBar = () => {
    setShowBar(true);
  };

  return (
    <div className="navigation">
      {showBar && <NavigationExpanded setShowBar={setShowBar} />}
      <a href="/">
        <img src="./logo.svg" alt="" />
      </a>
      <div className="searchBar" onClick={openSearchBar}>
        <p className="city">Helsinki, Finland</p>
        <p className="guests">Add Guests</p>
        <p className="search">O</p>
      </div>
    </div>
  );
};

export default Navigation;
