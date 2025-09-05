import "../components/flipping_card.js";

export default {
    title: "Components/Interactive-Cards/Flip Box",
    argTypes: {
        width: { control: "text", defaultValue: "250px" },
        height: { control: "text", defaultValue: "150px" },
        frontColor: { control: "color", defaultValue: "#1abc9c" },
        backColor: { control: "color", defaultValue: "#9b59b6" },
        borderRadius: { control: "text", defaultValue: "15px" },
        flipDirection: {
            control: { type: "select" },
            options: ["up", "down", "left", "right"],
            defaultValue: "up",
        },
    },
};

const Template = ({ width, height, frontColor, backColor, borderRadius, flipDirection }) => `
  <div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f9f9f9;">
    <flip-box
      width="${width}"
      height="${height}"
      front-color="${frontColor}"
      back-color="${backColor}"
      border-radius="${borderRadius}"
      flip-direction="${flipDirection}"
    >
      <div slot="front" style="color:white; font-size:1.2rem;">Front</div>
      <div slot="back" style="color:white; font-size:1.2rem;">Back</div>
    </flip-box>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: "250px",
    height: "150px",
    frontColor: "#1abc9c",
    backColor: "#9b59b6",
    borderRadius: "15px",
    flipDirection: "up",
};
