import * as yup from "yup";

let signinSchema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});


export default signinSchema;
