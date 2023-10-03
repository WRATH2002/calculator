import logo from "./logo.svg";
import "./App.css";

import { LiaDivideSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";
import { LiaEqualsSolid } from "react-icons/lia";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";
// import { LiaDivideSolid } from "react-icons/lia";

function App() {
  const [screen, setScreen] = useState("");
  const [subScreen, setSubScreen] = useState("");

  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  const [operator, setOperator] = useState("");
  const [resultScreen, setResultScreen] = useState("r");

  function result() {
    if (operator === "1") {
      console.log(numberOne);
      console.log(subScreen);
      var tempresult = parseInt(numberOne) / parseInt(subScreen);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "2") {
      var tempresult = parseInt(subScreen) * parseInt(numberOne);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "3") {
      var tempresult = parseInt(numberOne) - parseInt(subScreen);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "4") {
      var tempresult = parseInt(subScreen) + parseInt(numberOne);
      setResultScreen(tempresult);
      console.log(resultScreen);
    }
  }

  return (
    <div className="font-bold bg-[#eeeef8] w-full h-[calc(100vh-60px)] lg:h-[100vh] md:h-[100vh] flex justify-center items-center">
      <div className="w-full lg:w-[340px] md:w-[340px] h-[calc(100vh-60px)] lg:h-[calc(100vh-100px)] md:h-[calc(100vh-100px)]">
        <div className=" h-[calc(100%-478px)] lg:h-[calc(100%-445px)] md:h-[calc(100%-445px)] w-full flex justify-center items-center px-[24px] lg:px-[16px] md:px-[16px] ">
          <div className="neomorphismin w-full h-[calc(100%-50px)] rounded-3xl p-[20px] flex flex-col-reverse">
            {/* <span>{resultScreen}</span>{" "} */}
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              value={resultScreen}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              value={subScreen}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              value={numberOne}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="border-[2px] w-[60px] border-[#5f5f5f] rounded-full"></div>
        </div>
        <div className="w-full   flex flex-col h-[478px] lg:h-[445px] md:h-[445px]  justify-center">
          <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin select-none ">
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center  text-[22px] cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen("");
                setOperator("");
              }}
            >
              C
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => setScreen(screen.slice(0, -1))}
            >
              <FiDelete />
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer bg-[#ffb545] select-none"
              style={{ transition: ".3s" }}
            >
              1
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                if (operator.length >= 1) {
                } else {
                  setOperator("1");
                  setNumberOne(subScreen);
                  setScreen(screen + "/");
                  setSubScreen("");
                }
              }}
            >
              <LiaDivideSolid />
            </div>
          </div>
          <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "7");
                setSubScreen(subScreen + "7");
              }}
            >
              7
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "8");
                setSubScreen(subScreen + "8");
              }}
            >
              8
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "9");
                setSubScreen(subScreen + "9");
              }}
            >
              9
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                if (operator.length >= 1) {
                } else {
                  setOperator("2");
                  setNumberOne(subScreen);
                  setScreen(screen + "X");
                  setSubScreen("");
                }
              }}
            >
              <RxCross2 />
            </div>
          </div>
          <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "4");
                setSubScreen(subScreen + "4");
              }}
            >
              4
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "5");
                setSubScreen(subScreen + "5");
              }}
            >
              5
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "6");
                setSubScreen(subScreen + "6");
              }}
            >
              6
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                if (operator.length >= 3) {
                } else {
                  setOperator("3");
                  setNumberOne(subScreen);
                  setScreen(screen + "-");
                  setSubScreen("");
                }
              }}
            >
              <LiaMinusSolid />
            </div>
          </div>
          <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "1");
                setSubScreen(subScreen + "1");
              }}
            >
              1
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "2");
                setSubScreen(subScreen + "2");
              }}
            >
              2
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "3");
                setSubScreen(subScreen + "3");
              }}
            >
              3
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                if (operator.length >= 4) {
                } else {
                  setOperator("4");
                  setNumberOne(subScreen);
                  setScreen(screen + "+");
                  setSubScreen("");
                }
              }}
            >
              <LiaPlusSolid />
            </div>
          </div>
          <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
            >
              1
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
              onClick={() => {
                setScreen(screen + "0");
                setSubScreen(subScreen + "0");
              }}
            >
              0
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#ffd18b] cursor-pointer select-none"
              style={{ transition: ".3s" }}
            >
              .
            </div>
            <div
              className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
              style={{ transition: ".3s" }}
              onClick={() => result()}
            >
              <LiaEqualsSolid />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="neomorphism w-[200px] h-[200px]  rounded-full "></div> */}
    </div>
  );
}

export default App;
