import Link from "next/link";

export default function CTACard({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="cta-card" className="p-10 bg-primary-custom-light template">
      <div className="bg-white p-10 max-w-2xl mx-auto ">
        <div className="container">
          <div className="box">
            <h3 className="mb-6">
              <span>{attributes.heading}</span>
            </h3>
            <p className="text-primary-50 leading-7 mb-8">{attributes.blurb}</p>
            <div className="inline-flex items-center group flex">
              <Link href={attributes.url}>
                <a className="text-secondary tracking-widest uppercase leading-none text-sm pr-4">
                  Learn more
                </a>
              </Link>
              <Link href={attributes.url}>
                <a>
                  <svg
                    className="group-hover:ml-5 transition-all duration-200"
                    viewBox="0 0 9.414 17.414"
                    width="7px"
                  >
                    <path
                      className="stroke-2 stroke-current text-secondary"
                      transform="translate(5782.7 8451.2)"
                      d="m-5782-8450.5l8 8-8 8"
                      fill="none"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
