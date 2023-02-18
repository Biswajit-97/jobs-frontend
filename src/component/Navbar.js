import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../styles/sidebar.css";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <div className="sidebar">
      <div className="flexWrapperOne">
        <p className="jobs">JOBS</p>
      </div>
      {isAuth() ? (
        userType() === "recruiter" ? (
          <>
            <div className="migrid" onClick={() => handleClick("/addjob")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Add Jobs</p>
            </div>
            <div className="migrid" onClick={() => handleClick("/myjobs")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Posted</p>
            </div>
            <div className="migrid" onClick={() => handleClick("/employees")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Profile</p>
            </div>
            <div className="migrid" onClick={() => handleClick("/logout")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Logout</p>
            </div>
          </>
        ) : (
          <>
            <div className="migrid" onClick={() => handleClick("/home")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Jobs</p>
            </div>
            <div
              className="migrid"
              onClick={() => handleClick("/applications")}
            >
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Applied</p>
            </div>
            <div className="migrid" onClick={() => handleClick("/profile")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Profile</p>
            </div>

            <div className="migrid" onClick={() => handleClick("/logout")}>
              <img
                src="https://static.overlay-tech.com/assets/6fbebc85-c07e-4d75-9099-47ef2593fb7c.svg"
                alt=""
              />
              <p className="feed">Logout</p>
            </div>
          </>
        )
      ) : (
        <p>hello</p>
      )}
    </div>
  );
};

export default Navbar;
