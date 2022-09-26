export default function Blockquote1({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="blockquote-1" className="py-10 template">
      <div className="max-w-5xl mx-auto">
        <blockquote className="border-t border-b border-secondary py-8 sm:px-10 relative">
          <p className="text-2xl text-primary-80 font-display">
            {attributes.quote}
          </p>
          {attributes?.source && (
            <p className="text-primary-50 text-sm mt-6">—{attributes.source}</p>
          )}
          <div className="blockquote-apostrophy rotate-sm">
            <svg
              viewBox="0 0 175 129.83"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
            >
              <path
                d="M0,129.833V119.186c5.333.129,36.068-5.055,37.833-44.858H0V0H74.328V74.328C74.4,78.342,73.864,129.7,0,129.833Z"
                fill="#d46e3a"
              ></path>
              <path
                d="M100.668,129.833V119.186c5.333.129,36.068-5.055,37.833-44.858H100.668V0H175V74.328C175.071,78.342,174.532,129.7,100.668,129.833Z"
                fill="#d46e3a"
              ></path>
            </svg>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
