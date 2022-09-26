import React from "react";
import { getProps, getPaths } from "@builtjs/site";
import Error from "next/error";
import { withRouter } from "next/router";
import NewsletterBanner1 from "@/templates/banners/newsletter-banner-1/newsletter-banner-1";
import Article1 from "@/templates/articles/article-1/article-1";
import Layout from "@/layout/layout";

const Page = (props) => {
  if (props.error) {
    return <Error statusCode={props.error.code} />
  }
  return (
    <><Layout headerContent={props.headerContent}  footerContent={props.footerContent} >
			 <Article1 content={props.eventArticleContent} />
			 <NewsletterBanner1 content={props.newsletterContent} />
			</Layout>
		</>
  );
};

export default withRouter(Page);

export async function getStaticProps({ params }) {
  let props = await getProps({
    pageSlug: 'event-article',
    collectionSlug: "event-items",
    articleSlug: params.slug, 
  });
  return {
    props: props,
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const allItems = await getPaths('event-items');
  return {
    paths: allItems?.collection.map(({ attributes }) => "/event-items/" + attributes.slug) ?? [],
    fallback: true
  };
}