const sliderItem = document.getElementById('slide');
const blockWelcome = document.querySelector('.__welcome_animation');
const beforeWelcome = document.querySelectorAll('._tohide');
const welcomeText = document.querySelectorAll('._animated');
const navColAnimation = document.querySelectorAll('.nav_column_animation');
const navAfter= document.querySelector('.__nav_border');
const animatedHeader = document.querySelectorAll('.animated_header');
const animatedText = document.querySelectorAll('.animated_text');
const automatic_slider_items = document.querySelectorAll('.__automatic_slider_item');
function changeColor () {
    let counter_slider = 0;
    const img1 = new Promise((resolve) => {
        setTimeout(() => {
            for(let i = 0; i < automatic_slider_items.length; i++) {
                automatic_slider_items[i].classList.remove('is_active');
            }
            automatic_slider_items[counter_slider + 1].classList.add('is_active');
            counter_slider++;
            resolve();
        }, 2000);
    }).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[counter_slider + 1].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    ).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[counter_slider + 1].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    ).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[counter_slider + 1].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    ).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[counter_slider + 1].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    ).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[counter_slider + 1].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    ).then(
        ()=> {
            return new Promise((resolve) => {
                setTimeout(() => {
                    for(let i = 0; i < automatic_slider_items.length; i++) {
                        automatic_slider_items[i].classList.remove('is_active');
                    }
                    automatic_slider_items[0].classList.add('is_active');
                    counter_slider++;
                    resolve();
                }, 2000);
            })
        }
    )
}
function welcome() {
    const welcomePromise = new Promise((resolve, reject) => {
        blockWelcome.style.display = 'flex';
        for(let i = 0; i < beforeWelcome.length; i++) {
            beforeWelcome[i].style.display = 'none';
        }
        setTimeout(() => {
            for(let i = 0; i < welcomeText.length; i++) {
                welcomeText[i].style.opacity = '1';
                welcomeText[i].style.transform = 'translateY(0px)';
            }
            resolve();
        }, 500);
    }).then(
        ()=>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    for(let i = 0; i < welcomeText.length; i++) {
                        welcomeText[i].style.opacity = '0';
                        welcomeText[i].style.transform = 'translateY(-150px)';
                    }
                    resolve();
                }, 1500);
            })
        }
    ).then(
        ()=>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    blockWelcome.style.display = 'none';
                    for(let i = 0; i < beforeWelcome.length; i++) {
                        beforeWelcome[i].style.display = 'block';
                    }
                    resolve(blockWelcome.style.display);
                }, 1000);
            })
        }
    ).then(
        check=> {
            if(check === 'none') {
                const r = rolly({
                    view: document.querySelector('.app'),
                    native: true
                    // other options
                });
                r.init();
                AOS.init({
                    duration: 1000,
                    once: true
                });
                setTimeout(() => {
                    animateNavColumns();
                    animatedHeaderfunc();
                    setTimeout(() => {
                        sliderAnimate();
                        setTimeout(() => {
                            animatedTextFunc();
                        }, 300);
                    }, 200);
                }, 50);

            }
        }
    )


}
function sliderAnimate() {
    const sliderPromise = new Promise((resolve, reject) => {
        sliderItem.style.opacity = 1;
        resolve(sliderItem.style.opacity);
    }).then(
        (check)=> {
            if(check === '1') {
                changeColor();
                setInterval(changeColor, 14000);
            }
        }
    ) 
}

function animateNavColumns() {
    navAfter.style.width = '100%';
    for(let i = 0; i < navColAnimation.length; i++) {
        navColAnimation[i].style.transform = 'translateY(0px)';
        
    }

}
const animatedHeaderOwerfllow = document.querySelectorAll('.header_item');
function animatedHeaderfunc() {
    const prom = new Promise((resolve)=> {
        let counter = 0;
        for(let i = 0; i < animatedHeader.length; i++) {
            animatedHeader[i].style.transform = 'translateY(0px)';
            animatedHeader[i].style.opacity = '1';
            counter++;
        }
        resolve(counter);
    }).then(
        check=> {
            if(check === animatedHeader.length) {
                setTimeout(() => {
                    for(let i = 0; i < animatedHeaderOwerfllow.length; i++) {
                        animatedHeaderOwerfllow[i].style.overflow = 'visible';
                    }
                }, 400);

            }
        }
    )

}
function animatedTextFunc() {
    for(let i = 0; i < animatedText.length; i++) {
        
        if(i === 2) {
            setTimeout(() => {
                animatedText[i].classList.add('_active');
            }, 500);
        }
        else {
            animatedText[i].classList.add('_active');
        }
    }
}
const hiddenMenu = document.getElementById('hiddenMenu');
const buttonUnhide = document.getElementById('unhide');
const toHide = document.getElementById('tohide');
const navAnimation = document.querySelectorAll('.nav_animation');

//mobile navigation panel
buttonUnhide.onclick = () => {
    const r = rolly({
        view: document.querySelector('.app'),
        native: true
        // other options
    });
    if(hiddenMenu.style.display === 'none') {
        document.querySelector('.rolly-scroll-view').remove();
        hiddenMenu.style.display = 'flex';
        toHide.style.display = 'none';
        buttonUnhide.style.border = 'none';
        buttonUnhide.style.width = '22px';
        buttonUnhide.style.height = '22px';
        buttonUnhide.style.backgroundImage = 'url(../portfolio-2021/files/images/mark.svg)';
        r.init();
        r.destroy();
        setTimeout(() => {
            for(let i = 0; i < navAnimation.length; i++ ) {
                navAnimation[i].style.paddingBottom = '26px';
                navAnimation[i].style.opacity = '1';
            }
        }, 200);
    }
    else {
        hiddenMenu.style.display = 'none';
        toHide.style.display = 'block';
        buttonUnhide.style.borderTop = '2px solid #373745';
        buttonUnhide.style.borderBottom = '2px solid #373745';
        buttonUnhide.style.width = '46px';
        buttonUnhide.style.height = '10px';
        buttonUnhide.style.backgroundImage = 'none';
        r.init();
        for(let i = 0; i < navAnimation.length; i++ ) {
            navAnimation[i].style.paddingBottom = '13px';
            navAnimation[i].style.opacity = '0';
        }
    }
}

welcome();

/*!
    * rolly.js v0.2.0
    * (c) 2019 Mickael Chanrion
    * Released under the MIT license
    */
var rolly=function(){"use strict";var l=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var e=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(t){s[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),o=1;o<arguments.length;o++){for(var r in i=Object(arguments[o]))h.call(i,r)&&(n[r]=i[r]);if(l){s=l(i);for(var a=0;a<s.length;a++)c.call(i,s[a])&&(n[s[a]]=i[s[a]])}}return n};function t(){}t.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var i=t,s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n,o=(function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),0<e?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,r,a;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),a=s.reduce(function(t,e){return t+e}),o=i.reduce(function(t,e){return t+e}),r=a/s.length,n=o/i.length,Math.abs(r)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(s)}(n={exports:{}},n.exports),n.exports),r={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&1<navigator.msMaxTouchPoints,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:-1<navigator.userAgent.indexOf("Firefox")},a=Object.prototype.toString,u=Object.prototype.hasOwnProperty;function d(t,e){return function(){return t.apply(e,arguments)}}var p=o.Lethargy,v="virtualscroll",f=M,g=37,m=38,y=39,b=40,w=32;function M(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)u.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==a.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=d(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=e({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1},t),this.options.limitInertia&&(this._lethargy=new p),this._emitter=new i,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}M.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(v,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},M.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},M.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},M.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},M.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},M.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case g:case m:e.deltaY=this.options.keyStep;break;case y:case b:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case w:e.deltaY=-i;break;default:return}this._notify(t)},M.prototype._bind=function(){r.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&document.addEventListener("keydown",this._onKeyDown)},M.prototype._unbind=function(){r.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&document.removeEventListener("keydown",this._onKeyDown)},M.prototype.on=function(t,e){this._emitter.on(v,t,e);var i=this._emitter.e;i&&i[v]&&1===i[v].length&&this._bind()},M.prototype.off=function(t,e){this._emitter.off(v,t,e);var i=this._emitter.e;(!i[v]||i[v].length<=0)&&this._unbind()},M.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},M.prototype.destroy=function(){this._emitter.off(),this._unbind()};var D="undefined"!=typeof document?document.createElement("p").style:{},O=["O","ms","Moz","Webkit"],S=/([A-Z])/g,T={};function k(t){if(t=t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}),void 0!==D[t])return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=O.length;i--;){var s=O[i]+e;if(void 0!==D[s])return s}return t}var x=function(t){return t in T?T[t]:T[t]=k(t)},F=function(t){return t=k(t),S.test(t)&&(t="-"+t.replace(S,"-$1"),S.lastIndex=0),t.toLowerCase()};x.dash=F;var _=function(t,e){return"vertical"===e?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)"},L=function(t,e){return void 0===e&&(e=document),Array.from(e.querySelectorAll(t))},E=function(t,e){var i=Object.assign({},t);return Object.keys(i).filter(function(t){return!e.includes(t)}).forEach(function(t){return delete i[t]}),i};var z=function(t,e){this.options=e,this.state={caching:!1,cache:null,inView:!1,active:!1,progress:0,progressInView:0},this.DOM={context:t}};z.prototype.cache=function(g){var m=this;return new Promise(function(t,e){m.state.caching=!0;var i="vertical"===m.options.direction,s=i?g.height:g.width,n=m.DOM.context;n.style.display=null;var o=window.getComputedStyle(n);"none"===o.display&&(m.state.cache=null,t(m.state.cache)),"inline"===o.display&&(n.style.display="block"),n.style[g.transformPrefix]=null;var r=n.getBoundingClientRect(),a=n.getAttribute("data-scene"),l=m.options.scenes,h=l[a]||{},c={context:n,type:a,top:i?r.top+0:r.top,bottom:i?r.bottom+0:r.bottom,left:i?r.left:r.left+0,right:i?r.right:r.right+0,size:i?r.height:r.width,speed:parseFloat(n.getAttribute("data-speed"))||h.speed||l.speed,trigger:n.getAttribute("data-trigger")||h.trigger||l.trigger},u=c.trigger,d=0;"middle"===u?d=s/2:"end"===u?d=s:"px"===u.slice(-2)?d=parseFloat(u):"%"===u.slice(-1)&&(d=s*parseFloat(u)/100),c.triggerOffset=d;var p=i?c.top+c.size/2-g.height/2:c.left+c.size/2-g.width/2;c.offset=p-p*c.speed;var v=h.cache||l.cache;if(v&&v){var f=v.call(m,{cache:c,globalState:g,sceneState:m.state});c=Object.assign({},c,f)}m.state.cache=c,m.state.caching=!1,t(m.state.cache)})},z.prototype.change=function(t){if(!this.state.cache||this.state.caching)return!1;var e="vertical"===this.options.direction?t.height:t.width,i=this.state,s=i.cache,n=i.active,o=this.calc(t),r=o.inView,a=o.transform,l=o.start;this.state.progress=this.getProgress(a),this.state.progressInView=this.getProgressInView(l,e);var h=this.options.scenes,c=h[s.type],u=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&-1===e.indexOf(s)&&(i[s]=t[s]);return i}(h,[s.type]);c||(c={});var d={globalState:t,sceneState:this.state,transform:a};if(this.state.inView!==r){var p=r?"appear":"disappear";c[p]?c[p].call(this,d):u[p]&&u[p].call(this,d),this.state.inView=r}return r?(this.DOM.context.style.willChange="transform",c.change?c.change.call(this,d):u.change&&u.change.call(this,d),this.checkEnter(n,this.state.progress)?(this.state.active=!0,c.enter?c.enter.call(this,d):u.enter&&u.enter.call(this,d)):this.checkLeave(n,this.state.progress)&&(this.state.active=!1,c.leave?c.leave.call(this,d):u.leave&&u.leave.call(this,d)),c.transform?c.transform.call(this,d):u.transform?u.transform.call(this,d):this.DOM.context.style[t.transformPrefix]=_(a,this.options.direction)):(this.DOM.context.style[t.transformPrefix]=_(t.bounding,this.options.direction),this.DOM.context.style.willChange=null),!0},z.prototype.calc=function(t){var e="vertical"===this.options.direction,i=this.state.cache,s=i.top,n=i.right,o=i.bottom,r=i.left,a=i.speed,l=i.offset,h=t.width,c=t.height,u=t.current*-a-l,d=Math.round((e?s:r)+u),p=Math.round((e?o:n)+u);return{transform:u,start:d,end:p,inView:0<p&&d<(e?c:h)}},z.prototype.getProgress=function(t){var e="vertical"===this.options.direction,i=this.state.cache,s=(-t+i.triggerOffset-(e?i.top:i.left))/i.size;return s<0||1<s?-1:s},z.prototype.getProgressInView=function(t,e){return(e-t)/(e+this.state.cache.size)},z.prototype.checkEnter=function(t,e){return!t&&0<=e&&e<=1},z.prototype.checkLeave=function(t,e){return t&&-1===e};var A=function(t,e,i,s){this.options=s,this.DOM=this.render(t),this.state={clicked:!1,thumb:{size:0}},this.cache(e),this.setTarget=i},Y={thumbSize:{configurable:!0}};A.prototype.cache=function(t){this.state.cache={bounding:t.bounding,viewSize:"vertical"===this.options.direction?t.height:t.width},this.updateThumbSize()},A.prototype.change=function(t){var e=t.current,i=t.transformPrefix,s=this.state.cache,n=s.bounding,o=s.viewSize,r=Math.abs(e)/(n/(o-this.thumbSize))+this.thumbSize/.5-this.thumbSize,a=Math.max(0,Math.min(r-this.thumbSize,r+this.thumbSize));this.DOM.thumb.style[i]=_(a.toFixed(2),this.options.direction)},A.prototype.calc=function(t){return t*(this.state.cache.bounding/this.state.cache.viewSize)},A.prototype.render=function(t){var e=document.createElement("div");e.className="rolly-scroll-bar rolly-"+this.options.direction;var i=document.createElement("div");return i.className="rolly-scroll-bar-thumb",e.appendChild(i),t.appendChild(e),{parent:t,context:e,thumb:i}},A.prototype.on=function(){this.boundFns={click:this.click.bind(this),mouseDown:this.mouseDown.bind(this),mouseMove:this.mouseMove.bind(this),mouseUp:this.mouseUp.bind(this)},this.DOM.context.addEventListener("click",this.boundFns.click),this.DOM.context.addEventListener("mousedown",this.boundFns.mouseDown),document.addEventListener("mousemove",this.boundFns.mouseMove),document.addEventListener("mouseup",this.boundFns.mouseUp)},A.prototype.off=function(){return!!this.boundFns&&(this.DOM.context.removeEventListener("click",this.boundFns.click),this.DOM.context.removeEventListener("mousedown",this.boundFns.mouseDown),document.removeEventListener("mousemove",this.boundFns.mouseMove),document.removeEventListener("mouseup",this.boundFns.mouseUp),delete this.boundFns,!0)},A.prototype.click=function(t){var e=this.calc("vertical"===this.options.direction?t.clientY:t.clientX);this.setTarget(e)},A.prototype.mouseDown=function(t){t.preventDefault(),1===t.which&&(this.state.clicked=!0),this.DOM.parent.classList.add("is-dragging-scroll-bar")},A.prototype.mouseMove=function(t){if(this.state.clicked){var e=this.calc("vertical"===this.options.direction?t.clientY:t.clientX);this.setTarget(e)}},A.prototype.mouseUp=function(t){this.state.clicked=!1,this.DOM.parent.classList.remove("is-dragging")},Y.thumbSize.get=function(){return this.state.thumb.size},Y.thumbSize.set=function(t){this.state.thumb.size=t;var e="vertical"===this.options.direction?"height":"width";this.DOM.thumb.style[e]=t+"px"},A.prototype.updateThumbSize=function(){var t=this.state.cache.bounding;t<=0&&(this.DOM.context.classList.add("is-hidden"),this.thumbSize=0),this.DOM.context.classList.remove("is-hidden");var e=this.state.cache.viewSize;this.thumbSize=e*(e/(t+e))},A.prototype.destroy=function(){this.off(),this.DOM.parent.removeChild(this.DOM.context)},Object.defineProperties(A.prototype,Y);var j={getBoundFns:function(){var e=this,i={};return["resize","debounceScroll","virtualScroll"].map(function(t){return i[t]=j[t].bind(e)}),i},initState:function(){this.state={current:0,previous:0,target:0,width:window.innerWidth,height:window.innerHeight,bounding:0,ready:!1,preLoaded:!1,rAF:void 0,isRAFCanceled:!1,debounceScroll:{timer:null,tick:!1},scrollTo:{},transformPrefix:x("transform")}},initScenes:function(){var e=this;this.scenes=[],L(this.options.scenes.selector,this.DOM.view).forEach(function(t){return e.scenes.push(new z(t,e.options))})},change:function(){if(!this.state.isRAFCanceled){j.rAF.call(this);var t=this.state.target-this.state.current,e=t*this.options.ease;Math.abs(t)<.1?(j.cAF.call(this),e=0,this.state.current=this.state.target):this.state.current+=e;var i=E(this.state,["current","previous","target","width","height","bounding","ready","preLoaded","transformPrefix"]);Math.abs(t)<10&&this.state.scrollTo.callback&&(this.state.scrollTo.callback(i),this.state.scrollTo.callback=null),this.scrollBar&&this.scrollBar.change(this.state),this.options.change&&this.options.change(i),this.scenes.forEach(function(t){return t.change(i)}),this.state.previous=this.state.current}},rAF:function(){this.state.isRAFCanceled=!1,this.state.rAF=requestAnimationFrame(j.change.bind(this))},cAF:function(){this.state.isRAFCanceled=!0,this.state.rAF=cancelAnimationFrame(this.state.rAF)},ready:function(){return!(!this.state.ready||this.options.preload&&!this.state.preLoaded)&&(this.options.ready&&this.options.ready(this.state),!0)},virtualScroll:function(t){if(!this.state.scrollTo.callback){var e="horizontal"===this.options.direction?t.deltaX:t.deltaY;j.setTarget.call(this,this.state.target+-1*e)}},debounceScroll:function(t){var e=this;if(!this.state.scrollTo.callback){var i,s=this.DOM.listener===document.body;i="vertical"===this.options.direction?s?window.scrollY||window.pageYOffset:this.DOM.listener.scrollTop:s?window.scrollX||window.pageXOffset:this.DOM.listener.scrollLeft,j.setTarget.call(this,i),clearTimeout(this.state.debounceScroll.timer),this.state.debounceScroll.tick||(this.state.debounceScroll.tick=!0,this.DOM.listener.classList.add("is-scrolling")),this.state.debounceScroll.timer=setTimeout(function(){e.state.debounceScroll.tick=!1,e.DOM.listener.classList.remove("is-scrolling")},200)}},resize:function(t){var e=this,i="vertical"===this.options.direction?"height":"width";this.state.height=window.innerHeight,this.state.width=window.innerWidth;var s=this.options,n=s.native,o=s.direction,r=this.DOM.view.getBoundingClientRect();this.state.bounding="vertical"===o?r.height-(n?0:this.state.height):r.right-(n?0:this.state.width),this.scrollBar?this.scrollBar.cache(this.state):n&&(this.DOM.scroll.style[i]=this.state.bounding+"px"),j.setTarget.call(this,this.state.target),this.scenes.forEach(function(t){return t.cache(e.state)})},extendOptions:function(t){var e=this.options?this.options:j.getDefaults.call(this);return t.virtualScroll=Object.assign({},e.virtualScroll,t.virtualScroll),t.scenes=Object.assign({},e.scenes,t.scenes),Object.assign({},e,t)},preloadImages:function(i){var s=L("img",this.DOM.listener);s.length?s.forEach(function(t){var e=document.createElement("img");e.onload=function(){s.splice(s.indexOf(t),1),0===s.length&&i()},e.src=t.getAttribute("src")}):i&&i()},addFakeScrollHeight:function(){var t=document.createElement("div");t.className="rolly-scroll-view",this.DOM.scroll=t,this.DOM.listener.appendChild(this.DOM.scroll)},removeFakeScrollHeight:function(){this.DOM.listener.removeChild(this.DOM.scroll)},addFakeScrollBar:function(){this.scrollBar=new A(this.DOM.listener,this.state,j.setTarget.bind(this),this.options)},removeFakeScrollBar:function(){this.scrollBar.destroy()},getDefaults:function(){return{direction:"vertical",listener:document.body,view:L(".rolly-view")[0]||null,native:!1,preload:!0,ready:null,change:null,ease:.075,virtualScroll:{limitInertia:!1,mouseMultiplier:.5,touchMultiplier:1.5,firefoxMultiplier:30,preventTouch:!0},noScrollBar:!1,scenes:{selector:"[data-scene]",speed:1,trigger:"middle"}}},getNodeListener:function(){return this.DOM.listener===document.body?window:this.DOM.listener},setTarget:function(t){this.state.target=Math.round(Math.max(0,Math.min(t,this.state.bounding))),!this.state.rAF&&j.rAF.call(this)}},P=function(t){void 0===t&&(t={}),this.boundFns=j.getBoundFns.call(this),this.options=j.extendOptions.call(this,t),this.DOM={listener:this.options.listener,view:this.options.view},j.initScenes.call(this)};P.prototype.init=function(){var t=this;this.virtualScroll=this.options.native?null:new f(this.options.virtualScroll),j.initState.call(this);var e=this.options.native?"native":"virtual",i="vertical"===this.options.direction?"y":"x";this.DOM.listener.classList.add("is-"+e+"-scroll"),this.DOM.listener.classList.add(i+"-scroll"),this.DOM.view.classList.add("rolly-view"),this.options.native?j.addFakeScrollHeight.call(this):!this.options.noScrollBar&&j.addFakeScrollBar.call(this),this.options.preload&&j.preloadImages.call(this,function(){t.state.preLoaded=!0,t.boundFns.resize(),j.ready.call(t)}),this.on()},P.prototype.on=function(t){(void 0===t&&(t=!0),this.options.native)?j.getNodeListener.call(this).addEventListener("scroll",this.boundFns.debounceScroll):this.virtualScroll&&this.virtualScroll.on(this.boundFns.virtualScroll);this.scrollBar&&this.scrollBar.on(),t&&j.rAF.call(this),j.resize.call(this),window.addEventListener("resize",this.boundFns.resize),this.state.ready=!0,j.ready.call(this)},P.prototype.off=function(t){(void 0===t&&(t=!0),this.options.native)?j.getNodeListener.call(this).removeEventListener("scroll",this.boundFns.debounceScroll):this.virtualScroll&&this.virtualScroll.off(this.boundFns.virtualScroll);this.scrollBar&&this.scrollBar.off(),t&&j.cAF.call(this),window.removeEventListener("resize",this.boundFns.resize),this.state.ready=!1},P.prototype.destroy=function(){var t=this.options.native?"native":"virtual",e="vertical"===this.options.direction?"y":"x";this.DOM.listener.classList.remove("is-"+t+"-scroll"),this.DOM.listener.classList.remove(e+"-scroll"),this.DOM.view.classList.remove("rolly-view"),this.virtualScroll&&(this.virtualScroll.destroy(),this.virtualScroll=null),this.off(),this.options.native?j.removeFakeScrollHeight.call(this):!this.options.noScrollBar&&j.removeFakeScrollBar.call(this)},P.prototype.reload=function(t){void 0===t&&(t=this.options),this.destroy(),this.boundFns=j.getBoundFns.call(this),this.options=j.extendOptions.call(this,t);var e=this.DOM;this.DOM=Object.assign({},e,{listener:this.options.listener,view:this.options.view}),j.initScenes.call(this),this.init()},P.prototype.scrollTo=function(t,e){e=Object.assign({},{offset:0,position:"start",callback:null},e);var i="vertical"===this.options.direction,s=null,n=this.state.current+e.offset;switch("string"==typeof t&&(t=L(t)[0]),typeof t){case"number":default:n=t;break;case"object":if(!t)return;s=t.getBoundingClientRect(),n+=i?s.top:s.left}switch(e.position){case"center":default:n-=i?this.state.height/2:this.state.width/2;break;case"end":n-=i?this.state.height:this.state.width}e.callback&&(this.state.scrollTo.callback=e.callback),this.options.native?"vertical"===this.options.direction?window.scrollTo(0,n):window.scrollTo(n,0):j.setTarget.call(this,n)},P.prototype.update=function(){j.resize.call(this)};return function(t){return new P(t)}}();


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});