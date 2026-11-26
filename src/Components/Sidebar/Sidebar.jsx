import "./Sidebar.css"


const Sidebar = (props) => {

  const { darkMode } = props

    return (
        
        <div className={darkMode ? "sidebar sidebar-dark-mode dark-mode" : "sidebar"}>
        <div className="sidebar-item active-item">
          <span className="material-symbols-outlined hover active">
            lightbulb
          </span>
          <span className="sidebar-text">Notes</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> notifications </span>
          <span className="sidebar-text">Reminders</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> edit </span>
          <span className="sidebar-text">Edit Labels</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> archive </span>
          <span className="sidebar-text">Archive</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> delete </span>
          <span className="sidebar-text">Trash</span>
        </div>
      </div>

    )

}

export default Sidebar