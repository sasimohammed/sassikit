import "../components/text_animation/changing-text.js";

export default {
    title: "Components/Text_Animation/ChangingText",
    argTypes: {
        text: { control: "text", defaultValue: "I am" },
        changingTexts: {
            control: "array",
            defaultValue: ["fast", "strong", "creative"]
        },
        fontSize: { control: "text", defaultValue: "2rem" },
        fontWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder"],
            defaultValue: "bold"
        },
        color: { control: "color", defaultValue: "#ffffff" }, // 👈 زي TrueFocus
        fontFamily: { control: "text", defaultValue: "sans-serif" },
        interval: { control: { type: "number" }, defaultValue: 1500 },
        bgColor: { control: "color", defaultValue: "transparent" }, // 👈 default بسيط
        borderRadius: { control: "text", defaultValue: "0px" },
        padding: { control: "text", defaultValue: "0.25rem 0.5rem" },
    },
};

const Template = ({
                      text,
                      changingTexts,
                      fontSize,
                      fontWeight,
                      color,
                      fontFamily,
                      interval,
                      bgColor,
                      borderRadius,
                      padding
                  }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black; /* 👈 نفس الشكل */
  ">
    <changing-text
      text="${text}"
      changing-texts="${changingTexts.join(", ")}"
      font-size="${fontSize}"
      font-weight="${fontWeight}"
      color="${color}"
      font-family="${fontFamily}"
      interval="${interval}"
      bg-color="${bgColor}"
      border-radius="${borderRadius}"
      padding="${padding}"
    ></changing-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    text: "I am",
    changingTexts: ["fast", "strong", "creative"],
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffffff", // 👈 زي TrueFocus
    fontFamily: "sans-serif",
    interval: 1500,
    bgColor: "purple",
    borderRadius: "5px",
    padding: "0.25rem 0.5rem",
};
