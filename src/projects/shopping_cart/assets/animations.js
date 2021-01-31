import gsap from 'gsap'

export const load_app = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .to("body", {visibility:"visible"})
    .from("body", {opacity:0}, "<")
    ;
    return tl
}

export const reload_cart = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .fromTo(".cart_items_container", 
        {opacity:0, visibility:"hidden"}, 
        {opacity:1, visibility:"visible", duration: 0.25})
    ;
    return tl
}

export const remove_item_anim = (elem,  tl = gsap.timeline()) => {
    const container_height = gsap.getProperty(".cart_items_container", "height")
    const elem_height = gsap.getProperty(elem, "height")
    tl
    .to(elem, {x:"-100vw", opacity:0 })
    .to(elem, {height:0, padding:0, margin:0 }, "<")
    // .to(".cart_item", {y:`${-elem_height}px`})
    .to(".cart_items_container", {
        height:`${container_height - elem_height}px`, 
        duration:0.25
    }, "<0.25")
    ;
    return tl
}

export const remove_last_item_anim = (elem = ".cart_item",  tl = gsap.timeline()) => {
    tl
    .to(".cart_footer_container", {opacity:0})
    .to(elem, {
        x:"-100vw", 
        opacity:0, 
        height:0, 
        padding:0, 
        margin:0,
        stagger:{amount:0.4, from:"end"} }, "<0.25")
    .to(".cart_items_container", {opacity:0, visibility:"hidden", duration:0.1})
    ;
    return tl
}


export const remove_all_items = (elem = ".cart_item",  tl = gsap.timeline()) => {
    tl
    .to(".cart_footer_container", {opacity:0})
    .to(elem, {
        x:"-100vw", 
        opacity:0, 
        height:0, 
        padding:0, 
        margin:0,
        stagger:{amount:0.4, from:"end"} }, "<0.25")
    .to(".cart_items_container", {opacity:0, visibility:"hidden", duration:0.1})
    ;
    return tl
}