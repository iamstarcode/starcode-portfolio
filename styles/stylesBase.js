import tw, { css } from "twin.macro"

const stylesBase = css`
  .light {
    --bg-color: rgba(255,255,255, 1);
    --text-color: rgba(60,41,71, 1);
    --text-soft-color: rgba(82,69,91, 1);
    --text-strong-color: rgba(74,74,74, 1);
    --subtle-color: rgba(251,248,253, 1);
    --border-color: rgba(237,227,245, 1);
    --shadow-color: rgba(204,183,219, 1);
    --input-color: rgba(255,255,255, 1);
    --outline-color: rgba(209,181,228, 1);
    --mark-color: rgba(178,85,222, 0.08);
    --special-color: rgba(178,85,222, 1);
    --special-bg-color: rgba(180,92,223, 1);
    --special-text-color: rgba(255,255,255, 1);
    --special-shadow-color: rgba(101,83,112, 1);
    --special-mark-color: rgba(255,255,255, 0.08);
    --light-color: rgba(247,241,252, 1);
    --base-100: rgba(247,241,252, 1);
    --dark-color: rgba(81,64,92, 1);
    --text-color-rgb: 60,41,71;
    --bg-color-rgb: 255,255,255;
    --subtle-color-rgb: 251,248,253;
    --special-color-rgb: 178,85,222;
    --special-text-color-rgb: 255,255,255;
    --special-bg-color-rgb: 180,92,223;
    --shadow-color-rgb: 204,183,219;
    --special-shadow-color-rgb: 101,83,112;
    --outline-color-rgb: 209,181,228;
    --dark-color-rgb: 81,64,92;
    --light-color-rgb: 247,241,252;
  }
  .dark {
    --bg-color: rgba(32,32,32, 1);
    --text-color: rgba(225,222,228, 1);
    --text-soft-color: rgba(190,186,192, 1);
    --text-strong-color: rgba(187,187,187, 1);
    --subtle-color: rgba(38,35,41, 1);
    --border-color: rgba(53,45,59, 1);
    --shadow-color: rgba(0,0,0, 1);
    --input-color: rgba(28,28,28, 1);
    --outline-color: rgba(187,141,214, 1);
    --mark-color: rgba(173,116,205, 0.08);
    --special-color: rgba(173,116,205, 1);
    --special-bg-color: rgba(131,74,161, 1);
    --special-text-color: rgba(225,222,228, 1);
    --special-shadow-color: rgba(35,27,40, 1);
    --special-mark-color: rgba(225,222,228, 0.08);
    --light-color: rgba(224,205,237, 1);
    --dark-color: rgba(59,49,66, 1);
    --base-100: rgba(59,49,66, 1);
    --text-color-rgb: 225,222,228;
    --bg-color-rgb: 32,32,32;
    --subtle-color-rgb: 38,35,41;
    --special-color-rgb: 173,116,205;
    --special-text-color-rgb: 225,222,228;
    --special-bg-color-rgb: 131,74,161;
    --shadow-color-rgb: 0,0,0;
    --special-shadow-color-rgb: 35,27,40;
    --outline-color-rgb: 187,141,214;
    --dark-color-rgb: 59,49,66;
    --light-color-rgb: 224,205,237;
  }
  body {
    ${tw`bg-subtle text-primary transition-all duration-200`}
  }
`

export default stylesBase
