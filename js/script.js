window.addEventListener("DOMContentLoaded", () => {
    let now = new Date()
  console.log(now.getTime());
    
  // Tab functions
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParents = document.querySelector(".tabheader__items");

  function hideTabContents() {
    tabContents.forEach((tabContent) => {
      tabContent.classList.add("hide");
      tabContent.classList.remove("show");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContents(index = 0) {
    tabContents[index].classList.add("show", "fade");
    tabContents[index].classList.remove("hide");
    tabs[index].classList.add("tabheader__item_active");
  }

  hideTabContents();
  showTabContents();

  tabParents.addEventListener("click", (event) => {
    let target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, inn) => {
        if (target === tab) {
          hideTabContents();
          showTabContents(inn);
        }
      });
    }
  });

  // Loader function

  const loaderWrapper = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 5000);

  // Timer functions

  const deadline = "2025-05-12";

  function getTimeRemaing(endTime) {
    let days, hours, minuts, seconds;
    const time = Date.parse(endTime) - Date.parse(new Date());

    if (time <= 0) {
        days=0
        hours=0
        minuts=0
        seconds=0
    } else {
      days = Math.floor(time / (1000 * 60 * 60 * 24));
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      minuts = Math.floor((time / (100 * 60)) % 60);
      seconds = Math.floor((time / 100) % 60);
    }

    return {
      totalTime: time,
      days,
      hours,
      minuts,
      seconds,
    };
  }

  function farmatNumber(number) {
    if (number >= 0 && number < 10) {
      return `0${number}`;
    } else return number;
  }

  function setClock(selctor, endTime) {
    const timer = document.querySelector(selctor);
    (days = timer.querySelector("#days")),
      (hours = timer.querySelector("#hours")),
      (minuts = timer.querySelector("#minutes")),
      (seconds = timer.querySelector("#seconds")),
      (interval = setInterval(updateClock, 1000));

    updateClock();

    function updateClock() {
      const time = getTimeRemaing(endTime);

      days.textContent = farmatNumber(time.days);
      hours.textContent = farmatNumber(time.hours);
      minuts.textContent = farmatNumber(time.minuts);
      seconds.textContent = farmatNumber(time.seconds);

      if (time.totalTime <= 0) {
        clearInterval(interval);
      }
    }
  }

  setClock(".timer", deadline);
});
