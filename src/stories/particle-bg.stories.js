import "../components/background/dark-v.js";

export default {
    title: "Backgrounds/Particle Background",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#000000" },
        circleColor: { control: "color", defaultValue: "rgba(255,255,255,0.7)" },
    },
};

const Template = ({ bgColor, circleColor }) => `
  <particle-background
    bg-color="${bgColor}"
    circle-color="${circleColor}"
    style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh;"
  >
  </particle-background>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#000000",
    circleColor: "rgba(255,255,255,0.7)",
};
