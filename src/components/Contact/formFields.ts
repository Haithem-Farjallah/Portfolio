export const formFields = [
  {
    id: "01",
    label: "What is your name?",
    placeholder: "Full Name",
    name: "name",
  },
  {
    id: "02",
    label: "What is your email?",
    placeholder: "Email Address",
    name: "email",
  },
  {
    id: "03",
    label: "Your message",
    placeholder: "Hello Haithem ,can you help me with...",
    name: "message",
  },
];

export const socials = [
  {
    name: "Github",
    url: "",
  },
  {
    name: "LinkedIn",
    url: "",
  },
  {
    name: "Twitter",
    url: "",
  },

  {
    name: "Slack",
    url: "",
  },
];

export type FormValues = {
  name: string;
  email: string;
  message: string;
};
