import "../components/basic/slider.js";

export default {
    title: "Components/Basic/Slider",
    argTypes: {
        width: { control: "text", defaultValue: "80%" },
        bgColor: { control: "color", defaultValue: "white" },
        itemBgColor: { control: "color", defaultValue: "white" },
        arrowBgColor: { control: "color", defaultValue: "white" },
        arrowColor: { control: "color", defaultValue: "black" },
        controllerBgColor: { control: "color", defaultValue: "transparent" },
        itemWidth: { control: "text", defaultValue: "200px" },
        itemHeight: { control: "text", defaultValue: "150px" },
        sliderHeight: { control: "text", defaultValue: "30vh" },
        arrowSize: { control: "text", defaultValue: "20px" },
        itemGap: { control: "text", defaultValue: "10px" },
        borderRadius: { control: "text", defaultValue: "8px" },
    },
};

const Template = ({
                      width,
                      bgColor,
                      itemBgColor,
                      arrowBgColor,
                      arrowColor,
                      controllerBgColor,
                      itemWidth,
                      itemHeight,
                      sliderHeight,
                      arrowSize,
                      itemGap,
                      borderRadius,
                  }) => `
  <!-- Center wrapper -->
  <div style="   height:100vh;display:flex; justify-content:center; align-items:center;   ">
    <div style="width:${width};  border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); background-color: red ">
      <arrow-slider
        bg-color="${bgColor}"
        item-bg-color="${itemBgColor}"
        arrow-bg-color="${arrowBgColor}"
        arrow-color="${arrowColor}"
        controller-bg-color="${controllerBgColor}"
        item-width="${itemWidth}"
        item-height="${itemHeight}"
        slider-height="${sliderHeight}"
        arrow-size="${arrowSize}"
        item-gap="${itemGap}"
        border-radius="${borderRadius}"
      >
      
        <div slot="slider-item"><img src="https://picsum.photos/300/200?1" alt="Slide 1" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
        <div slot="slider-item"><img src="https://picsum.photos/300/200?2" alt="Slide 2" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
        <div slot="slider-item"><img src="https://picsum.photos/300/200?3" alt="Slide 3" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
        <div slot="slider-item"><img src="https://picsum.photos/300/200?4" alt="Slide 4" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
        <div slot="slider-item"><img src="https://picsum.photos/300/200?5" alt="Slide 5" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
        <div slot="slider-item"><img src="https://picsum.photos/300/200?6" alt="Slide 6" style="width:100%; height:100%; object-fit:cover; border-radius:${borderRadius};"/></div>
      </arrow-slider>
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    width: "75%",
    bgColor: "white",
    itemBgColor: "white",
    arrowBgColor: "white",
    arrowColor: "black",
    controllerBgColor: "transparent",
    itemWidth: "200px",
    itemHeight: "150px",
    sliderHeight: "30vh",
    arrowSize: "20px",
    itemGap: "10px",
    borderRadius: "8px",
};
