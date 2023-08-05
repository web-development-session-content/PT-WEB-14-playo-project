import footer from "../components/footer.js";

let footerr = document.querySelector("#footer");
footerr.innerHTML = footer();
//Login and pop up full functionalities start

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
    ).textContent = `We have sent an OTP to ${mobNo}, OTP is 1234`;
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

//Login and pop up full functionalities end

//Filtering array of objects from the data base start (With Debouncing Feature)

//=======================================================================>

//Selectiong Html Content

let inputTag = document.querySelector("#search");
let showDiv = document.querySelector("#show-results-div");

//Search Function Code
async function searchLocation(d) {
  if (d <= 2 || d == "") {
    return false;
  }

  let response = await fetch(
    "https://api.npoint.io/29f9168a0c1c4c9c39e5/bookVenue"
  );
  let data = await response.json();
  console.log(data);
  //Writing Function for filter data based on search results

  let filterData = data.filter((el) => {
    let regex = new RegExp(`^${d}`, "gi");
    return el.location.match(regex) || el.name.match(regex);
  });

  console.log(filterData);
  apprndData(filterData);
}

//===========================================================================>

let id;

let debounceData = decounce(fetchFunction, 500);

const searchVenue = document.querySelector("#search");
searchVenue.addEventListener("keyup", (event) => {
  debounceData(event.target.value);
});

function decounce(func, duration = 500) {
  let timer;
  return (data) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(data);
    }, duration);
  };
}

//Creating fetch Function
async function fetchFunction(data) {
  if (data == "") {
    document.querySelector("#show-results-div").style.visibility = "hidden";
    return;
  }
  searchLocation(data);
}

//Append Data Function
function apprndData(data) {
  document.querySelector("#show-results-div").innerHTML = "";

  if (data.length >= 1) {
    //Map Data
    data.map((el) => {
      document.querySelector("#show-results-div").style.visibility = "visible";

      //Destructuring of objects
      let { location, name } = el;
      console.log(location);

      //Creating Elements
      let mainDiv = document.createElement("div");
      let img = document.createElement("img");
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");

      let imgsrc =
        "data:image/jpeg;base64,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";

      //set value to it
      img.src = imgsrc;
      span1.textContent = location;
      span2.textContent = name;

      //Append data
      mainDiv.append(img, span1, span2);
      document.querySelector("#show-results-div").append(mainDiv);

      mainDiv.addEventListener("click", () => {
        window.location.href = "venueDetail.html";
        let arr = [];
        arr.push(el);
        localStorage.setItem("venueDetails", JSON.stringify(arr));
      });
    });

    inputTag.addEventListener("keyup", (event) => {
      //console.log("Test");
      if (event.key == "Enter") {
        window.location.href = "venueDetails.html";
        localStorage.setItem("venueDetails", JSON.stringify(data));
      }
    });
  } else {
    document.querySelector("#show-results-div").style.visibility = "visible";

    //Creating Elements
    let mainDiv = document.createElement("div");
    let img = document.createElement("img");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    let imgsrc =
      "data:image/jpeg;base64,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";

    //set value to it
    img.src = imgsrc;
    span2.textContent = "Not found!";

    //Append data
    mainDiv.append(img, span2);
    document.querySelector("#show-results-div").append(mainDiv);
  }
}

//Filtering array of objects from the data base End (With Debouncing Feature)
