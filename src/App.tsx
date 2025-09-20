import React from "react";
import logo from "./logo.svg";
import { Icon } from "@iconify/react";
import "./App.css";
import kgsbOne from "./assets/kgsb.png";

function App() {
  return (
    <div className="lg:p-12 md:p-8 p-3 h-[120vh] bg-[#020C6D] bg-[url('./assets/pattern.png')] bg-cover bg-center">
      <img
        src={kgsbOne}
        alt=""
        className="mx-auto w-[150px] md:mt-0 mt-10 rounded-full border-8 border-[#3448ff] shadow-lg shadow-[#3448ff]"
      />

      <h1 className="text-center font-extrabold mt-12 text-white md:mt-[5%] text-4xl">
        KGSB
      </h1>
      <div className="lg:w-[40%] md:w-[80%] w-full bg-[#0c1141] p-3 rounded-xl mx-auto mt-12 border-2 border-[#3448ff] shadow shadow-[#3448ff] text-lg text-center text-white">
        If they don't open, after clicking the link, tap the 3 DOTS
        <Icon
          icon={"solar:menu-dots-bold"}
          className="inline-block text-3xl mx-2"
        />
        at the top-right corner of your screen and select
        <br /> OPEN IN BROWSER
      </div>
      <a
        href="https://t.me/+lV-wfExZ6DpjYzU0"
        className="lg:w-[40%] md:w-[80%] w-[90%] block bg-[#0c1141] p-3 rounded-xl mx-auto mt-12 border-2 border-[#3448ff] shadow shadow-[#3448ff] animate-heartbeat cursor-pointer"
      >
        <div className="flex items-center">
          <Icon
            icon={"logos:telegram"}
            className="text-6xl p-2 bg-[#020C6D] rounded-2xl "
          />
          <div className="block ml-8">
            <p className="text-lg font-bold text-white">Telegram</p>
            <p className="text-sm font-light mt-1 text-white">
              Join the community
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;
