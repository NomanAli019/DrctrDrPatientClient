export default function Navbar({ onMenuClick }) {
  return (
    <div className="navbar">
      <div className="menu-btn" onClick={onMenuClick}>
        ☰
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search for doctor" />
      </div>

      <div className="notif" />
    </div>
  );
}



// export default function Navbar() {
//   return (
//     <div className="navbar">
//       <input type="text" placeholder="Search for doctor" />
//       <div className="notif" />
//     </div>
//   );
// }
