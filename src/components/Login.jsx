import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="login">
      <button
        onClick={() =>
          dispatch(
            login({ name: "Raad", age: 24, email: "yamin.raad@gmail.com" })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default Login;
