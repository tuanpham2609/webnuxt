import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Vui lòng nhập không được để trống"
});

extend("email", {
  ...email,
  message: "Phải nhập đúng định dạng email"
});
