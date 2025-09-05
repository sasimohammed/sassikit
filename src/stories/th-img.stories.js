import "../components/basic/th-img.js";

export default {
    title: "Components/Basic/Thumbnail Preview",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#ffffff" },
        containerWidth: { control: "text", defaultValue: "600px" },
        borderRadius: { control: "text", defaultValue: "20px" },
        shadow: { control: "text", defaultValue: "0 4px 12px rgba(0,0,0,0.1)" },
        padding: { control: "text", defaultValue: "20px" },
        thumbSize: { control: "text", defaultValue: "80px" },
    },
};

const Template = ({
                      bgColor,
                      containerWidth,
                      borderRadius,
                      shadow,
                      padding,
                      thumbSize,
                  }) => `
  <div style="
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
  ">
    <th-img
      bg-color="${bgColor}"
      container-width="${containerWidth}"
      border-radius="${borderRadius}"
      shadow="${shadow}"
      padding="${padding}"
      thumb-size="${thumbSize}"
    >
      <img slot="s-img" src="https://picsum.photos/300/200?random=1"/>
      <img slot="s-img" src="https://picsum.photos/300/200?random=2"/>
      <img slot="s-img" src="https://picsum.photos/300/200?random=3"/>
      <img slot="s-img" src="https://picsum.photos/300/200?random=4"/>
      <img slot="s-img" src="https://picsum.photos/300/200?random=5"/>
    </th-img>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#ffffff",
    containerWidth: "600px",
    borderRadius: "20px",
    shadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    thumbSize: "80px",
};
