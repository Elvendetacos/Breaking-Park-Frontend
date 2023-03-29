// const { over } = require("stompjs");
// const SockJS = require("sockjs-client");
// const fetch = require("cross-fetch")
// var stompClient = null;
// var data2 = null;
// var subscription = null;

// let hola = null
// const onError = (err) => {
//   console.log(err);
// };
// const connect = () => {
//   let Sock = new SockJS("http://localhost:8080/ws");
//   stompClient = over(Sock);
//   console.log("FIRST CONNECTION");
//   console.log(stompClient.connected);
//   stompClient.connect({}, onConnected, onError);
// };
// const onConnected = () => {
//   console.log(data2)
//   var createUser = {
//     name: "alan george trinidad cruz",
//     email: "uwCrustas@gmail.com",
//     password: "yuiu5678",
//     session_id: data2.sessionId
//   };

//   stompClient.send("/ag/signup", {}, JSON.stringify(createUser));
//   console.log("SECOND CONNECTION");
//   console.log(stompClient.connected);

//   subscription = stompClient.subscribe(
//     "/response/" + data2.sessionId + "/private",
//     onMessageReceived
//   );
//   subscription = stompClient.subscribe("/exUsers", onMessageReceived);
  
// };

// const onMessageReceived = (payload) => {
//   var payloadData = JSON.parse(payload.body);
//   console.log("THREE CONNECTION");
//   console.log(payloadData);
// };

// const getSession = () => {
//   //const credentials = `${"admin"}:${"admin"}`;
//   //const encodedCredentials = Buffer.from(credentials).toString("base64");
//   fetch("http://localhost:8080/token", {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       email: "admin@admin.com",
//       password: "admin"
//     }),
//   })
//     .then((response) =>  console.log(response.headers))
//     .then((data) => data2 = data)
//     .catch((error) => console.error("Error:", error));
//     //const uwu = data2.get('Content-Type')
//     //console.log(hola)
//     //console.log(uwu)

//   fetch("http://localhost:8080/session/session-id", {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer yJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2ODI2Njk4NzMsIm5hbWUiOiJhZG1pbiJ9.Hm5wp-tOMumyWHtnIJPVMGNiyF2AyZ8gvxJBwSHu_Kc",
//     }e
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       data2 = data;
//       connect();
//     })
//     .catch((error) => console.error("Error:", error));
// };

// getSession();