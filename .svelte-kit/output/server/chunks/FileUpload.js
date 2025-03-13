import { o as sanitize_props, q as spread_props, t as slot, x as spread_attributes, m as attr, l as escape_html, v as stringify } from "./index.js";
import { I as Icon } from "./Icon.js";
function File_up($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M12 12v6" }],
    ["path", { "d": "m15 15-3-3-3 3" }]
  ];
  Icon($$payload, spread_props([
    { name: "file-up" },
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
function FileUpload($$payload, $$props) {
  let {
    selectedFileName = null,
    $$slots,
    $$events,
    ...nativeProps
  } = $$props;
  $$payload.out += `<div class="svelte-5x3eci"><input${spread_attributes({ type: "file", ...nativeProps, hidden: true }, { "svelte-5x3eci": true })}> `;
  File_up($$payload, { size: 20 });
  $$payload.out += `<!----> <span${attr("class", `svelte-5x3eci ${stringify([selectedFileName ? "fileSelected" : ""].filter(Boolean).join(" "))}`)}>${escape_html(selectedFileName ?? "Click to browse")}</span></div>`;
}
export {
  FileUpload as F
};
