import logo from "./logo.svg";
import "./App.css";

import { LiaDivideSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { LiaMinusSolid } from "react-icons/lia";
import { LiaPlusSolid } from "react-icons/lia";
import { LiaEqualsSolid } from "react-icons/lia";
import { RiDeleteBack2Line } from "react-icons/ri";
import { IoIosSwap } from "react-icons/io";
import { LiaInfinitySolid } from "react-icons/lia";
import { MdWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { useEffect, useState } from "react";
// import { LiaDivideSolid } from "react-icons/lia";

function App() {
  const [fastResult, setFastResult] = useState("");

  const [isOperator, setIsoperator] = useState(false);

  const [subScreen, setSubScreen] = useState("");

  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");

  const [operator, setOperator] = useState("");
  const [resultScreen, setResultScreen] = useState("");

  const [resultFocus, setResultFocus] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [dot, setDot] = useState(false);

  const [isOperatorBefore, setIsoperatorBefore] = useState(false);
  const [operatorCount, setOperatorCount] = useState(0);
  const [screen, setScreen] = useState("");

  useEffect(() => {
    // fastresult();
    // document.addEventListener("keydown", detectkeydown, true);
  }, [screen]);

  const detectkeydown = (e) => {
    // console.log(e);
    // setScreen(screen + e.key);
  };

  function result() {
    if (operator === "1") {
      console.log(numberOne);
      console.log(subScreen);
      var tempresult = parseFloat(numberOne) / parseFloat(subScreen);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "2") {
      var tempresult = parseFloat(subScreen) * parseFloat(numberOne);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "3") {
      var tempresult = parseFloat(numberOne) - parseFloat(subScreen);
      setResultScreen(tempresult);
      console.log(resultScreen);
    } else if (operator === "4") {
      var tempresult = parseFloat(subScreen) + parseFloat(numberOne);
      setResultScreen(tempresult);
      console.log(resultScreen);
    }
    //  else {
    //   var tempresult = 0 + parseInt(screen);
    //   setResultScreen(tempresult);
    // }
  }

  // function fastresult() {
  //   var num1 = subScreen;
  //   fastResult = fastresult;
  // }

  function checkInputScreenStart() {
    if (
      screen[0] === "/" ||
      screen[0] === "*" ||
      screen[0] === "+" ||
      screen[0] === "-"
    ) {
      setScreen("0");
    }
  }

  return (
    <>
      {toggle === false ? (
        <>
          <div
            className="font-bold bg-[#eeeef8] w-full h-[calc(100vh-60px)] lg:h-[100vh] md:h-[100vh] flex justify-center items-center"
            style={{ transition: ".4s" }}
          >
            {/* <button
              
            >
              clickme
            </button> */}
            <div
              className="neomorphismin  rounded-0 lg:rounded-[30px] md:rounded-[30px] w-full lg:w-[340px] md:w-[340px] h-[calc(100vh-60px)] lg:h-[calc(100vh-100px)] md:h-[calc(100vh-100px)]"
              style={{ transition: ".4s" }}
            >
              <div className=" h-[calc(100%-478px)] lg:h-[calc(100%-445px)] md:h-[calc(100%-445px)] w-full flex justify-center items-center px-[24px] lg:px-[16px] md:px-[16px] ">
                <div
                  className="neomorphisminside w-full h-[calc(100%-50px)] rounded-3xl p-[20px] flex flex-col-reverse"
                  style={{ transition: ".4s" }}
                >
                  {/* <span>{resultScreen}</span>{" "} */}
                  {resultFocus === false ? (
                    <>
                      <div
                        className="w-full h-[25px] flex justify-end items-center"
                        style={{ transition: ".4s" }}
                      >
                        {subScreen.length === 0 && operator.length === 0 ? (
                          <></>
                        ) : (
                          <>
                            <LiaEqualsSolid
                              className="mr-[7px]  h-[25px] text-[14px] text-[#939393]"
                              style={{ transition: ".4s" }}
                            />
                          </>
                        )}
                        <span
                          className="bg-transparent w-auto min-w-0 max-w-[246px] h-full flex justify-end items-start overflow-hidden outline-none font-[timer2] font-thin select-none  text-[17px] text-right text-[#939393]"
                          style={{ transition: ".4s" }}
                        >
                          {screen === "" ? (
                            <>{eval(screen)}</>
                          ) : isOperator === true ? (
                            <>{eval(screen.slice(0, -1))}</>
                          ) : (
                            <>{eval(screen)}</>
                          )}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-full h-[35px] flex justify-end items-center"
                        style={{ transition: ".4s" }}
                      >
                        <LiaEqualsSolid
                          className="mr-[7px]  h-[35px] text-[17px]"
                          style={{ transition: ".4s" }}
                        />
                        <span
                          className="bg-transparent w-auto min-w-0 max-w-[246px] h-full flex justify-end items-start overflow-hidden outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
                          style={{ transition: ".4s" }}
                        >
                          {screen === "" ? (
                            <>{eval(screen)}</>
                          ) : isOperator === true ? (
                            <>{eval(screen.slice(0, -1))}</>
                          ) : (
                            <>{eval(screen)}</>
                          )}
                        </span>
                      </div>
                    </>
                  )}
                  {resultFocus === true ? (
                    <>
                      <input
                        className="bg-transparent w-full h-[50px] outline-none font-[timer2] font-thin select-none  text-[17px] text-right text-[#939393]"
                        style={{ transition: ".4s" }}
                        value={screen}
                        onKeyDown={(e) => {
                          console.log(e);
                          if (e.key === "Enter") {
                            result();
                            setResultFocus(true);
                          }
                        }}
                        onChange={(e) => {
                          if (
                            e.nativeEvent.inputType === "deleteContentForward"
                          ) {
                            if (operator.length != 0) {
                              if (
                                screen[screen.length - 1] === "/" ||
                                screen[screen.length - 1] === "X" ||
                                screen[screen.length - 1] === "+" ||
                                screen[screen.length - 1] === "-"
                              ) {
                                console.log("operator");
                                setScreen(screen.slice(0, -1));
                                console.log(screen);
                                setOperator("");
                                setSubScreen(screen.slice(0, -1));
                              } else {
                                setScreen(screen.slice(0, -1));
                                setSubScreen(subScreen.slice(0, -1));
                              }
                            } else {
                              setScreen(screen.slice(0, -1));
                              setSubScreen(screen.slice(0, -1));
                            }
                          } else if (
                            e.nativeEvent.inputType === "deleteContentBackward"
                          ) {
                            if (operator.length != 0) {
                              if (
                                screen[screen.length - 1] === "/" ||
                                screen[screen.length - 1] === "X" ||
                                screen[screen.length - 1] === "+" ||
                                screen[screen.length - 1] === "-"
                              ) {
                                console.log("operator");
                                setScreen(screen.slice(0, -1));
                                console.log(screen);
                                setOperator("");
                                setSubScreen(screen.slice(0, -1));
                              } else {
                                setScreen(screen.slice(0, -1));
                                setSubScreen(subScreen.slice(0, -1));
                              }
                            } else {
                              setScreen(screen.slice(0, -1));
                              setSubScreen(screen.slice(0, -1));
                            }
                          } else {
                            if (
                              e.nativeEvent.data === "+" ||
                              e.nativeEvent.data === "-" ||
                              e.nativeEvent.data === "*" ||
                              e.nativeEvent.data === "/"
                            ) {
                              if (operator.length >= 1) {
                              } else {
                                if (e.nativeEvent.data === "/") {
                                  setOperator("1");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "/");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "*") {
                                  setOperator("2");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "X");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "-") {
                                  setOperator("3");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "-");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "+") {
                                  setOperator("4");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "+");
                                  setSubScreen("");
                                }
                                // setNumberOne(subScreen);
                                // setScreen(screen + "/");
                                // setSubScreen("");
                              }
                            } else if (
                              e.nativeEvent.data === "0" ||
                              e.nativeEvent.data === "1" ||
                              e.nativeEvent.data === "2" ||
                              e.nativeEvent.data === "3" ||
                              e.nativeEvent.data === "4" ||
                              e.nativeEvent.data === "5" ||
                              e.nativeEvent.data === "6" ||
                              e.nativeEvent.data === "7" ||
                              e.nativeEvent.data === "8" ||
                              e.nativeEvent.data === "9"
                            ) {
                              setScreen(screen + e.nativeEvent.data);
                              setSubScreen(subScreen + e.nativeEvent.data);
                              setResultFocus(false);
                            }
                            if (operator.length === 1) {
                              result();
                            }
                          }

                          // fastresult();
                        }}
                      ></input>
                    </>
                  ) : (
                    <>
                      <input
                        className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right  "
                        style={{ transition: ".4s" }}
                        // type="number"
                        value={screen}
                        onKeyDown={(e) => {
                          console.log(e);
                          if (e.key === "Enter") {
                            result();
                            setResultFocus(true);
                          }
                        }}
                        onChange={(e) => {
                          // console.log(typeof e.nativeEvent.data);
                          if (
                            e.nativeEvent.data === "+" ||
                            e.nativeEvent.data === "-" ||
                            e.nativeEvent.data === "*" ||
                            e.nativeEvent.data === "/"
                          ) {
                            if (screen === "") {
                              if (e.nativeEvent.data === "+") {
                                setScreen(screen + "0+");
                              } else if (e.nativeEvent.data === "-") {
                                setScreen(screen + "0-");
                              } else if (e.nativeEvent.data === "*") {
                                setScreen(screen + "0*");
                              } else if (e.nativeEvent.data === "/") {
                                setScreen(screen + "0/");
                              }
                              setIsoperator(true);
                            } else if (isOperator === true) {
                              if (e.nativeEvent.data === "+") {
                                setScreen(screen.slice(0, -1) + "+");
                              } else if (e.nativeEvent.data === "-") {
                                setScreen(screen.slice(0, -1) + "-");
                              } else if (e.nativeEvent.data === "*") {
                                setScreen(screen.slice(0, -1) + "*");
                              } else if (e.nativeEvent.data === "/") {
                                setScreen(screen.slice(0, -1) + "/");
                              }
                              setIsoperator(true);
                            } else {
                            }
                          } else if (
                            e.target.value === "0" ||
                            e.target.value === "1" ||
                            e.target.value === "2" ||
                            e.target.value === "3" ||
                            e.target.value === "4" ||
                            e.target.value === "5" ||
                            e.target.value === "6" ||
                            e.target.value === "7" ||
                            e.target.value === "8" ||
                            e.target.value === "9"
                          ) {
                          }
                          if (screen === "") {
                            setScreen(screen + "0+");
                            setIsoperator(true);
                          } else if (isOperator === true) {
                            setScreen(screen.slice(0, -1) + "+");
                            setIsoperator(true);
                          } else {
                            setScreen(screen + "+");
                            setIsoperator(true);
                          }
                          setScreen(e.target.value);
                        }}
                      ></input>
                    </>
                  )}
                  {/* <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              // value={subScreen}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              // value={numberOne}
              onChange={(e) => setScreen(e.target.value)}
            ></input> */}
                  <div className="h-[120px] w-full "></div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="border-[2px] w-[60px] border-[#5f5f5f] rounded-full"></div>
              </div>
              <div className="w-full   flex flex-col h-[478px] lg:h-[445px] md:h-[445px]  justify-center">
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin select-none ">
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center font-[timer] font-semibold  text-[22px] cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setScreen("");
                      setOperator("");
                      setResultScreen("");
                      setSubScreen("");
                      setResultFocus(false);
                      setDot(false);
                    }}
                  >
                    C
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      console.log(screen[screen.length - 1]);
                      if (
                        screen[screen.length - 2] === "+" ||
                        screen[screen.length - 2] === "-" ||
                        screen[screen.length - 2] === "*" ||
                        screen[screen.length - 2] === "/"
                      ) {
                        setIsoperator(true);
                        setScreen(screen.slice(0, -1));
                      } else {
                        if (screen.length === 1) {
                          setIsoperator(false);
                          setSubScreen("");
                          setScreen(screen.slice(0, -1));
                          setOperator("");
                        } else {
                          setIsoperator(false);
                          setScreen(screen.slice(0, -1));
                        }
                      }
                    }}
                  >
                    <RiDeleteBack2Line className="text-[20px]" />
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer bg-[#ffb545] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (operator.length >= 1) {
                      } else {
                        setScreen(parseFloat(screen) / 100);
                        setSubScreen(parseFloat(subScreen) / 100);
                      }
                    }}
                  >
                    <AiOutlinePercentage className="text-[20px]" />
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0/");
                        setIsoperator(true);
                        setDot(false);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "/");
                        setIsoperator(true);
                        setDot(false);
                      } else {
                        setScreen(screen + "/");
                        setIsoperator(true);
                        setDot(false);
                      }
                    }}
                  >
                    <LiaDivideSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "7");
                      setSubScreen(subScreen + "7");
                      setIsoperator(false);
                    }}
                  >
                    7
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "8");
                      setSubScreen(subScreen + "8");
                      setIsoperator(false);
                    }}
                  >
                    8
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "9");
                      setSubScreen(subScreen + "9");
                      setIsoperator(false);
                    }}
                  >
                    9
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0*");
                        setIsoperator(true);
                        setDot(false);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "*");
                        setIsoperator(true);
                        setDot(false);
                      } else {
                        setScreen(screen + "*");
                        setIsoperator(true);
                        setDot(false);
                      }
                    }}
                  >
                    <RxCross2 className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "4");
                      setSubScreen(subScreen + "4");
                      setIsoperator(false);
                    }}
                  >
                    4
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "5");
                      setSubScreen(subScreen + "5");
                      setIsoperator(false);
                    }}
                  >
                    5
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "6");
                      setSubScreen(subScreen + "6");
                      setIsoperator(false);
                    }}
                  >
                    6
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0-");
                        setIsoperator(true);
                        setDot(false);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "-");
                        setIsoperator(true);
                        setDot(false);
                      } else {
                        setScreen(screen + "-");
                        setIsoperator(true);
                        setDot(false);
                      }
                    }}
                  >
                    <LiaMinusSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "1");
                      setSubScreen(subScreen + "1");
                      setIsoperator(false);
                    }}
                  >
                    1
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "2");
                      setSubScreen(subScreen + "2");
                      setIsoperator(false);
                    }}
                  >
                    2
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "3");
                      setSubScreen(subScreen + "3");
                      setIsoperator(false);
                    }}
                  >
                    3
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0+");
                        setIsoperator(true);
                        setDot(false);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "+");
                        setIsoperator(true);
                        setDot(false);
                      } else {
                        setScreen(screen + "+");
                        setIsoperator(true);
                        setDot(false);
                      }
                    }}
                  >
                    <LiaPlusSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setToggle(!toggle);
                      console.log(toggle);
                    }}
                  >
                    <MdDarkMode className="text-[20px]" />
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "0");
                      setSubScreen(subScreen + "0");
                      setIsoperator(false);
                    }}
                  >
                    0
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#ffd18b] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (dot === true) {
                      } else {
                        setResultFocus(false);
                        setScreen(screen + ".");
                        setSubScreen(subScreen + ".");
                        setIsoperator(false);
                        setDot(true);
                      }
                    }}
                  >
                    .
                  </div>
                  <div
                    className="neomorphism  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#ffb545] hover:bg-[#ffd18b] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      result();
                      setResultFocus(true);
                    }}
                  >
                    <LiaEqualsSolid className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="neomorphism w-[200px] h-[200px]  rounded-full "></div> */}
          </div>
        </>
      ) : (
        <>
          <div
            className="font-bold bg-[#262626] text-white w-full h-[calc(100vh-60px)] lg:h-[100vh] md:h-[100vh] flex justify-center items-center"
            style={{ transition: ".4s" }}
          >
            {/* <button >clickme</button> */}
            <div
              className="darkneo rounded-0 lg:rounded-[30px] md:rounded-[30px] w-full lg:w-[340px] md:w-[340px] h-[calc(100vh-60px)] lg:h-[calc(100vh-100px)] md:h-[calc(100vh-100px)]"
              style={{ transition: ".4s" }}
            >
              <div className=" h-[calc(100%-478px)] lg:h-[calc(100%-445px)] md:h-[calc(100%-445px)] w-full flex justify-center items-center px-[24px] lg:px-[16px] md:px-[16px] ">
                <div
                  className="darkneoinset w-full h-[calc(100%-50px)] rounded-3xl p-[20px] flex flex-col-reverse"
                  style={{ transition: ".4s" }}
                >
                  {/* <span>{resultScreen}</span>{" "} */}
                  {resultFocus === false ? (
                    <>
                      <div
                        className="w-full h-[25px] flex justify-end items-center"
                        style={{ transition: ".4s" }}
                      >
                        {subScreen.length === 0 && operator.length === 0 ? (
                          <></>
                        ) : (
                          <>
                            <LiaEqualsSolid
                              className="mr-[7px]  h-[25px] text-[14px] text-[#939393]"
                              style={{ transition: ".4s" }}
                            />
                          </>
                        )}
                        <span
                          className="bg-transparent w-auto min-w-0 max-w-[246px] h-full flex justify-end items-start overflow-hidden outline-none font-[timer2] font-thin select-none  text-[17px] text-right text-[#939393]"
                          style={{ transition: ".4s" }}
                        >
                          {screen === "" ? (
                            <>{eval(screen)}</>
                          ) : isOperatorBefore === true ? (
                            <>{eval(screen.slice(0, -1))}</>
                          ) : (
                            <>
                              {eval(screen) === Infinity ? (
                                <>
                                  <LiaInfinitySolid />
                                </>
                              ) : (
                                <>{eval(screen)}</>
                              )}
                            </>
                          )}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-full h-[35px] flex justify-end items-center"
                        style={{ transition: ".4s" }}
                      >
                        <LiaEqualsSolid
                          className="mr-[7px]  h-[35px] text-[17px]"
                          style={{ transition: ".4s" }}
                        />
                        <span
                          className="bg-transparent w-auto min-w-0 max-w-[246px] h-full flex justify-end items-start overflow-hidden outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
                          style={{ transition: ".4s" }}
                        >
                          {screen === "" ? (
                            <>{eval(screen)}</>
                          ) : isOperatorBefore === true ? (
                            <>{eval(screen.slice(0, -1))}</>
                          ) : (
                            <>
                              {eval(screen) === Infinity ? (
                                <>
                                  <LiaInfinitySolid />
                                </>
                              ) : (
                                <>{eval(screen)}</>
                              )}
                            </>
                          )}
                        </span>
                      </div>
                    </>
                  )}
                  {resultFocus === true ? (
                    <>
                      <input
                        className="bg-transparent w-full h-[50px] outline-none font-[timer2] font-thin select-none  text-[17px] text-right text-[#939393]"
                        style={{ transition: ".4s" }}
                        value={screen}
                        onKeyDown={(e) => {
                          console.log(e);
                          if (e.key === "Enter") {
                            result();
                            setResultFocus(true);
                          }
                        }}
                        onChange={(e) => {
                          if (
                            e.nativeEvent.inputType === "deleteContentForward"
                          ) {
                            if (operator.length != 0) {
                              if (
                                screen[screen.length - 1] === "/" ||
                                screen[screen.length - 1] === "*" ||
                                screen[screen.length - 1] === "+" ||
                                screen[screen.length - 1] === "-"
                              ) {
                                console.log("operator");
                                setScreen(screen.slice(0, -1));
                                console.log(screen);
                                setOperator("");
                                setSubScreen(screen.slice(0, -1));
                              } else {
                                setScreen(screen.slice(0, -1));
                                setSubScreen(subScreen.slice(0, -1));
                              }
                            } else {
                              setScreen(screen.slice(0, -1));
                              setSubScreen(screen.slice(0, -1));
                            }
                          }
                          //  else if (
                          //   e.nativeEvent.inputType === "deleteContentBackward"
                          // ) {
                          //   if (operatorCount != 0) {
                          //     if (
                          //       screen[screen.length - 2] === "/" ||
                          //       screen[screen.length - 2] === "*" ||
                          //       screen[screen.length - 2] === "+" ||
                          //       screen[screen.length - 2] === "-"
                          //     ) {
                          //       // console.log("operator");
                          //       setScreen(screen.slice(0, -1));
                          //       // console.log(screen);
                          //       // setOperator("");
                          //       // setSubScreen(screen.slice(0, -1));
                          //     } else {
                          //       setScreen(screen.slice(0, -1));
                          //       // setSubScreen(subScreen.slice(0, -1));
                          //     }
                          //   } else {
                          //     setScreen(screen.slice(0, -1));
                          //     // setSubScreen(screen.slice(0, -1));
                          //   }
                          // }
                          else {
                            if (
                              e.nativeEvent.data === "+" ||
                              e.nativeEvent.data === "-" ||
                              e.nativeEvent.data === "*" ||
                              e.nativeEvent.data === "/"
                            ) {
                              if (operator.length >= 1) {
                              } else {
                                if (e.nativeEvent.data === "/") {
                                  setOperator("1");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "/");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "*") {
                                  setOperator("2");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "X");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "-") {
                                  setOperator("3");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "-");
                                  setSubScreen("");
                                } else if (e.nativeEvent.data === "+") {
                                  setOperator("4");
                                  setNumberOne(subScreen);
                                  setScreen(screen + "+");
                                  setSubScreen("");
                                }
                                // setNumberOne(subScreen);
                                // setScreen(screen + "/");
                                // setSubScreen("");
                              }
                            } else if (
                              e.nativeEvent.data === "0" ||
                              e.nativeEvent.data === "1" ||
                              e.nativeEvent.data === "2" ||
                              e.nativeEvent.data === "3" ||
                              e.nativeEvent.data === "4" ||
                              e.nativeEvent.data === "5" ||
                              e.nativeEvent.data === "6" ||
                              e.nativeEvent.data === "7" ||
                              e.nativeEvent.data === "8" ||
                              e.nativeEvent.data === "9"
                            ) {
                              setScreen(screen + e.nativeEvent.data);
                              setSubScreen(subScreen + e.nativeEvent.data);
                              setResultFocus(false);
                            }
                            if (operator.length === 1) {
                              result();
                            }
                          }

                          // fastresult();
                        }}
                      ></input>
                    </>
                  ) : (
                    <>
                      <input
                        className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right  "
                        style={{ transition: ".4s" }}
                        value={screen}
                        onKeyDown={(e) => {
                          console.log(e);
                          if (e.key === "Enter") {
                            result();
                            setResultFocus(true);
                          }
                        }}
                        onChange={(e) => {
                          console.log(e);
                          if (
                            e.nativeEvent.data === "+" ||
                            e.nativeEvent.data === "-" ||
                            e.nativeEvent.data === "*" ||
                            e.nativeEvent.data === "/"
                          ) {
                            if (isOperatorBefore === true) {
                              // Do Nothing for now
                              if (e.nativeEvent.data === "/") {
                                setScreen(
                                  screen.slice(0, -1) + e.nativeEvent.data
                                );
                              }
                              if (e.nativeEvent.data === "*") {
                                setScreen(
                                  screen.slice(0, -1) + e.nativeEvent.data
                                );
                              }
                              if (e.nativeEvent.data === "-") {
                                setScreen(
                                  screen.slice(0, -1) + e.nativeEvent.data
                                );
                              }
                              if (e.nativeEvent.data === "+") {
                                setScreen(
                                  screen.slice(0, -1) + e.nativeEvent.data
                                );
                              }
                            } else {
                              if (e.nativeEvent.data === "/") {
                                // setOperator("1");
                                setOperatorCount(parseInt(operatorCount) + 1);
                                setIsoperatorBefore(true);
                                setScreen(screen + e.nativeEvent.data);
                              } else if (e.nativeEvent.data === "*") {
                                setOperatorCount(parseInt(operatorCount) + 1);
                                setIsoperatorBefore(true);
                                setScreen(screen + e.nativeEvent.data);
                              } else if (e.nativeEvent.data === "-") {
                                setOperatorCount(parseInt(operatorCount) + 1);
                                setIsoperatorBefore(true);
                                setScreen(screen + e.nativeEvent.data);
                              } else if (e.nativeEvent.data === "+") {
                                setOperatorCount(parseInt(operatorCount) + 1);
                                setIsoperatorBefore(true);
                                setScreen(screen + e.nativeEvent.data);
                              }
                            }
                          } else if (
                            e.nativeEvent.data === "0" ||
                            e.nativeEvent.data === "1" ||
                            e.nativeEvent.data === "2" ||
                            e.nativeEvent.data === "3" ||
                            e.nativeEvent.data === "4" ||
                            e.nativeEvent.data === "5" ||
                            e.nativeEvent.data === "6" ||
                            e.nativeEvent.data === "7" ||
                            e.nativeEvent.data === "8" ||
                            e.nativeEvent.data === "9" ||
                            e.nativeEvent.data === "."
                          ) {
                            setScreen(screen + e.nativeEvent.data);
                            setIsoperatorBefore(false);
                            // setSubScreen(subScreen + e.nativeEvent.data);
                            setResultFocus(false);
                          } else if (
                            e.nativeEvent.inputType === "deleteContentBackward"
                          ) {
                            if (
                              screen[screen.length - 2] === "/" ||
                              screen[screen.length - 2] === "*" ||
                              screen[screen.length - 2] === "+" ||
                              screen[screen.length - 2] === "-"
                            ) {
                              setIsoperatorBefore(true);
                              setScreen(e.target.value);
                              // checkInputScreenStart();
                            }
                            // else if (
                            //   screen[0] === "/" ||
                            //   screen[0] === "*" ||
                            //   screen[0] === "+" ||
                            //   screen[0] === "-"
                            // ) {
                            //   setScreen("0");
                            // }
                            else {
                              setIsoperatorBefore(false);
                              setScreen(e.target.value);
                            }
                            // setScreen(e.target.value);
                            checkInputScreenStart();
                          }
                        }}
                      ></input>
                    </>
                  )}
                  {/* <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              // value={subScreen}
              onChange={(e) => setScreen(e.target.value)}
            ></input>
            <input
              className="bg-transparent w-full h-[60px] outline-none font-[timer2] font-thin select-none  text-[22px] text-right"
              // value={numberOne}
              onChange={(e) => setScreen(e.target.value)}
            ></input> */}
                  <div className="h-[120px] w-full "></div>
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="border-[2px] w-[60px] border-[#5f5f5f] rounded-full"></div>
              </div>
              <div className="w-full   flex flex-col h-[478px] lg:h-[445px] md:h-[445px]  justify-center">
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin select-none ">
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center font-[timer] font-semibold  text-[22px] cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setScreen("");
                      setOperator("");
                      setResultScreen("");
                      setSubScreen("");
                      setResultFocus(false);
                      setDot(false);
                    }}
                  >
                    C
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      console.log(screen[screen.length - 1]);
                      if (operator.length != 0) {
                        if (
                          screen[screen.length - 1] === "/" ||
                          screen[screen.length - 1] === "X" ||
                          screen[screen.length - 1] === "+" ||
                          screen[screen.length - 1] === "-"
                        ) {
                          console.log("operator");
                          setScreen(screen.slice(0, -1));
                          console.log(screen);
                          setOperator("");
                          setSubScreen(screen.slice(0, -1));
                        } else if (screen[screen.length - 1] === ".") {
                          console.log("found  ");
                          setDot(false);
                          setScreen(screen.slice(0, -1));
                          setSubScreen(subScreen.slice(0, -1));
                        } else {
                          setScreen(screen.slice(0, -1));
                          setSubScreen(subScreen.slice(0, -1));
                        }
                      } else {
                        if (screen[screen.length - 1] === ".") {
                          console.log("found  ");
                          setDot(false);
                          setScreen(screen.slice(0, -1));
                          setSubScreen(subScreen.slice(0, -1));
                        } else {
                          setScreen(screen.slice(0, -1));
                          setSubScreen(screen.slice(0, -1));
                        }
                      }
                    }}
                  >
                    <RiDeleteBack2Line className="text-[20px]" />
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer bg-[#424242] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (operator.length >= 1) {
                      } else {
                        setScreen(parseFloat(screen) / 100);
                        setSubScreen(parseFloat(subScreen) / 100);
                      }
                    }}
                  >
                    <AiOutlinePercentage className="text-[20px]" />
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0/");
                        setIsoperator(true);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "/");
                        setIsoperator(true);
                      } else {
                        setScreen(screen + "/");
                        setIsoperator(true);
                      }
                    }}
                  >
                    <LiaDivideSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "7");
                      setSubScreen(subScreen + "7");
                      setIsoperator(false);
                    }}
                  >
                    7
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "8");
                      setSubScreen(subScreen + "8");
                      setIsoperator(false);
                    }}
                  >
                    8
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "9");
                      setSubScreen(subScreen + "9");
                      setIsoperator(false);
                    }}
                  >
                    9
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0*");
                        setIsoperator(true);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "*");
                        setIsoperator(true);
                      } else {
                        setScreen(screen + "*");
                        setIsoperator(true);
                      }
                    }}
                  >
                    <RxCross2 className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "4");
                      setSubScreen(subScreen + "4");
                      setIsoperator(false);
                    }}
                  >
                    4
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "5");
                      setSubScreen(subScreen + "5");
                      setIsoperator(false);
                    }}
                  >
                    5
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "6");
                      setSubScreen(subScreen + "6");
                      setIsoperator(false);
                    }}
                  >
                    6
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0-");
                        setIsoperator(true);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "-");
                        setIsoperator(true);
                      } else {
                        setScreen(screen + "-");
                        setIsoperator(true);
                      }
                    }}
                  >
                    <LiaMinusSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "1");
                      setSubScreen(subScreen + "1");
                      setIsoperator(false);
                    }}
                  >
                    1
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "2");
                      setSubScreen(subScreen + "2");
                      setIsoperator(false);
                    }}
                  >
                    2
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "3");
                      setSubScreen(subScreen + "3");
                      setIsoperator(false);
                    }}
                  >
                    3
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (screen === "") {
                        setScreen(screen + "0+");
                        setIsoperator(true);
                      } else if (isOperator === true) {
                        setScreen(screen.slice(0, -1) + "+");
                        setIsoperator(true);
                      } else {
                        setScreen(screen + "+");
                        setIsoperator(true);
                      }
                    }}
                  >
                    <LiaPlusSolid className="text-[20px]" />
                  </div>
                </div>
                <div className="flex justify-evenly items-center my-[10px] font-[timer2] font-thin">
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px] rounded-full flex justify-center items-center text-[22px] hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => setToggle(!toggle)}
                  >
                    <MdWbSunny className="text-[20px]" />
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      setResultFocus(false);
                      setScreen(screen + "0");
                      setSubScreen(subScreen + "0");
                      setIsoperator(false);
                    }}
                  >
                    0
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center text-[22px]  hover:bg-[#0f0f0f] cursor-pointer select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      if (dot === true) {
                      } else {
                        setResultFocus(false);
                        setScreen(screen + ".");
                        setSubScreen(subScreen + ".");
                        setIsoperator(false);
                        setDot(true);
                      }
                    }}
                  >
                    .
                  </div>
                  <div
                    className="darkneo  w-[70px] lg:w-[65px] md:w-[65px] h-[70px] lg:h-[65px] md:h-[65px]  rounded-full flex justify-center items-center cursor-pointer bg-[#424242] hover:bg-[#0f0f0f] select-none"
                    style={{ transition: ".3s" }}
                    onClick={() => {
                      result();
                      setResultFocus(true);
                    }}
                  >
                    <LiaEqualsSolid className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="neomorphism w-[200px] h-[200px]  rounded-full "></div> */}
          </div>
        </>
      )}
    </>
  );
}

export default App;
