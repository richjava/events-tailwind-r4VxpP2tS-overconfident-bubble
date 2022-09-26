import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import CTACard from "@/templates/cards/cta-card/cta-card";
import FAQBlock from "@/templates/blocks/faq-block/faq-block";
import SubscribeForm from "@/templates/forms/subscribe-form/subscribe-form";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.subscribeSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <SubscribeForm content={props.subscribeLandingContent} />
			 <FAQBlock content={props.subscribeFaqContent} />
			 <CTACard content={props.donateTeaserContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'subscribe'});
  return {
    props: props,
    revalidate: 10
  };
}