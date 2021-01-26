//List of animations 

export const loadApp = (tl) => {
    tl
    .fromTo('.app_title h1', 
        {opacity:0, y:-50},
        {opacity:1, y:0, duration:1} )
    .fromTo('.app_title .underline',
    {opacity:0, y:25},
    {opacity:1, y:0}, "-=0.5")
    .fromTo('.app_container', {opacity: 0}, {opacity: 1}, "<0.25")
    .fromTo('.review_item', {opacity: 0}, {opacity: 1});
    return tl;
}


export const loadUser = (tl) => {
    tl
    .fromTo('.review_img_cont', {opacity: 0}, {opacity: 1})
    .fromTo('.review_img_cont img', {opacity: 0}, {opacity: 1}, "<")
    .fromTo('.review_text_cont', {opacity: 0}, {opacity: 1}, "<0.25");
    return tl;
}