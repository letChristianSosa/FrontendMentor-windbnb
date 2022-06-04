import "./NavigationExpandedStyle.css";

const NavigationExpanded = ({ setShowBar }) => {
  const closeSearchBar = (e) => {
    if (e.target.classList.contains("bg-darken")) setShowBar(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-darken" onClick={(e) => closeSearchBar(e)}>
      <div className="expanded">
        <form className="searchBarExpanded container">
          <div className="field">
            <label htmlFor="city" className="label">
              Location
            </label>
            <input type="text" placeholder="Helsinky, Finland" />
          </div>
          <div className="field">
            <label htmlFor="guests" className="label">
              Guests
            </label>
            <input type="text" placeholder="Add Guests" />
          </div>
          <input
            type="submit"
            value="Search"
            onSubmit={(e) => submitHandler(e)}
          />
        </form>
        {/* <p className="city">Helsinki, Finland</p>
          <p className="guests">Add Guests</p>
          <p className="search">O</p> */}
      </div>
    </div>
  );
};

export default NavigationExpanded;
