import "../components/text_animation/counter-text.js";

export default {
    title: "Components/Text_Animation/CounterText",
    argTypes: {
        start: { control: { type: "number" }, defaultValue: 0 },
        end: { control: { type: "number" }, defaultValue: 100 },
        decimals: { control: { type: "number", min: 0, max: 5 }, defaultValue: 0 },
        duration: { control: { type: "number", min: 0.5, max: 10, step: 0.5 }, defaultValue: 2 },
        fontSize: { control: "text", defaultValue: "2rem" },
        fontWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder"],
            defaultValue: "bold",
        },
        color: { control: "color", defaultValue: "#ffffff" },
        fontFamily: { control: "text", defaultValue: "sans-serif" },
    },
};

const Template = ({ start, end, decimals, duration, fontSize, fontWeight, color, fontFamily }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
  ">
    <counter-text
      start="${start}"
      end="${end}"
      decimals="${decimals}"
      duration="${duration}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      color="${color}"
      font-family="${fontFamily}"
    ></counter-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    start: 0,
    end: 150,
    decimals: 0,
    duration: 2,
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#00ff99",
    fontFamily: "sans-serif",
};
