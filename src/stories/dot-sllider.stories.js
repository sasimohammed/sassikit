import "../components/basic/dot-slider.js";

export default {
    title: "Components/Basic/Dot Slider",
    argTypes: {
        columns: { control: { type: "number", min: 1, max: 5 }, defaultValue: 3 },
        rows: { control: { type: "number", min: 1, max: 5 }, defaultValue: 2 },
        // width controller removed
    },
};

const Template = ({ columns, rows }) => `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 20px;
    width: 100vw;
    height: 100vh;
  ">
    <dot-slider columns="${columns}" rows="${rows}">
      <!-- Example demo slides with smaller images -->
      <div slot="slide"><img src="https://picsum.photos/400/300?1" alt="Demo Image 1" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?2" alt="Demo Image 2" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?3" alt="Demo Image 3" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?4" alt="Demo Image 4" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?5" alt="Demo Image 5" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?6" alt="Demo Image 6" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?7" alt="Demo Image 7" style="width:200px; height:auto; border-radius:8px;"/></div>
      <div slot="slide"><img src="https://picsum.photos/400/300?8" alt="Demo Image 8" style="width:200px; height:auto; border-radius:8px;"/></div>
    </dot-slider>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    columns: 2,
    rows: 2,
};
