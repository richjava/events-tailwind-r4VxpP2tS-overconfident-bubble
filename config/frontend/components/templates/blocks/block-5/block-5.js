import Image from "next/image";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";
import { CTAButton } from "@/elements";

export default function Block5({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes } = content;
  return (
    <section id="block-5" className="cta-generic relative mt-48 template">
      <div className="relative filter-grayscale-1 w-full home-volunteer-image object-cover hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out">
      <Image
        src={`${publicRuntimeConfig.BACKEND_URL || ""}${
          attributes.image.data.attributes.url
        }`}
        layout="fill"
        priority
        alt={attributes.preheading}
      />
      </div>
      <div className="lg:absolute top-0 left-0 w-full lg:-mt-24">
        <div className="max-w-screen-xl lg:px-4 mx-auto">
          <div
            className="bg-primary top-0 left-0 px-4 py-12 lg:p-16 w-full lg:w-3/5"
          >
            <p className="pre-headline-white">{attributes.preheading}</p>
            <h2 className="text-white mb-10">{attributes.heading}</h2>
            <ReactMarkdown
              className="text-primary-20 sm:ml-6 lg:ml-12 mb-20 lg:max-w-2xl lg:pr-4 leading-7 line-break"
              children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
            />
            <div className="sm:ml-6 lg:ml-12">
              <CTAButton attributes={attributes} type="darkBg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
