export default function LeftAlignedHeadline({ attributes, topSpacing }) {
  if (!attributes) return <></>;
  return (
    <div
      className="page-banner pt-24 md:pt-32 lg:pt-48 xl:pt-64"
      style={topSpacing ? {paddingTop:`${topSpacing}px`}: {}}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">{attributes.preheading}</p>
        <h1 className="h1 mb-8 md:mb-16 leading-tight">
        {attributes.heading}
        </h1>
      </div>
    </div>
  );
}
