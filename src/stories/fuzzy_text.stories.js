import "../components/text_animation/fuzzy-text.js";

export default {
    title: "Components/Text_Animation/FuzzyText",
    argTypes: {
        text: { control: "text", defaultValue: "Hello Sassi!" },
        color: { control: "color", defaultValue: "#ffffff" },
        fontSize: { control: "text", defaultValue: "5rem" },
        fontWeight: {
            control: { type: "select" },
            options: ["100", "400", "700", "900"],
            defaultValue: "900",
        },
        fontFamily: { control: "text", defaultValue: "monospace" },
        baseIntensity: { control: { type: "number", min: 0, step: 0.1 }, defaultValue: 0.3 },
        hoverIntensity: { control: { type: "number", min: 0, step: 0.1 }, defaultValue: 0.5 },
        enableHover: { control: { type: "boolean" }, defaultValue: true },
    },
};

const Template = ({
                      text,
                      color,
                      fontSize,
                      fontWeight,
                      fontFamily,
                      baseIntensity,
                      hoverIntensity,
                      enableHover,
                  }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black;
  ">
    <fuzzy-text
      text="${text}"
      color="${color}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      font-family="${fontFamily}"
      base-intensity="${baseIntensity}"
      hover-intensity="${hoverIntensity}"
      ${enableHover ? "enable-hover" : ""}
    ></fuzzy-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    text: "Hello Sassi!",
    color: "#ff00ff",
    fontSize: "5rem",
    fontWeight: "900",
    fontFamily: "monospace",
    baseIntensity: 0.3,
    hoverIntensity: 0.5,
    enableHover: true,
};
