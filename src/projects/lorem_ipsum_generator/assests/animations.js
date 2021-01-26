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
    ;
    return tl;
};

export const loadText = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to(".text_item", {visibility:"visible"})
    .from(".text_item", {opacity:0, stagger:0.25}, "<")
    ;
    return tl;
};