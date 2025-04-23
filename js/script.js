window.addEventListener("DOMContentLoaded", () => {
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
      days = 0;
      hours = 0;
      minuts = 0;
      seconds = 0;
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

  //   Modal

  const openMadalBtns = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector("[data-modal-close]");

  function openModal() {
    modal.classList.add("show", "fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearTimeout(ramainContact);
  }

  function closeModal() {
    modal.classList.add("hide");
    document.body.style.overflow = "";
    modal.classList.remove("show");
  }

  openMadalBtns.forEach((btn) => btn.addEventListener("click", openModal));

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.code = "Escape" && modal.classList.contains("show"))) {
      closeModal();
    }
  });

  const ramainContact = setTimeout(openModal, 10000);

  //Offers Menu

  class OffersMenu {
    constructor(src, alt, title, descr, discount, sale) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desct = descr;
      this.discount = discount;
      this.sale = sale;
      this.farmatToUsd();
      this.render();
    }

    farmatToUsd() {
      this.discount = this.discount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      this.sale = this.sale.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }

    render() {
      const motherDiv = document.querySelector(".offers-items");
      const element = document.createElement("div");
      element.innerHTML = `
        <img src="${this.src}" alt="${this.alt}" />
        <div>
          <h3>${this.title}</h3>
          <p>
            ${this.desct}
          </p>
            <p>
            <del>${this.discount}</del> <span class="primary-text">${this.sale}</span>
          </p>
        </div>`;
      motherDiv.appendChild(element);
    }
  }

  const offerArr = [
    {
      src: "./img/offer1.png",
      alt: "Quattro Pasta",
      title: "Quattro Pasta",
      dect: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 55,
      sale: 18,
    },
    {
      src: "./img/offer2.png",
      alt: "Vegertarian Pasta",
      title: "Vegertarian Pasta",
      dect: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 55,
      sale: 20,
    },
    {
      src: "./img/offer3.png",
      alt: "Gluten-Free Pasta",
      title: "Gluten-Free Pasta",
      dect: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam",
      discount: 45,
      sale: 16,
    },
  ];

  offerArr.forEach(item => {
    new OffersMenu(item.src, item.alt, item.title, item.dect, item.discount, item.sale)
  })

  class Daytime {
    constructor(scr, alt, title, pargraph) {
      this.scr = scr;
      this.alt = alt;
      this.title = title;
      this.pargraph = pargraph;
      this.render()
    }

    render() {
      const daytimeItems = document.querySelector(".daytime-items");
      const element = document.createElement("div");
      element.classList.add("daytime-item");
      element.innerHTML = `
        <img src="${this.scr}" alt="${this.alt}" />
        <h3>${this.title}</h3>
        <p>${this.pargraph}</p>`;
      daytimeItems.appendChild(element)
    }
  }

  const daytimeArr = [
    {
      scr: "./img/breckfastIcon.png",
      alt: "Breakfast",
      title: "Breakfast",
      par: "8:00 am to 10:00 am",
    },
    {
      scr: "./img/lunchIcon.png",
      alt: "Lunch",
      title: "Lunch",
      par: "04:00 am to 10:00 am",
    },
    {
      scr: "/img/dinnerIcon.png",
      alt: "Dinner",
      title: "Dinner",
      par: "9:00 pm to 1:00 Am",
    },
    {
      scr: "./img/dessertIcon.png",
      alt: "Dessert",
      title: "Dessert",
      par: "All day",
    },
  ];

  daytimeArr.forEach(item => {
    const {scr, alt, title, par} = item
    new Daytime(scr, alt, title, par)
  })
});
