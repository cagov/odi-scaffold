(()=>{function A(){let p=document.querySelector(".site-header .grid-mobile-icons");return p?getComputedStyle(p).display!=="none":!1}var x=class extends window.HTMLElement{connectedCallback(){document.querySelector(".cagov-nav.open-menu").addEventListener("click",this.toggleMainMenu.bind(this));let t=document.querySelector(".cagov-nav.mobile-search .search-btn");t&&(t.setAttribute("aria-expanded","false"),document.querySelector(".search-container--small .site-search input").setAttribute("tabindex","-1"),document.querySelector(".search-container--small .site-search button.search-submit").setAttribute("tabindex","-1"),document.querySelector(".search-container--small").setAttribute("aria-hidden","true"),A()&&t.addEventListener("click",()=>{document.querySelector(".search-container--small").classList.toggle("hidden-search"),document.querySelector(".search-container--small").classList.contains("hidden-search")?(t.setAttribute("aria-expanded","false"),document.querySelector(".search-container--small .site-search input").setAttribute("tabindex","-1"),document.querySelector(".search-container--small .site-search button.search-submit").setAttribute("tabindex","-1"),document.querySelector(".search-container--small").setAttribute("aria-hidden","true")):(t.setAttribute("aria-expanded","true"),document.querySelector(".search-container--small .site-search input").focus(),document.querySelector(".search-container--small .site-search input").removeAttribute("tabindex"),document.querySelector(".search-container--small .site-search button.search-submit").removeAttribute("tabindex"),document.querySelector(".search-container--small").setAttribute("aria-hidden","false"))})),window.addEventListener("resize",()=>{document.querySelector(".search-container--small").classList.add("hidden-search"),t&&document.querySelector(".cagov-nav.mobile-search .search-btn").setAttribute("aria-expanded","false"),document.querySelector(".search-container--small .site-search input").setAttribute("tabindex","-1"),document.querySelector(".search-container--small .site-search button.search-submit").setAttribute("tabindex","-1"),document.querySelector(".search-container--small").setAttribute("aria-hidden","true"),this.closeAllMenus(),this.closeMainMenu()}),this.expansionListeners(),document.addEventListener("keydown",this.escapeMainMenu.bind(this)),document.body.addEventListener("click",this.bodyClick.bind(this)),this.highlightCurrentPage()}toggleMainMenu(){document.querySelector(".cagov-nav.hamburger").classList.contains("is-active")?this.closeMainMenu():this.openMainMenu()}highlightCurrentPage(){this.querySelectorAll("a.expanded-menu-dropdown-link").forEach(t=>{t.href===window.location.href&&t.classList.add("current-page-highlight")})}openMainMenu(){document.querySelector(".mobile-icons").classList.add("display-menu"),this.classList.add("display-menu"),document.querySelector(".cagov-nav.hamburger").classList.add("is-active"),document.querySelector(".cagov-nav.menu-trigger").classList.add("is-fixed"),document.querySelector(".cagov-nav.menu-trigger").setAttribute("aria-expanded","true");let t=document.querySelector(".cagov-nav.menu-trigger-label");t.innerHTML=t.getAttribute("data-closelabel")}closeMainMenu(){document.querySelector(".mobile-icons").classList.remove("display-menu"),this.classList.remove("display-menu"),document.querySelector(".cagov-nav.hamburger").classList.remove("is-active"),document.querySelector(".cagov-nav.menu-trigger").classList.remove("is-fixed"),document.querySelector(".cagov-nav.menu-trigger").setAttribute("aria-expanded","false");let t=document.querySelector(".cagov-nav.menu-trigger-label");t.innerHTML=t.getAttribute("data-openlabel")}escapeMainMenu(t){t.keyCode===27&&this.closeAllMenus()}bodyClick(t){t.target.closest("cagov-site-navigation")||this.closeAllMenus()}closeAllMenus(){this.querySelectorAll(".js-cagov-navoverlay-expandable").forEach(e=>{e.querySelector(".expanded-menu-section").classList.remove("expanded");let o=e.querySelector(".expanded-menu-dropdown");o&&o.id&&e.querySelector(`button[aria-controls=${o.id}]`)&&e.querySelector(`button[aria-controls=${o.id}]`).setAttribute("aria-expanded","false"),o&&(o.setAttribute("aria-hidden","true"),o.querySelectorAll("a").forEach(s=>{s.setAttribute("tabindex","-1")}))})}expansionListeners(){this.querySelectorAll(".js-cagov-navoverlay-expandable").forEach(e=>{let a=e.querySelector(".expanded-menu-section");if(a){let r=a.querySelector(".expanded-menu-dropdown");r&&(r.setAttribute("aria-hidden","true"),r&&r.id&&e.querySelector(`button[aria-controls=${r.id}]`)&&e.querySelector(`button[aria-controls=${r.id}]`).setAttribute("aria-expanded","false"))}let o=this;e.addEventListener("click",function(s){s.target.nodeName!=="A"&&s.preventDefault();let m=this.querySelector(".expanded-menu-section");if(m)if(m.classList.contains("expanded"))o.closeAllMenus();else{o.closeAllMenus(),m.classList.add("expanded");let c=this.querySelector(".expanded-menu-dropdown");c&&c.id&&e.querySelector(`button[aria-controls=${c.id}]`)&&e.querySelector(`button[aria-controls=${c.id}]`).setAttribute("aria-expanded","true"),c&&(c.setAttribute("aria-hidden","false"),c.querySelectorAll("a").forEach(v=>{v.removeAttribute("tabindex")}))}})})}};window.customElements.define("cagov-site-navigation",x);function M(p,t,e,a,o,r,s){return`
  <section aria-label="feedback">
  <div class="feedback-form cagov-stack">
    <div class="js-feedback-form feedback-form-question">
      <h2 class="feedback-form-label" id="feedback-rating">${p}</h2>
      <button class="btn-light m-r-2 js-feedback-yes feedback-yes" id="feedback-yes">${t}</button>
      <button class="btn-light js-feedback-no" id="feedback-no">${e}</button>
    </div>
          
    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${o}</div>
          
    <div class="feedback-form-add">
      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${a}</label>
      <div class="feedback-form-add-grid">
        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>
        <button class="btn-light js-feedback-submit" type="submit" id="feedback-submit">${s}</button>
      </div>
    </div>

    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${r}</div>
  </div>
  </section>`}var E=`cagov-page-feedback {
  width: 100%;
}
cagov-page-feedback .feedback-form {
  background: var(--primary-900, #003588);
  padding: var(--s-2, 1rem);
  border-radius: var(--radius-2, 4px);
  max-width: var(--w-lg, 1176px);
  margin: 0 auto;
}
cagov-page-feedback .feedback-form-question {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
cagov-page-feedback .feedback-form-label {
  color: #fff;
  background-color: var(--primary-900, #003588);
  font-size: var(--font-size-2, 1.125rem);
  display: block;
  margin-right: var(--s-2, 1rem);
  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);
  line-height: 3rem;
  width: auto;
}
@media (max-width: 768px) {
  cagov-page-feedback .feedback-form-label {
    line-height: unset;
    margin-bottom: var(--s-2, 1rem);
  }
}
cagov-page-feedback .feedback-form .btn-light {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  font-size: var(--font-size-2, 1.125rem);
  font-weight: var(--font-weight-6, 600);
  padding: var(--s-1, 0.5rem) var(--s-2, 1rem);
  line-height: var(--font-lineheight-3, 1.5);
  border-radius: var(--radius-2, 4px);
  border: var(--border-1, 1px) solid;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  color: var(--primary-900, #003588);
  background-color: var(--white, #ffffff);
  border-color: var(--white, #ffffff);
}
cagov-page-feedback .feedback-form .btn-light:hover {
  color: var(--primary-900, #003588);
  background-color: var(--gray-200, #d4d4d7);
  border-color: var(--gray-200, #d4d4d7);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
cagov-page-feedback .feedback-form .btn-light:focus {
  background-color: var(--gray-200, #d4d4d7);
  border-color: var(--gray-200, #d4d4d7);
  outline: var(--border-2) solid var(--accent2-500, #ac8226);
  outline-offset: 2px;
}
cagov-page-feedback .feedback-form .btn-light .feedback-yes {
  margin-right: var(--s-2, 1rem);
}
cagov-page-feedback .feedback-form-add {
  padding-top: 0;
  display: none;
}
@media (max-width: 768px) {
  cagov-page-feedback .feedback-form-add {
    text-align: left;
    padding-top: 0;
  }
}
cagov-page-feedback .feedback-form-add-grid {
  position: relative;
  margin-top: var(--s-2, 1rem);
  display: inline-flex;
  flex-flow: column;
  align-items: flex-start;
}
@media (max-width: 768px) {
  cagov-page-feedback .feedback-form-add-grid {
    display: block;
  }
}
cagov-page-feedback .feedback-form-textarea {
  width: 100%;
  padding: var(--s-2, 1rem);
  margin-bottom: var(--s-2, 1rem);
  color: var(--primary-900, #003484);
  max-width: 90%;
  height: 127px;
  width: 600px;
}
cagov-page-feedback .feedback-form-thanks {
  display: none;
  color: #fff;
}
cagov-page-feedback .feedback-form-error {
  position: relative;
  top: 100%;
  left: 0;
  display: none;
  font-weight: 300;
  text-align: left;
}

/*# sourceMappingURL=index.css.map */
`,w=class extends window.HTMLElement{constructor(){if(super(),!document.querySelector("#cagov-page-feedback-styles")){let t=document.createElement("style");t.id="cagov-page-feedback-styles",t.textContent=E,document.querySelector("head").appendChild(t)}}connectedCallback(){let t=this.dataset.question?this.dataset.question:"Did you find what you were looking for?",e=this.dataset.yes?this.dataset.yes:"Yes",a=this.dataset.no?this.dataset.no:"No",o=this.dataset.commentPrompt?this.dataset.commentPrompt:"What was the problem?";this.positiveCommentPrompt=this.dataset.positiveCommentPrompt?this.dataset.positiveCommentPrompt:"Great! What were you looking for today?";let r=this.dataset.thanksFeedback?this.dataset.thanksFeedback:"Thank you for your feedback!",s=this.dataset.thanksComments?this.dataset.thanksComments:"Thank you for your comments!",m=this.dataset.submit?this.dataset.submit:"Submit";this.dataset.characterLimit&&this.dataset.characterLimit,this.dataset.anythingToAdd&&this.dataset.anythingToAdd,this.dataset.anyOtherFeedback&&this.dataset.anyOtherFeedback,this.endpointUrl=this.dataset.endpointUrl;let c=M(t,e,a,o,r,s,m);this.innerHTML=c,this.applyListeners()}applyListeners(){this.wasHelpful="",this.querySelector(".js-add-feedback").addEventListener("focus",()=>{this.querySelector(".js-feedback-submit").style.display="block"});let t=this.querySelector(".js-add-feedback");t.addEventListener("keyup",()=>{t.value.length>15?t.setAttribute("rows","3"):t.setAttribute("rows","1")}),t.addEventListener("blur",()=>{t.value.length!==0&&(this.querySelector(".js-feedback-submit").style.display="block")}),this.querySelector(".js-feedback-yes").addEventListener("click",()=>{this.querySelector(".js-feedback-field-label").innerHTML=this.positiveCommentPrompt,this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="yes",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))}),this.querySelector(".js-feedback-no").addEventListener("click",()=>{this.querySelector(".js-feedback-form").style.display="none",this.querySelector(".feedback-form-add").style.display="block",this.wasHelpful="no",this.dispatchEvent(new CustomEvent("ratedPage",{detail:this.wasHelpful}))}),this.querySelector(".js-feedback-submit").addEventListener("click",()=>{this.querySelector(".feedback-form-add").style.display="none",this.querySelector(".feedback-thanks-add").style.display="block";let e={};e.url=window.location.href,e.helpful=this.wasHelpful,e.comments=t.value,e.userAgent=navigator.userAgent,fetch(this.endpointUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(a=>a.json()).then(a=>console.log(a))})}};window.customElements.define("cagov-page-feedback",w);var T=`/* PAGE NAVIGATION */
sidebar cagov-page-navigation .label {
  font-weight: 700;
  font-size: 24px;
  line-height: 28.2px;
  padding: 0;
  margin: 0;
  padding-bottom: 16px;
}

sidebar cagov-page-navigation ul,
sidebar cagov-page-navigation ol:not([class*=menu]):not([class*=nav]):not([class*=footer-links]),
sidebar cagov-page-navigation ul:not([class*=menu]):not([class*=nav]):not([class*=footer-links]) {
  margin: 0;
  text-indent: 0;
  padding: 0;
}

sidebar cagov-page-navigation ul li {
  padding-top: 14px;
  padding-bottom: 18px;
  margin-left: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid var(--gray-300, #e1e0e3);
  line-height: 28.2px;
  list-style: none;
}
sidebar cagov-page-navigation ul li:first-child {
  border-top: 1px solid var(--gray-300, #e1e0e3);
}
sidebar cagov-page-navigation ul li a {
  text-decoration: none;
}
sidebar cagov-page-navigation ul li a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 992px) {
  cagov-page-navigation .label {
    display: none;
  }
  .sidebar-container {
    display: block;
    width: 100%;
    max-width: 100%;
  }
  cagov-page-navigation ul li a {
    font-size: 16px;
    line-height: 24px;
  }
}

/*# sourceMappingURL=index.css.map */
`,b=class extends window.HTMLElement{constructor(){if(super(),!document.querySelector("#cagov-page-navigation-styles")){let t=document.createElement("style");t.id="cagov-page-navigation-styles",t.textContent=T,document.querySelector("head").appendChild(t)}}connectedCallback(){this.type="wordpress",function(){function t(){let e=window,a=document;if(!("scrollBehavior"in a.documentElement.style&&e.__forceSmoothScrollPolyfill__!==!0)){let n,i=e.HTMLElement||e.Element;var o=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||c,scrollIntoView:i.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,m=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){arguments[0]!==void 0&&(h(arguments[0])!==!0?y.call(e,a.body,arguments[0].left!==void 0?~~arguments[0].left:e.scrollX||e.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:e.scrollX||e.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){arguments[0]!==void 0&&(h(arguments[0])?r.scrollBy.call(e,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0):y.call(e,a.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(arguments[0]!==void 0)if(h(arguments[0])!==!0){let l=arguments[0].left,d=arguments[0].top;y.call(this,this,l===void 0?this.scrollLeft:~~l,d===void 0?this.scrollTop:~~d)}else{if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){arguments[0]!==void 0&&(h(arguments[0])!==!0?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(h(arguments[0])!==!0){let l=function(u){for(;u!==a.body&&(k=v(g=u,"Y")&&S(g,"Y"),L=v(g,"X")&&S(g,"X"),(k||L)===!1);)u=u.parentNode||u.host;let g,k,L;return u}(this),d=l.getBoundingClientRect(),f=this.getBoundingClientRect();l!==a.body?(y.call(this,l,l.scrollLeft+f.left-d.left,l.scrollTop+f.top-d.top),e.getComputedStyle(l).position!=="fixed"&&e.scrollBy({left:d.left,top:d.top,behavior:"smooth"})):e.scrollBy({left:f.left,top:f.top,behavior:"smooth"})}else r.scrollIntoView.call(this,arguments[0]===void 0||arguments[0])}}function c(n,i){this.scrollLeft=n,this.scrollTop=i}function h(n){if(n===null||typeof n!="object"||n.behavior===void 0||n.behavior==="auto"||n.behavior==="instant")return!0;if(typeof n=="object"&&n.behavior==="smooth")return!1;throw new TypeError(`behavior member of ScrollOptions ${n.behavior} is not a valid value for enumeration ScrollBehavior.`)}function v(n,i){return i==="Y"?n.clientHeight+m<n.scrollHeight:i==="X"?n.clientWidth+m<n.scrollWidth:void 0}function S(n,i){let l=e.getComputedStyle(n,null)[`overflow${i}`];return l==="auto"||l==="scroll"}function q(n){let i,l,d,f,u=(s()-n.startTime)/o;f=u=u>1?1:u,i=.5*(1-Math.cos(Math.PI*f)),l=n.startX+(n.x-n.startX)*i,d=n.startY+(n.y-n.startY)*i,n.method.call(n.scrollable,l,d),l===n.x&&d===n.y||e.requestAnimationFrame(q.bind(e,n))}function y(n,i,l){let d,f,u,g,k=s();n===a.body?(d=e,f=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,g=r.scroll):(d=n,f=n.scrollLeft,u=n.scrollTop,g=c),q({scrollable:d,method:g,startTime:k,startX:f,startY:u,x:i,y:l})}}typeof exports=="object"&&typeof module<"u"?module.exports={polyfill:t}:t()}(),this.type==="wordpress"&&document.addEventListener("DOMContentLoaded",()=>this.buildContentNavigation()),(document.readyState==="complete"||document.readyState==="loaded")&&this.buildContentNavigation()}buildContentNavigation(){let t=this.getHeaderTags(),e=null;t!==null&&(e=this.dataset.label||"On this page");let a=null;t!==null&&(a=`<nav aria-labelledby="page-navigation-label"> <div id="page-navigation-label" class="label">${e}</div> ${t}</nav>`),this.template({content:a},"wordpress")}template(t,e){return t!=null&&t.content!==null&&e==="wordpress"&&(this.innerHTML=`${t.content}`),document.querySelectorAll("a[data-page-navigation]").forEach(a=>{a.addEventListener("click",o=>{let r=decodeURI(a.getAttribute("href"));try{let s=document.querySelector(r);if(s!==null){let m=s.getBoundingClientRect();window.scrollTo({left:m.left,top:m.top-200}),s.focus(),window.history.pushState(null,null,r)}}catch(s){console.error(s)}o.preventDefault()})}),null}renderNoContent(){this.innerHTML=""}getHeaderTags(){let{selector:t}=this.dataset,e=["h2"];for(let a=0;a<e.length;a+=1)if(t!=null){let o=document.querySelector(t);if(o!==null)return b.outliner(o)}return null}static outliner(t){let e=t.querySelectorAll("h2"),a="";return e!=null&&e.length>0?(e.forEach(o=>{let r=o.getAttribute("id"),s=o.getAttribute("name"),m=o.innerHTML,c=null;r?c=r:s?c=s:c=o.innerHTML;let h=c.toLowerCase().trim().replace(/ /g,"-").replace(/\(|\)|!|"|#|\$|%|&|'|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\]|\\|\^|`|\{|\||\|\}|~/g,"").replace(/a-zA-ZÃ€-Ã–Ã™-Ã¶Ã¹-Ã¿Ä€-Å¾á¸€-á»¿0-9\u00A0-\u017F/g,"");a+=`<li><a data-page-navigation href="#${encodeURI(h)}">${m}</a></li>`,o.setAttribute("id",h),o.setAttribute("name",h)}),`<ul>${a}</ul>`):null}};window.customElements.define("cagov-page-navigation",b);})();
