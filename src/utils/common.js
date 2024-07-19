// how much card or slides should be shown according to the device
export const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
        slidesPerView: 1,
        },
        600: {
        slidesPerView: 2,
        },
        750: {
        slidesPerView: 3,
        },
        // for laptops and big screens 
        1200: {
        slidesPerView: 4,
        },
    },
};