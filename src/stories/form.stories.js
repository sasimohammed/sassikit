import "../components/basic/form.js";

export default {
    title: "Components/Basic/Form",
    argTypes: {
        "form-label": { control: "text", defaultValue: "Log In" },
        fields: { control: "text", defaultValue: "gender,email,password" },
        "field-types": { control: "text", defaultValue: "select,text,password" },
        options: { control: "text", defaultValue: "female:Female,male:Male;;" },
        "submit-text": { control: "text", defaultValue: "Sign In" },
        "bg-color": { control: "color", defaultValue: "#ffffff" },
        "text-color": { control: "color", defaultValue: "#333333" },
        "accent-color": { control: "color", defaultValue: "#4a6bff" },
        "input-bg": { control: "color", defaultValue: "#f8f9fa" },
        "input-border": { control: "color", defaultValue: "#e0e0e0" },
        "input-border-width": { control: "text", defaultValue: "1px" },
        "input-border-style": { control: "text", defaultValue: "solid" },
        "border-radius": { control: "text", defaultValue: "8px" },
        padding: { control: "text", defaultValue: "2rem" },
        "input-height": { control: "text", defaultValue: "3rem" },
        "textarea-height": { control: "text", defaultValue: "100px" },
        "enable-focus": { control: "boolean", defaultValue: true },
        "font-size": { control: "text", defaultValue: "16px" },
        "font-family": { control: "text", defaultValue: "Arial, sans-serif" },
        "label-font-size": { control: "text", defaultValue: "14px" },
        "button-font-size": { control: "text", defaultValue: "16px" },
    },
};

const Template = ({
                      "form-label": formLabel,
                      fields,
                      "field-types": fieldTypes,
                      options,
                      "submit-text": submitText,
                      "bg-color": bgColor,
                      "text-color": textColor,
                      "accent-color": accentColor,
                      "input-bg": inputBg,
                      "input-border": inputBorder,
                      "input-border-width": inputBorderWidth,
                      "input-border-style": inputBorderStyle,
                      "border-radius": borderRadius,
                      padding,
                      "input-height": inputHeight,
                      "textarea-height": textareaHeight,
                      "enable-focus": enableFocus,
                      "font-size": fontSize,
                      "font-family": fontFamily,
                      "label-font-size": labelFontSize,
                      "button-font-size": buttonFontSize,
                  }) => `
  <form-layout
    form-label="${formLabel}"   
    fields="${fields}"
    field-types="${fieldTypes}"
    options="${options}"
    submit-text="${submitText}"
    bg-color="${bgColor}"
    text-color="${textColor}"
    accent-color="${accentColor}"
    input-bg="${inputBg}"
    input-border="${inputBorder}"
    input-border-width="${inputBorderWidth}"
    input-border-style="${inputBorderStyle}"
    border-radius="${borderRadius}"
    padding="${padding}"
    input-height="${inputHeight}"
    textarea-height="${textareaHeight}"
    enable-focus="${enableFocus}"
    font-size="${fontSize}"
    font-family="${fontFamily}"
    label-font-size="${labelFontSize}"
    button-font-size="${buttonFontSize}"
  ></form-layout>
`;

export const Default = Template.bind({});
Default.args = {
    "form-label": "Log In",
    fields: "gender,email,password",
    "field-types": "select,text,password",
    options: "female:Female,male:Male;;",
    "submit-text": "Sign In",
    "bg-color": "#ffffff",
    "text-color": "#333333",
    "accent-color": "#4a6bff",
    "input-bg": "#f8f9fa",
    "input-border": "#e0e0e0",
    "input-border-width": "1px",
    "input-border-style": "solid",
    "border-radius": "8px",
    padding: "2rem",
    "input-height": "3rem",
    "textarea-height": "100px",
    "enable-focus": true,
    "font-size": "16px",
    "font-family": "Arial, sans-serif",
    "label-font-size": "14px",
    "button-font-size": "16px",
};
