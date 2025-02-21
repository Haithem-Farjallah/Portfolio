import { useState } from "react";
import Curve from "../shared/curve/Curve";
import { formFields, FormValues, socials } from "./formFields";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { sendEmail } from "./emailjs.browser";
import { GoArrowDownRight } from "react-icons/go";

const ContactSection = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof FormValues]?: string }>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: any, field: any) => {
    setFormValues((prev) => ({
      ...prev,
      [field.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field.name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;
    let newErrors: { [key in keyof FormValues]?: string } = {};

    Object.keys(formValues).forEach((field) => {
      if (!formValues[field as keyof FormValues]) {
        newErrors[field as keyof FormValues] = `${field} is required`;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted successfully", formValues);
      sendEmail(formValues);
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Curve />
      <div className="min-h-screen max-w-7xl mx-auto py-28 flex flex-wrap xl:flex-nowrap gap-8 ">
        <div className="w-full xl:w-2/3 mx-8 ">
          <h1 className="text-5xl mb-12 ">Let's start a project together</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className={`flex flex-col gap-8 py-10 border-t border-[#545557]  ${
                  index === formFields.length - 1 && "border-b"
                }`}
              >
                <div className="text-xl relative">
                  <span className="text-[#545557] font-medium text-sm top-[0.5px] absolute transition-all duration-300">
                    {field.id}
                  </span>
                  <span
                    className={`ml-5 px-5 font-medium text-2xl transition-all duration-300 ease-in-out transform ${
                      formValues[field.name as keyof FormValues] &&
                      "text-[#545557] scale-95"
                    }`}
                  >
                    {field.label}
                  </span>
                </div>
                {formFields.length - 1 === index ? (
                  <textarea
                    name={field.name}
                    value={formValues[field.name as keyof FormValues]}
                    maxLength={300}
                    className="bg-black outline-none ml-5 px-5 py-3 text-2xl text-white placeholder-[#545557] transition-all duration-300 ease-in-out  h-32 resize-none"
                    placeholder={field.placeholder + "*"}
                    onChange={(e) => handleChange(e, field)}
                  />
                ) : (
                  <input
                    type="text"
                    name={field.name}
                    maxLength={30}
                    value={formValues[field.name as keyof FormValues]}
                    className="bg-black outline-none ml-5 px-5 py-3 text-2xl text-white placeholder-[#545557] transition-all duration-300 ease-in-out"
                    placeholder={field.placeholder + "*"}
                    onChange={(e) => handleChange(e, field)}
                  />
                )}

                {errors[field.name as keyof FormValues] && (
                  <motion.span
                    className="text-red-500 text-sm mt-2 ml-5 "
                    initial={{ x: 0 }}
                    animate={{
                      x: [0, -10, 10, -10, 10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {errors[field.name as keyof FormValues]}
                  </motion.span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="mt-8 py-3 px-6 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full xl:w-1/3 px-8 flex flex-col gap-8">
          <GoArrowDownRight />
          <div>
            <h1 className="text-[#545557] my-6 text-lg">Socials</h1>
            {socials.map((social, index) => (
              <div
                key={index}
                className="flex gap-3 w-fit items-center py-3 hover:underline  duration-300 ease-in-out transform hover:scale-105 "
              >
                <a href={social.url}>
                  <h1 className="text-xl">{social.name}</h1>
                </a>
                <FaArrowRight size={14} className=" " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
