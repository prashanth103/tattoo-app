import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SITE_NAME = "Samava Tattoo Studio";
const SITE_URL = "https://www.samavatattoostudio.com";
const DEFAULT_IMAGE = "/og-image.jpg";

export default function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}