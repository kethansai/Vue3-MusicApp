import {
  Field as veeField,
  Form as veeForm,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("veeForm", veeForm);
    app.component("veeField", veeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("alpha_spaces", alphaSpaces);
  },
};
