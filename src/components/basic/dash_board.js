import '../style.css';

class MYNavigation extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const bgColor = this.getAttribute("bg-color") || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
        const textColor = this.getAttribute("text-color") || "#ffffff";
        const hoverColor = this.getAttribute("hover-color") || "#faba1b";
        const hoverBg = this.getAttribute("bg-hover") || "rgba(255, 255, 255, 0.1)";

        const sidebarWidth = this.getAttribute("sidebar-width") || "250px";
        const sidebarBg = this.getAttribute("sidebar-bg") || "linear-gradient(180deg, #2c3e50 0%, #1a2530 100%)";
        const sidebarHover = this.getAttribute("sidebar-hover") || "rgba(255, 255, 255, 0.05)";
        const sidebarGap = this.getAttribute("sidebar-gap") || "10px";
        const sidebarBorderRadius = this.getAttribute("sidebar-radius") || "0 20px 20px 0";
        const sidebarPadding = this.getAttribute("sidebar-padding") || "2rem 0";

        const itemColor = this.getAttribute("item-color") || "rgba(255, 255, 255, 0.8)";
        const itemHoverColor = this.getAttribute("item-hover-color") || "#ffffff";
        const itemIconSize = this.getAttribute("icon-size") || "1.2rem";
        const itemPadding = this.getAttribute("item-padding") || "12px 20px";
        const itemTransition = this.getAttribute("item-transition") || "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)";

        shadow.innerHTML = `
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
            --glow-color: ${hoverColor};
            --animation-delay: 0.1s;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${bgColor};
            padding: 10px;
            color: ${textColor};
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
            color: ${textColor};
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
            color: ${textColor};
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
            color: ${hoverColor};
            background-color: ${hoverBg};
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .menu ::slotted(a:hover)::before {
            transform: translateX(100%);
        }

        .menu ::slotted(a.active) {
            color: ${hoverColor};
            background-color: ${hoverBg};
            font-weight: bold;
            box-shadow: 0 0 15px var(--glow-color);
            animation: pulse 2s infinite;
        }

        ::slotted([slot="logo-icon"]) {
            font-size: 2.2rem;
            color: ${hoverColor};
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
            border-color: ${hoverColor};
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
    width: ${sidebarWidth};
    background: ${sidebarBg};
    border-radius: ${sidebarBorderRadius};
    padding: ${sidebarPadding};
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
            gap: ${sidebarGap};
        }

        .sidebar-menu ::slotted(a) {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: ${itemPadding};
            color: ${itemColor};
            text-decoration: none;
            transition: ${itemTransition};
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
            background: ${itemHoverColor};
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.3s ease;
        }

        .sidebar-menu ::slotted(a:hover) {
            background-color: ${sidebarHover};
            color: ${itemHoverColor};
            transform: translateX(5px);
        }
        
        .sidebar-menu ::slotted(a:hover)::before {
            transform: scaleY(1);
            transform-origin: top;
        }

        .sidebar-menu ::slotted(i) {
            font-size: ${itemIconSize};
            transition: ${itemTransition};
            min-width: ${itemIconSize};
            text-align: center;
        }

        .sidebar-menu ::slotted(a:hover i) {
            color: ${itemHoverColor};
            transform: scale(1.2);
        }

        .sidebar-menu ::slotted(a.active) {
            background-color: ${sidebarHover};
            color: ${itemHoverColor};
            font-weight: bold;
            border-left: 3px solid ${itemHoverColor};
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
    background: ${sidebarBg};
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
        `;

        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.createRipple = this.createRipple.bind(this);
    }

    connectedCallback() {
        const sidebarSlot = this.shadowRoot.querySelector('slot[name="sidebar-item"]');
        const contentSlot = this.shadowRoot.querySelector('slot[name="content"]');
        const navLinks = this.shadowRoot.querySelector('slot[name="links"]');

        sidebarSlot.addEventListener('slotchange', this.handleSlotChange);
        contentSlot.addEventListener('slotchange', this.handleSlotChange);

        // Add ripple effect to all clickable elements
        this.addRippleEffects();
    }

    addRippleEffects() {
        const buttons = this.shadowRoot.querySelectorAll('.menu ::slotted(a), .sidebar-menu ::slotted(a)');
        buttons.forEach(button => {
            button.classList.add('ripple');
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });
    }

    createRipple(event, element) {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        element.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }

    handleSlotChange() {
        const sidebarSlot = this.shadowRoot.querySelector('slot[name="sidebar-item"]');
        const contentSlot = this.shadowRoot.querySelector('slot[name="content"]');

        const links = sidebarSlot.assignedElements({ flatten: true });
        const sections = contentSlot.assignedElements({ flatten: true });

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                if (!targetId) return;

                // Remove active class from all
                links.forEach(l => l.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));

                // Add active class to clicked
                link.classList.add('active');
                const targetSection = sections.find(s => s.getAttribute('data-section') === targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    // Add animation to the new active section
                    targetSection.style.animation = 'fadeIn 0.6s ease-out';
                }
            });
        });

        // Activate first item by default
        if (links.length > 0 && sections.length > 0) {
            const firstLink = links[0];
            const targetId = firstLink.getAttribute('data-target');
            const targetSection = sections.find(s => s.getAttribute('data-section') === targetId);

            if (!document.querySelector('sassi-db [data-section].active')) {
                firstLink.classList.add('active');
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.style.animation = 'fadeIn 0.6s ease-out';
                }
            }
        }

        // Re-add ripple effects to new elements
        this.addRippleEffects();
    }
}

customElements.define('dash-board', MYNavigation);