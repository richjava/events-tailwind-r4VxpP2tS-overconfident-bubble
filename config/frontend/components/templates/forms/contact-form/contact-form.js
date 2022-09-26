import Link from "next/link";
import { useState } from "react";
import getConfig from "next/config";
import { LeftAlignedHeadline } from "@/elements";

export default function ContactForm({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  const [showSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  if (!content) return <></>;

  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    if (event.target.ohno.value !== "") {
      return false;
    }
    setIsLoading(true);
    await fetch(`/api/contact`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        debugger
        if (res.statusCode === 200) {
          setIsLoading(false);
          setShowError(false);
          setSuccess(true);
        } else {
          setIsLoading(false);
          setShowError(true);
          setSuccess(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setShowError(true);
        setSuccess(false);
      });
  }

  return (
    <section id="contact-form" className="overflow-x-hidden template">
      <div className="max-w-screen-xl px-4 mx-auto mb-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <LeftAlignedHeadline attributes={attributes} />
            <div className="sm:ml-6 lg:ml-12">
              <div>
                <div className="flex items-start mb-10 lg:w-1/2 mr-12 lg:mr-0">
                  <div className="mr-5 mt-px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                    >
                      <path
                        d="M21,6H5A2,2,0,0,0,3.01,8L3,20a2.006,2.006,0,0,0,2,2H21a2.006,2.006,0,0,0,2-2V8A2.006,2.006,0,0,0,21,6Zm0,4-8,5L5,10V8l8,5,8-5Z"
                        transform="translate(-3 -6)"
                        fill="#d46e3a"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold mb-2">
                      Email Us
                    </h3>
                    <p>
                      <a
                        className="text-primary-50 hover:text-primary leading-7"
                        href={`mailto:${publicRuntimeConfig.EMAIL}`}
                      >
                        {publicRuntimeConfig.EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-10 mr-12 lg:mr-0">
                  <div className="mr-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20.04"
                      viewBox="0 0 20 20.04"
                    >
                      <path
                        d="M23.167,18V21.02a2.011,2.011,0,0,1-2.192,2.011A19.9,19.9,0,0,1,12.3,19.944a19.609,19.609,0,0,1-6.034-6.034A19.9,19.9,0,0,1,3.176,5.192,2.011,2.011,0,0,1,5.177,3H8.194a2.011,2.011,0,0,1,2.011,1.73,12.912,12.912,0,0,0,.7,2.826,2.011,2.011,0,0,1-.453,2.122L9.179,10.954a16.089,16.089,0,0,0,6.034,6.034l1.277-1.277a2.011,2.011,0,0,1,2.122-.453,12.912,12.912,0,0,0,2.826.7A2.011,2.011,0,0,1,23.167,18Z"
                        transform="translate(-3.168 -3)"
                        fill="#d46e3a"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold mb-2">
                      Call Us
                    </h3>
                    <p>
                      <a
                        className="text-primary-50 hover:text-primary leading-7"
                        href="tel:123456789"
                      >
                        Mary Smith (President): 123 456 789
                      </a>
                    </p>
                    <p>
                      <a
                        className="text-primary-50 hover:text-primary leading-7"
                        href="tel:012345678"
                      >
                        Joe Bloggs (Treasurer): 012 345 678
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-primary-50 leading-7 mb-20">
                {attributes.blurb}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/5 lg:pl-20 relative">
            <div
              className="border shadow-lg rounded-lg bg-white p-5 md:p-10 lg:mt-48 xl:mt-64 mb-16"
            >
              <div className="flex items-center justify-between mb-10">
                <h3>Contact Form</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  viewBox="0 0 46.018 48.193"
                >
                  <path
                    d="M39.305,23.813a3.108,3.108,0,0,0-4.521-.117l-3.722,3.72c-.969.967-2.137.97-2.818.165-.452-.533-.273-2.176-.147-3.219L29.963,9.018A2.5,2.5,0,1,0,25,8.415L22.938,20.466c-.108.3-.338.352-.364-.052l-.7-15.664a2.5,2.5,0,0,0-5,0l-.049,15.781c.013.182-.143.234-.171.026L14.425,8.239a2.556,2.556,0,0,0-2.906-2.094A2.579,2.579,0,0,0,9.5,9.127l1.982,14.416c0,.256-.084.4-.206.074l-2.956-7.9a2.544,2.544,0,0,0-3.194-1.6,2.586,2.586,0,0,0-1.52,3.271L8.789,34.318c.027.093.056.186.085.278l.011.035,0,.008A11.025,11.025,0,0,0,19.372,42.25a14.918,14.918,0,0,0,8.871-3.006h0C30.921,37.632,39.5,28.409,39.5,28.409A3.2,3.2,0,0,0,39.305,23.813Z"
                    transform="matrix(0.966, -0.259, 0.259, 0.966, -3.926, 8.279)"
                    fill="#d46e3a"
                  />
                </svg>
              </div>
              {!showSuccess && (
                <form id="contactForm" onSubmit={processSubmission}>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control px-4 py-3 border rounded"
                      type="text"
                      id="name"
                      name="name"
                      aria-describedby="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control px-4 py-3 border mb-2 rounded"
                      type="email"
                      id="email"
                      name="email"
                      aria-describedby="email"
                      placeholder="Your email"
                    />
                    <small
                      id="emailHelp"
                      className="form-text text-xs text-primary-50"
                    >
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control px-4 py-3 border form-control rounded"
                      id="message"
                      name="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <label className="ohno" htmlFor="ohno"></label>
                  <input
                    className="ohno"
                    autoComplete="off"
                    type="text"
                    id="ohno"
                    name="ohno"
                    placeholder="Your ohno here"
                  />

                  <button
                    type="submit"
                    className="submit-btn w-full py-4 text-white text-sm tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out"
                  >
                    {isLoading && <div className="spinner pb-4"></div>}
                    {!isLoading && <span className="label">Send</span>}
                  </button>
                </form>
              )}
              {showSuccess && (
                <div className="contact-success-msg text-center mb-10">
                  <svg
                    viewBox="0 0 123.32 114.07"
                    width="120px"
                    className="mx-auto mb-10"
                  >
                    <g transform="translate(-872.42 -913.15)">
                      <path
                        transform="translate(369.74 578.68)"
                        d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                        fill="none"
                        stroke="#e6e6e6"
                      />
                      <path
                        transform="translate(385.92 581.17)"
                        d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                        fill="#d46e3a"
                      />
                      <path
                        transform="translate(394.15 578.68)"
                        d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                        fill="none"
                        stroke="#272727"
                      />
                      <path
                        transform="translate(377.73 646.22)"
                        d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                        fill="none"
                        stroke="#e6e6e6"
                      />
                      <path
                        transform="translate(448.7 554.09)"
                        d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                        fill="none"
                        stroke="#272727"
                      />
                      <path
                        transform="translate(478.58 636.26)"
                        d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                        fill="#d46e3a"
                      />
                    </g>
                  </svg>
                  <h4 className="mb-10">Thank you for your message</h4>
                  <p className="mb-10 text-lg">We will be in touch soon!</p>
                </div>
              )}
              {showError && (
                <div className="contact-error-msg">
                  <h3 className="mb-2">Error</h3>
                  <p className="mb-5">
                    There was a problem submitting your details.
                  </p>
                  <p className="text-primary-60">
                    Please try again or
                    <Link href="/contact/">
                      <a>contact the administrator</a>
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
            <div className="bg-squares"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
