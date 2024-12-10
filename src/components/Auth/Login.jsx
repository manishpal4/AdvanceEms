import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);

    setemail("");
    setpassword("");
  };

  return (
    <div className="w-full h-screen flex fl items-center justify-center">
      <div className="border-2 border-slate-600 flex-col rounded-lg p-4">
        <h1 className="text-white text-3xl">Login</h1>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="p-10 flex flex-col items-center justify-center"
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="border-1  border-zinc-400 bg-white p-1 px-3 rounded-full w-72 mb-6"
            placeholder="Enter your mail"
            type="email"
            name=""
            id="email"
          />
          <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
            className="border-1 border-zinc-400 bg-white p-1 px-3 rounded-full w-72 mb-6"
            type="password"
            placeholder="Enter Password"
            name=""
            id="password"
          />
          <button className="text-black font-bold bg-emerald-500 rounded-full px-6 py-2">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
