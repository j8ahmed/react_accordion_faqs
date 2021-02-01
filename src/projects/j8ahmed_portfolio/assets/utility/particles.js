const {innerWidth, innerHeight} = window;
const {random, abs, PI, floor, cos, sin} = Math;
let winHeight, svg, ctx, particles, particleNum, particleR, particleSpeed, particleLife;
function rand(min, max = 0, neg = false){
    if(!max) max = min, min = 0
    if(neg) return ( (random() - 0.5) * (max-min) + min )
    else return ( random() * (max-min) + min )
}

function Particle(x,y,r,dx,dy,l,h){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rad = rand(0, PI*2);
    this.dx = 0;
    this.dy = dy;
    this.l = l;
    this.h = h;
    this.init = function(lastPoint){
        this.r = rand(particleR.min, particleR.max);
        this.rad = rand(0, PI*2);
        this.x = rand(0 + this.r, ctx.canvas.width - this.r);
        this.y = -50;
        lastPoint.x = this.x;
        lastPoint.y = this.y;
        // this.dx = rand(1,2,true);
        this.dy = rand(particleSpeed.min, particleSpeed.max);
        this.l = rand(particleLife.min, particleLife.max);
        // this.h = this.h + 50;
        this.draw(lastPoint);
    }
    this.draw = function(lastPoint){
        ctx.beginPath();
        ctx.strokeStyle = "hsla("+this.h+",100%,50%,"+this.l+")";
        ctx.lineWidth = this.r;
        ctx.lineCap = 'round';
        ctx.moveTo(lastPoint.x + cos(this.rad) * 100, lastPoint.y);
        ctx.lineTo(this.x + cos(this.rad) * 100, this.y + this.dy);
        ctx.stroke();
        ctx.closePath();
    }
    this.checkBounds = function(lastPoint){
        if(this.y > ctx.canvas.height + particleR.max || this.l <= 0){
            this.init(lastPoint)
        }else this.draw(lastPoint)
    }
    this.update = function(){
        let lastPoint = { x: this.x, y: this.y};
        this.x += this.dx;
        this.y += this.dy;
        this.rad += (1/PI) * 0.01;
        this.l -= 0.01 * (1/60);
        this.checkBounds(lastPoint);
    }
}


window.onload = function(){
    svg = document.getElementById('svg8');
    let clouds = document.querySelectorAll('g');
    let duration = 15 * clouds.length + 10;
    clouds.forEach(cloud => {
        duration -= 10;
        cloud.style.animationDuration = duration + 's';       
    });

    let canvas = document.getElementById('rain-canvas');
    ctx = canvas.getContext("2d");
    resize();
    animate();
}

function initCanvas(){
    initParticles();
}


function initParticles(){
    particles = [];
    particleNum = 50;
    particleR = {min: 30, max: 80};
    particleSpeed = {min: 0.5, max: 1};
    particleLife = {min: 0.1, max: 0.3};

    let startColor = rand(170,190);
    for(let i = 0; i < particleNum; i++){
        let r = rand(particleR.min, particleR.max);
        let x = rand(0 + r, ctx.canvas.width - r);
        let y = rand(0, ctx.canvas.height);
        let dx = 0;
        let dy = rand(particleSpeed.min, particleSpeed.max);
        let l = rand(particleLife.min, particleLife.max);
        let h = startColor + i;
        particles.push( new Particle(x,y,r,dx,dy,l,h) )
    }
}

function resize(){
    let body = document.getElementsByTagName('body');
    // console.log(body[0].offsetHeight);
    if(ctx && winHeight){
        let diff = {
            x: abs(ctx.canvas.width - window.innerWidth),
            y: abs(ctx.canvas.height - winHeight)
        };
        
        if(diff.x > 200 || diff.y > 200 ){
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = body[0].offsetHeight - 10;
            winHeight = ctx.canvas.height;
            initCanvas();
        }
    }else{
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = body[0].offsetHeight - 10;
        winHeight = ctx.canvas.height;
        initCanvas();
    }
    
    
    // svg.setAttribute('viewBox', '30 0 '+innerWidth/15+' '+innerHeight/7);
    initCanvas()
}
function animate(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = "rgba(255,255,255,0.01)";
    // ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach(particle => {
        particle.update();
    });
    requestAnimationFrame(animate);
}

addEventListener('resize', resize);
addEventListener('orientationchange', resize);