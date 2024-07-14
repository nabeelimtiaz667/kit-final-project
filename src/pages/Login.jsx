import { Button } from "antd";
import login_img from "../assets/login.png";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const submit = () => {
    const body = {
      username: email,
      password: password,
    };
    console.log(body);
    axios
      .post("https://dummyjson.com/auth/login", body)
      .then((res) => {
        console.log(res);
        const name = res.data.firstName + " " + res.data.lastName;
        console.log(name);
        setUser(name);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div className="flex flex-row my-10">
        <div className="flex flex-col mx-auto">
          <div className="login-header flex flex-row items-center px-8">
            <div className="long-header-text flex flex-col gap-5">
              <div className="text-3xl">Welcome</div>
              <div className="text-normal">Sign in to Continue</div>
            </div>
            <div className="login-header-img">
              <img src={login_img} alt="" />
            </div>
          </div>
          <div className="login-section py-8 px-6 flex flex-col gap-5 bg-white">
            <div className="form-group flex flex-col gap-2">
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Username or Email"
                value={email}
                className="border p-2 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group flex flex-col">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="border p-2 rounded-md"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="font-medium text-center">Forget Password</div>
            <Button
              type="primary"
              htmlType="button"
              onClick={submit}
              className="py-5"
              block
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
