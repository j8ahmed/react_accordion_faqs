import gsap from 'gsap';

export const loadApp = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to('.app_title', {visibility:'visible'})
    .from('.app_title h1', {opacity:0, y:-50}, "<" )
    .from('.app_title .underline', {opacity:0, y:25}, "-=0.5")

    .to('.app_container', {visibility:'visible'}, "<")
    .from('.app_container', {opacity: 0})
    
    .to('.reviews_cont', {visibility:'visible'}, "<")
    .from('.reviews_cont', {opacity: 0});
    return tl;
}
