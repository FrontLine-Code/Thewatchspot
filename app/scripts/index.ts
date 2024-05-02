import { toggle } from "./function";

//banner img
let bannerImg = <HTMLElement>document.getElementById("bannerimg");

bannerImg.addEventListener("mousemove", rotate);
bannerImg.addEventListener("mouseout", remove);

function rotate(this: any, e: MouseEvent) {
  let halfHeight: number = this.offsetHeight / 2;
  let x: number = e.offsetX - halfHeight;
  let y: number = e.offsetY - halfHeight;
  this.style.transform = `rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
}

function remove(this: any) {
  this.style.transform = `rotate(0)`;
}

//swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper =
    document.querySelector<HTMLDivElement>(".swiper-wrapper");
  const slides = document.querySelectorAll<HTMLDivElement>(".swiper-slide");
  const indWrapper =
    document.querySelector<HTMLDivElement>(".indicator-wrapper");
  const indSlides =
    document.querySelectorAll<HTMLDivElement>(".indicator-slide");
  const prevButton = document.querySelector<HTMLButtonElement>(
    ".swiper-button-prev"
  );
  const nextButton = document.querySelector<HTMLButtonElement>(
    ".swiper-button-next"
  );
  let currentIndex = 0;

  function goToSlide(index: number) {
    if (swiperWrapper && indWrapper) {
      swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
      indWrapper.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  }

  function goToPrevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
      prevButton.style.transform = `scale(1.1)`;

      setTimeout(() => {
        prevButton.style.transform = `scale(1)`;
      }, 100);
    }
  }

  function goToNextSlide() {
    if (
      currentIndex < slides.length - 1 &&
      currentIndex < indSlides.length - 1
    ) {
      goToSlide(currentIndex + 1);
      nextButton.style.transform = `scale(1.1)`;

      setTimeout(() => {
        nextButton.style.transform = `scale(1)`;
      }, 100);
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      goToPrevSlide();
    } else if (event.key === "ArrowRight") {
      goToNextSlide();
    }
  });

  function autoSwipe() {
    setInterval(() => {
      if (
        currentIndex < slides.length - 1 &&
        currentIndex < indSlides.length - 1
      ) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }
    }, 5000);
  }

  if (prevButton) {
    prevButton.addEventListener("click", goToPrevSlide);
  }

  if (nextButton) {
    nextButton.addEventListener("click", goToNextSlide);
  }

  autoSwipe();
});

//header animation
let Header = <HTMLElement>document.getElementById("header");
let BannerItems = <HTMLElement>document.getElementById("banner-items");
let BannerTitle = <HTMLElement>document.getElementById("banner-title");

function ToBottomHeader() {
  Header.style.transform = `translateY(0)`;
  BannerItems.style.opacity = `1`;
  BannerTitle.style.transform = `rotateX(0deg)`;
}

//products
function renderImages(images: { src: string; title: string; price: string }[]) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = "";

  images.map((image) => {
    const imageElement = document.createElement("img");
    imageElement.classList.add("mb-auto");
    imageElement.src = image.src;

    const titleElement = document.createElement("p");
    titleElement.classList.add("text-black", "text-sm");
    titleElement.textContent = image.title;

    const priceElement = document.createElement("p");
    priceElement.classList.add("text-gray");
    priceElement.textContent = image.price;

    const divElement = document.createElement("div");
    divElement.classList.add("gap-2");

    const productTextWrapper = document.createElement("div");
    productTextWrapper.classList.add("flex", "justify-between");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("flex", "justify-between");

    const cartBtn = document.createElement("button");
    cartBtn.classList.add("px-4");
    const cartBtnIcon = document.createElement("img");
    cartBtnIcon.src = "../public/icons/stroke-cart.svg";
    
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("px-4");
    const likeBtnIcon = document.createElement("img");
    likeBtnIcon.src = "../public/icons/stroke-like.svg";
    
    const btnElement = document.createElement("button");
    btnElement.textContent = "BUY NOW";
    
    divElement.classList.add(
      "border",
      "border-white",
      "hover:border-silver",
      "transition-[0.1s]",
      "border-white",
      "cursor-pointer",
      "bg-milk",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col"
    );
    btnElement.classList.add(
      "bg-darkgreen",
      "border",
      "border-darkgreen",
      "hover:bg-milk",
      "hover:text-darkgreen",
      "transition-colors",
      "text-white",
      "rounded-md",
      "pt-5",
      "pb-4",
      "px-8"
    );
    divElement.appendChild(imageElement);
    divElement.appendChild(productTextWrapper);
    divElement.appendChild(actionsWrapper);
    productTextWrapper.appendChild(titleElement);
    productTextWrapper.appendChild(priceElement);
    actionsWrapper.appendChild(btnElement);
    actionsWrapper.appendChild(cartBtn);
    actionsWrapper.appendChild(likeBtn);
    likeBtn.appendChild(likeBtnIcon);
    cartBtn.appendChild(cartBtnIcon);
    
    container.appendChild(divElement);
  });
}

const images = [
  {
    src: "../public/images/rolex1.png",
    title: "Tube Watch S42 Date Steel With",
    price: "€395",
  },
  {
    src: "../public/images/rolex2.png",
    title: "Avondale Watch Police For Men",
    price: "€365",
  },
  {
    src: "../public/images/rolex3.png",
    title: "Diver  300M Co‑Axial Master",
    price: "€555",
  },
  {
    src: "../public/images/rolex4.png",
    title: "Diver 300M Co-Axial Master",
    price: "€400",
  },
  { src: "../public/images/rolex5.png", title: "Image 5", price: "€200" },
  { src: "../public/images/rolex6.png", title: "Image 6", price: "€1000" },
  { src: "../public/images/rolex7.png", title: "Image 7", price: "€678" },
  { src: "../public/images/rolex8.png", title: "Image 8", price: "€838" },
  { src: "../public/images/rolex9.png", title: "Image 9", price: "€489" },
  { src: "../public/images/rolex10.png", title: "Image 10", price: "€348" },
  { src: "../public/images/rolex11.png", title: "Image 11", price: "€983" },
  { src: "../public/images/rolex12.png", title: "Image 12", price: "€742" },
];

renderImages(images);
