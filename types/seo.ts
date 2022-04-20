export interface ISeo {
  metaTitle: string;
  metaTitleSuffix?: string;
  metaDescription: string;
  metaKeywords?: string;
  preventIndexing: boolean;
  preventFollowing: boolean;
  cannonicalLink?: string;
  // shareImage?: Media;
  // openGraph?: OpenGraphData;
  // twitterCard?: TwitterCardData;
}
