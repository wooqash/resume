import { NextSeo } from "next-seo";
import { ISeo } from "types/seo";

type SeoProps = {
  data: ISeo;
};

const Seo: React.FC<SeoProps> = ({ data }) => {
  return (
    <NextSeo
      title={data.metaTitle}
      description={data.metaDescription}
      noindex={data.preventIndexing}
      nofollow={data.preventFollowing}
      canonical={data.cannonicalLink}
      // languageAlternates={alternateLangs}
      // openGraph={{
      //   type: data.openGraph?.type,
      //   url: data.openGraph?.url,
      //   title: data.openGraph?.title || data.metaTitle,
      //   description: data.openGraph?.description || data.metaDescription,
      //   images: ogImages,
      //   locale: data.openGraph?.locale
      // }}
      // facebook={{ appId: data.openGraph?.fbAppId?.toString() || "" }}
      // twitter={{
      //   cardType: data.twitterCard?.card,
      //   handle: data.twitterCard?.username,
      // }}
    ></NextSeo>
  );
};

export default Seo;
