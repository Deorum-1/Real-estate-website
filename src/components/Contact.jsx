import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6f61b803-2c34-476b-919f-bc3c3d24a81e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form submitted successfully");
      event.target.reset();
      setResult("");
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto ">
        Ready to make a Move? Let's Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-shadow-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left ">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 ">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="message"
            placeholder="Message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded ">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
