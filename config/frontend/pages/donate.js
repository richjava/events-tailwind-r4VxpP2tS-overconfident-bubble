import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import CTACard from "@/templates/cards/cta-card/cta-card";
import DonateForm from "@/templates/forms/donate-form/donate-form";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.donateSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <DonateForm content={props.donateLandingContent} />
			 <CTACard content={props.subscribeTeaserContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'donate'});
  return {
    props: props,
    revalidate: 10
  };
}