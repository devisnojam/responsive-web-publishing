export type NFTType = {
  name: string;
  thumbImgSrc: string;
  priceOfEth: number;
  bidOfEth: number;
};

export type UserType = {
  id: string;
  name: string;
  profileImgSrc?: string;
  nfts?: NFTType[];
};
