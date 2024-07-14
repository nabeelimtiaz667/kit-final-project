import { Button } from "antd";
import login_img from "../assets/login.png";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <div className="flex flex-row">
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
          <div className="login-section py-8 flex flex-col items-center gap-5 bg-white">
            <div className="form-group flex flex-col gap-2">
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Username or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group flex flex-col">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="font-medium">Forget Password</div>
            <Button type="primary" htmlType="button" onClick={submit}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
