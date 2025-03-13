import "clsx";
import { n as escape_html, m as attr, A as add_styles, t as sanitize_props, u as spread_props, v as slot } from "./index.js";
/* empty css                                          */
import { I as Icon } from "./Icon.js";
function Sidebar($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<nav class="svelte-14no5x">`;
  children($$payload);
  $$payload.out += `<!----></nav>`;
}
function SidebarBody($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<section class="svelte-1jc5bf7"><ul>`;
  children?.($$payload);
  $$payload.out += `<!----></ul></section>`;
}
function SidebarGroup($$payload, $$props) {
  let { children, label } = $$props;
  $$payload.out += `<div class="svelte-173f19o"><span class="svelte-173f19o">${escape_html(label)}</span> <ul class="svelte-173f19o">`;
  children?.($$payload);
  $$payload.out += `<!----></ul></div>`;
}
function SidebarHeader($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<section class="svelte-3y5teo">`;
  children?.($$payload);
  $$payload.out += `<!----></section>`;
}
function SidebarLinkItem($$payload, $$props) {
  let { children, href } = $$props;
  $$payload.out += `<li class="svelte-59annt"><a${attr("href", href)} class="svelte-59annt">`;
  children?.($$payload);
  $$payload.out += `<!----></a></li>`;
}
function StartupIcon($$payload, $$props) {
  let { name, backgroundColor } = $$props;
  $$payload.out += `<div${add_styles({ "background-color": backgroundColor })} class="svelte-12j1bxc"><span>${escape_html(name)}</span></div>`;
}
function Box($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
    ["path", { "d": "M12 22V12" }]
  ];
  Icon($$payload, spread_props([
    { name: "box" },
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
function Briefcase_business($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 12h.01" }],
    [
      "path",
      {
        "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
      }
    ],
    [
      "path",
      { "d": "M22 13a18.15 18.15 0 0 1-20 0" }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "6",
        "rx": "2"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "briefcase-business" },
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
function Dollar_sign($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "2",
        "y2": "22"
      }
    ],
    [
      "path",
      {
        "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "dollar-sign" },
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
function Egg($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "egg" },
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
function Link_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M9 17H7A5 5 0 0 1 7 7h2" }],
    ["path", { "d": "M15 7h2a5 5 0 1 1 0 10h-2" }],
    [
      "line",
      {
        "x1": "8",
        "x2": "16",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "link-2" },
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
function Rocket($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    [
      "path",
      { "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }
    ],
    [
      "path",
      { "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "rocket" },
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
function Telescope($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
      }
    ],
    ["path", { "d": "m13.56 11.747 4.332-.924" }],
    ["path", { "d": "m16 21-3.105-6.21" }],
    [
      "path",
      {
        "d": "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
      }
    ],
    ["path", { "d": "m6.158 8.633 1.114 4.456" }],
    ["path", { "d": "m8 21 3.105-6.21" }],
    [
      "circle",
      { "cx": "12", "cy": "13", "r": "2" }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "telescope" },
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
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { "d": "M16 3.13a4 4 0 0 1 0 7.75" }]
  ];
  Icon($$payload, spread_props([
    { name: "users" },
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
export {
  Box as B,
  Dollar_sign as D,
  Egg as E,
  Link_2 as L,
  Rocket as R,
  StartupIcon as S,
  Telescope as T,
  Users as U,
  Sidebar as a,
  SidebarHeader as b,
  SidebarBody as c,
  SidebarGroup as d,
  SidebarLinkItem as e,
  Briefcase_business as f
};
