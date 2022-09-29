import axios from "axios";
import { useEffect, useState } from "react";

const Navigation = ({ loginClick, homeClick }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleClick = () => (isAuth ? logOut() : loginClick());

  const logOut = async () => {
    const res = await axios.post("/logout");
    if (res) {
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth");
    if (isAuthenticated == "true") {
      setIsAuth(true);
    }
  }, []);

  console.log("render");
  return (
    <header>
      <div className="container">
        <div className="logo" onClick={homeClick}>
          Book
        </div>
        <nav>
          <button className="btn" onClick={handleClick}>
            {isAuth ? "Logout" : "Login"}
          </button>
          <div className="logged-in-menu">
            <p>John Doe</p>
            <ul className="dropdown">
              <li className="active">
                <a href="#">Account Details</a>
              </li>
              <li>
                <a href="#">Change Password</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
