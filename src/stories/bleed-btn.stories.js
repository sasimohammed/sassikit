import "../components/bleed-btn.js";

export default {
    title: "Components/Buttons/Bleed Button",
    argTypes: {
        liquidColor: { control: "color", defaultValue: "red" },
        textColor: { control: "color", defaultValue: "white" },
        width: { control: "text", defaultValue: "200px" },
        href: { control: "text", defaultValue: "#" },
        label: { control: "text", defaultValue: "Button" },
        fontSize: { control: "text", defaultValue: "1.5em" },
        fontWeight: { control: "text", defaultValue: "bold" },
        fontFamily: { control: "text", defaultValue: "Arial, sans-serif" },
    },
};

const Template = ({
                      liquidColor,
                      textColor,
                      hoverTextColor,
                      bgColor,
                      width,
                      href,
                      label,
                      fontSize,
                      fontWeight,
                      fontFamily
                  }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  ">
    <bleed-btn
      liquid-color="${liquidColor}"
      text-color="${textColor}"
      hover-text-color="${hoverTextColor}"
      bg-color="${bgColor}"
      width="${width}"
      href="${href}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      font-family="${fontFamily}"
    >
      ${label}
    </bleed-btn>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    liquidColor: "red",
    textColor: "white",
    width: "200px",
    href: "#",
    label: "Button",
    fontSize: "1.5em",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
};
