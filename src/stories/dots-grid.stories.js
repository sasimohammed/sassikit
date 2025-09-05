import "../components/background/dots-grid.js";

export default {
    title: "Backgrounds/Dots Grid Background",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#111111" },
        dotColor: { control: "color", defaultValue: "rgba(255,255,255,0.1)" },
        hoverColor: { control: "color", defaultValue: "rgba(0,200,255,0.9)" },
        spacing: { control: { type: "number", min: 10, max: 100, step: 5 }, defaultValue: 30 },
        dotRadius: { control: { type: "number", min: 1, max: 10 }, defaultValue: 2 },
        width: { control: "text", defaultValue: "100%" },
        height: { control: "text", defaultValue: "100vh" },
    },
};

const Template = ({ bgColor, dotColor, hoverColor, spacing, dotRadius, width, height }) => `
  <dots-grid-background
    bg-color="${bgColor}"
    dot-color="${dotColor}"
    hover-color="${hoverColor}"
    spacing="${spacing}"
    dot-radius="${dotRadius}"
    width="${width}"
    height="${height}"
  >
  </dots-grid-background>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#111111",
    dotColor: "rgba(255,255,255,0.1)",
    hoverColor: "rgba(0,200,255,0.9)",
    spacing: 30,
    dotRadius: 2,
    width: "100%",
    height: "100vh",
};
