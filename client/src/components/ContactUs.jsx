import React from "react";
import { Phone } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left half - Form */}
          <div className="bg-blue-200 dow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    e-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@email.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subaject"
                    className="block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="A brief about issue you are facing..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write the problem you are facing or your suggestion here..."
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="mr-4 px-6 py-2 uppercase rounded-full bg-white hover:bg-black hover:text-white outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right half - Heading */}
          <div className="bg-blue-200 shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl font-bold pt-20 pb-9">Contact Us</h1>
              <p className="font-semibold">
                Got a technical issue? Want to send feedback about a medicine?
                <br />
                Need details about our Business plan? Let us know.
              </p>
              <p className="py-5">
                Or you can reach out to us on
                <br />
              </p>
              <div className="flex font-semibold">
                <span>
                  <Phone />
                </span>
                <span> +91-99965 62531</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
