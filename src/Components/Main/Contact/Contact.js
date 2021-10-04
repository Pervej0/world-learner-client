import React from "react";
import Iframe from "react-iframe";
import Title from "../../Title/Title";

const Contact = () => {
  return (
    <main>
      <Title title="Contact us" />
      <section className="form-section">
        <form className="border p-8 w-full md:w-1/2 mx-auto">
          <label className="font-semibold mb-4">Your Full Name:</label>
          <input
            type="text"
            className="py-3 my-2 block border-0 border-l border-b border-black w-full px-3"
            placeholder="Enter your name"
          />
          <label className="font-semibold">Your Email:</label>
          <input
            type="email"
            className="py-3 my-2 block border-0 border-l border-b border-black w-full px-3"
            placeholder="Enter your email"
          />
          <label className="font-semibold">Your Phone No. :</label>
          <input
            type="number"
            className="py-3 my-2 block border-0 border-l border-b border-black w-full px-3"
            placeholder="Phone number"
          />
          <textarea
            rows="4"
            className="border-0 border-l my-2 mb-3 border-b border-black w-full focus:outline-none px-3"
            type="text"
            placeholder="Details.."
          ></textarea>
          <button className="bg-green-700 px-4 py-2 rounded-lg text-white font-semibold">
            Submit
          </button>
        </form>
      </section>
      <section className="my-10">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29875.427243989765!2d92.30887927823447!3d20.611387668446348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ae23666ddf01b1%3A0xfb9c82c83dacf078!2sSaint%20Martins%20Island!5e0!3m2!1sen!2sbd!4v1633332309490!5m2!1sen!2sbd"
          width="100%"
          height="450px"
          id="myId"
          display="initial"
          position="relative"
        />
      </section>
    </main>
  );
};

export default Contact;
