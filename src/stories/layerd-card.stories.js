import "../components/basic/card.js";

export default {
    title: "Components/Basic/LayeredCard",
    argTypes: {
        width: { control: "text", defaultValue: "300px" },
        height: { control: "text", defaultValue: "300px" },
        layerColor: { control: "color", defaultValue: "rgba(0, 0, 0, 0.7)" },
        layerText: { control: "text", defaultValue: "Hello World!" },
        textColor: { control: "color", defaultValue: "white" },
        textSize: { control: "text", defaultValue: "32px" },
        textWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
            defaultValue: "bold"
        },
    },
};

const Template = ({ width, height, layerColor, layerText, textColor, textSize, textWeight }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 100vh;
    width: 100%;
  ">
    <overlay-card
      width="${width}"
      height="${height}"
      layer-color="${layerColor}"
      layer-text="${layerText}"
      text-color="${textColor}"
      text-size="${textSize}"
      text-weight="${textWeight}"
    >
      <img slot="card-content" src="https://picsum.photos/600/400" alt="Demo Image"/>
    </overlay-card>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: "300px",
    height: "300px",
    layerColor: "rgba(0, 0, 0, 0.7)",
    layerText: "Hello World!",
    textColor: "white",
    textSize: "32px",
    textWeight: "bold",
};
