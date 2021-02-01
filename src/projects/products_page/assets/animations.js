import gsap from 'gsap'
gsap.config({nullTargetWarn: false})

export const load_products = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .fromTo(".product_item",
    {visibility:"hidden", opacity:0}, 
    {visibility:"visible", opacity:1, stagger: 0.2})
    ;
    return tl
}

export const load_product_page = (tl = gsap.timeline({autoAlpha:0, delay:0.25})) => {
    tl
    .fromTo(".product_page_content_container", 
    {opacity: 0, visibility:"hidden"}, 
    {opacity: 1, visibility:"visible"})
    ;
    return tl
}

export const load_page = (tl = gsap.timeline({autoAlpha:0})) => {
    tl
    .fromTo(".site_page_container", 
    {opacity: 0, visibility:"hidden"}, 
    {opacity: 1, visibility:"visible", duration:1})
    ;
    return tl
}