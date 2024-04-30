class Swiper {
  private container: HTMLElement;
  private wrapper: HTMLElement;
  private slides: NodeListOf<HTMLElement>;
  private currentIndex: number;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
    this.wrapper = this.container.querySelector(
      ".swiper-wrapper"
    ) as HTMLElement;
    this.slides = this.container.querySelectorAll(".swiper-slide");
    this.currentIndex = 0;
  }

  public nextSlide(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.moveWrapper();
    }
  }

  public prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.moveWrapper();
    }
  }

  private moveWrapper(): void {
    const slideWidth = this.slides[0].offsetWidth;
    const newPosition = -this.currentIndex * slideWidth;
    this.wrapper.style.transform = `translateX(${newPosition}px)`;
  }
}

const mySwiper = new Swiper("swiper-container");

document.getElementById("next")!.addEventListener("click", () => {
  mySwiper.nextSlide();
});

document.getElementById("prev")!.addEventListener("click", () => {
  mySwiper.prevSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    mySwiper.prevSlide();
  } else if (event.key === "ArrowRight") {
    mySwiper.nextSlide();
  }
});
