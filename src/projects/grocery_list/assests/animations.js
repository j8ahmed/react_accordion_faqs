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

    // .to(".color_item", {visibility:"visible"})
    // .from(".color_item", {opacity:0, stagger:0.1}, "<")
    ;
    return tl;
};

export const loadItems = (tl = gsap.timeline({autoAlpha:0})) => {
    // tl
    // .to(".color_item", {visibility:"visible"})
    // .from(".color_item", {opacity:0, stagger:0.1}, "<")
    // ;
    return tl;
};

export const toggleModal = ( remove = false, tl = gsap.timeline({autoAlpha:0}) ) => {
    if(remove){

        tl
        .to('.modal_cont', {
            // transformOrigin:"top center",
            padding:"0rem",
            scaleY:0,
            opacity: 0,
            duration: 0.1
        })
        .to('.modal_cont', {visibility:"hidden", display:"none"})
        ;

    } else {

        tl
        .to('.modal_cont', {visibility:"visible", display:"flex"})
        .to('.modal_cont', {
            transformOrigin:"bottom left",
            padding:"1rem",
            scaleY:1,
            opacity: 1,
            ease: "bounce",
            duration: 0.25,
            y:"-100%"
        }, "<")
        ;

    }
   
    return tl
}

export const deleteAnim = (item = ".grocery_item", tl = gsap.timeline({autoAlpha:0}) ) => {
  
    tl
    .to(item, {
        x: "-150%",
        opacity: 0,
        duration: 0.25,
        stagger:0.1,
    })
   
    return tl
}