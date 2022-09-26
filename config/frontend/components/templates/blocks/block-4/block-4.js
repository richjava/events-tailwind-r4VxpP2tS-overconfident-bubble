import Link from "next/link";
import getConfig from "next/config";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import CTAButtonSimple from "../../../elements/cta-button-simple";

export default function Block4({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes, collections } = content;
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="block-4" className="py-32 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">{attributes.preheading}</p>
        <h2 className="mb-8 md:mb-16 leading-tight">{attributes.heading}</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <div className="sm:ml-6 lg:ml-12">
              <ReactMarkdown
                className="text-primary-50 mb-12 lg:max-w-2xl sm:pr-4 lg:pr-8 leading-7 line-break"
                children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
              />
              <CTAButtonSimple attributes={attributes} />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap">
            {items &&
              items.map((item, i) => {
                return (
                  <div className="w-1/2 md:w-1/3" key={i}>
                    <Link href={attributes.ctaUrl}>
                      <a
                        href={item.attributes.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          className="w-full lg:hidden"
                          src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                            item.attributes.image.data.attributes.url
                          }`}
                          width={item.attributes.image.data.attributes.width}
                          height={item.attributes.image.data.attributes.height}
                          alt={
                            item.attributes.image.data.attributes
                              .alternativeText
                          }
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
