import { useState } from "react";
import getConfig from "next/config";
import Image from "next/image";

export default function NewsletterForm1({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  if (!content) return <></>;

  function processSubmission(event) {
    event.preventDefault();
    let isValid = event.target.ohno.value === "";
    setShowSuccessMsg(isValid);
    return false;
  }

  return (
    <section
      id="newsletter-form-1"
      className="newsletter py-24 md:py-32 template"
    >
      <div className="max-w-screen-xl px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div>
            <p className="pre-headline-secondary">{attributes.preheading}</p>
            <h2 className="mb-8 md:mb-16 leading-tight">
              {attributes.heading}
            </h2>

            <div className="sm:mx-6 lg:mx-12">
              {!showSuccessMsg && (
                <div className="newsletter-form">
                  <p className="text-primary-50 mb-10 leading-7 max-w-xl">
                    {attributes.blurb}
                  </p>
                  <form
                    id="mc-embedded-subscribe-form"
                    className="flex validate"
                    action={publicRuntimeConfig.NEWSLETTER_URL}
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    rel="noreferrer"
                    noValidate="novalidate"
                    onSubmit={processSubmission}
                  >
                    <div className="form-group w-full">
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email form-control border-t border-b border-l border-primary-20 text-primary-50 rounded-none shadow-none px-2 py-4 sm:px-4 w-full"
                        aria-describedby="email"
                        placeholder="Enter your email"
                        id="mce-EMAIL"
                      />
                    </div>

                    <div
                      style={{ position: `absolute`, left: `-5000px` }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_b4fb38b38c92a79eb8753fde2_ef75133ad0"
                        tabIndex="-1"
                      />
                    </div>
                    <button
                      id="mc-embedded-subscribe"
                      type="submit"
                      className="submit-btn text-xs sm:text-sm whitespace-no-wrap px-2 py-4 sm:px-4 md:px-8 text-white text-center uppercase tracking-wide sm:tracking-widest border border-secondary hover:border-secondary-dark bg-secondary hover:bg-secondary-dark transition-colors duration-200"
                      value="Sign up"
                      name="subscribe"
                    >
                      <div className="spinner pb-4  px-5 hidden"></div>
                      <span className="label whitespace-nowrap">Sign up</span>
                    </button>
                  </form>
                </div>
              )}
              {showSuccessMsg && (
                <div className="newsletter-success-msg text-center mb-10">
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
                  <h4 className="mb-10">Thank you for signing up</h4>
                  <p className="mb-10 text-lg">
                    We will be sending out the next newsletter soon!
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            className="order-first md:order-1 md:mx-auto mb-10 md:mb-0 md:w-1/2"
          >
            <Image
              className="w-48 md:w-3/4 md:mx-auto"
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                attributes.image.data.attributes.url
              }`}
              width={attributes.image.data.attributes.width}
              height={attributes.image.data.attributes.height}
              alt={attributes.image.data.attributes.alternativeText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
