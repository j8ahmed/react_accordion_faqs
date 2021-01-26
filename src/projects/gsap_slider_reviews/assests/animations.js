import gsap from 'gsap';

export const loadApp = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to('.app_title', {visibility:'visible'})
    .from('.app_title h1', {opacity:0, y:-50}, "<" )
    .from('.app_title .underline', {opacity:0, y:25}, "-=0.5")

    .to('.app_container', {visibility:'visible'}, "<")
    .from('.app_container', {opacity: 0})
    
    .to('.reviews_cont', {visibility:'visible'}, "<")
    .from('.reviews_cont', {opacity: 0}, "<")
    .to('.next', {x:"150%", opacity:0}, "<")
    .to('.previous', {x:"-150%", opacity:0}, "<")
    ;
    return tl;
}


export const loadNextSlide = (previous, active, next, tl = gsap.timeline({autoAlpha:0, ease:"elastic"})) => {
    const right = "150%"
    const left = "-150%"
    tl
    .fromTo(previous, {opacity:1}, {x:left, opacity: 0,ease: "linear"})
    .to(active, {x:0, opacity:1,ease: "linear"}, "<")
    .to(next, {x:right, opacity:0,ease: "linear"}, "<")
    ;
    return tl;
}

export const loadPreviousSlide = (previous, active, next, tl = gsap.timeline({autoAlpha:0})) => {
    const right = "150%"
    const left = "-150%"
    tl
    .fromTo(previous, {opacity:1}, {x:right, opacity: 0,ease: "linear"})
    .to(active, {x:0, opacity:1, ease: "linear"}, "<")
    .to(next, {x:left, opacity:0,ease: "linear"}, "<")
    ;
    return tl;
}
