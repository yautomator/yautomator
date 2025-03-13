import { j as setContext, q as spread_attributes, m as attr, k as pop, p as push, o as stringify, l as ensure_array_like, n as escape_html } from "../../../../chunks/index.js";
import { a as Sidebar, b as SidebarHeader, S as StartupIcon, B as Box, c as SidebarBody, d as SidebarGroup, e as SidebarLinkItem, f as Briefcase_business, L as Link_2, U as Users, R as Rocket, E as Egg, D as Dollar_sign, T as Telescope } from "../../../../chunks/app.js";
import { p as page } from "../../../../chunks/index2.js";
import "clsx";
function Select($$payload, $$props) {
  push();
  const {
    placeholder,
    children,
    $$slots,
    $$events,
    ...nativeProps
  } = $$props;
  let selected = { truth: null };
  setContext("selected", selected);
  $$payload.out += `<div class="svelte-1a9a8gw"><button${spread_attributes({ ...nativeProps }, { "svelte-1a9a8gw": true })}>`;
  placeholder?.($$payload);
  $$payload.out += `<!----></button> <ul${attr("class", `svelte-1a9a8gw ${stringify([""].filter(Boolean).join(" "))}`)}>`;
  children?.($$payload);
  $$payload.out += `<!----></ul></div>`;
  pop();
}
function SelectItem($$payload, $$props) {
  const { children } = $$props;
  $$payload.out += `<li class="svelte-11o6yw6"><button class="svelte-11o6yw6">`;
  children?.($$payload);
  $$payload.out += `<!----></button></li>`;
}
function _page($$payload, $$props) {
  push();
  Sidebar($$payload, {
    children: ($$payload2) => {
      SidebarHeader($$payload2, {
        children: ($$payload3) => {
          {
            let placeholder = function($$payload4) {
              Box($$payload4, { size: 15 });
              $$payload4.out += `<!----> Select value`;
            };
            Select($$payload3, {
              placeholder,
              children: ($$payload4) => {
                const each_array = ensure_array_like(page.data.startups);
                $$payload4.out += `<!--[-->`;
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let startup = each_array[$$index];
                  SelectItem($$payload4, {
                    children: ($$payload5) => {
                      StartupIcon($$payload5, {
                        name: startup.abbreviation,
                        backgroundColor: startup.color
                      });
                      $$payload5.out += `<!----> ${escape_html(startup.name)}`;
                    }
                  });
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { placeholder: true, default: true }
            });
          }
        }
      });
      $$payload2.out += `<!----> `;
      SidebarBody($$payload2, {
        children: ($$payload3) => {
          SidebarGroup($$payload3, {
            label: "Fill startup form",
            children: ($$payload4) => {
              SidebarLinkItem($$payload4, {
                href: "/startup/basic-information",
                children: ($$payload5) => {
                  Box($$payload5, { size: 15, strokeWidth: 3 });
                  $$payload5.out += `<!----> Basic information`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/startup/business-information",
                children: ($$payload5) => {
                  Briefcase_business($$payload5, { size: 15, strokeWidth: 3 });
                  $$payload5.out += `<!----> Business information`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/startup/media-and-links",
                children: ($$payload5) => {
                  Link_2($$payload5, { size: 15, strokeWidth: 3 });
                  $$payload5.out += `<!----> Media &amp; Links`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/startup/founders",
                children: ($$payload5) => {
                  Users($$payload5, { size: 15, strokeWidth: 3 });
                  $$payload5.out += `<!----> Founders`;
                }
              });
              $$payload4.out += `<!---->`;
            }
          });
          $$payload3.out += `<!----> `;
          SidebarGroup($$payload3, {
            label: "Apply to organizations",
            children: ($$payload4) => {
              SidebarLinkItem($$payload4, {
                href: "/organizations/accelerators",
                children: ($$payload5) => {
                  Rocket($$payload5, { size: 15, strokeWidth: 2 });
                  $$payload5.out += `<!----> Accelerators`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/organizations/incubators",
                children: ($$payload5) => {
                  Egg($$payload5, { size: 15, strokeWidth: 2 });
                  $$payload5.out += `<!----> Incubators`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/organizations/venture-capital",
                children: ($$payload5) => {
                  Dollar_sign($$payload5, { size: 15, strokeWidth: 2 });
                  $$payload5.out += `<!----> Venture capital`;
                }
              });
              $$payload4.out += `<!----> `;
              SidebarLinkItem($$payload4, {
                href: "/organizations/product-hunt",
                children: ($$payload5) => {
                  Telescope($$payload5, { size: 15, strokeWidth: 2 });
                  $$payload5.out += `<!----> Product Hunt`;
                }
              });
              $$payload4.out += `<!---->`;
            }
          });
          $$payload3.out += `<!---->`;
        }
      });
      $$payload2.out += `<!---->`;
    }
  });
  pop();
}
export {
  _page as default
};
