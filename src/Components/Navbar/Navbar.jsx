import "./Navbar.css"

const Navbar = (props) => {

    const { setDarkMode, darkMode } = props

    const toggleDarkModeHandler = () => {
      setDarkMode(!darkMode)
    }

    return (
    <nav className={darkMode ? "dark-mode" : ""}>
      {/* 1st nav part */}
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>
        <img
          className="gb_Hc gb_Hd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
         
          alt=""
          aria-hidden="true"
          role="presentation"
          />
        <span className="logo-text">Keep</span>
      </div>

    {/* 2nd nav part */}
      <div className="search-area-container">

        <div className="search-area">
          <div className="tooltip">
            <span className="material-symbols-outlined search-icon hover">search</span>
            <span className="tooltip-text">Search</span>
          </div>
          <input type="text" placeholder="Search" />
        </div>

        <div className="tooltip" onClick={toggleDarkModeHandler}>
            <span class="material-symbols-outlined hover">toggle_on</span>
            <span className="tooltip-text">Toggle Mode</span>
        </div>

      </div>

      {/* 3rd nav part */}
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltip-text">View List</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>

      {/* 4th nav part */}
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">account_circle</span>
          <span className="tooltip-text">Accounts</span>
        </div>
      </div>
    </nav>                
    )
}

export default Navbar