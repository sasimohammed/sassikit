(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();class l extends HTMLElement{static get observedAttributes(){return["delay","animate-by","text-color","font-size","font-family","font-weight"]}constructor(){super(),this.attachShadow({mode:"open"}),this.renderTemplate()}renderTemplate(){const i=this.getAttribute("delay")||100,n=this.getAttribute("animate-by")||"letters",r=this.getAttribute("text-color")||"#000",t=this.getAttribute("font-size")||"1rem",e=this.getAttribute("font-family")||"inherit",o=this.getAttribute("font-weight")||"normal";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    visibility: hidden;
                }

                :host([ready]) {
                    visibility: visible;
                }

                .blur-text {
                    display: inline-block;
                    overflow: hidden;
                    color: ${r};
                    font-size: ${t};
                    font-family: ${e};
                    font-weight: ${o};
                }

                .blur-text span {
                    display: inline-block;
                    filter: blur(8px);
                    opacity: 0;
                    transform: translateY(20px);
                    animation: unblur 0.6s forwards;
                }

                @keyframes unblur {
                    to {
                        filter: blur(0);
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
            <div class="blur-text"></div>
        `,this.delay=i,this.animateBy=n}connectedCallback(){this.renderText(),requestAnimationFrame(()=>{this.setAttribute("ready","")})}attributeChangedCallback(i,n,r){n!==r&&(["text-color","font-size","font-family","font-weight"].includes(i)&&this.renderTemplate(),this.renderText())}renderText(){const i=this.textContent||"",n=this.shadowRoot.querySelector(".blur-text");if(!n)return;let r=[],t="";this.animateBy==="letters"?r=i.split(""):this.animateBy==="words"&&(r=i.split(" ").map(e=>e+" "),t=" "),n.innerHTML=r.map((e,o)=>`<span style="animation-delay: ${o*(this.delay/1e3)}s">${e===" "?"&nbsp;":e}</span>`).join(t)}}customElements.define("blur-text",l);
