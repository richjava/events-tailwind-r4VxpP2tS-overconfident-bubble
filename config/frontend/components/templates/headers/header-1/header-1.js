import React from "react";
import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";
import { useRouter } from "next/router";

export default function Header1({ content }) {
  const router = useRouter();
  const [mobileNavIsOpen, setMobileNavIsOpen] = React.useState(false);
  const { publicRuntimeConfig } = getConfig();
  if (!content) return <></>;
  let { attributes, collections, global } = { ...content };
  const collectionNames = {
    PRIMARY_MENU_ITEMS: "primary-menu-items",
    SECONDARY_MENU_ITEMS: "secondary-menu-items",
  };
  let primaryMenuItems;
  let secondaryMenuItems;
  if (collections) {
    if (collections[collectionNames.PRIMARY_MENU_ITEMS]) {
      primaryMenuItems = collections[collectionNames.PRIMARY_MENU_ITEMS].items;
    }
    if (collections[collectionNames.SECONDARY_MENU_ITEMS]) {
      secondaryMenuItems =
        collections[collectionNames.SECONDARY_MENU_ITEMS].items;
    }
  }

  return (
    <header id="header-1" className="template relative">
      <Link href="/">
        <a className="hidden lg:block lg:absolute top-0 left-0 z-50 xl:ml-20 w-32 xl:w-40">
          <Image
            id="logo-anchor"
            src={`${publicRuntimeConfig.BACKEND_URL || ""}${
              global.logo.data.attributes.url
            }`}
            width={global.logo.data.attributes.width}
            height={global.logo.data.attributes.height}
            alt={global.logo.data.attributes.alternativeText}
          />
        </a>
      </Link>

      <nav
        className={`nav fixed top-0 z-40 w-full shadow-md ${
          mobileNavIsOpen ? "open" : ""
        }`}
      >
        <div className="bg-white relative flex items-center justify-between xl:pl-20">
          <button
            type="button"
            onClick={() => setMobileNavIsOpen(!mobileNavIsOpen)}
            className="lg:hidden p-4 text-white bg-primary focus:outline-none active:bg-primary transition duration-200 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {!mobileNavIsOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
              {mobileNavIsOpen && (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>

          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/">
                <a className="block lg:hidden w-10 sm:mr-3">
                  <Image
                    src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                      attributes.logoLight.data.attributes.url
                    }`}
                    width={attributes.logoLight.data.attributes.width}
                    height={attributes.logoLight.data.attributes.height}
                    alt={attributes.logoLight.data.attributes.alternativeText}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="mt-1 -mb-2 block lg:hidden">
                  <Image
                    src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                      attributes.logoType.data.attributes.url
                    }`}
                    width={200}
                    height={50}
                    alt={attributes.logoType.data.attributes.alternativeText}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="hidden lg:block absolut left-0 z-30 w-12 mr-8 xl:mr-5 lg:ml-12 xl:ml-20">
                    <Image
                      src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                        attributes.logoLight.data.attributes.url
                      }`}
                      width={attributes.logoLight.data.attributes.width}
                      height={attributes.logoLight.data.attributes.height}
                      alt={attributes.logoLight.data.attributes.alternativeText}
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center">
              {primaryMenuItems &&
                primaryMenuItems.map((menuItem, i) => {
                  return (
                    <Link href={`/${menuItem.attributes.slug}`} key={i}>
                      <a
                        className={`primary-nav-link flex items-start border-r border-l ${
                          router.pathname === `/${menuItem.attributes.slug}`
                            ? "active"
                            : ""
                        }`}
                      >
                        <Image
                          src={`/images/${menuItem.attributes.slug}-icon.svg`}
                          width={17}
                          height={16}
                          alt={menuItem.attributes.label}
                        />
                        <span className="pl-2">
                          {menuItem.attributes.label}
                        </span>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>

          <div className="flex items-center">
            {secondaryMenuItems &&
              secondaryMenuItems.map((menuItem, i) => {
                return (
                  <Link href={`/${menuItem.attributes.slug}/`} key={i}>
                    <a
                      className={`secondary-nav-link hidden lg:block  ${
                        router.pathname === `/${menuItem.attributes.slug}`
                          ? "active"
                          : ""
                      }`}
                    >
                      {menuItem.attributes.label}
                    </a>
                  </Link>
                );
              })}
            <Link href="/subscribe/">
              <a className="hidden lg:block lg:ml-4 px-6 py-5 xl:px-10 xl:py-4 xl:py-6 text-white lg:text-sm lg:tracking-wider xl:tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out">
                Join Us
              </a>
            </Link>
            <Link href="/subscribe/">
              <a className="block lg:hidden p-4 text-white tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out">
                <svg className="h-6" fill="#fff" viewBox="0 0 36 32">
                  <path d="M17.205,15.655a1.089,1.089,0,0,0,1.594,0L25.6,8.518a5.18,5.18,0,0,0-.35-7.425,4.751,4.751,0,0,0-6.556.481l-.7.731-.694-.725a4.745,4.745,0,0,0-6.556-.487,5.186,5.186,0,0,0-.35,7.425ZM35.329,20.5a2.069,2.069,0,0,0-2.662,0l-5.775,4.618a3.979,3.979,0,0,1-2.5.875H17a1,1,0,0,1,0-2h4.893a2.081,2.081,0,0,0,2.081-1.662A2,2,0,0,0,22,20H12a7.356,7.356,0,0,0-4.631,1.644L4.462,24H1a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H23.3a4,4,0,0,0,2.5-.875l9.449-7.562A2,2,0,0,0,35.329,20.5Z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="bg-white shadow-lg"></div>
        </div>
        {mobileNavIsOpen && (
          <div>
            <div className="bg-white shadow-lg">
              {primaryMenuItems &&
                primaryMenuItems.map((menuItem, i) => {
                  return (
                    <Link href={`/${menuItem.attributes.slug}`} key={i}>
                      <a
                        className={`mobile-nav-link ${
                          router.pathname === `/${menuItem.attributes.slug}`
                            ? "active"
                            : ""
                        }`}
                      >
                        {menuItem.attributes.label}
                      </a>
                    </Link>
                  );
                })}
              {secondaryMenuItems &&
                secondaryMenuItems.map((menuItem, i) => {
                  return (
                    <Link href={`/${menuItem.attributes.slug}`} key={i}>
                      <a
                        className={`mobile-nav-link ${
                          router.pathname === `/${menuItem.attributes.slug}`
                            ? "active"
                            : ""
                        }`}
                      >
                        {menuItem.attributes.label}
                      </a>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
