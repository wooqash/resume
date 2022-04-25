export interface ISeo {
  id: string | number;
  title: string;
  titleSuffix?: string;
  description: string;
  keywords?: string;
  preventIndexing: boolean;
  preventFollowing: boolean;
  cannonicalLink?: string;
  // shareImage?: Media;
  // openGraph?: OpenGraphData;
  // twitterCard?: TwitterCardData;
}
