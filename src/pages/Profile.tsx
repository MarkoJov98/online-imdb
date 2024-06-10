import { useDispatch, useSelector } from "react-redux";
import "../styles/profile.css";
import { selectAuthUser } from "../store/auth/selectors";
import { performGetUserProfile } from "../store/auth/slice";
import { useEffect } from "react";

const ProfileScreen = () => {
  const userData = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(performGetUserProfile(userData));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {userData?.name && (
        <figure>{userData?.name.charAt(0).toUpperCase()}</figure>
      )}
      <span>
        Welcome <strong>{userData?.name}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  );
};

export default ProfileScreen;
