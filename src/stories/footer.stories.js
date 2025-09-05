import "../components/basic/footer.js";

export default {
    title: "Components/Basic/Footer",
    argTypes: {
        bgColor: { control: "color", defaultValue: "#2c3e50" },
        textColor: { control: "color", defaultValue: "#ecf0f1" },
        hoverColor: { control: "color", defaultValue: "#faba1b" },
        linkColor: { control: "color", defaultValue: "#bdc3c7" },
        padding: { control: "text", defaultValue: "2rem" },
        columns: { control: { type: "number", min: 1, max: 4 }, defaultValue: 4 },
        columnGap: { control: "text", defaultValue: "2rem" },
        rowGap: { control: "text", defaultValue: "1rem" },
        borderTop: { control: "text", defaultValue: "1px solid rgba(255,255,255,0.1)" },
        socialIconSize: { control: "text", defaultValue: "1.5rem" },
        socialIconGap: { control: "text", defaultValue: "1rem" },
    }
};

const Template = ({
                      bgColor,
                      textColor,
                      hoverColor,
                      linkColor,
                      padding,
                      columns,
                      columnGap,
                      rowGap,
                      borderTop,
                      socialIconSize,
                      socialIconGap,
                  }) => `
  <div style="width:100%; min-height:100vh; background:#fff; display:flex; flex-direction:column; justify-content:flex-end;">
    <footer-layout
      bg-color="${bgColor}"
      text-color="${textColor}"
      hover-color="${hoverColor}"
      link-color="${linkColor}"
      padding="${padding}"
      columns="${columns}"
      column-gap="${columnGap}"
      row-gap="${rowGap}"
      border-top="${borderTop}"
      social-icon-size="${socialIconSize}"
      social-icon-gap="${socialIconGap}"
    >
      <!-- Column 1 -->
      <span slot="column-1-title" class="footer-title">Company</span>
      <a slot="column-1-links" href="#">About Us</a>
      <a slot="column-1-links" href="#">Careers</a>
      <a slot="column-1-links" href="#">Blog</a>

      <!-- Column 2 -->
      <span slot="column-2-title" class="footer-title">Support</span>
      <a slot="column-2-links" href="#">Help Center</a>
      <a slot="column-2-links" href="#">Contact Us</a>
      <a slot="column-2-links" href="#">Privacy Policy</a>

      <!-- Column 3 -->
      <span slot="column-3-title" class="footer-title">Resources</span>
      <a slot="column-3-links" href="#">Docs</a>
      <a slot="column-3-links" href="#">API</a>
      <a slot="column-3-links" href="#">Community</a>

      <!-- Column 4 -->
      <span slot="column-4-title" class="footer-title">Stay Connected</span>
      <p slot="column-4-content">Subscribe to our newsletter to get updates and offers.</p>
      <a slot="social-links" href="#">🌐</a>
      <a slot="social-links" href="#">🐦</a>
      <a slot="social-links" href="#">📘</a>

      <!-- Copyright -->
      <span slot="copyright">© 2025 MyCompany. All rights reserved.</span>
    </footer-layout>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
    bgColor: "#2c3e50",
    textColor: "#ecf0f1",
    hoverColor: "#faba1b",
    linkColor: "#bdc3c7",
    padding: "2rem",
    columns: 4,
    columnGap: "2rem",
    rowGap: "1rem",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    socialIconSize: "1.5rem",
    socialIconGap: "1rem",
};
