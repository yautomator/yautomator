import "clsx";
import { o as sanitize_props, q as spread_props, t as slot, x as spread_attributes, p as push, y as bind_props, k as pop, z as copy_payload, A as assign_payload, m as attr } from "../../../../chunks/index.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { l as layout, I as Input, P as PrimaryButton, S as SelectedStartupIcon } from "../../../../chunks/Input.js";
import "../../../../chunks/client.js";
import "../../../../chunks/client2.js";
import { g as getCurrentCountry, S as Select, T as Textarea, a as getCountryByIso } from "../../../../chunks/Select.js";
import "nprogress";
import { F as FlexGroup } from "../../../../chunks/FlexGroup.js";
import { F as FileUpload } from "../../../../chunks/FileUpload.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  Icon($$payload, spread_props([
    { name: "plus" },
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
function User_pen($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M11.5 15H7a4 4 0 0 0-4 4v2" }],
    [
      "path",
      {
        "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ],
    ["circle", { "cx": "10", "cy": "7", "r": "4" }]
  ];
  Icon($$payload, spread_props([
    { name: "user-pen" },
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
function Users_round($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 21a8 8 0 0 0-16 0" }],
    ["circle", { "cx": "10", "cy": "8", "r": "5" }],
    [
      "path",
      {
        "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "users-round" },
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
function X($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$payload, spread_props([
    { name: "x" },
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
function SecondaryButton($$payload, $$props) {
  let { children, $$slots, $$events, ...nativeProps } = $$props;
  $$payload.out += `<button${spread_attributes({ ...nativeProps }, { "svelte-2cl7vd": true })}>`;
  children?.($$payload);
  $$payload.out += `<!----></button>`;
}
function IconButton($$payload, $$props) {
  let { children, $$slots, $$events, ...nativeProps } = $$props;
  $$payload.out += `<button${spread_attributes({ ...nativeProps }, { "svelte-1dngg9c": true })}>`;
  children?.($$payload);
  $$payload.out += `<!----></button>`;
}
function Base($$payload, $$props) {
  push();
  let {
    modalRef = void 0,
    header,
    children,
    footer
  } = $$props;
  const handleClose = () => {
    modalRef.close();
  };
  $$payload.out += `<dialog class="svelte-9i1q8f"><section class="svelte-9i1q8f"><header class="svelte-9i1q8f">`;
  header?.($$payload);
  $$payload.out += `<!----> `;
  IconButton($$payload, {
    onclick: handleClose,
    children: ($$payload2) => {
      X($$payload2, { size: 15 });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></header> <div class="svelte-9i1q8f">`;
  children?.($$payload);
  $$payload.out += `<!----></div> <footer class="svelte-9i1q8f">`;
  footer?.($$payload);
  $$payload.out += `<!----></footer></section></dialog>`;
  bind_props($$props, { modalRef });
  pop();
}
function AddFounder($$payload, $$props) {
  push();
  let isLoading = false;
  let modalRef = void 0;
  let formId = "add-founder";
  let country = getCurrentCountry();
  const close = () => {
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      let header = function($$payload3) {
        {
          let base = function($$payload4) {
            SelectedStartupIcon($$payload4);
          }, current = function($$payload4) {
            $$payload4.out += `<span>New founder</span>`;
          };
          Breadcrumb($$payload3, {
            base,
            current
          });
        }
      }, footer = function($$payload3) {
        SecondaryButton($$payload3, {
          onclick: close,
          children: ($$payload4) => {
            $$payload4.out += `<span>Cancel</span>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        PrimaryButton($$payload3, {
          type: "submit",
          form: formId,
          disabled: isLoading,
          children: ($$payload4) => {
            Plus($$payload4, { size: 14, strokeWidth: 2.5 });
            $$payload4.out += `<!----> <span>Add founder</span>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      };
      Base($$payload2, {
        get modalRef() {
          return modalRef;
        },
        set modalRef($$value) {
          modalRef = $$value;
          $$settled = false;
        },
        header,
        footer,
        children: ($$payload3) => {
          $$payload3.out += `<form${attr("id", formId)} method="POST" enctype="multipart/form-data" action="?/create" class="svelte-14l8pzv"><input type="hidden" name="startupId"${attr("value", layout.selectedStartup?._id)}> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-14l8pzv">First name `;
              Input($$payload4, {
                type: "text",
                placeholder: "John",
                name: "firstName",
                required: true
              });
              $$payload4.out += `<!----></label> <label class="svelte-14l8pzv">Last name `;
              Input($$payload4, {
                type: "text",
                placeholder: "Doe",
                name: "lastName"
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-14l8pzv">Country `;
              Select($$payload4, {
                placeholder: "Select country",
                name: "country",
                value: country
              });
              $$payload4.out += `<!----></label> <label class="svelte-14l8pzv">LinkedIn `;
              Input($$payload4, {
                placeholder: "https://www.linkedin.com/in/john-doe",
                name: "linkedin",
                type: "url"
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-14l8pzv">Role `;
              Input($$payload4, {
                type: "text",
                placeholder: "Engineer",
                name: "role"
              });
              $$payload4.out += `<!----></label> <label class="svelte-14l8pzv">Email `;
              Input($$payload4, {
                type: "email",
                placeholder: "john.doe@example.com",
                name: "email",
                required: true
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> <label class="svelte-14l8pzv">Summary `;
          Textarea($$payload3, {
            placeholder: "John Doe is a versatile figure commonly used in documentation and instructional materials.",
            name: "summary"
          });
          $$payload3.out += `<!----></label> <label class="svelte-14l8pzv">Upload resume `;
          FileUpload($$payload3, { name: "cv", accept: ".pdf, .doc, .docx" });
          $$payload3.out += `<!----></label></form>`;
        },
        $$slots: { header: true, footer: true, default: true }
      });
    }
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function EditFounder($$payload, $$props) {
  push();
  let formId = "edit-founder";
  let isLoadingUpdate = false;
  let isLoadingDelete = false;
  let modalRef = void 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    {
      let header = function($$payload3) {
        {
          let base = function($$payload4) {
            SelectedStartupIcon($$payload4);
          }, current = function($$payload4) {
            $$payload4.out += `<span>Edit founder</span>`;
          };
          Breadcrumb($$payload3, {
            base,
            current
          });
        }
      }, footer = function($$payload3) {
        $$payload3.out += `<form method="POST" action="?/delete" class="svelte-1sxym5r"><input type="hidden" name="id"${attr("value", layout.selectedFounder?._id)}> `;
        SecondaryButton($$payload3, {
          type: "submit",
          disabled: isLoadingDelete,
          children: ($$payload4) => {
            $$payload4.out += `<span>Delete founder</span>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></form> `;
        PrimaryButton($$payload3, {
          type: "submit",
          form: formId,
          disabled: isLoadingUpdate,
          children: ($$payload4) => {
            User_pen($$payload4, { size: 14, strokeWidth: 2.5 });
            $$payload4.out += `<!----> <span>Update founder</span>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      };
      Base($$payload2, {
        get modalRef() {
          return modalRef;
        },
        set modalRef($$value) {
          modalRef = $$value;
          $$settled = false;
        },
        header,
        footer,
        children: ($$payload3) => {
          $$payload3.out += `<form${attr("id", formId)} method="POST" enctype="multipart/form-data" action="?/update" class="svelte-1sxym5r"><input type="hidden" name="id"${attr("value", layout.selectedFounder?._id)}> <input type="hidden" name="startupId"${attr("value", layout.selectedStartup?._id)}> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-1sxym5r">First name `;
              Input($$payload4, {
                type: "text",
                placeholder: "John",
                name: "firstName",
                value: layout.selectedFounder?.firstName,
                required: true
              });
              $$payload4.out += `<!----></label> <label class="svelte-1sxym5r">Last name `;
              Input($$payload4, {
                type: "text",
                placeholder: "Doe",
                name: "lastName",
                value: layout.selectedFounder?.lastName
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-1sxym5r">Country `;
              Select($$payload4, {
                placeholder: "Select country",
                name: "country",
                value: getCountryByIso()
              });
              $$payload4.out += `<!----></label> <label class="svelte-1sxym5r">LinkedIn `;
              Input($$payload4, {
                placeholder: "https://www.linkedin.com/in/john-doe",
                name: "linkedin",
                type: "url",
                value: layout.selectedFounder?.linkedin
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> `;
          FlexGroup($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<label class="svelte-1sxym5r">Role `;
              Input($$payload4, {
                type: "text",
                placeholder: "Engineer",
                name: "role",
                value: layout.selectedFounder?.role
              });
              $$payload4.out += `<!----></label> <label class="svelte-1sxym5r">Email `;
              Input($$payload4, {
                type: "email",
                placeholder: "john.doe@example.com",
                name: "email",
                value: layout.selectedFounder?.email,
                required: true
              });
              $$payload4.out += `<!----></label>`;
            }
          });
          $$payload3.out += `<!----> <label class="svelte-1sxym5r">Summary `;
          Textarea($$payload3, {
            placeholder: "John Doe is a versatile figure commonly used in documentation and instructional materials.",
            name: "summary",
            value: layout.selectedFounder?.summary
          });
          $$payload3.out += `<!----></label> <label class="svelte-1sxym5r">Upload resume `;
          FileUpload($$payload3, {
            placeholder: "Click to browse",
            name: "cv",
            accept: ".pdf, .doc, .docx",
            selectedFileName: layout.selectedFounder?.cvName
          });
          $$payload3.out += `<!----></label></form>`;
        },
        $$slots: { header: true, footer: true, default: true }
      });
    }
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function _page($$payload, $$props) {
  push();
  const openAddFounderModal = () => {
  };
  AddFounder($$payload);
  $$payload.out += `<!----> `;
  EditFounder($$payload);
  $$payload.out += `<!----> <header class="svelte-uxj0bl">`;
  {
    let base = function($$payload2) {
      SelectedStartupIcon($$payload2);
    }, current = function($$payload2) {
      $$payload2.out += `<span class="svelte-uxj0bl">Founders</span>`;
    };
    Breadcrumb($$payload, {
      base,
      current
    });
  }
  $$payload.out += `<!----> `;
  SecondaryButton($$payload, {
    onclick: openAddFounderModal,
    children: ($$payload2) => {
      Plus($$payload2, { size: 14, strokeWidth: 2.5 });
      $$payload2.out += `<!----> <span>Add founder</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></header> <main class="svelte-uxj0bl">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="svelte-uxj0bl">`;
    Users_round($$payload, { size: 32 });
    $$payload.out += `<!----> <span class="svelte-uxj0bl">No founder found, start adding founders to your startup with the button in the header.</span></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
