//Working on quotes api call==================>

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let quote = document.querySelector("#quote");
    quote.textContent =
      data[Math.round(Math.random() * (data.length - 1))].text;
    console.log(data);
  });

//Done with quotes api quotes api call==================>

// By Clicking static blog content==================>

// document.querySelector("#first-blog").addEventListener("click", () => {
//   window.open(
//     "https://blog.playo.co/humansofplayo-how-to-submit-a-story/",
//     "_blank"
//   );
// });

// document.querySelector("#sec-blog").addEventListener("click", () => {
//   window.open(
//     "https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/",
//     "_blank"
//   );
// });

// By Clicking static blog content End==================>

//Api call for Sports news content start==================>

import appendNews from "../components/appendnews.js";

//Edit
function fetchNews() {
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let appendlocation = document.querySelector("#dynamic-news");

      if (res.status == "error") {
        // appendlocation.innerHTML = res.message;
      } else {
        appendlocation.innerHTML = "";
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

fetchNews();

// Api call for Sports news content end==================>

//Api call for health news start==================>

document.querySelector("#health-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#health-news").style.backgroundColor = "white";
  document.querySelector("#health-news").style.borderBottom =
    "3px solid #548A2F";

  let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
  let bloglink_health = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=12&apiKey=${apiKey_health}`;

  fetch(bloglink_health)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//Api call for health news End ========================>

//If user click one sports button start ========================>

document.querySelector("#sports-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#sports-news").style.backgroundColor = "white";
  document.querySelector("#sports-news").style.borderBottom =
    "3px solid #548A2F";
  //Api work ==>
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//If user click one sports button end==========================>

//If user click one sports button start ========================>

document.querySelector("#cricket-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#cricket-news").style.backgroundColor = "white";
  document.querySelector("#cricket-news").style.borderBottom =
    "3px solid #548A2F";

  //Api work ==>
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/everything?q=cricket&sortBy=popularity&pageSize=10&language=en&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//If user click one sports button end==========================>

//If user click one sports button start ========================>

document.querySelector("#football-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#football-news").style.backgroundColor = "white";
  document.querySelector("#football-news").style.borderBottom =
    "3px solid #548A2F";

  //Api work ==>
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/everything?q=football&sortBy=popularity&pageSize=10&language=en&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//If user click one sports button end==========================>

//If user click one sports button start ========================>

document.querySelector("#tennis-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#tennis-news").style.backgroundColor = "white";
  document.querySelector("#tennis-news").style.borderBottom =
    "3px solid #548A2F";

  //Api work ==>
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/everything?q=tennis&sortBy=popularity&pageSize=10&language=en&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//If user click one sports button end==========================>

//If user click one sports button start ========================>

document.querySelector("#quize-news").addEventListener("click", () => {
  const cat = [
    "sports-news",
    "health-news",
    "cricket-news",
    "football-news",
    "tennis-news",
    "quize-news",
  ];

  cat.forEach((el) => {
    document.getElementById(el).style.backgroundColor = "#F3F3F2";
    document.getElementById(el).style.borderBottom = "none";
  });

  document.querySelector("#quize-news").style.backgroundColor = "white";
  document.querySelector("#quize-news").style.borderBottom =
    "3px solid #548A2F";

  //Api work ==>
  let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
  let bloglink = `https://newsapi.org/v2/everything?q=quize&sortBy=popularity&pageSize=10&language=en&apiKey=${apiKey_blog}`;
  fetch(bloglink)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      let appendlocation = document.querySelector(".dynamic-news");
      appendlocation.innerHTML = "";
      if (res.status == "error") {
        appendlocation.innerHTML = res.message;
      } else {
        appendNews(res.articles, appendlocation);
      }
    })
    .catch((e) => {
      console.log(e);
    });
});

//If user click one sports button end==========================>

//Search Feature in news api start================================>

document.querySelector("#search").addEventListener("keyup", (event) => {
  //console.log(event);
  let value = document.querySelector("#search").value;

  if (value == "" || value == undefined || value == null) {
    fetchNews();
    return false;
  }

  if (event.key == "Enter") {
    console.log("test");
    let search_key = "b140754e118c4b63a8e580772d4446a1";
    let search_link = `https://newsapi.org/v2/everything?q=${value}&sortBy=popularity&pageSize=10&language=en&apiKey=${search_key}`;

    fetch(search_link)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.status == "error") {
          document.querySelector(".dynamic-news").textContent = res.message;
        } else if (res.articles.length == 0) {
          document.querySelector(".dynamic-news").textContent =
            "No search result found!";
        } else {
          let appendlocation = document.querySelector(".dynamic-news");
          if (res.status == "error") {
            appendlocation.innerHTML = res.message;
          } else {
            appendNews(res.articles, appendlocation);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });

    // console.log("Test");
  }
});

//Search Feature in news api End================================>
