import gsap from 'gsap';


export const loadApp = (app, title, timeline = gsap.timeline()) => {
    timeline
    .fromTo(app, {opacity: 0}, {opacity: 1})
    .from(app, {width: 0} )
    .from(app, {boxShadow: 0} )
    .fromTo(title, {opacity: 0}, {opacity: 1, duration: 0.25}, ">0.5")
    .fromTo(title, {borderLeft:'none'}, {borderLeft:'5px solid var(--hi_light)', duration: 0.2},)
    .fromTo('.question_item', {opacity: 0}, {opacity: 1, stagger: 0.2});

    return timeline;
};

export const openFAQ = (faq, ans, timeline = gsap.timeline()) => {
    timeline
    .to(faq, {height:'270px', duration:0.2})
    .fromTo(ans, {height: 0}, {height:'200px', duration: 0.1}, "+=0.2")
    .fromTo(ans, {opacity:0}, {opacity: 1, duration:0.2}, "<");

    return timeline;
};

export const closeFAQ = (faq, timeline = gsap.timeline()) => {   
    timeline
    .to(faq, {height:'80px', duration:0.2});

    return timeline;
};