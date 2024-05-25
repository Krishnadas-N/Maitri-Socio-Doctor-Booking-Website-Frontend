import{Ba as w,Ca as D,Db as E,Fb as F,Ra as g,Ua as y,Va as _,bd as C,oa as v,tb as d,xb as R,za as m}from"./chunk-MMBRV4NV.js";var h=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},u=class extends h{constructor(t,r,e,o,c){super(),this.component=t,this.viewContainerRef=r,this.injector=e,this.componentFactoryResolver=o,this.projectableNodes=c}},f=class extends h{constructor(t,r,e,o){super(),this.templateRef=t,this.viewContainerRef=r,this.context=e,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,r=this.context){return this.context=r,super.attach(t)}detach(){return this.context=void 0,super.detach()}},p=class extends h{constructor(t){super(),this.element=t instanceof y?t.nativeElement:t}},l=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof u)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof f)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof p)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var P=class extends l{constructor(t,r,e,o,c){super(),this.outletElement=t,this._componentFactoryResolver=r,this._appRef=e,this._defaultInjector=o,this.attachDomPortal=a=>{this._document;let n=a.element;n.parentNode;let s=this._document.createComment("dom-portal");n.parentNode.insertBefore(s,n),this.outletElement.appendChild(n),this._attachedPortal=a,super.setDisposeFn(()=>{s.parentNode&&s.parentNode.replaceChild(n,s)})},this._document=c}attachComponentPortal(t){let e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),o;return t.viewContainerRef?(o=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>o.destroy())):(o=e.create(t.injector||this._defaultInjector||g.NULL),this._appRef.attachView(o.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(o.hostView),o.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(o)),this._attachedPortal=t,o}attachTemplatePortal(t){let r=t.viewContainerRef,e=r.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return e.rootNodes.forEach(o=>this.outletElement.appendChild(o)),e.detectChanges(),this.setDisposeFn(()=>{let o=r.indexOf(e);o!==-1&&r.remove(o)}),this._attachedPortal=t,e}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var b=(()=>{let t=class t extends l{constructor(e,o,c){super(),this._componentFactoryResolver=e,this._viewContainerRef=o,this._isInitialized=!1,this.attached=new _,this.attachDomPortal=a=>{this._document;let n=a.element;n.parentNode;let s=this._document.createComment("dom-portal");a.setAttachedHost(this),n.parentNode.insertBefore(s,n),this._getRootNode().appendChild(n),this._attachedPortal=a,super.setDisposeFn(()=>{s.parentNode&&s.parentNode.replaceChild(n,s)})},this._document=c}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let o=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),n=o.createComponent(a,o.length,e.injector||o.injector,e.projectableNodes||void 0);return o!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let o=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}};t.\u0275fac=function(o){return new(o||t)(d(R),d(E),d(C))},t.\u0275dir=D({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[m.None,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[F]});let i=t;return i})();var U=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=w({type:t}),t.\u0275inj=v({});let i=t;return i})();export{u as a,f as b,l as c,P as d,b as e,U as f};
