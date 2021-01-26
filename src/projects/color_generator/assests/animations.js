import gsap from 'gsap';

export const loadApp = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to('.app_title', {visibility:'visible'})
    .from('.app_title h1', {opacity:0, y:-50}, "<" )
    .from('.app_title .underline', {opacity:0, y:25}, "-=0.5")

    .to('.app_container', {visibility:'visible'})
    .from('.app_container', {opacity: 0}, "<")
    
    .to('.form_item', {visibility:'visible'}, "<")
    .from('.form_item', {opacity: 0, x:"100vw"}, "<")

    .to(".color_item", {visibility:"visible"})
    .from(".color_item", {opacity:0, stagger:0.1}, "<")
    ;
    return tl;
};

export const loadColors = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to(".color_item", {visibility:"visible"})
    .from(".color_item", {opacity:0, stagger:0.1}, "<")
    ;
    return tl;
};