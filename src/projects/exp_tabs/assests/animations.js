import { gsap } from 'gsap';


export const loadApp = (tl=gsap.timeline({autoAlpha:0})) => {
    tl
    .to('.app_title', {visibility:'visible'})
    .from('.app_title h1', {opacity: 0, y:-20})
    .from('.underline', {opacity: 0, y:20}, "<0.25")
    
    .to('.tab_list', {visibility:'visible'}, "<")
    .from('.tab_list', {opacity: 0, x:"-200px"}, "<0.25")
    .to('.info_cont', {visibility:'visible'}, "<")
    .from('.info_cont', {opacity:0, x:'200px'}, "<")
    ;
    return tl;
};


export const loadInfo = (tl=gsap.timeline({autoAlpha:0})) => {
    tl
    .from('.info_cont', {opacity: 0, x:'200px', duration: 0.25})
    ;
    return tl;
};