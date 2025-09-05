import "../components/shiny_button.js";

export default {
    title: "Components/Buttons/Shiny Button",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#3b82f6" },
        width: { control: "text", defaultValue: "150px" },
        height: { control: "text", defaultValue: "50px" },
        text: { control: "text", defaultValue: "Click Me" },
        textColor: { control: "color", defaultValue: "#ffffff" },
        fontSize: { control: "text", defaultValue: "0.95rem" },
        fontWeight: { control: "text", defaultValue: "bold" },
        fontFamily: { control: "text", defaultValue: "Poppins, sans-serif" },
        icon: { control: "text", defaultValue: "" },
        href: { control: "text", defaultValue: "#" },
    },
};

const Template = ({
                      bgColor,
                      width,
                      height,
                      text,
                      textColor,
                      fontSize,
                      fontWeight,
                      fontFamily,
                      icon,
                      href, // ✅ accept href
                  }) => `
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100%;">
    <shinny-btn
      bg-color="${bgColor}"
      width="${width}"
      height="${height}"
      text-color="${textColor}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      font-family="${fontFamily}"
      text="${text}"   
      href="${href}"  
    >
      ${icon ? `<span slot="icon">${icon}</span>` : ""}
    </shinny-btn>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#3b82f6",
    width: "150px",
    height: "50px",
    text: "Click Me",
    textColor: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    icon: "",
    href: "#",
};
