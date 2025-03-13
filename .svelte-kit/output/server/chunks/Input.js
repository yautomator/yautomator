import "clsx";
import { p as push, k as pop, x as spread_attributes } from "./index.js";
/* empty css                                          */
const layout = { selectedFounder: null, selectedStartup: null };
function SelectedStartupIcon($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function PrimaryButton($$payload, $$props) {
  let { children, $$slots, $$events, ...nativeProps } = $$props;
  $$payload.out += `<button${spread_attributes({ ...nativeProps }, { "svelte-ldtjip": true })}>`;
  children?.($$payload);
  $$payload.out += `<!----></button>`;
}
function Input($$payload, $$props) {
  let { $$slots, $$events, ...nativeProps } = $$props;
  $$payload.out += `<input${spread_attributes({ type: "text", ...nativeProps }, { "svelte-1gd8b2m": true })}>`;
}
export {
  Input as I,
  PrimaryButton as P,
  SelectedStartupIcon as S,
  layout as l
};
