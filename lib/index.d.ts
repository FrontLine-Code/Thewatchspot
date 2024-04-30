declare class Swiper {
    private container;
    private wrapper;
    private slides;
    private currentIndex;
    constructor(containerId: string);
    nextSlide(): void;
    prevSlide(): void;
    private moveWrapper;
}
declare const mySwiper: Swiper;
