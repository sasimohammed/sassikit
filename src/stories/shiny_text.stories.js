import "../components/text_animation/shiny-text.js";

export default {
    title: "Components/Text_Animation/ShinyText",
    argTypes: {
        text: { control: "text", defaultValue: "Hello Sassi!" },
        textColor: { control: "color", defaultValue: "#000000" },
        fontSize: { control: "text", defaultValue: "3rem" },
        fontWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder"],
            defaultValue: "bold",
        },
        fontFamily: { control: "text", defaultValue: "inherit" },
        speed: { control: "text", defaultValue: "3s" },
    },
};

const Template = ({ text, textColor, fontSize, fontWeight, fontFamily, speed }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
  ">
    <shiny-text
      text="${text}"
      text-color="${textColor}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      font-family="${fontFamily}"
      speed="${speed}"
    ></shiny-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    text: "Hello Sassi!",
    textColor: "purple",
    fontSize: "4rem",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    speed: "3s",
};
