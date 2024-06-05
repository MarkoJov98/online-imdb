import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthUser } from "../store/auth/selectors";
import { performRegisterUser } from "../store/auth/slice";

const Register = () => {
  // const [customError, setCustomError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const userData = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userData?.id) navigate("/user-profile");
    // redirect user to login page if registration was successful
    // if (success) navigate("/login");
  }, [navigate, userData]);

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // check if passwords match
    if (newUser.password !== newUser.confirmPassword) {
      // setCustomError("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    newUser.email = newUser.email.toLowerCase();
    dispatch(performRegisterUser(newUser));
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-input"
          value={newUser.name}
          onChange={(event) =>
            setNewUser({ ...newUser, name: event.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-input"
          value={newUser.email}
          onChange={(event) =>
            setNewUser({ ...newUser, email: event.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          value={newUser.password}
          onChange={(event) =>
            setNewUser({ ...newUser, password: event.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Confirm Password</label>
        <input
          type="password"
          className="form-input"
          value={newUser.confirmPassword}
          onChange={(event) =>
            setNewUser({ ...newUser, confirmPassword: event.target.value })
          }
          required
        />
      </div>
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
};

export default Register;
