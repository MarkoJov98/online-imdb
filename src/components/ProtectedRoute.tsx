import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUserTokenUser } from "../store/auth/selectors";

const ProtectedRoute = () => {
  const userToken = useSelector(selectUserTokenUser);

  // show unauthorized screen if no user is found in redux store
  if (!userToken) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
