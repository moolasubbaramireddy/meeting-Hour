import React from "react";
import logo from "../assets/video-call.svg";
import mainlogo from "../assets/logo.png";


const Home = () => {
  return (
    <div>
      <div className="bg-cyan-600 h-screen w-24rem">
        <div className="">
          <img className="flex pt-10 pl-10" src={mainlogo} alt="mainlogo" />
        </div>
        <div>
          <img
            className="h-48 flex items-center justify-items-center pl-20"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="pt-10">
          <div>
            <h1 className="text-5xl pl-5 text-white">A few more clicks to </h1>
            <h1 className="text-5xl pl-5 text-white">
              sign in to your account.
            </h1>
          </div>
          <h4 className="text-xl pl-5 pt-5 text-white">Manage all your subscriptions in one place.</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
