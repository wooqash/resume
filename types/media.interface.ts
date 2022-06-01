export interface IImageInfo {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
}

export interface IMedia extends IImageInfo {
  id: number | string;
  alternativeText?: string;
  caption?: string;
  formats: {
    large: IImageInfo;
    medium: IImageInfo;
    small: IImageInfo;
    thumbnail: IImageInfo;
  };
}

export interface ISimpleImage {
  id: number | string;
  url: string;
  ext: string;
}
