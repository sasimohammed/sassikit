class MagicNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.settings = {
            navBg: this.getAttribute('nav-bg') || '#ffffff',
            indicatorColor: this.getAttribute('indicator-color') || 'purple',
            textColor: this.getAttribute('text-color') || 'black',
            activeTextColor: this.getAttribute('active-text-color') || 'black',
            pageBg: this.getAttribute('page-bg') || '#000000',
            hoverTextColor: this.getAttribute('hover-text-color') || this.getAttribute('active-text-color') || 'black',
            iconColor: this.getAttribute('icon-color') || this.getAttribute('text-color') || 'black',
            activeIconColor: this.getAttribute('active-icon-color') || this.getAttribute('active-text-color') || 'black'
        };

        this.render();
    }

    render() {
        const s = this.settings;
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
        background-color: ${s.navBg};
        border-radius: 10px;
        box-shadow: 0 4px 15px ${s.pageBg};
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
        background-color: ${s.pageBg};
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
        color: ${s.textColor};
        transition: color 0.3s;
      }

      .menu ::slotted(a:hover) {
        color: ${s.hoverTextColor};
      }

      .menu ::slotted(a.active),
      .menu ::slotted(a.active:hover) {
        color: ${s.activeTextColor};
      }

      /* Indicator styling updated to match pageBg */
      .indicator {
        position: absolute;
        top: 10%;
        transform: translateY(-50%);
        width: 70px;
        height: 70px;
        background: ${s.indicatorColor};
        border-radius: 50%;
        border: 6px solid ${s.pageBg}; /* <-- matches page background */
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
        box-shadow: 0px -10px 0 0 ${s.pageBg}; /* <-- matches page background */
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
        box-shadow: 0px -10px 0 0 ${s.pageBg}; /* <-- matches page background */
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
        document.body.style.backgroundColor = this.settings.pageBg;
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.minHeight = '100vh';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'start';
        document.body.style.overflow = 'auto';
        document.body.style.scrollbarWidth = 'none';

        const style = document.createElement('style');
        style.textContent = `
          *::-webkit-scrollbar {
              display: none;
          }
        `;
        document.head.appendChild(style);

        const slotLinks = this.shadowRoot.querySelector('slot[name="links"]');
        const slotContent = this.shadowRoot.querySelector('slot[name="content"]');
        const indicator = this.shadowRoot.querySelector('.indicator');
        if (!slotLinks || !indicator || !slotContent) return;

        requestAnimationFrame(() => {
            this.setAttribute('ready', '');

            const links = slotLinks.assignedElements({ flatten: true });
            const contents = slotContent.assignedElements({ flatten: true });
            const menu = this.shadowRoot.querySelector('.menu');

            contents.forEach(c => c.classList.remove('active'));

            if (links.length > 0) {
                links[0].classList.add('active');
                this.activateTab(links[0], indicator, menu);
                this.showContent(contents, links[0].dataset.target);
            }

            indicator.classList.remove('no-transition');
            indicator.classList.add('with-transition');

            links.forEach(link => {
                if (link.tagName.toLowerCase() === 'a') {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        links.forEach(l => {
                            l.classList.remove('active');
                            this.updateTabStyles(l, false);
                        });
                        link.classList.add('active');
                        this.activateTab(link, indicator, menu);
                        this.showContent(contents, link.dataset.target);
                    });
                }
            });
        });
    }

    showContent(contents, targetId) {
        contents.forEach(content => {
            content.classList.toggle('active', content.id === targetId);
        });
    }

    moveIndicator(link, indicator, menu) {
        const linkRect = link.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        const x = linkRect.left + linkRect.width / 2 - menuRect.left - indicator.offsetWidth / 2;
        indicator.style.left = `${x}px`;
    }

    activateTab(link, indicator, menu) {
        this.moveIndicator(link, indicator, menu);
        this.updateTabStyles(link, true);
    }

    updateTabStyles(link, isActive) {
        const s = this.settings;
        const icon = link.querySelector('i');
        const text = link.querySelector('span');

        if (icon) {
            icon.style.position = 'relative';
            icon.style.display = 'block';
            icon.style.margin = '10px 2px';
            icon.style.lineHeight = '75px';
            icon.style.textAlign = 'center';
            icon.style.transition = '0.5s';
            icon.style.fontSize = '24px';
            icon.style.color = isActive ? s.activeIconColor : s.iconColor;
            icon.style.transform = isActive ? 'translateY(-35px)' : 'translateY(0)';
        }

        if (text) {
            text.style.position = 'absolute';
            text.style.fontWeight = '400';
            text.style.fontSize = '0.75em';
            text.style.letterSpacing = '0.05em';
            text.style.transition = '0.5s';
            text.style.opacity = isActive ? '1' : '0';   // 👈 text visible only for active tab
            text.style.transform = isActive ? 'translateY(17px)' : 'translateY(0px)';
            text.style.color = isActive ? s.activeTextColor : s.textColor;
        }
    }

}

customElements.define("magic-nav", MagicNav);
