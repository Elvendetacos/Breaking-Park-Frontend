//import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SockJS from "sockjs-client";

var stompClient = null;

function SingIn() {

    //const URI = "http://ec2-100-24-11-98.compute-1.amazonaws.com:8080"

    const getSession = () => {

       /* var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": "admin@admin.com",
            "password": "admin"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://ec2-100-24-11-98.compute-1.amazonaws.com:8080/token", requestOptions)
            .then(response => {
                console.log(response.headers.get("Authorization"))
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error));*/
        //const credentials = `${"admin"}:${"admin"}`;
        //const encodedCredentials = Buffer.from(credentials).toString("base64");
        /*fetch("http://localhost:8080/token", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: "admin@admin.com",
            password: "admin"
          }),
        })
          .then((response) =>  console.log(response.headers))
          .then((data) => data2 = data)
          .catch((error) => console.error("Error:", error));*/
          //const uwu = data2.get('Content-Type')
          //console.log(hola)
          //console.log(uwu)
      
          /*var raw = "";

          var requestOptions = {
            method: 'GET',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2ODI2OTMyMjYsIm5hbWUiOiJhZG1pbiJ9.LwwbZKzhUNhF4oAIEZFdPPu06V0CM47yFnZ9q4snLfA"
            },*/
            //body: raw,
            //redirect: 'follow'
          /*};
          
          fetch("http://ec2-100-24-11-98.compute-1.amazonaws.com:8080/session/session-id", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));*/
      };

    return (
        <>
        <div className="grid w-full lg:grid-cols-12 lg:gap-8 h-[110vh] bg-[#171B26] ">
            <div className="lg:col-start-4 lg:col-span-6 lg:gap-10 col-span-4 col-start-2 flex justify-center items-center h-[80%] mt-auto mb-auto">
            <div className="bg-[#345262] p-2 rounded-lg text-while lg:col-start-4 lg:col-span-6 gap-4 ml-[16px] mr-[16px]">
            <div>
                <p className="text-[30px] text-center text-white gap-4 m-6 px6">REGISTRATE</p>
            </div>
            <div className="">
                <form className="lg:col-start-2 lg:col-span-4 ">
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">NOMBRE COMPLETO: </label>
                <input className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none"></input>
                </div>
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">CORREO: </label>
                <input className="bg-[#345262] text-base w-[100%] border-b py-1 focus:outline-none " type="text"></input>
                </div>
                <div className="relative m-3">
                <label className="text-xl text-white top-1 cursor-text">CONTRASEÑA: </label>
                <input className="bg-[#345262] w-[100%] text-base border-b py-1 focus:outline-none"></input>
                </div>
                <div className="">
                    <div className="text-white bg-[#51889D] text-lg text-center rounded-lg m-5 lg:col-start-6 lg:col-span-7">
                       <button>Resgistrar</button>
                   </div>
                </div>
                <div>
                    <p className="text-white text-[12px] text-center m-1">
                    </p>
                </div>
            </form>
            </div>
        </div>
            </div>
            
        </div>
        </>
    );
}

export default SingIn;