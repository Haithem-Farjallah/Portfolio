import emailjs from "@emailjs/browser";
import { FormValues } from "./formFields";
export const sendEmail = (form: FormValues) => {
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
