// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);
// 1.to open new window and close it
// let url = "https://www.google.com";
// let features = "height=500,width=500";
// let btn = document.querySelector(".btm");
// let btn1 = document.querySelector(".btm1");
// let win;
// btn.addEventListener("click", function () {
//   //   window.open(url,name, features);
//   win = window.open(url, "Google", features);
// });
// btn1.addEventListener("click", function () {
//   win.close(); //to close
// });

// <!-- 2.time out and time interval function -->
// settimeout will execute function after specified time
// let timeee = setTimeout(func, 5000);
// function func() {
//   alert("HI");
// }
// if(some condn){
//     clearTimeout(timeee);
// }
//
// setinterval will repeat the work after specified time interval
// let btn = document.querySelector(".btn");
// var t1 = setInterval(fun, 2000);
// function fun() {
//   console.log("jldjlf");
// }
// btn.addEventListener("click", function () {
//   clearInterval(t1);
// });

// 3.location object--used to redirect url, info about url
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);
// function fun() {
//   //   window.location = "https://www.google.com";
//   //   location.href = "https://www.google.com";
//   location.assign("https://www.google.com"); //it will have btn to go back as it saves history
//   location.replace("https://www.google.com"); //it wont have btn to go back
// }
