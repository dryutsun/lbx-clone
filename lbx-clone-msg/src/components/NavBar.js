import "../App.css";
import { IoFilmSharp } from "react-icons/io5";

// User Authenticated Route
const authenticatedOptions = (
  <>
    <li id="nav-items">Profile</li>
    <li id="nav-items">Films</li>
    <li id="nav-items">Lists</li>
    <li id="nav-items">Members</li>
    <li id="nav-items">Journal</li>
  </>
);

const unAuthenticatedOptions = (
  <>
    <li id="nav-items">Sign In</li>
    <li id="nav-items">Create Account</li>
    <li id="nav-items">Notebook</li>
    <li id="nav-items">Lists</li>
    <li id="nav-items">Reviews</li>
  </>
);

const alwaysOptions = (
  <>
    <li id="nav-items">Home</li>
  </>
);

const NavBar = ({ user }) => (
    <>
      <div className="navbar-container">
        <div id="navbar-wrapper">
          <div id="logo-icon">
            <h1 id="logo">MOV.II</h1>
            <IoFilmSharp style={{ color: "586067" }} />
          </div>

          <ul id="navbar-list">
          {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
            {alwaysOptions}
            {user ? authenticatedOptions : unAuthenticatedOptions}
          </ul>
        </div>
      </div>
    </>
  )

// Notes: This Logo-Icon Can be Turned into a Component
// This Navbar Needs to be Conditional based Upon Aunthentication Route
export default NavBar;
