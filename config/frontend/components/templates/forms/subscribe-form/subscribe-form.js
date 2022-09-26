import Link from "next/link";
import { useState } from "react";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";
import { CenterAlignedHeadline } from "@/elements";

export default function SubscribeForm({ content }) {
  let { attributes } = content;
  const subscriptionTypes = {
    single: {
      fee: 10,
      displayName: "Single",
    },
    double: {
      fee: 20,
      displayName: "Double",
    },
  };
  const { publicRuntimeConfig } = getConfig();
  const [showInstructions, setShowInstructions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [showError, setShowError] = useState(false);
  const [currentSub, setCurrentSub] = useState(subscriptionTypes["single"]);
  if (!content) return <></>;
  

  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      donationAmount: JSON.parse(event.target.donationAmount.value),
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      partnerName: event.target.partnerName
        ? event.target.partnerName.value
        : null,
      partnerEmail: event.target.partnerEmail
        ? event.target.partnerEmail.value
        : null,
      partnerPhone: event.target.partnerPhone
        ? event.target.partnerPhone.value
        : null,
      subscriptionFee: currentSub.fee,
      subscriptionType: currentSub.displayName,
    };
    if (event.target.ohno.value !== "") {
      return false;
    }
    setIsLoading(true);
    await fetch(`/api/subscribe`, {
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
    <section id="subscribe-form" className="relative template">
      <section className="max-w-screen-xl px-4 mx-auto py-24">
        <CenterAlignedHeadline attributes={attributes} topSpacing={150} />
        <ReactMarkdown
          className="max-w-xl mx-auto text-primary-50 text-center leading-7 mb-20 line-break"
          children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
        />
        {!isLoading && (
          <div
            className="type-buttons flex items-center justify-center mb-20"
            role="group"
            aria-label="Subscription type"
          >
            <button
              id="singleBtn"
              onClick={() => setCurrentSub(subscriptionTypes["single"])}
              type="button"
              className={`${
                currentSub.displayName === "Single"
                  ? "bg-secondary text-secondary-opposite"
                  : "bg-secondary-opposite text-secondary"
              } rounded-l-full px-6 py-2 border border-secondary`}
            >
              Single
            </button>
            <button
              id="doubleBtn"
              onClick={() => setCurrentSub(subscriptionTypes["double"])}
              type="button"
              className={`${
                currentSub.displayName === "Double"
                  ? "bg-secondary text-secondary-opposite"
                  : "bg-secondary-opposite text-secondary"
              } rounded-r-full px-6 py-2 border text-secondary border-secondary`}
            >
              Double
            </button>
          </div>
        )}
        <div
          className="max-w-2xl mx-auto border shadow-lg rounded-lg bg-white"
        >
          <div className="p-5 md:p-10">
            <div className="flex items-center flex-col-reverse sm:flex-row justify-start sm:justify-between mb-10">
              <h3 id="subTypeText">{`${currentSub.displayName} Subscription`}</h3>
              <h3 className="mb-4 sm:mb-0">
                <span id="feeText" className="text-secondary h2 mr-2">
                  ${currentSub.fee}
                </span>
                <span className="text-base font-sans -ml-1">/yr</span>
              </h3>
            </div>
            {!showInstructions && (
              <form id="subscribeForm" onSubmit={processSubmission}>
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
                    Phone
                  </label>
                  <input
                    className="form-control px-4 py-3 border rounded"
                    type="text"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Phone number"
                  />
                </div>
                <div className="form-group flex flex-col mb-5">
                  <label
                    className="text-primary-60 mb-2"
                    htmlFor="donationAmount"
                  >
                    Donation
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-secondary"
                      name="donationAmount"
                      defaultValue="10"
                    />
                    <span className="ml-2">Key ($10)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-secondary"
                      name="donationAmount"
                      defaultValue="50"
                    />
                    <span className="ml-2">Octave ($50)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-secondary"
                      name="donationAmount"
                      defaultValue="100"
                    />
                    <span className="ml-2">Piano ($100)</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-secondary"
                      name="donationAmount"
                      defaultValue="0"
                      defaultChecked="checked"
                    />
                    <span className="ml-2">Not now, thanks</span>
                  </label>
                </div>
                {currentSub.displayName === "Double" && (
                  <div className="partner-details mb-10">
                    <h4 className="mb-5">Partner details</h4>
                    <div className="form-group flex flex-col mb-5">
                      <label
                        className="text-primary-60 mb-2"
                        htmlFor="partnerName"
                      >
                        Full name
                      </label>
                      <input
                        className="form-control px-4 py-3 border rounded"
                        type="text"
                        id="partnerName"
                        name="partnerName"
                        aria-describedby="partnerName"
                        placeholder="Full name of partner"
                      />
                    </div>
                    <div className="form-group flex flex-col mb-5">
                      <label
                        className="text-primary-60 mb-2"
                        htmlFor="partnerEmail"
                      >
                        Email
                      </label>
                      <input
                        className="form-control px-4 py-3 border rounded"
                        type="email"
                        id="partnerEmail"
                        name="partnerEmail"
                        aria-describedby="partnerEmail"
                        placeholder="Email of partner"
                      />
                    </div>
                    <div className="form-group flex flex-col mb-5">
                      <label
                        className="text-primary-60 mb-2"
                        htmlFor="partnerPhone"
                      >
                        Cellphone number
                      </label>
                      <input
                        className="form-control px-4 py-3 border rounded"
                        type="text"
                        id="partnerPhone"
                        name="partnerPhone"
                        aria-describedby="partnerPhone"
                        placeholder="Cellphone number of partner"
                      />
                    </div>
                  </div>
                )}
                {/* <!-- H o n e y p o t --> */}
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
                  disabled={isLoading}
                  className="submit-btn w-full py-4 text-white text-sm tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out"
                >
                  {isLoading && <div className="spinner pb-4"></div>}
                  {!isLoading && <span className="label">Send</span>}
                </button>
              </form>
            )}
            {showInstructions && (
              <div className="subscribe-instructions text-center mb-10">
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
                  <table className="mb-10">
                    <tr>
                      <td className="pr-5">
                        <strong>Subscription fee:</strong>
                      </td>
                      <td>
                        $
                        <span className="subscription-fee">
                          {currentSub.fee}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-5">
                        <strong>Donation:</strong>
                      </td>
                      <td>
                        $
                        <span className="donation-amount">
                          {donationAmount}
                        </span>
                      </td>
                    </tr>
                    <tr className="pt-5">
                      <td className="pr-5 pt-2">
                        <strong>Total:</strong>
                      </td>
                      <td className="pt-2">
                        <strong>
                          $
                          <span className="total">
                            {currentSub.fee + donationAmount}
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </table>
                  <p className="mb-5">
                    To complete your subscription, please use one of the
                    following payment methods:
                  </p>
                  <ol className="text-primary-60">
                    <li className="mb-3">
                      <strong>Internet banking:&nbsp;</strong>
                      {`${publicRuntimeConfig.NAME}, a/c ${publicRuntimeConfig.BANK_ACCOUNT_NO} with your
                    name in the particulars box.`}
                    </li>
                    <li>
                      {`Post the completed form, with cheque to: Subscriptions,
                    ${publicRuntimeConfig.NAME}, ${publicRuntimeConfig.POSTAL_ADDRESS}`}
                    </li>
                  </ol>
                </div>
              </div>
            )}
            {showError && (
              <div className="subscribe-error-msg">
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
        </div>
      </section>
      <div className="bg-squares-horizontal"></div>
      <div className="absolute w-full h-64 bg-primary-custom-light bottom-0 z-index--1"></div>
    </section>
  );
}
