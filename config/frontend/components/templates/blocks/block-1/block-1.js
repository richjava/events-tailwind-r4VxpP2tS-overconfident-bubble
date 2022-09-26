import Image from "next/image";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";
import {CTAButton} from "@/elements";
import {LeftAlignedHeadline} from "@/elements";

export default function Block1({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes } = content;

  return (
    <section
      id="block-1"
      className="template"
    >
      <LeftAlignedHeadline attributes={attributes} />
      <div className="max-w-screen-xl px-4 mx-auto pt-5 pb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:mr-10 sm:mx-6 lg:ml-12">
          {attributes.leadingSentence && <p className="text-primary-70 leading-7 text-lg mb-8">
            <strong>
              {attributes.leadingSentence}
            </strong>
          </p>}
          <ReactMarkdown
              className="text-primary-70 leading-7 pb-12 line-break"
              children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
            />
          {attributes.ctaText && <CTAButton attributes={attributes} />}
        </div>
        <div className="lg:w-1/2 relative">
           <div
            className="shadow-xl"
          >
            <Image
              className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                attributes.image.data.attributes.url
              }`}
              width={attributes.image.data.attributes.width}
              height={attributes.image.data.attributes.height}
              alt={attributes.image.data.attributes.alternativeText}
              layout="responsive"
              objectFit="cover"
              priority="true"
            />
          </div>

          <div className="bg-squares"></div>
        </div>
      </div>
      </div>
    </section>
  );
}
