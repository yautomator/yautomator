import { x as spread_attributes, m as attr, k as pop, p as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { I as Input, l as layout, P as PrimaryButton, S as SelectedStartupIcon } from "../../../../chunks/Input.js";
import "clsx";
import { F as FlexGroup } from "../../../../chunks/FlexGroup.js";
import { g as getCurrentCountry, T as Textarea, S as Select } from "../../../../chunks/Select.js";
import "nprogress";
function Container($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="svelte-p7hxi7">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
function Switch($$payload, $$props) {
  let { $$slots, $$events, ...nativeProps } = $$props;
  $$payload.out += `<label class="svelte-ygtnt"><input${spread_attributes(
    {
      type: "checkbox",
      ...nativeProps,
      hidden: true
    },
    { "svelte-ygtnt": true }
  )}> <span class="svelte-ygtnt"></span></label>`;
}
const convertDatetimeToDate = (datetime) => {
  return null;
};
function _page($$payload, $$props) {
  push();
  let isLoading = false;
  let country = getCurrentCountry();
  $$payload.out += `<header class="svelte-7xaf1">`;
  {
    let base = function($$payload2) {
      SelectedStartupIcon($$payload2);
    }, current = function($$payload2) {
      $$payload2.out += `<span>Basic information</span>`;
    };
    Breadcrumb($$payload, {
      base,
      current
    });
  }
  $$payload.out += `<!----></header> <main class="svelte-7xaf1"><form method="POST" enctype="multipart/form-data" class="svelte-7xaf1"><h1 class="svelte-7xaf1">Basic information</h1> <input type="hidden" name="id"${attr("value", layout.selectedStartup?._id)}> `;
  FlexGroup($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<label class="svelte-7xaf1">Startup name <small class="svelte-7xaf1">Official name of your startup or business</small> `;
      Input($$payload2, {
        type: "text",
        placeholder: "Acme Technologies",
        name: "name",
        value: layout.selectedStartup?.name,
        required: true
      });
      $$payload2.out += `<!----></label>`;
    }
  });
  $$payload.out += `<!----> <label class="svelte-7xaf1">Description <small class="svelte-7xaf1">Brief overview of what your startup does and its mission</small> `;
  Textarea($$payload, {
    placeholder: "Acme Technologies is an AI-powered real-time analytics platform that transforms raw data into actionable insights. Our mission is to simplify data complexity, eliminate silos, and empower businesses with seamless, intuitive analytics. By leveraging automation and real-time collaboration, we help companies of all sizes make smarter, faster, and more informed decisions—unlocking their full potential in an increasingly data-driven world. ",
    name: "description",
    rows: 5,
    value: layout.selectedStartup?.description,
    required: true
  });
  $$payload.out += `<!----></label> `;
  FlexGroup($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<label class="svelte-7xaf1">Founded date <small class="svelte-7xaf1">When your startup was officially established</small> `;
      Input($$payload2, {
        type: "date",
        placeholder: "Select date",
        name: "foundedDate",
        min: "1950-01-01",
        value: convertDatetimeToDate(),
        required: true
      });
      $$payload2.out += `<!----></label> <label class="svelte-7xaf1">Location <small class="svelte-7xaf1">Country where your startup operates</small> `;
      Select($$payload2, {
        placeholder: "Select country",
        name: "location",
        value: country
      });
      $$payload2.out += `<!----></label>`;
    }
  });
  $$payload.out += `<!----> `;
  Container($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="svelte-7xaf1"><label for="incorporation" class="svelte-7xaf1">Incorporation Status <small class="svelte-7xaf1">Is your business legally incorporated</small></label> `;
      Switch($$payload2, {
        name: "incorporation",
        checked: layout.selectedStartup?.incorporation
      });
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----> `;
  PrimaryButton($$payload, {
    type: "submit",
    disabled: isLoading,
    children: ($$payload2) => {
      $$payload2.out += `<span>Save information</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></main>`;
  pop();
}
export {
  _page as default
};
