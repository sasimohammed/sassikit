import "../components/basic/down_menu_nav.js";

export default {
    title: "Components/Basic/DownNav",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#ffffff" },
        textColor: { control: "color", defaultValue: "#1e1e2f" },
        hoverColor: { control: "color", defaultValue: "#faba1b" },
        hoverBg: { control: "color", defaultValue: "rgba(0,0,0,0.03)" },
        logoColor: { control: "color", defaultValue: "purple" },
        shadowColor: { control: "color", defaultValue: "rgba(0,0,0,0.1)" },
        radius: { control: "text", defaultValue: "12px" },
        linkPadding: { control: "text", defaultValue: "0.5rem 0.75rem" },
        fontFamily: { control: "text", defaultValue: "'Segoe UI', sans-serif" },
        widthLarge: { control: "text", defaultValue: "90%" },
        widthSmall: { control: "text", defaultValue: "95%" },
    },
};

const Template = (args) => `
  <div style="height: 100vh;">
    <down-nav
      bg-color="${args.bgColor}"
      text-color="${args.textColor}"
      hover-color="${args.hoverColor}"
      bg-hover="${args.hoverBg}"
      logo-color="${args.logoColor}"
      shadow-color="${args.shadowColor}"
      radius="${args.radius}"
      link-padding="${args.linkPadding}"
      font-family="${args.fontFamily}"
      width-large="${args.widthLarge}"
      width-small="${args.widthSmall}"
    >
      <!-- Logo -->
      <img slot="logo-image" src="https://picsum.photos/50" alt="logo"/>

      <!-- Links -->
      <a slot="links" href="#home">Home</a>
      <a slot="links" href="#about">About</a>
      <a slot="links" href="#services">Services</a>
      <a slot="links" href="#contact">Contact</a>
    </down-nav>

   
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#ffffff",
    textColor: "#1e1e2f",
    hoverColor: "#faba1b",
    hoverBg: "rgba(0,0,0,0.03)",
    logoColor: "purple",
    shadowColor: "rgba(0,0,0,0.1)",
    radius: "12px",
    linkPadding: "0.5rem 0.75rem",
    fontFamily: "'Segoe UI', sans-serif",
    widthLarge: "90%",
    widthSmall: "95%",
};
