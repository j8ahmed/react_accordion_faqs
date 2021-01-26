
//LOAD ANIMATIONS
export const loadTitle = (timeline) =>{
    timeline
    .fromTo('.app_title h1', 
        {opacity:0, y:-50},
        {opacity:1, y:0, duration:1} )
    .fromTo('.app_title .underline',
    {opacity:0, y:25},
    {opacity:1, y:0}, "-=0.5");
    return timeline;
};

export const loadTourItems = (timeline) => {
    timeline
    .fromTo('.tour_item',
        {opacity: 0},
        {opacity: 1, stagger:0.25}, "<");
    return timeline;
};

export const loadRefreshButton = (timeline) => {
    timeline
    .fromTo('.refresh_btn', 
        {opacity:0, y:50},
        {opacity:1, y:0, duration:0.2 })
    return timeline;
};

