import Link from "next/link";
import getConfig from "next/config";
import { format } from "date-fns";

export default function HeroCover({ content }) {
  if (!content) return <></>;
  let { collections } = content;
  const { publicRuntimeConfig } = getConfig();
  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let item;
  if (collection && collection.items.length) {
    item = collection.items[0];
  }
  if (!item) return <></>;
  return (
    <section id="hero-cover" className="relative xl:mt-16 template">
      <div className="media-item-hero-container">
        <div
          className="filter-grayscale-1 hover:filter-grayscale-0 backdrop-darken transition-filter duration-500 media-item-hero h-screen bg-cover bg-center xl:bg-fixed flex items-center justify-center relative xl:-mt-16"
          style={{
            backgroundImage: `url(${publicRuntimeConfig.BACKEND_URL || ""}${
              item.attributes.featuredImage?.data?.attributes?.url
            })`,
          }}
        >
          <div className="flex flex-col justify-center py-64 md:py-0 md:-mt-48 lg:-mt-56 xl:-mt-8 z-10">
            <p className="text-center text-white tracking-widest uppercase text-xs lg:text-sm md:mb-4">
              Featured Event
            </p>
            <Link href={`event-items/${item.attributes.slug}`}>
              <a>
              <h1 className="text-center text-white text-shadow-lg max-w-3xl lg:max-w-4xl px-8 lg:px-16">
              {item.attributes.title}
              </h1>
              </a>
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full backdrop-darken"></div>
        </div>

        <div className="media-item-hero-content md:absolute md:z-30 md:bottom-0 md:w-full lg:backdrop-blur lg:hover:backdrop-blur-lg border-t border-white transition-all ease-in-out duration-500">
          <div
            className="flex flex-col md:flex-row"
          >
            <div className="flex flex-grow flex-col xl:flex-row">
              <div className="flex-grow bg-primary-80 lg:bg-transparent border-b xl:border-b-0 xl:border-r border-primary-70 lg:border-white py-6 px-4 xl:py-8 lg:px-12">
                <h4 className="text-white text-center md:text-left text-shadow-sm mb-2 lg:mb-0">
                  When<span>:</span>
                </h4>
                <p
                  data-date="{{ args.info1 }}"
                  className="text-primary-10 text-center md:text-left tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0"
                >
                  {format(new Date(item.attributes.date), "dd LLLL yyyy")}
                </p>
              </div>

              <div className="flex-grow bg-primary-80 lg:bg-transparent py-6 px-4 xl:py-8 lg:px-12">
                <h4 className="text-white text-center md:text-left text-shadow-sm mb-2 lg:mb-0">
                  Where<span>:</span>
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start">
                  <p className="text-primary-10 tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0">
                    {item.attributes.venue}
                  </p>
                  <span className="text-primary-50 lg:text-primary-30 px-2 lg:px-3 mb-2 lg:mb-0">
                    |
                  </span>
                  <p className="text-primary-10 tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0">
                    {item.attributes.townCity}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-grow xl:flex-grow-0 flex-row md:flex-col xl:flex-row items-center justify-center md:bg-primary-80 lg:bg-transparent md:border-l border-primary-70 lg:border-white xl:py-8 md:px-12 md:bg-wave lg:bg-none">
              <div className="w-full xl:w-auto xl:mr-2 md:mb-6 xl:mb-0 relative z-10">
                <a
                  className="flex flex-grow justify-center py-5 lg:py-3 lg:px-8 text-white text-center uppercase tracking-widest text-sm bg-primary-90 hover:bg-primary border border-primary-90 hover:border-primary  transition-colors duration-200"
                  href={`event-items/${item.attributes.slug}`}
                >
                  More Info
                </a>
              </div>
              <div className="w-full xl:w-auto xl:ml-2 relative z-10">
                <a
                  className="flex flex-grow justify-center py-5 lg:py-3 lg:px-8 text-white lg:text-primary lg:hover:text-white text-center uppercase tracking-widest text-sm bg-secondary lg:bg-white hover:bg-secondary-dark border border-secondary lg:border-white hover:border-secondary-dark transition-colors duration-200"
                  href={`event-items/${item.attributes.slug}#booking`}
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
