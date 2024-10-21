import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const AdminPanel = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a token in local storage
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login if token is missing
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>

      <div className="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <h1><a href="index.html" className="logo">Admin</a></h1>
          <ul className="list-unstyled components mb-5">

            <li>
              <a href="/dashboard"><span className="fa fa-user mr-3" /> Profile</a>
            </li>

            <li>
              <a href="/userdata"><span className="fa fa-sticky-note mr-3" />User Data</a>
            </li>

            <li>
              <a href="/"><span className="fa fa-paper-plane mr-3" />Logout</a>
            </li>

          </ul>

        </nav>

        <div id="content" className="p-4 p-md-5 pt-5">

          <h2 className="mb-4">Sidebar /04</h2>

          

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

      </div>



    </>
  )
}

export default AdminPanel
