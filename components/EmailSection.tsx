"use client";
import React, { useState } from "react";
import { json } from "stream/consumers";
const EmailSection = () => {
  const [emailSubmait, setEmailSubmait] = useState(false);
  // In your Next.js component or utility function
  async function sendEmail(e: any) {
    e.preventDefault();
    const url = "/api/send"; // Your backend API endpoint
    const emailData = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers you need, like authentication tokens
      },
      body: JSON.stringify(emailData),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        // throw new Error('Error sending email');
        return "fild";
      }
      console.log("email set succses!!");
      setEmailSubmait(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }

  // Call the sendEmail function wherever you want to trigger the email sending process
  // sendEmail();

  //   const handelSubmit = async (e:any) => {
  //     e.preventDefault();
  //     const data = {
  //       email: e.target.email.value,
  //       subject: e.target.subject.value,
  //       message: e.target.message.value,
  //     };
  //     const JSONdata = JSON.stringify(data);
  //     const endpoint = "/api/send";

  //     const options = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSONdata,
  //     }
  //      try{
  //        const response = await fetch(endpoint, options)
  //        console.log(response)
  //        if(response.status === 200){
  //          console.log("message sent");

  //      }

  //     // const resData = await response.json()

  //     }catch (error){
  //       console.log('faild to relod')
  //     }
  //   };
  return (
    <section
      id="Contact"
      className="relative px-20  md:px-5 grid md:grid-cols-2 my-12 py-24 gap-4"
    >
      <div>
        <h2 className="mt-5 my-1 font-semibold text-3xl">Lets</h2>
        <h2 className="my-1 font-semibold text-3xl">Design</h2>
        <h2 className=" my-1 font-semibold text-3xl">To Gether</h2>
        <p className="mt-5 pr-10">
          Ready to elevate your digital experience? Lets collaborate! Whether
          youre seeking sleek UI designs or seamless UX solutions, Im here to
          bring your vision to life. Drop me a line and lets create something
          extraordinary together.
        </p>
      </div>
      {emailSubmait ? (
        <p className="text-green-500 text-sm mt-2">Email set Successfully!</p>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={sendEmail}>
          <label htmlFor="email" className="text-slate-300">
            Your Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="yourname@google.com"
            className="rounded-lg p-1 pl-2 text-slate-900"
          ></input>
          <label htmlFor="Subject" className="text-slate-300">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            placeholder="subject"
            className="rounded-lg p-1 pl-2  text-slate-900"
          ></input>
          <label htmlFor="message" className="text-slate-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="message"
            className="rounded-lg p-1 pl-2 h-24 text-slate-900"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 px-3 py-1 hover:bg-yellow-600 rounded-full"
          >
            Submit
          </button>
        </form>
      )}
      <figure className="bubble  w-96 lg:w-[520px] h-60 bg-indigo-600 top-16 left-5 absolute" />
      <figure className="bubble  w-96 lg:w-[700px] h-60 bg-sky-600 bottom-16 right-5 absolute" />
    </section>
  );
};

export default EmailSection;
