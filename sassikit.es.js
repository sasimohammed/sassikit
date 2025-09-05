const H = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e", q = "/vite.svg";
function R(f) {
  let t = 0;
  const i = (e) => {
    t = e, f.innerHTML = `count is ${t}`;
  };
  f.addEventListener("click", () => i(t + 1)), i(0);
}
let F = class extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("bg-color") || "var(--nav-bg, #fff)", e = this.getAttribute("text-color") || "var(--nav-text, #1e1e2f)", o = this.getAttribute("hover-color") || "var(--nav-hover, #faba1b)", s = this.getAttribute("bg-hover") || "var(--nav-hover-bg, rgba(0,0,0,0.03))", r = this.getAttribute("logo-color") || "var(--nav-logo, purple)", a = this.getAttribute("shadow-color") || "var(--nav-shadow, rgba(0,0,0,0.1))", n = this.getAttribute("radius") || "var(--nav-radius, 12px)", d = this.getAttribute("link-padding") || "var(--nav-link-padding, 0.5rem 0.75rem)", g = this.getAttribute("font-family") || "var(--nav-font, 'Segoe UI', sans-serif)", h = this.getAttribute("width-large") || "90%", l = this.getAttribute("width-small") || "95%";
    t.innerHTML = `
      <style>
     :host {
  display: block;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: ${h};
  z-index: 999;
}

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${i};
          padding: 1rem 2rem;
          color: ${e};
          border-radius: ${n};
          box-shadow: 0 8px 24px ${a};
         
          
        }
        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: ${g};
          color: ${r};
        }

        ::slotted([slot="logo-icon"]) {
          width: 24px; height: 24px; object-fit: contain;
          color: ${r};
        }

        ::slotted([slot="logo-image"]) {
          width: 48px; height: 48px; object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 8px ${a}|| rgba(0,0,0,0.1));
        }

        .menu {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0; padding: 0;
        }

        .menu ::slotted(a) {
          text-decoration: none;
          color: ${e};
          padding: ${d};
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: ${g},serif;
          transition: color 0.3s, transform 0.2s, background 0.3s;
        }

        .menu ::slotted(a:hover) {
          color: ${o};
          background-color: ${s};
          transform: scale(1.05);
        }

        .menu ::slotted(a.active) {
          color: ${o};
          background-color: ${s};
        }

        .toggle {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }

        .close-btn {
          display: none;
        }

        @media (max-width: 768px) {
          nav { position: relative
          
          
           }
           
           :host {
    width: ${l};
  }
           
          

        .menu {
    position: fixed;
    top: 0;
    
    right: 0;
    transform: translateX(100%); 
    width: 30%;
    height: 100vh;
    background-color: ${i};
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 1000;
    opacity: 0;
   
}

.menu.open {
    transform: translateX(0); 
    opacity: 1;
}


          .toggle { display: block; }
          .close-btn {
            display: block;
            align-self: flex-end;
            background: none;
            border: none;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            color: ${e};
            margin-bottom: 1rem;
          }
        }
      </style>

      <nav>
        <div class="logo-container">
          <slot name="logo-image"></slot>
          <slot name="logo-icon"></slot>
          <div class="logo-text"><slot name="logo">SassiKit</slot></div>
        </div>
        <button class="toggle">☰</button>
        <ul class="menu">
          <button class="close-btn">✕</button>
          <slot name="links"></slot>
        </ul>
      </nav>
    `;
    const c = t.querySelector(".toggle"), m = t.querySelector(".menu"), p = t.querySelector(".close-btn"), u = t.querySelector('slot[name="links"]');
    c.addEventListener("click", () => m.classList.toggle("open")), p.addEventListener("click", () => m.classList.remove("open")), u.addEventListener("slotchange", () => {
      const x = u.assignedElements().filter((b) => b.tagName.toLowerCase() === "a");
      x.forEach((b) => {
        b.addEventListener("click", function() {
          x.forEach((y) => y.classList.remove("active")), this.classList.add("active"), m.classList.remove("open");
        });
      });
    }), document.addEventListener("keydown", (x) => {
      x.key === "Escape" && m.classList.remove("open");
    });
  }
};
customElements.define("side-nav", F);
class j extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("bg-color") || "var(--nav-bg, #fff)", e = this.getAttribute("text-color") || "var(--nav-text, #1e1e2f)", o = this.getAttribute("hover-color") || "var(--nav-hover, #faba1b)", s = this.getAttribute("bg-hover") || "var(--nav-hover-bg, rgba(0,0,0,0.03))", r = this.getAttribute("logo-color") || "var(--nav-logo, purple)", a = this.getAttribute("shadow-color") || "var(--nav-shadow, rgba(0,0,0,0.1))", n = this.getAttribute("radius") || "var(--nav-radius, 12px)", d = this.getAttribute("link-padding") || "var(--nav-link-padding, 0.5rem 0.75rem)", g = this.getAttribute("font-family") || "var(--nav-font, 'Segoe UI', sans-serif)", h = this.getAttribute("width-large") || "90%", l = this.getAttribute("width-small") || "95%";
    t.innerHTML = `
      <style>
        :host { 
          display: block;  
          position: fixed;
          top: 1rem;
          margin-bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: ${h};   
          z-index: 999;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${i};
          padding: 1rem 2rem;
          color: ${e};
          border-radius: ${n};
          box-shadow: 0 8px 24px ${a};
          flex-wrap: wrap;
          animation: slideDown 0.5s ease-out forwards;
        }

        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 16px;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: ${g},serif;
          color: ${r};
        }

        ::slotted([slot="logo-image"]) {
          width: 48px; height: 48px; object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 8px ${a};
        }

        ::slotted([slot="logo-icon"]) {
          width: 24px; height: 24px; object-fit: contain;
          color: ${r};
        }

        .menu {
          display: flex;
          gap: 1rem;
          list-style: none;
          margin: 0; padding: 0;
        }

        .menu ::slotted(a) {
          text-decoration: none;
          color: ${e};
          padding: ${d};
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: ${g},serif;
          transition: color 0.3s, transform 0.2s, background 0.3s;
        }

        .menu ::slotted(a:hover) {
          color: ${o};
          background-color: ${s};       
         
        }

        .menu ::slotted(a.active) {
          color: ${o};
          border-radius: 8px;
          background-color: ${s};
        }

        .toggle {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }

        @media (max-width: 768px) {
        nav{
     position: relative;
        
        }
        
        :host{
        width: ${l};
        }
          .menu {
            flex-direction: column;
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.4s ease;
            opacity: 0;
          }

          .menu.open { max-height: 500px; opacity: 1; }
          .toggle { display: block; }
        }
      </style>

      <nav role="navigation">
        <div class="logo-container">
          <slot name="logo-image"></slot>
          <slot name="logo-icon"></slot>
          <div class="logo-text"><slot name="logo">SassiKit</slot></div>
        </div>
        <button class="toggle" aria-label="Toggle navigation menu">☰</button>
        <ul class="menu"><slot name="links"></slot></ul>
      </nav>
    `;
    const c = t.querySelector(".toggle"), m = t.querySelector(".menu");
    c.addEventListener("click", () => m.classList.toggle("open")), m.addEventListener("click", (p) => {
      const u = this.querySelectorAll('a[slot="links"]');
      p.target.tagName.toLowerCase() === "a" && (u.forEach((x) => x.classList.remove("active")), p.target.classList.add("active"), m.classList.remove("open"));
    }), document.addEventListener("keydown", (p) => {
      p.key === "Escape" && m.classList.remove("open");
    });
  }
  connectedCallback() {
    const t = document.createElement("style");
    t.textContent = `
    html {
      scroll-behavior: smooth;;
    }
  `, document.head.appendChild(t);
  }
}
customElements.define("down-nav", j);
class B extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("bg-color") || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", e = this.getAttribute("text-color") || "#ffffff", o = this.getAttribute("hover-color") || "#faba1b", s = this.getAttribute("bg-hover") || "rgba(255, 255, 255, 0.1)", r = this.getAttribute("sidebar-width") || "250px", a = this.getAttribute("sidebar-bg") || "linear-gradient(180deg, #2c3e50 0%, #1a2530 100%)", n = this.getAttribute("sidebar-hover") || "rgba(255, 255, 255, 0.05)", d = this.getAttribute("sidebar-gap") || "10px", g = this.getAttribute("sidebar-radius") || "0 20px 20px 0", h = this.getAttribute("sidebar-padding") || "2rem 0", l = this.getAttribute("item-color") || "rgba(255, 255, 255, 0.8)", c = this.getAttribute("item-hover-color") || "#ffffff", m = this.getAttribute("icon-size") || "1.2rem", p = this.getAttribute("item-padding") || "12px 20px", u = this.getAttribute("item-transition") || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)";
    t.innerHTML = `
        <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        
        :host { 
            display: block;
            --glow-color: ${o};
            --animation-delay: 0.1s;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${i};
            padding: 10px;
            color: ${e};
            width: 95%;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
            position: sticky;
            top: 0;
            border-radius: 15px;
            margin: 5px auto;
            z-index: 100;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeIn 0.8s ease-out;
            transition: all 0.3s ease;
        }
        
        nav:hover {
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
        }

        .logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            animation: slideInLeft 0.6s ease-out;
        }

        .logo-text {
            font-size: 1.8rem;
            font-weight: bold;
            font-family: 'Poppins', 'Segoe UI', sans-serif;
            color: ${e};
            display: flex;
            align-items: center;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            position: relative;
        }
        
       
        
        .menu {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .menu ::slotted(a) {
            text-decoration: none;
            color: ${e};
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            padding: 0.6rem 1rem;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 500;
            font-family: 'Poppins', sans-serif;
            position: relative;
            overflow: hidden;
        }

        .menu ::slotted(a)::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }
        
        .menu ::slotted(a:hover) {
            color: ${o};
            background-color: ${s};
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .menu ::slotted(a:hover)::before {
            transform: translateX(100%);
        }

        .menu ::slotted(a.active) {
            color: ${o};
            background-color: ${s};
            font-weight: bold;
            box-shadow: 0 0 15px var(--glow-color);
            animation: pulse 2s infinite;
        }

        ::slotted([slot="logo-icon"]) {
            font-size: 2.2rem;
            color: ${o};
            text-shadow: 0 0 10px rgba(250, 186, 27, 0.5);
            animation: float 3s ease-in-out infinite;
            transition: all 0.3s ease;
        }
        
        ::slotted([slot="logo-icon"]:hover) {
            transform: rotate(15deg) scale(1.1);
            filter: drop-shadow(0 0 8px var(--glow-color));
        }

        ::slotted([slot="logo-image"]) {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.4s ease;
        }
        
        ::slotted([slot="logo-image"]:hover) {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 0 20px var(--glow-color);
            border-color: ${o};
        }

        .main-container {
            display: flex;
          
          overflow: auto;
          flex-direction: row;
          gap: :30px;
          justify-content: space-between;
          
            padding: 10px;
            animation: fadeIn 0.8s ease-out;
        }      

        .side_bar {
    width: ${r};
    background: ${a};
    border-radius: ${g};
    padding: ${h};
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 90;
    height: 80vh;
    overflow: hidden; /* Changed from auto to hidden */
    transition: all 0.4s ease;
    cursor: pointer;
}

.side_bar:hover {
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.3);
    overflow-y: auto; /* Show scrollbar only on hover */
}

.side_bar::-webkit-scrollbar {
    width: 6px;
}

.side_bar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
}

.side_bar::-webkit-scrollbar-track {
    background: transparent;
}

        .sidebar-menu {
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: ${d};
        }

        .sidebar-menu ::slotted(a) {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: ${p};
            color: ${l};
            text-decoration: none;
            transition: ${u};
            border-radius: 8px;
            margin: 0 10px;
            position: relative;
            overflow: hidden;
        }
        
        .sidebar-menu ::slotted(a)::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background: ${c};
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.3s ease;
        }

        .sidebar-menu ::slotted(a:hover) {
            background-color: ${n};
            color: ${c};
            transform: translateX(5px);
        }
        
        .sidebar-menu ::slotted(a:hover)::before {
            transform: scaleY(1);
            transform-origin: top;
        }

        .sidebar-menu ::slotted(i) {
            font-size: ${m};
            transition: ${u};
            min-width: ${m};
            text-align: center;
        }

        .sidebar-menu ::slotted(a:hover i) {
            color: ${c};
            transform: scale(1.2);
        }

        .sidebar-menu ::slotted(a.active) {
            background-color: ${n};
            color: ${c};
            font-weight: bold;
            border-left: 3px solid ${c};
            box-shadow: 0 0 15px rgba(250, 186, 27, 0.2);
            transform: translateX(5px);
        }
        
        .sidebar-menu ::slotted(a.active)::before {
            transform: scaleY(1);
        }

        .dashboard-content {
  
    padding: 2rem;
    height: 80vh;
    width:80%;
    
    background-color: #f8f9fa;
    border-radius: 20px 0 0 20px;
    box-shadow: inset 5px 0 15px rgba(0, 0, 0, 0.05);
    animation: fadeIn 0.8s ease-out var(--animation-delay);
    overflow: hidden; /* Changed from auto to hidden */
}

.dashboard-content:hover {
    overflow-y: auto; /* Show scrollbar only on hover */
}

.dashboard-content::-webkit-scrollbar {
    width: 8px;
}

.dashboard-content::-webkit-scrollbar-thumb {
    background: ${a};
    border-radius: 4px;
}

.dashboard-content::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
}


        ::slotted([data-section]) {
            display: none;
            animation: fadeIn 0.6s ease-out;
        }

        ::slotted([data-section].active) {
            display: block;
        }
        
        /* Ripple effect for buttons */
        .ripple {
            position: relative;
            overflow: hidden;
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }

       @media (max-width: 992px) {
     .main-container {
        flex-direction: column;
        height: auto;
        overflow: visible;
    }
    
    .side_bar {
        width: 80%; /* Changed from 100% to 80% */
        padding: 1rem;
        border-radius: 20px;
        height: auto;
        margin-bottom: 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        max-height: none;
        margin-left: auto;
        margin-right: auto;
    }
    
    .sidebar-menu {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 8px;
        padding-bottom: 10px;
        width: max-content;
        min-width: 100%;
    }
    
    .dashboard-content {
        width: 90%;
        height: auto;
        max-height: 60vh; /* Added max-height for scrolling */
        overflow-y: auto; /* Ensure scrolling */
        border-radius: 20px;
        margin-top: 1rem;
        padding: 1.5rem;
    }
    
    .sidebar-menu ::slotted(a) {
        flex-direction: column;
        padding: 10px 15px;
        font-size: 0.9rem;
        min-width: auto;
        margin: 0;
        white-space: nowrap;
    }
    
    .sidebar-menu ::slotted(a span) {
        display: block;
        font-size: 0.8rem;
    }
    
    .sidebar-menu ::slotted(i) {
        font-size: 1.2rem;
        margin: 0 auto;
    }
    
   
    
    nav {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
    }
    
    .menu {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .menu ::slotted(a) {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
  .side_bar {
        width: 92%; /* Maintain 80% width */
        padding: 0.8rem;
    }
    
    .sidebar-menu ::slotted(a) {
        padding: 8px 12px;
    }
    
    .sidebar-menu ::slotted(a span) {
        font-size: 0.7rem;
    }
    
    .sidebar-menu ::slotted(i) {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {

.side_bar {
        width: 90%; /* Maintain 80% width */
    }
    .logo-text {
        font-size: 1.2rem;
    }
    
    ::slotted([slot="logo-icon"]) {
        font-size: 1.5rem;
    }
    
    ::slotted([slot="logo-image"]) {
        width: 35px;
        height: 35px;
    }
    
    .sidebar-menu {
        gap: 5px;
    }
    
    .sidebar-menu ::slotted(a) {
        padding: 6px 10px;
        min-width: 60px;
    }
    
    .sidebar-menu ::slotted(i) {
        font-size: 0.9rem;
    }
    
    .menu ::slotted(a) {
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
    }
    
    .dashboard-content {
        padding: 1rem;
    }
}
}

        }
        </style>

        <div class="main">
            <nav>
                <div class="logo-container">
                    <slot name="logo-image"></slot>
                    <slot name="logo-icon"></slot>
                    <div class="logo-text"><slot name="logo">SassiKit</slot></div>
                </div>
                
                <ul class="menu">
                    <slot name="links"></slot>
                </ul>
            </nav>

            <div class="main-container">
                <aside class="side_bar">
                    <ul class="sidebar-menu">
                        <slot name="sidebar-item"></slot>
                    </ul>
                </aside>

                <div class="dashboard-content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
        `, this.handleSlotChange = this.handleSlotChange.bind(this), this.createRipple = this.createRipple.bind(this);
  }
  connectedCallback() {
    const t = this.shadowRoot.querySelector('slot[name="sidebar-item"]'), i = this.shadowRoot.querySelector('slot[name="content"]');
    this.shadowRoot.querySelector('slot[name="links"]'), t.addEventListener("slotchange", this.handleSlotChange), i.addEventListener("slotchange", this.handleSlotChange), this.addRippleEffects();
  }
  addRippleEffects() {
    this.shadowRoot.querySelectorAll(".menu ::slotted(a), .sidebar-menu ::slotted(a)").forEach((i) => {
      i.classList.add("ripple"), i.addEventListener("click", (e) => {
        this.createRipple(e, i);
      });
    });
  }
  createRipple(t, i) {
    const e = i.getBoundingClientRect(), o = t.clientX - e.left, s = t.clientY - e.top, r = document.createElement("span");
    r.classList.add("ripple-effect"), r.style.left = `${o}px`, r.style.top = `${s}px`, i.appendChild(r), r.addEventListener("animationend", () => {
      r.remove();
    });
  }
  handleSlotChange() {
    const t = this.shadowRoot.querySelector('slot[name="sidebar-item"]'), i = this.shadowRoot.querySelector('slot[name="content"]'), e = t.assignedElements({ flatten: !0 }), o = i.assignedElements({ flatten: !0 });
    if (e.forEach((s) => {
      s.addEventListener("click", (r) => {
        r.preventDefault();
        const a = s.getAttribute("data-target");
        if (!a) return;
        e.forEach((d) => d.classList.remove("active")), o.forEach((d) => d.classList.remove("active")), s.classList.add("active");
        const n = o.find((d) => d.getAttribute("data-section") === a);
        n && (n.classList.add("active"), n.style.animation = "fadeIn 0.6s ease-out");
      });
    }), e.length > 0 && o.length > 0) {
      const s = e[0], r = s.getAttribute("data-target"), a = o.find((n) => n.getAttribute("data-section") === r);
      document.querySelector("sassi-db [data-section].active") || (s.classList.add("active"), a && (a.classList.add("active"), a.style.animation = "fadeIn 0.6s ease-out"));
    }
    this.addRippleEffects();
  }
}
customElements.define("dash-board", B);
class Y extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("bg-color") || "#2c3e50", e = this.getAttribute("text-color") || "#ecf0f1", o = this.getAttribute("hover-color") || "#faba1b", s = this.getAttribute("link-color") || "#bdc3c7", r = this.getAttribute("padding") || "2rem", a = this.getAttribute("columns") || "4", n = this.getAttribute("column-gap") || "2rem", d = this.getAttribute("row-gap") || "1rem", g = this.getAttribute("border-top") || "1px solid rgba(255,255,255,0.1)", h = this.getAttribute("social-icon-size") || "1.5rem", l = this.getAttribute("social-icon-gap") || "1rem";
    t.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .footer {
          background-color: ${i};
          color: ${e};
          padding: ${r};
          display: grid;
          grid-template-columns: repeat(${a}, 1fr);
          gap: ${n};
          border-top: ${g};
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: ${d};
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: ${e};
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links ::slotted(a) {
          color: ${s};
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links ::slotted(a:hover) {
          color: ${o};
        }

        .footer-text {
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: ${l};
          margin-top: 1rem;
        }

        .social-links ::slotted(a) {
          color: ${s};
          font-size: ${h};
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-links ::slotted(a:hover) {
          color: ${o};
          transform: translateY(-3px);
        }

        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .footer {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <footer class="footer">
        <div class="footer-column">
          <slot name="column-1-title"></slot>
          <div class="footer-links">
            <slot name="column-1-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-2-title"></slot>
          <div class="footer-links">
            <slot name="column-2-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-3-title"></slot>
          <div class="footer-links">
            <slot name="column-3-links"></slot>
          </div>
        </div>

        <div class="footer-column">
          <slot name="column-4-title"></slot>
          <div class="footer-text">
            <slot name="column-4-content"></slot>
          </div>
          <div class="social-links">
            <slot name="social-links"></slot>
          </div>
        </div>

        <div class="copyright">
          <slot name="copyright"></slot>
        </div>
      </footer>
    `;
  }
}
customElements.define("footer-layout", Y);
class _ extends HTMLElement {
  static get observedAttributes() {
    return [
      "fields",
      "form-label",
      "field-types",
      "options",
      "submit-text",
      "bg-color",
      "text-color",
      "input-bg",
      "input-border",
      "input-border-width",
      "input-border-style",
      "border-radius",
      "padding",
      "input-height",
      "textarea-height",
      "label-transition",
      "enable-focus",
      "font-size",
      "font-family",
      "label-color",
      "button-font-size"
    ];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const t = this.shadowRoot, i = this.getAttribute("fields")?.split(",") || ["email", "password"], e = this.getAttribute("form-label") || "Log In ", o = this.getAttribute("field-types")?.split(",") || [], s = this.getAttribute("options")?.split(";") || [], r = this.getAttribute("submit-text") || "Sign In", a = this.getAttribute("bg-color") || "#ffffff", n = this.getAttribute("text-color") || "#333333", d = this.getAttribute("input-bg") || "#f8f9fa", g = this.getAttribute("input-border") || "#e0e0e0", h = this.getAttribute("input-border-width") || "1px", l = this.getAttribute("input-border-style") || "solid", c = this.getAttribute("border-radius") || "8px", m = this.getAttribute("padding") || "2rem", p = this.getAttribute("input-height") || "3rem", u = this.getAttribute("textarea-height") || "100px", x = this.getAttribute("label-transition") || "all 0.3s ease", b = this.getAttribute("enable-focus") !== "false", y = this.getAttribute("font-size") || "1rem", $ = this.getAttribute("font-family") || "Arial, sans-serif", k = this.getAttribute("label-color") || "#999", A = this.getAttribute("button-font-size") || "1rem", C = i.map((v, z) => {
      let w = "text";
      v.toLowerCase() === "password" && (w = "password"), v.toLowerCase() === "email" && (w = "email"), v.toLowerCase() === "date" && (w = "date"), o[z] && (w = o[z]);
      let S = "";
      return w === "select" && s[z] && (S = s[z].split(",").map((E) => {
        const [I, M] = E.split(":");
        return `<option value="${I || E.trim()}">${M || E.trim()}</option>`;
      }).join("")), w === "select" ? `
            <div class="form-group">
              <select id="${v}" name="${v}" required>
                <option value="" disabled selected></option>
                ${S}
              </select>
              <label for="${v}">${v.charAt(0).toUpperCase() + v.slice(1)}</label>
            </div>` : w === "textarea" ? `
            <div class="form-group textarea-group">
              <textarea id="${v}" name="${v}" required placeholder=" "></textarea>
              <label for="${v}">${v.charAt(0).toUpperCase() + v.slice(1)}</label>
            </div>` : `
            <div class="form-group">
              <input type="${w}" id="${v}" name="${v}" required placeholder=" " />
              <label for="${v}">${v.charAt(0).toUpperCase() + v.slice(1)}</label>
            </div>`;
    }).join("");
    t.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          font-size: ${y};
          font-family: ${$};
        }

        .form-container {
          background-color: ${a};
          padding: ${m};
          border-radius: ${c};
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   
      
        }
        
        form{
            margin-bottom: 8px;
        
        }

        .form-title {
          font-size: 1.5em;
          margin-bottom: 1.5rem;
          color: ${n};
          text-align: center;
        }

        .form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }

        input, select, textarea {
          width: 100%;
          font-size: 1em;
          background-color: ${d};
          border: ${h} ${l} ${g};
          border-radius: ${c};
          transition: all 0.3s ease;
          box-sizing: border-box;
          color: ${n};
          font-family: ${$};
        }

        input, select {
          height: ${p};
          padding: 0 1rem;
        }

        textarea {
          height: ${u};
          padding: 1rem;
          resize: vertical;
          min-height: ${u};
        }

      ${b ? `
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${n};
          border-width: ${h};
          border-style: ${l};
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
        }` : `
        input:focus, select:focus, textarea:focus {
          outline: none;
        }
`}

        label {
          position: absolute;
          top: ${p};
          left: 1rem;
          transform: translateY(-50%);
          color: ${k};
          pointer-events: none;
          transition: ${x};
          background-color: ${d};
          padding: 0 0.3rem;
        }

        input:focus + label,
        input:not(:placeholder-shown) + label,
        select:focus + label,
        select:valid + label,
        textarea:focus + label,
        textarea:not(:placeholder-shown) + label {
          top: 0;
          transform: translateY(-50%);
          font-size: 0.8em;
          color: ${n};
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: ${n};
          color: white;
          border: none;
          border-radius: ${c};
          font-size: ${A};
          font-family: ${$},serif;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      </style>

      <div class="form-container">
        <slot name="form-title"><h2 class="form-title">${e}</h2></slot>
        <form>
          ${C}
          <button type="submit">${r}</button>
        </form>
        <div class="form-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
    const T = t.querySelector("form");
    T.addEventListener("submit", (v) => {
      if (v.preventDefault(), T.checkValidity()) {
        const z = new FormData(T), w = Object.fromEntries(z.entries());
        this.dispatchEvent(
          new CustomEvent("form-submit", {
            detail: { data: w },
            bubbles: !0,
            composed: !0
          })
        );
      } else
        T.reportValidity();
    });
  }
}
customElements.define("form-layout", _);
class W extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("bg-color") || "white", e = this.getAttribute("item-bg-color") || "white", o = this.getAttribute("arrow-bg-color") || "white", s = this.getAttribute("arrow-color") || "black", r = this.getAttribute("controller-bg-color") || "transparent", a = this.getAttribute("item-width") || "200px", n = this.getAttribute("item-height") || "150px", d = this.getAttribute("slider-height") || "30vh", g = this.getAttribute("arrow-size") || "20px", h = this.getAttribute("item-gap") || "10px", l = this.getAttribute("border-radius") || "8px", c = parseInt(a) + parseInt(h);
    t.innerHTML = `
        <style>
            :host { 
                display: block;
                position: relative;
            }

            .slider-container {
                width: 98%;
                background-color: ${i};
                height: ${d};
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: end;
                justify-content: start;
                padding: 18px;
            }

            .controller {
                display: flex;
                gap: ${h};
                flex-direction: row;
                background-color: ${r};
                margin-bottom: 10px;
                padding: 5px;
                border-radius: ${l};
            }
            
            .arrow {
                background: ${o};
                border: none;
                padding: 10px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .arrow:hover {
                transform: scale(1.05);
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
            }
            
            .arrow svg {
                width: ${g};
                height: ${g};
                fill: ${s};
            }
            
            .slider {
                display: flex;
                width: 100%;
                margin: auto;
                flex-direction: row;
                gap: ${h};
                flex-shrink: 0;
                justify-content: start;
                align-items: start;
                overflow-x: auto;
                scroll-behavior: smooth;
                scroll-snap-type: x mandatory;
                padding-bottom: 10px;
            }

            .slider::-webkit-scrollbar {
                display: none;
            }

            ::slotted([slot="slider-item"]) {
                width: ${a};
                height: ${n};
                background: ${e};
                margin: 5px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: ${l};
                scroll-snap-align: start;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                cursor: pointer;
            }
            
            ::slotted([slot="slider-item"]) img {
                border-radius: ${l};
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            /* Image zoom modal styles */
            .modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 1000;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }

            .modal-content {
                max-width: 95%;
                max-height: 95%;
                object-fit: contain;
                transform: scale(0.7);
                opacity: 0;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .modal.show .modal-content {
                transform: scale(1);
                opacity: 1;
            }

            .close {
                position: absolute;
                top: 20px;
                right: 30px;
                color: white;
                font-size: 30px;
                font-weight: bold;
                cursor: pointer;
            }
        </style>

        <div class="slider-container">
            <div class="controller">
                <button class="arrow left" aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M279 224H104.1l72.3-72.3c9.4-9.4 9.4-24.6 
                        0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 
                        0l-128 128c-9.4 9.4-9.4 24.6 0 33.9l128 
                        128c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 
                        9.4-24.6 0-33.9L104.1 288H279c13.3 
                        0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24z"/>
                    </svg>
                </button>

                <button class="arrow right" aria-label="Next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M41 288h174.9l-72.3 72.3c-9.4 9.4-9.4 24.6 
                        0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 
                        0l128-128c9.4-9.4 9.4-24.6 0-33.9l-128-128c-9.4-9.4-24.6-9.4-33.9 
                        0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9L215.9 224H41c-13.3 
                        0-24 10.7-24 24v32c0 13.3 10.7 24 24 24z"/>
                    </svg>
                </button>
            </div>

            <div class="slider">
                <slot name="slider-item"></slot>
            </div>
        </div>
        
        <div class="modal">
            <span class="close">&times;</span>
            <img class="modal-content">
        </div>
        `;
    const m = t.querySelector(".slider"), p = t.querySelector(".left"), u = t.querySelector(".right");
    p.addEventListener("click", () => {
      m.scrollBy({ left: -c, behavior: "smooth" });
    }), u.addEventListener("click", () => {
      m.scrollBy({ left: c, behavior: "smooth" });
    });
    const x = t.querySelector('slot[name="slider-item"]');
    x.addEventListener("slotchange", () => {
      x.assignedElements().forEach((A) => {
        const C = A.querySelector("img");
        C && (C.style.borderRadius = l, C.style.cursor = "pointer");
      });
    });
    const b = t.querySelector(".modal"), y = t.querySelector(".modal-content"), $ = t.querySelector(".close");
    m.addEventListener("click", (k) => {
      const A = k.target.closest('[slot="slider-item"]');
      if (A) {
        const C = A.querySelector("img");
        C && (b.style.display = "flex", b.classList.add("show"), y.src = C.src, y.alt = C.alt || "", document.body.style.overflow = "hidden");
      }
    }), $.addEventListener("click", () => {
      b.classList.remove("show"), b.style.display = "none", document.body.style.overflow = "";
    }), b.addEventListener("click", (k) => {
      k.target === b && (b.classList.remove("show"), b.style.display = "none", document.body.style.overflow = "");
    });
  }
}
customElements.define("arrow-slider", W);
class P extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("width") || "300px", e = this.getAttribute("height") || "300px", o = this.getAttribute("layer-color") || "rgba(0, 0, 0, 0.7)", s = this.getAttribute("layer-text") || "", r = this.getAttribute("text-color") || "white", a = this.getAttribute("text-size") || "32px", n = this.getAttribute("text-weight") || "bold";
    t.innerHTML = `
      <style>
        :host {
          display: block;
          width: ${i};
          height: ${e};
          margin: 10px;
        }

        .card-container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          box-shadow: 1px 0 5px darkgray;
          position: relative;
          overflow: hidden;
        }

        .content {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .layer {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: ${o};
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;
          color: ${r};
          font-size: ${a};
          font-weight: ${n};
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .card-container:hover .layer {
          opacity: 1;
        }

        ::slotted([slot="card-content"]) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      </style>

      <div class="card-container">
        <div class="content">
          <slot name="card-content"></slot>
          <div class="layer">${s}</div>
        </div>
      </div>
    `;
  }
}
customElements.define("overlay-card", P);
class X extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.shadowRoot, i = this.querySelectorAll("[slot='slide']"), e = parseInt(this.getAttribute("columns") || "2"), o = parseInt(this.getAttribute("rows") || "2"), s = e * o, r = parseInt(this.getAttribute("card-width") || "200"), a = parseInt(this.getAttribute("gap") || "12"), n = r * o + a * (o - 1), d = n + 30;
    t.innerHTML = `
      <style>
        .dot-slider {
          height: ${d}px;
          margin: auto;
          display: flex;
          flex-direction: column;
          background-color: transparent;
          border-radius: 8px;
          box-sizing: border-box;
          width: ${r * e + a * (e - 1)}px;
        }

        .content-wrapper {
          width: 100%;
          height: ${n}px;
          margin: auto;
          overflow: hidden;
          position: relative;
        }

        .content {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }

        .slide-group {
          flex: 0 0 100%;
          display: grid;
          grid-template-columns: repeat(${e}, ${r}px);
          grid-template-rows: repeat(${o}, ${r}px);
          gap: ${a}px;
          box-sizing: border-box;
        }

        ::slotted([slot='slide']) {
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${r}px;
          height: ${r}px;
        }

        ::slotted([slot='slide']:hover) {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          gap: 10px;
          height: 20px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #ccc;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .dot.active {
          background-color: #3a157f;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .dot-slider {
            width: ${r * 2 + a}px;
            height: ${r * o + a * (o - 1) + 30}px;
          }
          
          .slide-group {
            grid-template-columns: repeat(2, ${r}px);
          }
        }

        @media (max-width: 480px) {
          .dot-slider {
            width: ${r}px;
            height: ${r * o + a * (o - 1) + 30}px;
          }
          
          .slide-group {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="dot-slider">
        <div class="content-wrapper">
          <div class="content"></div>
        </div>
        <div class="dots-container"></div>
      </div>
    `;
    const g = t.querySelector(".content"), h = t.querySelector(".dots-container"), l = Array.from(i), c = Math.ceil(l.length / s);
    for (let p = 0; p < c; p++) {
      const u = document.createElement("div");
      u.className = "slide-group";
      const x = p * s, b = x + s;
      for (let y = x; y < b && y < l.length; y++) {
        const $ = l[y].cloneNode(!0);
        u.appendChild($);
      }
      g.appendChild(u);
    }
    for (let p = 0; p < c; p++) {
      const u = document.createElement("div");
      u.classList.add("dot"), p === 0 && u.classList.add("active"), u.addEventListener("click", () => m(p)), h.appendChild(u);
    }
    const m = (p) => {
      const u = -p * 100;
      g.style.transform = `translateX(${u}%)`, t.querySelectorAll(".dot").forEach((x, b) => {
        x.classList.toggle("active", b === p);
      });
    };
    m(0);
  }
}
customElements.define("dot-slider", X);
class D extends HTMLElement {
  static get observedAttributes() {
    return [
      "delay",
      "animate-by",
      "text-color",
      "font-size",
      "font-family",
      "font-weight"
    ];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.renderTemplate();
  }
  renderTemplate() {
    const t = this.getAttribute("delay") || 100, i = this.getAttribute("animate-by") || "letters", e = this.getAttribute("text-color") || "#000", o = this.getAttribute("font-size") || "1rem", s = this.getAttribute("font-family") || "inherit", r = this.getAttribute("font-weight") || "normal";
    this.shadowRoot.innerHTML = `
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
                    color: ${e};
                    font-size: ${o};
                    font-family: ${s};
                    font-weight: ${r};
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
        `, this.delay = t, this.animateBy = i;
  }
  connectedCallback() {
    this.renderText(), requestAnimationFrame(() => {
      this.setAttribute("ready", "");
    });
  }
  attributeChangedCallback(t, i, e) {
    i !== e && (["text-color", "font-size", "font-family", "font-weight"].includes(t) && this.renderTemplate(), this.renderText());
  }
  renderText() {
    const t = this.textContent || "", i = this.shadowRoot.querySelector(".blur-text");
    if (!i) return;
    let e = [], o = "";
    this.animateBy === "letters" ? e = t.split("") : this.animateBy === "words" && (e = t.split(" ").map((s) => s + " "), o = " "), i.innerHTML = e.map(
      (s, r) => `<span style="animation-delay: ${r * (this.delay / 1e3)}s">${s === " " ? "&nbsp;" : s}</span>`
    ).join(o);
  }
}
customElements.define("blur-text", D);
class N extends HTMLElement {
  static get observedAttributes() {
    return [
      "bg-color",
      "border-radius",
      "shadow",
      "padding",
      "min-height",
      "main-height",
      "thumb-size",
      "container-width"
    ];
  }
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    t.innerHTML = `
      <style>
        :host {
          display: block;
          width: var(--container-width, 100%);
          max-width: 100%;
          margin: 0 auto;
          visibility: hidden;
          font-family: "Segoe UI", sans-serif;
        }
        :host([ready]) {
          visibility: visible;
        }

        .th-container {
          width: 100%;
          height: auto;
          min-height: var(--min-height, 500px);
          background: var(--bg-color, #ffffff);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--padding, 20px);
          box-sizing: border-box;
          border-radius: var(--border-radius, 20px);
          box-shadow: var(--shadow, 0 6px 20px rgba(0,0,0,0.1));
          transition: all 0.3s ease;
        }

        .th-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.15);
        }

        .l-img {
          width: var(--main-width, 100%);
         
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          border-radius: var(--border-radius, 20px);
          overflow: hidden;
          border: 1px solid #ddd;
        
        }

        .l-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .l-img img:hover {
          transform: scale(1.03);
        }

        .s-img-container {
       
          width: 95%;
          overflow-x: auto;
          padding: 10px 5px;
          box-sizing: border-box;
          display: flex;
          justify-content: start;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        
          -ms-overflow-style: none;
        }
        .s-img-container::-webkit-scrollbar {
          display: none; 
        }

        .s-img {
          display: flex;
          gap: 14px;
          border-radius: 20px;
         
      
        }

        ::slotted(img) {
          width: var(--thumb-size, 80px);
          height: var(--thumb-size, 80px);
          min-width: var(--thumb-size, 80px);
          object-fit: cover;
          cursor: pointer;
          border: 2px solid #e0e0e0;
          transition: all 0.3s ease;
          border-radius: var(--border-radius, 14px);
          background-color: #fafafa;
          position: relative;
          scroll-snap-align: center;
        }

        ::slotted(img:hover) {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-color: #bbb;
        }

        ::slotted(img.active) {
          border-color: #0078ff;
          box-shadow: 0 4px 12px rgba(0,120,255,0.2);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .th-container {
            padding: 15px;
            min-height: 400px;
          }

          .l-img {
            height: 280px;
          }

          ::slotted(img) {
            width: 70px;
            height: 70px;
            min-width: 70px;
          }
        }

        @media (max-width: 480px) {
          .th-container {
            padding: 12px;
            min-height: 320px;
          }

          .l-img {
            height: 220px;
            margin-bottom: 15px;
          }

          ::slotted(img) {
            width: 60px;
            height: 60px;
            min-width: 60px;
          }
        }
      </style>

      <div class="th-container">
        <div class="l-img">
          <img id="main-img" src="" alt="Preview" />
        </div>

        <div class="s-img-container">
          <div class="s-img">
            <slot name="s-img"></slot>
          </div>
        </div>
      </div>
    `, this.addEventListener("click", (i) => {
      if (i.target.tagName === "IMG" && i.target.slot === "s-img") {
        const e = t.getElementById("main-img");
        e.src = i.target.src, this.querySelectorAll('img[slot="s-img"]').forEach((o) => {
          o.classList.remove("active");
        }), i.target.classList.add("active");
      }
    }), setTimeout(() => {
      const i = this.querySelector('img[slot="s-img"]');
      i && (i.classList.add("active"), t.getElementById("main-img").src = i.src), this.setAttribute("ready", "");
    }, 0);
  }
  attributeChangedCallback(t, i, e) {
    if (!this.shadowRoot) return;
    const o = this.shadowRoot.querySelector(".th-container"), s = this.shadowRoot.querySelector(".l-img");
    switch (t) {
      case "bg-color":
        o.style.backgroundColor = e || "#ffffff";
        break;
      case "border-radius":
        o.style.borderRadius = e || "20px";
        break;
      case "shadow":
        o.style.boxShadow = e || "0 6px 20px rgba(0,0,0,0.1)";
        break;
      case "padding":
        o.style.padding = e || "20px";
        break;
      case "min-height":
        o.style.minHeight = e || "500px";
        break;
      case "main-height":
        s.style.height = e || "350px";
        break;
      case "container-width":
        this.style.setProperty("--container-width", e || "100%");
        break;
      case "thumb-size":
        this.style.setProperty("--thumb-size", e || "80px");
        break;
    }
  }
}
customElements.define("th-img", N);
class G extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" });
    this.delay = parseInt(this.getAttribute("delay")) || 100, this.textColor = this.getAttribute("text-color") || "#000", this.fontSize = this.getAttribute("font-size") || "24px", this.fontFamily = this.getAttribute("font-family") || "Arial, sans-serif", this.pause = parseInt(this.getAttribute("pause")) || 1e3, this.fontWeight = this.getAttribute("font-weight") || "normal", this.texts = (this.getAttribute("data-texts") || this.textContent.trim()).split(","), t.innerHTML = `
            <style>
            
             :host {
                    display: inline-block;
                    vertical-align: middle;
                }
                .typed-text {
                    color: ${this.textColor};
                    font-size: ${this.fontSize};
                    font-family: ${this.fontFamily};
                    font-weight: ${this.fontWeight}; 
                    height: 1em;
                    line-height: 1;
                   
                }
                .cursor {
                    display: inline-block;
                    width: 3px;
                    height: 1em;
                    background-color: ${this.textColor};
                    animation: blink 0.7s infinite;
                    margin-left: 2px;
                   
                     vertical-align: middle;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    50.1%, 100% { opacity: 0; }
                }
            </style>
            <div class="typed-text"></div>
        `;
  }
  connectedCallback() {
    this.startTyping();
  }
  async startTyping() {
    const t = this.shadowRoot.querySelector(".typed-text");
    for (; ; )
      for (const i of this.texts) {
        const e = i.trim();
        t.innerHTML = '<span class="cursor"></span>';
        for (let o = 0; o < e.length; o++)
          t.insertBefore(
            document.createTextNode(e[o]),
            t.querySelector(".cursor")
          ), await this.sleep(this.delay);
        for (await this.sleep(this.pause); t.childNodes.length > 0; )
          t.removeChild(t.childNodes[t.childNodes.length - 1]), await this.sleep(this.delay / 2);
        await this.sleep(this.delay * 2);
      }
  }
  sleep(t) {
    return new Promise((i) => setTimeout(i, t));
  }
}
customElements.define("typed-text", G);
class O extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.textContent || this.getAttribute("text") || "", e = this.getAttribute("speed") || "3s", o = this.getAttribute("text-color") || "#000", s = this.getAttribute("font-size") || "inherit", r = this.getAttribute("font-weight") || "bold", a = this.getAttribute("font-family") || "inherit", n = "rgba(255, 255, 255, 0.7)";
    t.innerHTML = `
      <style>
        .shiny-text {
          position: relative;
          display: inline-block;
          font-size: ${s};
          font-weight: ${r};
          font-family: ${a};
          color: ${o};
          background: linear-gradient(
            120deg,
            ${o},
            ${n},
            ${o}
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine ${e} linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      </style>
      <span class="shiny-text">${i}</span>
    `;
  }
}
customElements.define("shiny-text", O);
class U extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("text") || this.textContent || "True Focus", e = this.getAttribute("blur") || "5", o = this.getAttribute("duration") || "0.5", s = this.getAttribute("border-color") || "green", r = this.getAttribute("font-size") || "3rem", a = this.getAttribute("font-weight") || "900", n = this.getAttribute("font-color") || "#ffffff", d = this.getAttribute("font-family") || "inherit", g = s.includes("rgba") ? "black" : s;
    t.innerHTML = `
      <style>
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1em;
          flex-wrap: wrap;
        }

        .word {
          font-size: ${r};
          font-weight: ${a};
          font-family: ${d}; /* 👈 new */
          color: ${n};
          transition: filter ${o}s ease;
        }

        .focus-frame {
          position: absolute;
          box-sizing: content-box;
          transition: left 0.5s ease, top 0.5s ease, width 0.5s ease, height 0.5s ease;
        }

        .corner {
          position: absolute;
          width: 1rem;
          height: 1rem;
          border: 3px solid ${s};
          filter: drop-shadow(0 0 4px ${g});
          border-radius: 3px;
        }

        .top-left {
          top: -10px;
          left: -10px;
          border-right: none;
          border-bottom: none;
        }

        .top-right {
          top: -10px;
          right: -10px;
          border-left: none;
          border-bottom: none;
        }

        .bottom-left {
          bottom: -10px;
          left: -10px;
          border-right: none;
          border-top: none;
        }

        .bottom-right {
          bottom: -10px;
          right: -10px;
          border-left: none;
          border-top: none;
        }
      </style>

      <div class="container" id="container">
        ${i.split(" ").map((b) => `<span class="word">${b}</span>`).join("")}
        <div class="focus-frame" id="frame">
          <span class="corner top-left"></span>
          <span class="corner top-right"></span>
          <span class="corner bottom-left"></span>
          <span class="corner bottom-right"></span>
        </div>
      </div>
    `;
    const h = t.getElementById("container"), l = t.getElementById("frame"), c = Array.from(t.querySelectorAll(".word"));
    let m = 0;
    function p() {
      const b = c[m], y = b.getBoundingClientRect(), $ = h.getBoundingClientRect();
      l.style.left = `${y.left - $.left}px`, l.style.top = `${y.top - $.top}px`, l.style.width = `${y.width}px`, l.style.height = `${y.height}px`, c.forEach((k) => k.style.filter = `blur(${e}px)`), b.style.filter = "blur(0)", m = (m + 1) % c.length;
    }
    const u = (+o + 1) * 1e3;
    function x() {
      p(), setTimeout(x, u);
    }
    requestAnimationFrame(() => {
      p(), x();
    });
  }
}
customElements.define("focus-text", U);
class J extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const t = document.createElement("canvas");
    this.canvas = t, this.shadowRoot.appendChild(t);
  }
  connectedCallback() {
    this.renderFuzzyEffect();
  }
  disconnectedCallback() {
    cancelAnimationFrame(this.frameId), this.cleanupListeners();
  }
  renderFuzzyEffect() {
    const t = this.canvas, i = t.getContext("2d"), e = this.getAttribute("text") || this.textContent || "Hello!", o = this.getAttribute("color") || "#fff", s = this.getAttribute("font-size") || "5rem", r = this.getAttribute("font-weight") || "900", a = this.getAttribute("font-family") || "monospace", n = parseFloat(this.getAttribute("base-intensity") || "0.3"), d = parseFloat(this.getAttribute("hover-intensity") || "0.5"), g = this.hasAttribute("enable-hover");
    let h = !1;
    const l = document.createElement("canvas"), c = l.getContext("2d"), m = document.createElement("span");
    m.style.fontSize = s, document.body.appendChild(m);
    const p = parseFloat(getComputedStyle(m).fontSize);
    document.body.removeChild(m);
    const u = `${r} ${s} ${a}`;
    c.font = u, c.textBaseline = "alphabetic";
    const x = c.measureText(e), b = x.actualBoundingBoxAscent || p, y = x.actualBoundingBoxDescent || p * 0.2, $ = Math.ceil(x.width), k = Math.ceil(b + y);
    l.width = $, l.height = k, c.font = u, c.fillStyle = o, c.fillText(e, 0, b);
    const A = 50;
    t.width = $ + A * 2, t.height = k, i.translate(A, 0);
    const C = () => {
      i.clearRect(-A, 0, t.width, t.height);
      const w = h ? d : n, S = 30;
      for (let L = 0; L < k; L++) {
        const E = Math.floor((Math.random() - 0.5) * S * w);
        i.drawImage(l, 0, L, $, 1, E, L, $, 1);
      }
      this.frameId = requestAnimationFrame(C);
    };
    C();
    const T = (w, S) => w >= A && w <= A + $ && S >= 0 && S <= k, v = (w) => {
      const S = t.getBoundingClientRect(), L = w.clientX - S.left, E = w.clientY - S.top;
      h = T(L, E);
    }, z = () => h = !1;
    g && (t.addEventListener("mousemove", v), t.addEventListener("mouseleave", z), this._cleanup = () => {
      t.removeEventListener("mousemove", v), t.removeEventListener("mouseleave", z);
    });
  }
  cleanupListeners() {
    this._cleanup && this._cleanup();
  }
}
customElements.define("fuzzy-text", J);
class Z extends HTMLElement {
  constructor() {
    super(), this.cardWidth = parseInt(this.getAttribute("card-width") || "250"), this.cardHeight = parseInt(this.getAttribute("card-height") || "250"), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `
      <style>
        .stack-container {
          position: relative;
          perspective: 600px;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          background-color: transparent;
        }
        .card-rotate {
          position: absolute;
          cursor: grab;
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.3s ease;
          top: 0;
          left: 0;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          border-radius: 20px;
        }
        .card {
          border-radius: 20px;
          border: 5px solid white;
          overflow: hidden;
          width: ${this.cardWidth}px;
          height: ${this.cardHeight}px;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .card img {
          pointer-events: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
        }
        .card-rotate.active {
          cursor: grabbing;
          z-index: 100;
          transition: transform 0.3s ease;
        }
      </style>
      <div class="stack-container"></div>
    `, this.container = this.shadowRoot.querySelector(".stack-container"), this.cards = [], this.sensitivity = parseInt(this.getAttribute("sensitivity") || "100"), this.rotationFactor = parseInt(this.getAttribute("rotation-factor") || "4"), this.currentDraggingCard = null;
  }
  connectedCallback() {
    const t = JSON.parse(this.getAttribute("cards") || "[]");
    this.createCards(t);
  }
  createCards(t) {
    this.cards = t.map((i, e) => {
      const o = document.createElement("div");
      o.classList.add("card-rotate"), o.style.zIndex = this.cards.length - e;
      const s = document.createElement("div");
      s.classList.add("card");
      const r = document.createElement("img");
      return r.src = i, s.appendChild(r), o.appendChild(s), this.addDragEvents(o, e), this.container.appendChild(o), o;
    }), this.updateStackTransforms();
  }
  updateStackTransforms() {
    const e = 40 / this.cards.length, o = 2 / this.cards.length;
    this.cards.forEach((s, r) => {
      if (s !== this.currentDraggingCard) {
        const a = e * (this.cards.length - r - 1), n = o * (this.cards.length - r - 1);
        s.style.transform = `
                translateX(${a}px) 
                rotateZ(${n}deg) 
                translateY(0) 
                rotateX(0deg) 
                rotateY(0deg)
            `;
      }
    });
  }
  addDragEvents(t, i) {
    let e, o, s, r;
    const a = (g) => {
      this.currentDraggingCard = t, t.classList.add("active"), e = g.clientX, o = g.clientY, t.setPointerCapture(g.pointerId);
    }, n = (g) => {
      if (!this.currentDraggingCard) return;
      s = g.clientX - e, r = g.clientY - o;
      const h = -r / 100 * 30, l = s / 100 * 30;
      t.style.transform = `
        translate(${s}px, ${r}px)
        rotateX(${h}deg)
        rotateY(${l}deg)
        rotateZ(${(this.cards.length - i - 1) * this.rotationFactor}deg)
      `;
    }, d = (g) => {
      if (!this.currentDraggingCard) return;
      t.classList.remove("active"), this.currentDraggingCard = null;
      const h = s || 0, l = r || 0;
      Math.sqrt(h * h + l * l) > this.sensitivity ? this.moveCardToBack(t) : this.updateStackTransforms();
    };
    t.addEventListener("pointerdown", a), t.addEventListener("pointermove", n), t.addEventListener("pointerup", d), t.addEventListener("pointercancel", d), t.addEventListener("pointerleave", d);
  }
  moveCardToBack(t) {
    const i = this.cards.indexOf(t);
    this.cards.splice(i, 1), this.cards.push(t), this.cards.forEach((e, o) => {
      e.style.zIndex = this.cards.length - o;
    }), this.updateStackTransforms();
  }
}
customElements.define("card-stack", Z);
class K extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = parseFloat(this.getAttribute("start") || "0"), e = parseFloat(this.getAttribute("end") || "100"), o = parseInt(this.getAttribute("decimals") || "0"), r = parseFloat(this.getAttribute("duration") || "2") * 1e3, a = this.getAttribute("font-size") || "inherit", n = this.getAttribute("font-weight") || "normal", d = this.getAttribute("color") || "inherit", g = this.getAttribute("font-family") || "inherit";
    t.innerHTML = `
        <style>
            :host {
                display: inline-block;
            }
            .counter {
                font-size: ${a};
                font-weight: ${n};
                color: ${d};
                font-family: ${g}, serif;
                display: inline-block;
                transition: transform 0.2s ease;
            }
        </style>
        <span class="counter">${i.toFixed(o)}</span>
        `;
    const h = t.querySelector(".counter"), l = (p) => p * (2 - p), c = () => {
      if (i === e) return;
      const p = performance.now(), u = (x) => {
        let b = Math.min((x - p) / r, 1);
        b = l(b);
        const y = i + (e - i) * b;
        h.textContent = y.toFixed(o), b < 0.3 ? h.style.transform = "scale(1.1)" : h.style.transform = "scale(1)", b < 1 && requestAnimationFrame(u);
      };
      requestAnimationFrame(u);
    }, m = new IntersectionObserver((p) => {
      p[0].isIntersecting && (c(), m.disconnect());
    });
    m.observe(this);
  }
}
customElements.define("counter-text", K);
class Q extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("text") || "Changing", e = this.getAttribute("changing-texts")?.split(",").map((c) => c.trim()) || ["Text"], o = this.getAttribute("font-size") || "inherit", s = this.getAttribute("font-weight") || "normal", r = this.getAttribute("color") || "inherit", a = this.getAttribute("font-family") || "inherit", n = parseInt(this.getAttribute("interval") || "2500"), d = this.getAttribute("bg-color") || "plum", g = this.getAttribute("border-radius") || "4px", h = this.getAttribute("padding") || "0.25rem 0.5rem";
    t.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        .container {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .main-text {
          font-size: ${o};
          font-weight: ${s};
          color: ${r};
          font-family: ${a},serif;
        }

        .changing-text-container {
          border-radius: ${g};
          padding: ${h};
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${d};
          position: relative;
          overflow: hidden;
          width: auto;
          transition: width 0.4s ease; /* smooth resize */
        }

        .changing-text {
          font-size: ${o};
          font-weight: ${s};
          color: ${r};
          display: flex;
          justify-content: center;  
          align-items: center;
          background-color: red;
          font-family: ${a},serif;
          position: relative;
          height: 1em;
        }

        .word {
          position: absolute;
          white-space: nowrap;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .word.current {
          animation: popIn 0.6s forwards;
        }

        .word.exiting {
          animation: popOut 0.6s forwards;
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translate(-50%, 100%) scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -10%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
        
        @keyframes popOut {
          0% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -120%) scale(0.8);
          }
        }
      </style>

      <div class="container">
        <span class="main-text">${i}</span>
        <div class="changing-text-container">
          <span class="changing-text"></span>
        </div>
      </div>
    `, this.changingTextEl = t.querySelector(".changing-text"), this.container = t.querySelector(".changing-text-container");
    let l = 0;
    this.displayWord(e[0]), setTimeout(() => {
      l = 1, this._changeInterval = setInterval(() => {
        this.displayWord(e[l]), l = (l + 1) % e.length;
      }, n);
    }, 2e3);
  }
  displayWord(t) {
    const i = document.createElement("span");
    i.className = "word current", i.textContent = t, this.changingTextEl.appendChild(i);
    const e = i.offsetWidth;
    this.container.style.width = `${e + 10}px`, this.changingTextEl.querySelectorAll(".word:not(.current)").forEach((s) => {
      s.classList.add("exiting"), setTimeout(() => {
        s.remove();
      }, 600);
    }), setTimeout(() => {
      i.classList.remove("current");
    }, 600);
  }
  disconnectedCallback() {
    this._changeInterval && clearInterval(this._changeInterval);
  }
}
customElements.define("changing-text", Q);
class V extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.cardDistance = parseInt(this.getAttribute("card-distance")) || 60, this.verticalDistance = parseInt(this.getAttribute("vertical-distance")) || 70, this.delay = parseInt(this.getAttribute("delay")) || 5e3, this.width = parseInt(this.getAttribute("width")) || 200, this.height = parseInt(this.getAttribute("height")) || 300, this.shadowRoot.innerHTML = `
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
    `, this.container = this.shadowRoot.querySelector(".container"), this.cards = [], this.order = [], this.intervalId = null, this.isAnimating = !1;
  }
  connectedCallback() {
    const t = document.createElement("style");
    t.textContent = `
    body {
      overflow: hidden;
    }
  `, document.head.appendChild(t);
    const i = this.getAttribute("images");
    if (i) {
      let e = [];
      try {
        e = JSON.parse(i);
      } catch {
        console.warn("Invalid JSON in images attribute");
      }
      this.createCardsFromImages(e);
    } else if (this.hasChildNodes())
      Array.from(this.children).forEach((o) => {
        o.classList.add("card"), this.container.appendChild(o);
      }), this.innerHTML = "";
    else
      for (let e = 1; e <= 3; e++) {
        const o = document.createElement("div");
        o.classList.add("card"), o.textContent = `Card ${e}`, this.container.appendChild(o);
      }
    this.cards = Array.from(this.container.querySelectorAll(".card")), this.order = this.cards.map((e, o) => o), this.placeCards(), this.startSwap();
  }
  createCardsFromImages(t) {
    t.forEach((i) => {
      const e = document.createElement("div");
      e.classList.add("card");
      const o = document.createElement("img");
      o.src = i, e.appendChild(o), this.container.appendChild(e);
    });
  }
  disconnectedCallback() {
    clearInterval(this.intervalId);
  }
  makeSlot(t) {
    return {
      x: t * this.cardDistance,
      y: -t * this.verticalDistance,
      z: -t * this.cardDistance * 1.5,
      zIndex: this.cards.length - t
    };
  }
  placeCard(t, i) {
    t.style.zIndex = i.zIndex, t.style.transform = `translate3d(${i.x}px, ${i.y}px, ${i.z}px) translate(-50%, -50%)`;
  }
  placeCards() {
    this.order.forEach((t, i) => {
      const e = this.cards[t], o = this.makeSlot(i);
      this.placeCard(e, o);
    });
  }
  swap() {
    if (this.isAnimating || this.order.length < 2) return;
    this.isAnimating = !0;
    const t = this.order[0], i = this.cards[t];
    this.order.forEach((e, o) => {
      this.cards[e].style.transition = "transform 0.8s ease", this.cards[e].style.zIndex = this.cards.length - o;
    }), i.style.transition = "transform 0.8s ease, opacity 0.8s ease", i.style.transform = `translate3d(${this.makeSlot(0).x}px, 500px, ${this.makeSlot(0).z}px) translate(-50%, -50%)`, i.style.opacity = "0", setTimeout(() => {
      this.order.shift(), this.order.push(t);
      const e = this.makeSlot(this.cards.length - 1);
      i.style.transition = "none", i.style.transform = `translate3d(${e.x}px, 500px, ${e.z}px) translate(-50%, -50%)`, i.style.opacity = "0", this.order.forEach((o, s) => {
        this.cards[o].style.zIndex = this.cards.length - s;
      }), setTimeout(() => {
        i.style.transition = "transform 0.8s ease, opacity 0.8s ease", i.style.transform = `translate3d(${e.x}px, ${e.y}px, ${e.z}px) translate(-50%, -50%)`, i.style.opacity = "1", this.order.slice(0, -1).forEach((o, s) => {
          const r = this.makeSlot(s);
          this.placeCard(this.cards[o], r);
        }), setTimeout(() => {
          this.isAnimating = !1, this.cards.forEach((o) => {
            o.style.transition = "transform 0.8s ease, z-index 0s ease";
          });
        }, 800);
      }, 20);
    }, 800);
  }
  startSwap() {
    this.intervalId = setInterval(() => this.swap(), this.delay);
  }
}
customElements.define("card-swap", V);
class tt extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.bgColor = this.getAttribute("bg-color") || "#000000", this.circleColor = this.getAttribute("circle-color") || "rgba(255,255,255,0.7)";
    const t = document.createElement("template");
    t.innerHTML = `
        <style>
            :host {
                display: block;
                position: fixed; 
                top: 0;
                left: 0;
                width: 100vw; 
                height: 100vh; 
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                z-index: 0; 
            }
            
            .wrapper{
                position: relative;
                width: 100%;
                height: 100%;
                background-color: ${this.bgColor};
            }

            canvas{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: block;
                z-index: 0;
            }

            slot{
                position: relative;
                z-index: 1;
                display: block;
            }
        </style>
        <div class="wrapper">
            <canvas></canvas>
            <slot></slot>
        </div>
        `, this.shadowRoot.appendChild(t.content.cloneNode(!0)), this.canvas = this.shadowRoot.querySelector("canvas"), this.ctx = this.canvas.getContext("2d"), this.circles = [], this.mouse = { x: null, y: null }, this.animationId = null;
  }
  resize() {
    const t = this.canvas.width, i = this.canvas.height;
    this.canvas.width = this.canvas.offsetWidth, this.canvas.height = this.canvas.offsetHeight;
    const e = this.canvas.width, o = this.canvas.height;
    this.circles.forEach((s) => {
      s.x = s.x / t * e, s.y = s.y / i * o;
    });
  }
  initcircles() {
    this.circles = [];
    for (let i = 0; i < 50; i++)
      this.circles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
  }
  connectedCallback() {
    this.resize(), window.addEventListener("resize", () => this.resize()), window.addEventListener("mousemove", (t) => {
      this.mouse.x = t.clientX, this.mouse.y = t.clientY;
    }), this.initcircles(), this.animate();
  }
  animate() {
    const t = this.ctx, i = t.canvas.width, e = t.canvas.height;
    t.clearRect(0, 0, i, e), this.circles.forEach((o) => {
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const s = this.mouse.x - o.x, r = this.mouse.y - o.y, a = Math.sqrt(s * s + r * r);
        a < 100 && (o.x -= s / a, o.y -= r / a);
      }
      o.x += o.dx, o.y += o.dy, o.x < 0 && (o.x = i), o.x > i && (o.x = 0), o.y < 0 && (o.y = e), o.y > e && (o.y = 0), t.beginPath(), t.arc(o.x, o.y, o.radius, 0, Math.PI * 2), t.fillStyle = this.circleColor, t.fill();
    }), this.animationId = requestAnimationFrame(this.animate.bind(this));
  }
  attributeChangedCallback(t, i, e) {
    i !== e && (t === "bg-color" ? (this.bgColor = e, this.shadowRoot.querySelector(".wrapper").style.backgroundColor = e) : t === "circle-color" && (this.circleColor = e));
  }
  disconnectedCallback() {
    cancelAnimationFrame(this.animationId);
  }
}
customElements.define("particle-background", tt);
class et extends HTMLElement {
  static get observedAttributes() {
    return ["bg-color", "dot-color", "hover-color", "spacing", "dot-radius"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.bgColor = this.getAttribute("bg-color") || "#111", this.dotColor = this.getAttribute("dot-color") || "rgba(255,255,255,0.1)", this.hoverColor = this.getAttribute("hover-color") || "rgba(0,200,255,0.9)", this.spacing = +this.getAttribute("spacing") || 30, this.dotRadius = +this.getAttribute("dot-radius") || 2, this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%;
                    height: 100%;
                }
                .wrapper {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: ${this.bgColor};
                }
                canvas {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    z-index: 0;
                }
                slot {
                    position: relative;
                    z-index: 1;
                    display: block;
                }
            </style>
            <div class="wrapper">
                <canvas></canvas>
                <slot></slot>
            </div>
        `, this.canvas = this.shadowRoot.querySelector("canvas"), this.ctx = this.canvas.getContext("2d"), this._mouse = { x: null, y: null }, this._ro = new ResizeObserver(() => this._resize()), this._grid = [];
  }
  connectedCallback() {
    this._ro.observe(this), this.canvas.addEventListener("pointermove", (t) => {
      this._mouse.x = t.clientX, this._mouse.y = t.clientY, this._render();
    }), this.canvas.addEventListener("pointerleave", () => {
      this._mouse.x = null, this._mouse.y = null, this._render();
    }), this._resize(), this._generateGrid(), this._render();
  }
  disconnectedCallback() {
    this._ro.disconnect(), cancelAnimationFrame(this._raf);
  }
  attributeChangedCallback(t, i, e) {
    e !== null && (t === "bg-color" ? this.shadowRoot.querySelector(".wrapper").style.background = e : t === "dot-color" ? this.dotColor = e : t === "hover-color" ? this.hoverColor = e : t === "spacing" ? this.spacing = +e || this.spacing : t === "dot-radius" && (this.dotRadius = +e || this.dotRadius), this._generateGrid(), this._render());
  }
  _resize() {
    const t = this.offsetWidth, i = this.offsetHeight, e = window.devicePixelRatio || 1;
    this.canvas.width = t * e, this.canvas.height = i * e, Object.assign(this.canvas.style, { width: `${t}px`, height: `${i}px` }), this.ctx.setTransform(e, 0, 0, e, 0, 0), this._generateGrid(), this._render();
  }
  _generateGrid() {
    this._grid = [];
    const t = this.canvas.width / (window.devicePixelRatio || 1), i = this.canvas.height / (window.devicePixelRatio || 1);
    for (let e = this.spacing / 2; e < i; e += this.spacing)
      for (let o = this.spacing / 2; o < t; o += this.spacing)
        this._grid.push({ x: o, y: e });
  }
  _render = () => {
    const t = this.ctx, i = this.canvas.width / (window.devicePixelRatio || 1), e = this.canvas.height / (window.devicePixelRatio || 1);
    t.clearRect(0, 0, i, e);
    const o = this.spacing * 4;
    for (const s of this._grid) {
      let r = this.dotRadius, a = this.dotColor, n = s.x, d = s.y;
      if (this._mouse.x != null) {
        const g = this._mouse.x - s.x, h = this._mouse.y - s.y, l = Math.hypot(g, h);
        if (l < o) {
          const c = 1 - l / o;
          r *= 1 + c * 2.5, a = this.hoverColor;
          const m = c * this.spacing * 1.5;
          n -= g / l * m, d -= h / l * m;
        }
      }
      t.beginPath(), t.arc(n, d, r, 0, Math.PI * 2), t.fillStyle = a, t.fill();
    }
  };
}
customElements.define("dots-grid-background", et);
class ot extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.settings = {
      navBg: this.getAttribute("nav-bg") || "#ffffff",
      indicatorColor: this.getAttribute("indicator-color") || "purple",
      textColor: this.getAttribute("text-color") || "black",
      activeTextColor: this.getAttribute("active-text-color") || "black",
      pageBg: this.getAttribute("page-bg") || "#000000",
      hoverTextColor: this.getAttribute("hover-text-color") || this.getAttribute("active-text-color") || "black",
      iconColor: this.getAttribute("icon-color") || this.getAttribute("text-color") || "black",
      activeIconColor: this.getAttribute("active-icon-color") || this.getAttribute("active-text-color") || "black"
    }, this.render();
  }
  render() {
    const t = this.settings;
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        display: block;
        transition: opacity 0.3s ease;
        visibility: hidden;
      }
      :host([ready]) {
        visibility: visible;
      }

      .main-content {
        display: block;
        width: 80%;
        border-radius: 20px;
        min-height:auto;
        margin: calc(70px + 5% + 20px) auto 100px auto;
        padding: 20px;
        box-sizing: border-box;
        color: white;
        font-family: sans-serif;
        overflow: hidden;
        position: relative;
      }

      ::slotted([slot="content"]) {
        display: none;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 20px;
        box-sizing: border-box;
      }

      ::slotted([slot="content"].active) {
        display: block;
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      nav {
        width: 400px;
        height: 70px;
        position: fixed;
        top: 7%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${t.navBg};
        border-radius: 10px;
        box-shadow: 0 4px 15px ${t.pageBg};
        z-index: 1000;
      }

      .menu {
        width: 100%;
        height: 70px;
        display: flex;
        padding: 10px 20px;
        align-items: center;
        justify-content: space-around;
        margin: 0;
        list-style: none;
        position: relative;
      }

      .nav_container {
        width: 100%;
        height: 12%;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${t.pageBg};
        z-index: 2000;
      }

      .menu ::slotted(a) {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        text-decoration: none;
        height: 100%;
        z-index: 2;
        cursor: pointer;
        color: ${t.textColor};
        transition: color 0.3s;
      }

      .menu ::slotted(a:hover) {
        color: ${t.hoverTextColor};
      }

      .menu ::slotted(a.active),
      .menu ::slotted(a.active:hover) {
        color: ${t.activeTextColor};
      }

      /* Indicator styling updated to match pageBg */
      .indicator {
        position: absolute;
        top: 10%;
        transform: translateY(-50%);
        width: 70px;
        height: 70px;
        background: ${t.indicatorColor};
        border-radius: 50%;
        border: 6px solid ${t.pageBg}; /* <-- matches page background */
        z-index: 1;
        pointer-events: none;
      }

      .indicator.no-transition {
        transition: none;
      }

      .indicator.with-transition {
        transition: left 0.5s;
      }

      .indicator::before {
        content: "";
        position: absolute;
        top: 65%;
        left: -22px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-right-radius: 20px;
        box-shadow: 0px -10px 0 0 ${t.pageBg}; /* <-- matches page background */
        transform: translateY(-50%);
      }

      .indicator::after {
        content: "";
        position: absolute;
        top: 65%;
        right: -22px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-left-radius: 20px;
        box-shadow: 0px -10px 0 0 ${t.pageBg}; /* <-- matches page background */
        transform: translateY(-50%);
      }
      </style>

      <div class="nav_container">
        <nav>
          <ul class="menu">
            <slot name="links"></slot>
            <div class="indicator no-transition"></div>
          </ul>
        </nav>
      </div>

      <div class="main-content">
        <slot name="content"></slot>
      </div>
    `;
  }
  connectedCallback() {
    document.body.style.backgroundColor = this.settings.pageBg, document.body.style.margin = "0", document.body.style.padding = "0", document.body.style.minHeight = "100vh", document.body.style.display = "flex", document.body.style.flexDirection = "column", document.body.style.justifyContent = "start", document.body.style.overflow = "auto", document.body.style.scrollbarWidth = "none";
    const t = document.createElement("style");
    t.textContent = `
          *::-webkit-scrollbar {
              display: none;
          }
        `, document.head.appendChild(t);
    const i = this.shadowRoot.querySelector('slot[name="links"]'), e = this.shadowRoot.querySelector('slot[name="content"]'), o = this.shadowRoot.querySelector(".indicator");
    !i || !o || !e || requestAnimationFrame(() => {
      this.setAttribute("ready", "");
      const s = i.assignedElements({ flatten: !0 }), r = e.assignedElements({ flatten: !0 }), a = this.shadowRoot.querySelector(".menu");
      r.forEach((n) => n.classList.remove("active")), s.length > 0 && (s[0].classList.add("active"), this.activateTab(s[0], o, a), this.showContent(r, s[0].dataset.target)), o.classList.remove("no-transition"), o.classList.add("with-transition"), s.forEach((n) => {
        n.tagName.toLowerCase() === "a" && n.addEventListener("click", (d) => {
          d.preventDefault(), s.forEach((g) => {
            g.classList.remove("active"), this.updateTabStyles(g, !1);
          }), n.classList.add("active"), this.activateTab(n, o, a), this.showContent(r, n.dataset.target);
        });
      });
    });
  }
  showContent(t, i) {
    t.forEach((e) => {
      e.classList.toggle("active", e.id === i);
    });
  }
  moveIndicator(t, i, e) {
    const o = t.getBoundingClientRect(), s = e.getBoundingClientRect(), r = o.left + o.width / 2 - s.left - i.offsetWidth / 2;
    i.style.left = `${r}px`;
  }
  activateTab(t, i, e) {
    this.moveIndicator(t, i, e), this.updateTabStyles(t, !0);
  }
  updateTabStyles(t, i) {
    const e = this.settings, o = t.querySelector("i"), s = t.querySelector("span");
    o && (o.style.position = "relative", o.style.display = "block", o.style.margin = "10px 2px", o.style.lineHeight = "75px", o.style.textAlign = "center", o.style.transition = "0.5s", o.style.fontSize = "24px", o.style.color = i ? e.activeIconColor : e.iconColor, o.style.transform = i ? "translateY(-35px)" : "translateY(0)"), s && (s.style.position = "absolute", s.style.fontWeight = "400", s.style.fontSize = "0.75em", s.style.letterSpacing = "0.05em", s.style.transition = "0.5s", s.style.opacity = i ? "1" : "0", s.style.transform = i ? "translateY(17px)" : "translateY(0px)", s.style.color = i ? e.activeTextColor : e.textColor);
  }
}
customElements.define("magic-nav", ot);
class it extends HTMLElement {
  static get observedAttributes() {
    return ["grid-size", "pixel-color", "pixels-per-second", "width", "height"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.gridSize = parseInt(this.getAttribute("grid-size")) || 12, this.pixelColor = this.getAttribute("pixel-color") || "#ffffff", this.pixelsPerSecond = parseInt(this.getAttribute("pixels-per-second")) || 100, this.width = this.getAttribute("width") || "100%", this.height = this.getAttribute("height") || "auto", this.stepDuration = 0.05, this.shadowRoot.innerHTML = `
     <style>
  :host {
    display: block;
    position: relative;
    width: ${this.width};
    height: ${this.height};
    max-width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }
  :host(:hover) {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    border-radius: inherit;
  }
  .overlay.show {
    opacity: 1;
  }
</style>
      
      <canvas></canvas>
      <div class="overlay"><slot name="image-layer"></slot></div>
    `, this.canvas = this.shadowRoot.querySelector("canvas"), this.ctx = this.canvas.getContext("2d"), this.overlay = this.shadowRoot.querySelector(".overlay"), this.image = new Image(), this.image.crossOrigin = "anonymous", this.animationId = null, this.cells = [], this.pixelsToChangePerStep = 0, this.lastTimestamp = 0;
  }
  connectedCallback() {
    const t = this.querySelector('[slot="image"]');
    t && t.tagName === "IMG" && (this.image.src = t.src, this.image.onload = () => {
      this.drawImage(), this.myGrid();
    }), this.addEventListener("mouseenter", () => this.startTransition()), this.addEventListener("mouseleave", () => this.reset());
  }
  attributeChangedCallback(t, i, e) {
    i !== e && (t === "grid-size" && (this.gridSize = parseInt(e) || 12, this.myGrid(), this.reset()), t === "pixel-color" && (this.pixelColor = e || "#ffffff"), t === "pixels-per-second" && (this.pixelsPerSecond = parseInt(e) || 100, this.pixelsToChangePerStep = Math.max(
      1,
      Math.floor(this.pixelsPerSecond * this.stepDuration)
    )), (t === "width" || t === "height") && (this[t] = e || (t === "width" ? "100%" : "auto"), this.style[t] = this[t], this.drawImage(), this.myGrid()));
  }
  drawImage() {
    if (!this.image.complete) return;
    let t = this.getAttribute("width"), i = this.getAttribute("height");
    t && t.includes("px") ? this.canvas.width = parseInt(t) : this.canvas.width = this.image.naturalWidth, i && i.includes("px") ? this.canvas.height = parseInt(i) : this.canvas.height = this.image.naturalHeight, this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
  }
  myGrid() {
    if (!this.canvas.width || !this.canvas.height) return;
    const t = this.canvas.width / this.gridSize, i = this.canvas.height / this.gridSize;
    this.cells = [];
    for (let e = 0; e < this.gridSize; e++)
      for (let o = 0; o < this.gridSize; o++)
        this.cells.push({
          x: o * t,
          y: e * i,
          changed: !1
        });
    this.cells = this.cells.sort(() => Math.random() - 0.5), this.pixelsToChangePerStep = Math.max(
      1,
      Math.floor(this.pixelsPerSecond * this.stepDuration)
    );
  }
  startTransition() {
    this.animationId && cancelAnimationFrame(this.animationId);
    let t = 0;
    const i = this.gridSize * this.gridSize, e = (o) => {
      if (this.lastTimestamp || (this.lastTimestamp = o), o - this.lastTimestamp >= this.stepDuration * 1e3) {
        this.lastTimestamp = o;
        let r = 0;
        const a = this.canvas.width / this.gridSize, n = this.canvas.height / this.gridSize;
        for (let d = 0; d < this.cells.length && r < this.pixelsToChangePerStep; d++)
          this.cells[d].changed || (this.ctx.fillStyle = this.pixelColor, this.ctx.fillRect(
            this.cells[d].x,
            this.cells[d].y,
            a,
            n
          ), this.cells[d].changed = !0, t++, r++);
        if (t >= i) {
          this.overlay.classList.add("show");
          return;
        }
      }
      this.animationId = requestAnimationFrame(e);
    };
    this.animationId = requestAnimationFrame(e);
  }
  reset() {
    this.animationId && (cancelAnimationFrame(this.animationId), this.animationId = null), this.overlay.classList.remove("show"), this.lastTimestamp = 0, this.cells.forEach((t) => t.changed = !1), this.drawImage();
  }
}
customElements.define("img-transition", it);
class st extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = JSON.parse(this.getAttribute("cards") || "[]"), e = i.length, o = 360 / e, s = this.getAttribute("size") || "200", a = s * 0.85 * e / (2 * Math.PI), n = i.map((c, m) => `
    <div class="card" style="transform: rotateY(${m * o}deg) translateZ(${a}px);">
        <div class="card-inner">
            <img src="${c}" alt="card ${m}">
            <div class="border-outer"></div>
            <div class="border-inner"></div>
        </div>
    </div>
`).join("");
    t.innerHTML = `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            .image-container {
                position: relative;
                width: ${s * 0.8}px;
                height: ${s * 0.8}px;
                transform-style: preserve-3d;
                transform: perspective(1200px);
                cursor: grab;
            }
            .card {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                
               
                justify-content: center;
                align-items: center;
            }
            .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                
                border-radius: 20px;
                overflow: hidden;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(8px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .card-inner:hover {
                transform: scale(1.05);
                box-shadow: 0 15px 40px rgba(0,0,0,0.5);
            }
            .card-inner img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                border-radius: 20px;
            }
            .border-outer {
                position: absolute;
                inset: 0;
                border: 2px solid rgba(255, 255, 255, 0.4);
                border-radius: 20px;
                pointer-events: none;
            }
            .border-inner {
                position: absolute;
                inset: 10px;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 15px;
                pointer-events: none;
            }
        </style>
        <div class="image-container">
            ${n}
        </div>
        `;
    const d = t.querySelector(".image-container");
    let g = 0, h = 0.2;
    const l = () => {
      g += h, d.style.transform = `perspective(1200px) rotateY(${g}deg)`, requestAnimationFrame(l);
    };
    l();
  }
}
customElements.define("circle-gallery", st);
class rt extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = this.getAttribute("image1") || "", e = this.getAttribute("image2") || "", o = this.getAttribute("width") || "600px", s = this.getAttribute("height") || "400px", r = this.getAttribute("border") || "2px solid black";
    t.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          overflow: hidden;
        }
        .container {
          position: relative;
          width: ${o};
          height: ${s};
          border: ${r};
          border-radius: 8px; 
        }
        .container .box {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          background-size: cover;
          background-position: center;
        }
        .container .box:nth-child(1) {
          background-image: url("${i}");
        }
        .container .box:nth-child(2) {
          background-image: url("${e}");
          z-index: 2;
          transition: clip-path 0.5s ease;
          clip-path: polygon(0 0, 100% 0, 51% 51%, 0 100%);
        }
        .container .box:nth-child(2):hover {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        .container .box:nth-child(1):hover ~ .box:nth-child(2) {
          clip-path: polygon(0 0, 100% 0, 0 0, 0 100%);
        }
      </style>
      <div class="container">
        <div class="box"></div>
        <div class="box"></div>
      </div>
    `;
  }
}
customElements.define("clip-image", rt);
class nt extends HTMLElement {
  static get observedAttributes() {
    return [
      "bg-color",
      "width",
      "height",
      "text-color",
      "font-size",
      "font-weight",
      "font-family",
      "text",
      "href"
    ];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("bg-color") || "#3b82f6", i = this.getAttribute("width") || "150px", e = this.getAttribute("height") || "50px", o = this.getAttribute("text-color") || "#ffffff", s = this.getAttribute("font-size") || "0.95rem", r = this.getAttribute("font-weight") || "bold", a = this.getAttribute("font-family") || "Poppins, sans-serif", n = this.getAttribute("text") || "Click Me", d = this.getAttribute("href") || null, g = "rgba(255,255,255,0.4)", h = d ? "a" : "button", l = d ? `href="${d}" target="_blank" rel="noopener noreferrer"` : "";
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }

        ${h} {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: ${t};
          border: none;
          color: ${o};
          font-family: ${a},serif;
          font-size: ${s};
          font-weight: ${r};
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease;
          width: ${i};
          height: ${e};
          text-decoration: none; /* remove underline if link */
        }

        ${h}:hover { transform: scale(1.05); }

        ${h}::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${g}, transparent);
          transition: left 0.8s ease;
          z-index: 1;
        }

        ${h}:hover::before { left: 100%; }

        span {
          position: relative;
          z-index: 2;
        }

        ::slotted([slot="icon"]) {
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      </style>

      <${h} ${l}>
        <slot name="icon"></slot>
        <span>${n}</span>
      </${h}>
    `;
  }
}
customElements.define("shinny-btn", nt);
class at extends HTMLElement {
  static get observedAttributes() {
    return [
      "liquid-color",
      "text-color",
      "href",
      "width",
      "font-size",
      "font-weight",
      "font-family"
    ];
  }
  constructor() {
    super(), this.shadow = this.attachShadow({ mode: "open" }), this.currentLiquidColor = this.getAttribute("liquid-color") || "red", this.render();
  }
  render() {
    const t = this.currentLiquidColor, i = this.getAttribute("text-color") || "white", e = this.getAttribute("width") || "200px", o = this.getAttribute("font-size") || "1.5em", s = this.getAttribute("font-weight") || "bold", r = this.getAttribute("font-family") || "Arial, sans-serif", a = this.getAttribute("href") || "#";
    this.shadow.innerHTML = `
            <style>
                a {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                }
                
                span {
                    position: absolute;
                    color: ${i};
                    font-size: ${o};
                    font-weight: ${s};
                    font-family: ${r}, serif;
                    background-color: ${t};
                    transition: 0.3s ease;
                    padding: 15px 25px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    z-index: 33;
                }
                
                a:hover span {
                    background-color: ${t};
                    color: ${i};
                }
                
                .box {
                    position: relative;
                    height: 60px;
                    width: ${e};
                    background-color: ${t};
                    border-radius: 10px;
                    transition: 0.5s;
                    filter: url(#gooey);
                    overflow: visible;
                }
                
                .particle {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: ${t};
                    border-radius: 50%;
                    pointer-events: none;
                    left: 50%;
                    top: 50%;
                }
                
                svg {
                    display: none;
                }
            </style>
            
            <svg>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                    <feColorMatrix values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 50 -10" />
                </filter>
            </svg>
            
            <a id="btn-link" href="${a}">
                <div class="box" id="box"></div>
                <span id="btn-text"><slot>Button</slot></span>
            </a>
        `, this.box = this.shadow.querySelector("#box"), this.link = this.shadow.querySelector("#btn-link"), this.text = this.shadow.querySelector("#btn-text"), setInterval(() => {
      for (let n = 0; n < 3; n++)
        this.createParticle();
    }, 150);
  }
  createParticle() {
    let t = document.createElement("div");
    t.classList.add("particle"), t.style.backgroundColor = this.currentLiquidColor;
    let i = Math.random() * 2 * Math.PI, e = 150 + Math.random() * 100, o = Math.cos(i) * e, s = Math.sin(i) * e;
    this.box.appendChild(t), this.animateParticle(t, o, s), setTimeout(() => {
      t.parentNode && t.parentNode.removeChild(t);
    }, 1700);
  }
  animateParticle(t, i, e) {
    t.animate(
      [
        { transform: "translate(0, 0) scale(1)" },
        { transform: `translate(${i}px, ${e}px) scale(0.5)` }
      ],
      {
        duration: 1700,
        easing: "linear",
        fill: "forwards"
      }
    );
  }
  attributeChangedCallback(t, i, e) {
    if (i !== e)
      switch (t) {
        case "font-size":
          this.text.style.fontSize = e;
          break;
        case "font-weight":
          this.text.style.fontWeight = e;
          break;
        case "font-family":
          this.text.style.fontFamily = e;
          break;
        case "text-color":
          this.text.style.color = e;
          break;
        case "width":
          this.box.style.width = e;
          break;
        case "liquid-color":
          this.currentLiquidColor = e, this.box.style.backgroundColor = e, this.text.style.backgroundColor = e;
          break;
        case "href":
          this.link.href = e;
          break;
      }
  }
}
customElements.define("bleed-btn", at);
class lt extends HTMLElement {
  static get observedAttributes() {
    return ["width", "height", "front-color", "back-color", "border-radius", "flip-direction"];
  }
  constructor() {
    super(), this.shadow = this.attachShadow({ mode: "open" }), this.render();
  }
  attributeChangedCallback(t, i, e) {
    i !== e && this.render();
  }
  render() {
    const t = this.getAttribute("width") || "250px", i = this.getAttribute("height") || "150px", e = this.getAttribute("front-color") || "#1abc9c", o = this.getAttribute("back-color") || "#9b59b6", s = this.getAttribute("border-radius") || "15px", r = this.getAttribute("flip-direction") || "up";
    let a = "rotateY(180deg)", n = "rotateY(180deg)";
    switch (r.toLowerCase()) {
      case "up":
        a = "rotateX(-180deg)", n = "rotateX(180deg)";
        break;
      case "down":
        a = "rotateX(180deg)", n = "rotateX(180deg)";
        break;
      case "left":
        a = "rotateY(-180deg)", n = "rotateY(180deg)";
        break;
      case "right":
        a = "rotateY(180deg)", n = "rotateY(180deg)";
        break;
    }
    this.shadow.innerHTML = `
        <style>
            .flip-container { perspective: 1200px; width: ${t}; height: ${i}; }
            .flip-box {
                width: 100%; height: 100%;
                position: relative;
                transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                transform-style: preserve-3d;
            }
            .flip-container:hover .flip-box { transform: ${a}; }
            .front, .back {
                position: absolute; width: 100%; height: 100%;
                backface-visibility: hidden;
                border-radius: ${s};
                display: flex; justify-content: center; align-items: center;
                overflow: hidden;
                color: inherit; font-family: 'Arial', sans-serif; font-weight: bold; font-size: 1.2rem;
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                cursor: pointer;
            }
            .front { background-color: ${e}; }
            .back { background-color: ${o}; transform: ${n}; }
            ::slotted(img) { max-width: 100%; max-height: 100%; object-fit: cover; border-radius: inherit; }
        </style>
        <div class="flip-container">
            <div class="flip-box">
                <div class="front"><slot name="front"></slot></div>
                <div class="back"><slot name="back"></slot></div>
            </div>
        </div>
    `;
  }
}
customElements.define("flip-box", lt);
class dt extends HTMLElement {
  static get observedAttributes() {
    return ["src", "width", "border-color", "border-radius", "border-width"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.src = this.getAttribute("src") || "", this.width = this.getAttribute("width") || "400px", this.borderColor = this.getAttribute("border-color") || "#ddd", this.borderRadius = this.getAttribute("border-radius") || "16px", this.borderWidth = this.getAttribute("border-width") || "2px", this.tileSize = 20, this.scaleFactor = 2, this.render();
  }
  attributeChangedCallback(t, i, e) {
    i !== e && (t === "src" && (this.src = e), t === "width" && (this.width = e), t === "border-color" && (this.borderColor = e), t === "border-radius" && (this.borderRadius = e), t === "border-width" && (this.borderWidth = e), this.render());
  }
  render() {
    const t = parseInt(this.width), i = Math.min(t, 400) + "px";
    this.shadowRoot.innerHTML = `
        <style>
            :host { 
                display: block; 
                width: ${i}; 
                max-width: 400px; 
            }
            .wrapper {
                display: block;
                border: ${this.borderWidth} solid ${this.borderColor};
                border-radius: ${this.borderRadius};
                overflow: hidden;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                transition: border-color 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
            }
            .wrapper:hover {
                border-color: #aaa;
                box-shadow: 0 6px 16px rgba(0,0,0,0.2);
            }
            .grid {
                display: grid;
                position: relative;
                gap: 0;
                user-select: none;
                line-height: 0;
                overflow: hidden;
                background: transparent;
            }
            canvas.tile {
                display: block;
                background: transparent;
                transition: transform 0.6s ease, opacity 0.6s ease;
                will-change: transform, opacity;
                transform: translate(0,0) rotate(0) scale(1);
                opacity: 1;
                image-rendering: crisp-edges;
            }
        </style>
        <div class="wrapper">
            <div class="grid"></div>
        </div>
        `;
    const e = this.shadowRoot.querySelector(".grid");
    e.innerHTML = "";
    const o = new Image();
    o.src = this.src, o.onload = () => {
      const s = Math.floor(o.width / this.tileSize), r = Math.floor(o.height / this.tileSize), n = parseInt(i) / o.width;
      e.style.aspectRatio = `${o.width} / ${o.height}`, e.style.gridTemplateColumns = `repeat(${s}, ${Math.round(this.tileSize * n)}px)`, e.style.gridTemplateRows = `repeat(${r}, ${Math.round(this.tileSize * n)}px)`;
      const d = document.createElement("canvas");
      d.width = o.width, d.height = o.height, d.getContext("2d").drawImage(o, 0, 0);
      for (let c = 0; c < r; c++)
        for (let m = 0; m < s; m++) {
          const p = document.createElement("canvas");
          p.className = "tile", p.width = this.tileSize * this.scaleFactor, p.height = this.tileSize * this.scaleFactor, p.getContext("2d").drawImage(
            d,
            m * this.tileSize,
            c * this.tileSize,
            this.tileSize,
            this.tileSize,
            0,
            0,
            p.width,
            p.height
          ), p.style.width = Math.round(this.tileSize * n) + "px", p.style.height = Math.round(this.tileSize * n) + "px";
          const x = (Math.random() - 0.5) * 200, b = (Math.random() - 0.5) * 200, y = (Math.random() - 0.5) * 90;
          p.dataset.x = x.toFixed(2), p.dataset.y = b.toFixed(2), p.dataset.r = y.toFixed(2), e.appendChild(p);
        }
      const h = () => {
        e.querySelectorAll(".tile").forEach((c) => {
          c.style.transform = `translate(${c.dataset.x}px, ${c.dataset.y}px) rotate(${c.dataset.r}deg) scale(0.8)`, c.style.opacity = "0.4";
        });
      }, l = () => {
        e.querySelectorAll(".tile").forEach((c) => {
          c.style.transform = "translate(0, 0) rotate(0) scale(1)", c.style.opacity = "1";
        });
      };
      e.addEventListener("pointerenter", h), e.addEventListener("pointerleave", l), l();
    }, o.onerror = () => {
      e.textContent = "Image failed to load.";
    };
  }
}
customElements.define("pixel-collapse-card", dt);
class ct extends HTMLElement {
  constructor() {
    super();
    const t = this.attachShadow({ mode: "open" }), i = "100px", e = this.getAttribute("color") || "#00c6ff", o = this.getAttribute("shadow-color") || "white", s = "25px", r = 5;
    t.innerHTML = `
        <style>
            .loader {
                width: ${i};
                height: ${i};
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: url(#gooey);
            }

            .dot {
                position: absolute;
                width: ${s};
                height: ${s};
                border-radius: 50%;
                background: ${e};
                transform: scale(1);
                transition: transform 0.6s ease-in-out;
                box-shadow: 0 0 20px ${o};
            }

            svg {
                position: absolute;
                width: 0;
                height: 0;
            }
        </style>

        <div class="loader"></div>

        <!-- Gooey Filter -->
        <svg>
            <defs>
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 30 -10" result="gooey" />
                    <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                </filter>
            </defs>
        </svg>
        `;
    const a = t.querySelector(".loader");
    this.dots = [];
    for (let h = 0; h < r; h++) {
      const l = document.createElement("div");
      l.classList.add("dot"), a.appendChild(l), this.dots.push(l);
    }
    const n = parseFloat(i);
    let d = !1;
    const g = () => {
      d ? this.dots.forEach((h, l) => {
        const c = l * 80;
        setTimeout(() => {
          h.style.transform = "translate(0px, 0px) scale(1.4)";
        }, c);
      }) : this.dots.forEach((h, l) => {
        const c = l / this.dots.length * 2 * Math.PI, m = n / 7, p = Math.cos(c) * m, u = Math.sin(c) * m;
        h.style.transform = `translate(${p}px, ${u}px) scale(1)`;
      }), d = !d;
    };
    g(), setInterval(g, 1200);
  }
}
customElements.define("dots-loader", ct);
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${q}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${H}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
R(document.querySelector("#counter"));
