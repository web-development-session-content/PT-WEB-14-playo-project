import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  setPersistence,
  browserSessionPersistence,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
function loginFunction() {
  document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // navbar popup functionality
  document.querySelector("#giveOTP").style.visibility = "hidden";

  const open = document.getElementById("nav2div");
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById("close");

  open.addEventListener("click", () => {
    modal_container.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });

  //If user is logged in
  login();

  function login() {
    console.log("test");
    let loginStatus = localStorage.getItem("login");
    console.log(typeof loginStatus);
    if (loginStatus === "true") {
      let ph = localStorage.getItem("mobileNumber");
      console.log(ph);
      document.querySelector("#myBtn").textContent = ph;
      open.addEventListener("click", () => {
        modal_container.classList.remove("show");
        window.location.href = "login_profile.html";
      });
    } else {
      return false;
    }
  }
  open.addEventListener("click", () => {
    if (open.children[1].textContent != "Login/Signup") {
      modal_container.classList.remove("show");
      window.location.href = "login_profile.html";
      login();
    }
  });
  //When user add mobile number to it
  document.querySelector("#sendOTP").addEventListener("click", () => {
    let mobNo = document.querySelector("#input").value;
    if (mobNo.length != 10) {
      alert("Please Give correct Mobile Number");
    } else {
      localStorage.setItem("mobileNumber", mobNo);
      // modal_container.style.visibility = "hidden";
      // document.querySelector(".loginp")
      document.querySelector(
        "#entermobile"
      ).textContent = `We have sent an OTP to ${mobNo}`;
      document.querySelector("#rem1").style.visibility = "hidden";
      document.querySelector("#rem2").style.visibility = "hidden";
      document.querySelector("#countryDrop").style.visibility = "hidden";
      document.querySelector("#input").value = null;
      document.querySelector("#input").placeholder = "Enter OTP";
      document.querySelector("input").style.textAlign = "center";
      document.querySelector("#sendOTP").style.visibility = "hidden";
      document.querySelector("#giveOTP").style.visibility = "visible";

      document.querySelector("#giveOTP").addEventListener("click", () => {
        let otp = document.querySelector("input").value;
        if (otp == "123456") {
          // alert("success");
          modal_container.classList.remove("show");
          document.querySelector("#myBtn").textContent = mobNo;
          localStorage.setItem("login", true);

          open.addEventListener("click", () => {
            modal_container.classList.remove("show");
            window.location.href = "login_profile.html";
            login();
          });
        } else {
          alert("Wrong OTP");
          document.querySelector(
            "#entermobile"
          ).textContent = `Enter Your mobile number`;
          document.querySelector("#rem1").style.visibility = "visible";
          document.querySelector("#rem2").style.visibility = "visible";
          document.querySelector("#countryDrop").style.visibility = "visible";
          document.querySelector("#input").value = null;
          document.querySelector("#input").placeholder = "Enter Mobile Number";
          document.querySelector("#sendOTP").style.visibility = "visible";
          document.querySelector("#giveOTP").style.visibility = "hidden";
        }
      });
    }
  });

  const firebaseConfig = {
    apiKey: "AIzaSyA80ptK-lSK3imWlb-UAVeg59g2Xkii9Vk",
    authDomain: "new-firebase-10f9b.firebaseapp.com",
    projectId: "new-firebase-10f9b",
    storageBucket: "new-firebase-10f9b.appspot.com",
    messagingSenderId: "738490478953",
    appId: "1:738490478953:web:8eabfac4318e6c51d8cdf8",
    measurementId: "G-D8SQSPR6BC",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
  const provider = new GoogleAuthProvider();

  var googleButton = document.querySelector("#sign-in-google");
  googleButton.addEventListener("click", () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(result);
        document.getElementById("myBtn").textContent = user.displayName;
        document.getElementById("modal_container").style.display = "none";

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email);
        console.log(errorMessage);
        // ...
      });
  });
}
export default loginFunction;
