(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.cardDistance=parseInt(this.getAttribute("card-distance"))||60,this.verticalDistance=parseInt(this.getAttribute("vertical-distance"))||70,this.delay=parseInt(this.getAttribute("delay"))||5e3,this.width=parseInt(this.getAttribute("width"))||200,this.height=parseInt(this.getAttribute("height"))||300,this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          width: ${this.width}px;
          height: ${this.height}px;
          perspective: 900px;
          overflow: visible;
        }
      
        .container {
          position: relative;
          width: auto;
          height: 100%;
         
         
        }
        .card {
  position: absolute;
  top: 100%;
  left: 50%;
  width: ${this.width}px;
  height: ${this.height}px;
  background: white;
  border-radius: 12px;
  border: 4px solid white; 
  box-shadow: 0 10px 30px rgba(0,0,0,0.15); 
  transform-style: preserve-3d;
  backface-visibility: hidden;
  cursor: pointer;
  transition: transform 0.8s ease, z-index 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  overflow: hidden;
  box-sizing: border-box;
}

.card img {
  width: calc(100% - 20px);  
  height: calc(100% - 20px);
  object-fit: cover;
  border-radius: 10px;        
  border: 10px solid black;    
  pointer-events: none;
  user-select: none;
}

       
      </style>
      <div class="container"></div>
    `,this.container=this.shadowRoot.querySelector(".container"),this.cards=[],this.order=[],this.intervalId=null,this.isAnimating=!1}connectedCallback(){const r=document.createElement("style");r.textContent=`
    body {
      overflow: hidden;
    }
  `,document.head.appendChild(r);const s=this.getAttribute("images");if(s){let e=[];try{e=JSON.parse(s)}catch{console.warn("Invalid JSON in images attribute")}this.createCardsFromImages(e)}else if(this.hasChildNodes())Array.from(this.children).forEach(t=>{t.classList.add("card"),this.container.appendChild(t)}),this.innerHTML="";else for(let e=1;e<=3;e++){const t=document.createElement("div");t.classList.add("card"),t.textContent=`Card ${e}`,this.container.appendChild(t)}this.cards=Array.from(this.container.querySelectorAll(".card")),this.order=this.cards.map((e,t)=>t),this.placeCards(),this.startSwap()}createCardsFromImages(r){r.forEach(s=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("img");t.src=s,e.appendChild(t),this.container.appendChild(e)})}disconnectedCallback(){clearInterval(this.intervalId)}makeSlot(r){return{x:r*this.cardDistance,y:-r*this.verticalDistance,z:-r*this.cardDistance*1.5,zIndex:this.cards.length-r}}placeCard(r,s){r.style.zIndex=s.zIndex,r.style.transform=`translate3d(${s.x}px, ${s.y}px, ${s.z}px) translate(-50%, -50%)`}placeCards(){this.order.forEach((r,s)=>{const e=this.cards[r],t=this.makeSlot(s);this.placeCard(e,t)})}swap(){if(this.isAnimating||this.order.length<2)return;this.isAnimating=!0;const r=this.order[0],s=this.cards[r];this.order.forEach((e,t)=>{this.cards[e].style.transition="transform 0.8s ease",this.cards[e].style.zIndex=this.cards.length-t}),s.style.transition="transform 0.8s ease, opacity 0.8s ease",s.style.transform=`translate3d(${this.makeSlot(0).x}px, 500px, ${this.makeSlot(0).z}px) translate(-50%, -50%)`,s.style.opacity="0",setTimeout(()=>{this.order.shift(),this.order.push(r);const e=this.makeSlot(this.cards.length-1);s.style.transition="none",s.style.transform=`translate3d(${e.x}px, 500px, ${e.z}px) translate(-50%, -50%)`,s.style.opacity="0",this.order.forEach((t,i)=>{this.cards[t].style.zIndex=this.cards.length-i}),setTimeout(()=>{s.style.transition="transform 0.8s ease, opacity 0.8s ease",s.style.transform=`translate3d(${e.x}px, ${e.y}px, ${e.z}px) translate(-50%, -50%)`,s.style.opacity="1",this.order.slice(0,-1).forEach((t,i)=>{const a=this.makeSlot(i);this.placeCard(this.cards[t],a)}),setTimeout(()=>{this.isAnimating=!1,this.cards.forEach(t=>{t.style.transition="transform 0.8s ease, z-index 0s ease"})},800)},20)},800)}startSwap(){this.intervalId=setInterval(()=>this.swap(),this.delay)}}customElements.define("card-swap",o);
