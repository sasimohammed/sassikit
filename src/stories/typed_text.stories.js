import "../components/text_animation/type-text.js";

export default {
    title: "Components/Text_Animation/TypedText",
    argTypes: {
        delay: { control: { type: "number", min: 10, max: 500, step: 10 }, defaultValue: 100 },
        pause: { control: { type: "number", min: 100, max: 5000, step: 100 }, defaultValue: 1000 },
        textColor: { control: "color", defaultValue: "#ffffff" },
        fontSize: { control: "text", defaultValue: "2rem" },
        fontFamily: { control: "text", defaultValue: "sans-serif" },
        fontWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder"],
            defaultValue: "bold",
        },
        texts: {
            control: "array",
            defaultValue: ["Hello", "World", "Sassi!"]
        },
    },
};

const Template = ({ delay, pause, textColor, fontSize, fontFamily, fontWeight, texts }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
  ">
    <typed-text
      delay="${delay}"
      pause="${pause}"
      text-color="${textColor}"
      font-size="${fontSize}"
      font-family="${fontFamily}"
      font-weight="${fontWeight}"
      data-texts="${texts.join(",")}"
    ></typed-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    delay: 100,
    pause: 1000,
    textColor: "#ffffff",
    fontSize: "2rem",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    texts: ["Hello", "World", "Sassi!"],
};
