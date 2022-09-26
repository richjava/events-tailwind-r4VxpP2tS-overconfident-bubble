import React from "react";
import { getProps } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import SEO from "@/templates/head/seo/seo";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import Block2 from "@/templates/blocks/block-2/block-2";
import Blockquote1 from "@/templates/blockquotes/blockquote-1/blockquote-1";
import Block1 from "@/templates/blocks/block-1/block-1";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
     <>
	<SEO content={props.aboutSeoContent} />
		<Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Block1 content={props.aboutLandingContent} />
			 <Blockquote1 content={props.aboutBlockquoteContent} />
			 <Block2 content={props.aboutEventsTeaserContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  let props = await getProps({pageSlug: 'about'});
  return {
    props: props,
    revalidate: 10
  };
}