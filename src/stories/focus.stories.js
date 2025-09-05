import "../components/text_animation/true-focus.js";

export default {
    title: "Components/Text_Animation/TrueFocusText",
    argTypes: {
        text: { control: "text", defaultValue: "Stay True Focus" },
        blur: { control: { type: "number", min: 0, max: 20 }, defaultValue: 5 },
        duration: { control: { type: "number", min: 0.1, step: 0.1 }, defaultValue: 0.5 },
        borderColor: { control: "color", defaultValue: "green" },
        fontColor: { control: "color", defaultValue: "#ffffff" },
        fontSize: { control: "text", defaultValue: "3rem" },
        fontWeight: {
            control: { type: "select" },
            options: ["100", "400", "700", "900"],
            defaultValue: "900",
        },
        fontFamily: { control: "text", defaultValue: "inherit" },
    },
};

const Template = ({
                      text,
                      blur,
                      duration,
                      borderColor,
                      fontColor,
                      fontSize,
                      fontWeight,
                      fontFamily,
                  }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
  ">
    <focus-text
      text="${text}"
      blur="${blur}"
      duration="${duration}"
      border-color="${borderColor}"
      font-color="${fontColor}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      font-family="${fontFamily}" 
    ></focus-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    text: "Stay True Focus",
    blur: 5,
    duration: 0.5,
    borderColor: "green",
    fontColor: "#ffffff",
    fontSize: "3rem",
    fontWeight: "900",
    fontFamily: "inherit",
};
