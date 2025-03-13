import "clsx";
import { o as sanitize_props, q as spread_props, t as slot } from "./index.js";
import { I as Icon } from "./Icon.js";
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Breadcrumb($$payload, $$props) {
  let { base, current } = $$props;
  $$payload.out += `<div class="svelte-89z1k4">`;
  base?.($$payload);
  $$payload.out += `<!----> `;
  Chevron_right($$payload, { size: 14 });
  $$payload.out += `<!----> `;
  current?.($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  Breadcrumb as B
};
