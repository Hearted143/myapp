import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().min(6).required("Please enter your phone"),
  Location: Yup.string().required( "enter location"),
  Age: Yup.string().min(2).required("Please enter your age"),
  University: Yup.string().min(6).required("Please enter your univrsity"),

});

// all above for the validation 