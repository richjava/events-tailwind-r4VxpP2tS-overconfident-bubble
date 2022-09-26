import Link from "next/link";
import { useState } from "react";
import getConfig from "next/config";
import { LeftAlignedHeadline } from "@/elements";

export default function DonateForm({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  const [showInstructions, setShowInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  if (!content) return <></>;

  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      donationAmount: event.target.donationAmount.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
    };
    if (event.target.ohno.value !== "") {
      return false;
    }
    setIsLoading(true);
    await fetch(`/api/donate`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        setIsLoading(false);
        setShowError(false);
        setDonationAmount(data.donationAmount);
        setShowInstructions(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setShowError(true);
        setDonationAmount(0);
        setShowInstructions(false);
      });
  }

  return (
    <section
      id="donate-form"
      className="overflow-x-hidden mb-24 md:mb-32 lg:mb-48template"
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:mr-10">
            <LeftAlignedHeadline attributes={attributes} />
            <div className="sm:mx-6 lg:mx-12">
              <p className="text-primary-50 leading-7 mb-20">
                {attributes.blurb}
              </p>
              <div className="flex items-start mb-20">
                <div className="bg-secondary p-3 rounded-lg mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 85.566 102.68"
                    fill="#fff"
                  >
                    <path
                      d="M87.566,1l-.011,74.157c0,7.091-7.421,17.113-21.38,17.113-7.091,0-12.835-3.725-12.835-10.7,0-9.064,8.243-14.546,17.113-14.546a22.093,22.093,0,0,1,5.7.7V25.894L36.226,33.156v53.41h-.011c0,7.091-7.421,17.113-21.38,17.113C7.744,103.68,2,99.955,2,92.984c0-9.064,8.243-14.546,17.113-14.546a22.093,22.093,0,0,1,5.7.7V12.409Z"
                      transform="translate(-2 -1)"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-2">
                    {attributes.benefitHeading1}
                  </h3>
                  <p className="text-primary-50 leading-7">
                    {attributes.benefitBlurb1}
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-20">
                <div className="bg-secondary p-3 rounded-lg mr-8">
                  <svg
                    viewBox="0 0 102.68 102.68"
                    width="30px"
                    height="30px"
                    fill="#fff"
                  >
                    <path
                      transform="translate(-1 -.8)"
                      d="M59.071,76.444c0-8.1,6.275-12.578,16.508-19.207,12.515-8.125,28.1-18.219,28.1-42.186a3.881,3.881,0,0,0-1.195-2.771,4.057,4.057,0,0,0-2.85-1.129H80.068C77.308,6.151,69.065.8,52.339.8S27.371,6.151,24.6,11.151H5.033A3.968,3.968,0,0,0,1,15.052c0,23.967,15.573,34.061,28.1,42.18,10.234,6.629,16.508,11.11,16.508,19.207v7.316c-10.747,1.166-18.648,5.056-18.648,9.687,0,5.547,11.363,10.039,25.379,10.039s25.379-4.492,25.379-10.039c0-4.632-7.9-8.521-18.648-9.687v-7.31ZM74.912,48.231c3.229-6.691,5.8-15.769,6.206-29.273H95.436C94.067,34.03,84.814,41.635,74.912,48.231ZM52.339,7.641C67.924,7.63,74.01,13.863,74,16.173c0,2.332-6.081,8.554-21.665,8.565-15.584-.006-21.671-6.227-21.671-8.56C30.663,13.869,36.755,7.63,52.339,7.641ZM9.243,18.958H23.555c.416,13.5,2.972,22.583,6.212,29.273-9.9-6.6-19.161-14.2-20.524-29.273Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-2">
                    {attributes.benefitHeading2}
                  </h3>
                  <p className="text-primary-50 leading-7">
                    {attributes.benefitBlurb2}
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-20">
                <div className="bg-secondary p-3 rounded-lg mr-8">
                  <svg
                    viewBox="0 0 102.68 102.66"
                    width="30px"
                    height="30px"
                    fill="#fff"
                  >
                    <path
                      transform="translate(-1.199 -1.3)"
                      d="M52.542,1.3,66.473,40.515h37.406L73.356,63.546l10.915,40.416L52.542,79.729,20.818,103.963,31.727,63.546,1.2,40.515H38.6Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold mb-2">
                    {attributes.benefitHeading3}
                  </h3>
                  <p className="text-primary-50 leading-7">
                    {attributes.benefitBlurb3}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div
              className="border shadow-lg rounded-lg bg-white p-5 md:p-10 lg:mt-48 xl:mt-64 mb-16"
            >
              <div className="flex items-center justify-between mb-10">
                <h3>Make a donation</h3>
                <svg width="30px" height="100%" viewBox="0 0 33.892 31.999">
                  <path
                    d="M1928.947,2479.9a10.228,10.228,0,0,0,2.149.346c.177.009.359.014.537.014a10.136,10.136,0,0,0,7.782-3.591,9.435,9.435,0,0,0,1.895-8.323,11.7,11.7,0,0,0-.852-2.371,10.82,10.82,0,1,1-11.511,13.925Zm2.264-1.869c-3.875-.2-7.049-3.267-9.8-5.708-1.78-1.579-3.516-3.218-5.177-4.919l12.243-11.815c.533-.493,4.755,4.39,5.185,4.914,2.1,2.557,4.7,5.038,5.5,8.363a7.472,7.472,0,0,1-7.507,9.177C1931.5,2478.039,1931.357,2478.035,1931.211,2478.028Zm-2.122-12.721a11.361,11.361,0,0,0-2.8,2.784c-1.123,1.646-1.571,3.564.276,4.949a9.3,9.3,0,0,0,4.781,2.122,4.759,4.759,0,0,0,5.042-5.82c-.364-1.5-1.5-2.9-3.214-4.634a1.822,1.822,0,0,0-1.347-.582A5.449,5.449,0,0,0,1929.089,2465.306Zm10.586-1.342-6.584-8.38h6.207l2.372,8.38Z"
                    transform="translate(-1916.229 -2455.551)"
                    fill="#d46e3a"
                  />
                </svg>
              </div>
              {!showInstructions && (
                <form id="donateForm" onSubmit={processSubmission}>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      className="form-control px-4 py-3 border rounded"
                      type="text"
                      id="firstName"
                      name="firstName"
                      aria-describedby="firstName"
                      placeholder="First name"
                      required="required"
                    />
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      className="form-control px-4 py-3 border rounded"
                      type="text"
                      id="lastName"
                      name="lastName"
                      aria-describedby="lastName"
                      placeholder="Last name"
                      required="required"
                    />
                  </div>

                  <div className="form-group flex flex-col mb-5">
                    <label
                      className="text-primary-60 mb-2"
                      htmlFor="donationAmount"
                    >
                      Donation amount
                    </label>
                    <input
                      className="form-control px-4 py-3 border mb-2 rounded"
                      type="number"
                      id="donationAmount"
                      name="donationAmount"
                      aria-describedby="donationAmount"
                      placeholder="Enter donation amount"
                      step="10"
                      required="required"
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
                      required="required"
                    />
                    <small
                      id="emailHelp"
                      className="form-text text-xs text-primary-50"
                    >
                      We&apos;ll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group flex flex-col mb-5">
                    <label className="text-primary-60 mb-2" htmlFor="phone">
                      Cellphone number
                    </label>
                    <input
                      className="form-control px-4 py-3 border rounded"
                      type="text"
                      id="phone"
                      name="phone"
                      aria-describedby="phone"
                      placeholder="Cellphone number"
                    />
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
                    id="submitBtn"
                    type="submit"
                    disabled={isLoading}
                    className="submit-btn w-full py-4 text-white text-sm tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out"
                  >
                    {isLoading && <div className="spinner pb-4"></div>}
                    {!isLoading && <span className="label">Send</span>}
                  </button>
                </form>
              )}
              {showInstructions && (
                <div className="donation-instructions text-center mb-10">
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
                  <h4 className="mb-16">Thank you for your support</h4>
                  <div className="text-left">
                    <p className="mb-10 text-lg">
                      <strong>Your pledge:</strong>&nbsp;{`$${donationAmount}`}
                    </p>
                    <p className="mb-5">
                      To complete your donation, please use one of the following
                      payment methods:
                    </p>
                    <ol className="text-primary-60">
                      <li className="mb-3">
                        <strong>Internet banking:&nbsp;</strong>
                        {`${publicRuntimeConfig.NAME}, a/c ${publicRuntimeConfig.BANK_ACCOUNT_NO} with your
                        name in the particulars box.`}
                      </li>
                      <li>
                        {`Post the completed form, with cheque to: Donations,
                    ${publicRuntimeConfig.NAME}, ${publicRuntimeConfig.POSTAL_ADDRESS}`}
                      </li>
                    </ol>
                  </div>
                </div>
              )}
              {showError && (
                <div className="donation-error-msg">
                  <h3 className="mb-2">Error</h3>
                  <p className="mb-5">
                    There was a problem submitting your details.
                  </p>
                  <p className="text-primary-60">
                    Please try again or
                    <Link href="/contact">
                      <a>contact the administrator</a>
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
            <div className="bg-squares -mt-32 lg:mt-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
