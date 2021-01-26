import { gsap } from 'gsap';


export const loadApp = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .from('.app_title h1', {opacity: 0, y:'-20px'})
    .from('.underline', {opacity: 0, y:'20px'}, "<0.25")
    .from('.category_list', {opacity: 0}, "<0.25")
    .from('.menu_item', {opacity: 0, stagger:0.1}, "<0.25")
    .to('.menu_item', {visibility:'visible'}, "<")
    ;
};

export const loadMenu = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .from('.menu_item', {opacity:0})
    .to('.menu_item', {visibility:'visible'}, "<")
    ;
};