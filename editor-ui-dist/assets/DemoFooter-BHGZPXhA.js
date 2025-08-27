import LogsPanel from "./LogsPanel-C3AsbKHO.js";
import { d as defineComponent, a9 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-CEfijIeI.js";
import "./AnimatedSpinner-Bxu0KKPe.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-B6nCTjB0.js";
import "./core-Cj7j1UaV.js";
import "./canvas-C0M8n3pm.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
