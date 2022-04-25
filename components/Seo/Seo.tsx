import { NextSeo } from "next-seo";
import { ISeo } from "@/types/seo.interface";

type SeoProps = {
  meta: ISeo;
};

const Seo: React.FC<SeoProps> = ({ meta }) => {
  return (
    <NextSeo
      title={meta.title}
      titleTemplate={`%s | ${meta.titleSuffix}`}
      description={meta.description}
      noindex={meta.preventIndexing}
      nofollow={meta.preventFollowing}
      canonical={meta.cannonicalLink}
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
