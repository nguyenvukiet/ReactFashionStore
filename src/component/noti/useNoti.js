import { message } from "antd";

// Success message function
export const success = () => {
  message.open({
    type: "success",
    content: "This is a success message",
  });
};

// Error message function
export const error = () => {
  message.open({
    type: "error",
    content: "This is an error message",
  });
};

// Warning message function
export const warning = () => {
  message.open({
    type: "warning",
    content: "This is a warning message",
  });
};
