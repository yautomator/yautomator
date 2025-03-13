import "clsx";
import { l as ensure_array_like, m as attr, n as escape_html, k as pop, p as push, o as stringify } from "../../chunks/index.js";
import "../../chunks/client.js";
import { S as StartupIcon, a as Sidebar, b as SidebarHeader, c as SidebarBody, d as SidebarGroup, e as SidebarLinkItem, B as Box, f as Briefcase_business, L as Link_2, U as Users, R as Rocket, E as Egg, D as Dollar_sign, T as Telescope } from "../../chunks/app.js";
import { p as page } from "../../chunks/index2.js";
import NProgress from "nprogress";
function StartupSwitcher($$payload, $$props) {
  push();
  const each_array = ensure_array_like(page.data.startups);
  $$payload.out += `<div class="svelte-17dlu9k"><button class="svelte-17dlu9k">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button> <ul${attr("class", `svelte-17dlu9k ${stringify([""].filter(Boolean).join(" "))}`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let startup = each_array[$$index];
    $$payload.out += `<li class="svelte-17dlu9k"><button class="svelte-17dlu9k">`;
    StartupIcon($$payload, {
      name: startup.abbreviation,
      backgroundColor: startup.color
    });
    $$payload.out += `<!----> ${escape_html(startup.name)}</button></li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  NProgress.configure({ showSpinner: false });
  Sidebar($$payload, {
    children: ($$payload2) => {
      SidebarHeader($$payload2, {
        children: ($$payload3) => {
          StartupSwitcher($$payload3);
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
                href: "/organizations/launch",
                children: ($$payload5) => {
                  Telescope($$payload5, { size: 15, strokeWidth: 2 });
                  $$payload5.out += `<!----> Launch`;
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
  $$payload.out += `<!----> <div class="svelte-g8y2xf">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
