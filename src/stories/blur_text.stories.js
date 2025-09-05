import "../components/text_animation/blur-text.js";

export default {
    title: "Components/Text_Animation/BlurText",
    argTypes: {
        delay: { control: { type: "number" }, defaultValue: 100 },
        animateBy: {
            control: { type: "radio" },
            options: ["letters", "words"],
            defaultValue: "letters",
        },
        textColor: { control: "color", defaultValue: "#ffffff" }, // 👈統一 مع الباقي
        fontSize: { control: "text", defaultValue: "2rem" },
        fontFamily: { control: "text", defaultValue: "sans-serif" },
        fontWeight: {
            control: { type: "select" },
            options: ["normal", "bold", "lighter", "bolder"],
            defaultValue: "bold",
        },
        text: { control: "text", defaultValue: "Hello Sassi!" },
    },
};

const Template = ({
                      delay,
                      animateBy,
                      textColor,
                      fontSize,
                      fontFamily,
                      fontWeight,
                      text,
                  }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: black; /* 👈統一 */
    text-align: center;
  ">
    <blur-text
      delay="${delay}"
      animate-by="${animateBy}"
      text-color="${textColor}"
      font-size="${fontSize}"
      font-family="${fontFamily}"
      font-weight="${fontWeight}"
    >
      ${text}
    </blur-text>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    delay: 100,
    animateBy: "letters",
    textColor: "#ffffff", // 👈統一
    fontSize: "2rem",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    text: "Hello Sassi!",
};
