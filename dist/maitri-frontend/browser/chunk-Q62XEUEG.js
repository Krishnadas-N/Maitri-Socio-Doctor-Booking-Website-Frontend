import{g as k,o as i}from"./chunk-OEBG5XYA.js";import{Ba as h,Bb as u,Ca as m,Ua as c,Za as p,bd as g,oa as d,tb as s,ud as v,wd as I,zb as f}from"./chunk-MMBRV4NV.js";var x=(()=>{class n{document;platformId;renderer;el;zone;config;constructor(e,t,o,l,a,r){this.document=e,this.platformId=t,this.renderer=o,this.el=l,this.zone=a,this.config=r}animationListener;mouseDownListener;timeout;ngAfterViewInit(){I(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(i.removeClass(t,"p-ink-active"),!i.getHeight(t)&&!i.getWidth(t)){let r=Math.max(i.getOuterWidth(this.el.nativeElement),i.getOuterHeight(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let o=i.getOffset(this.el.nativeElement),l=e.pageX-o.left+this.document.body.scrollTop-i.getWidth(t)/2,a=e.pageY-o.top+this.document.body.scrollLeft-i.getHeight(t)/2;this.renderer.setStyle(t,"top",a+"px"),this.renderer.setStyle(t,"left",l+"px"),i.addClass(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&i.removeClass(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&i.removeClass(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),i.removeClass(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,i.removeElement(e))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(t){return new(t||n)(s(g),s(p),s(f),s(c),s(u),s(k,8))};static \u0275dir=m({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"]})}return n})(),A=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=h({type:n});static \u0275inj=d({imports:[v]})}return n})();export{x as a,A as b};
