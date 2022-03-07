export type Merge<T, U> = Omit<T, keyof U> & U;

export interface MainBoardModel {
  modelSeq: number;
  modelThumnailImg: string;
  displayOrder?: number;
  bannerSeq: number;
  goodsLink?: string;
}

export interface MotorcycleModel {
  modelSeq: number;
  mainCategory: string;
  subCategory: string;
  modelName: string;
  modelTitle?: string;
  modelDescription1?: string;
  modelDescription2?: string;
  modelDescription3?: string;
  modelImg?: string;
  recommendPrice: number;
  promotionPrice?: number;
  displayOrder?: number;
  regDtm?: Date;
  updDtm?: Date;
  useYn?: string;
  discoverImg?: string;
  discoverUseYn?: string;
}

export interface AccessoriesParts {
  accPartsSeq: number;
  mainCategory: string;
  middleCategory: string;
  subCategory: string;
  goodsNm: string;
  partsNumber: string;
  goodsPrice: number;
  storefarmUrl: string;
  detailGoodsImg1?: string;
  detailGoodsImg2?: string;
  detailGoodsImg3?: string;
  detailGoodsImg4?: string;
  detailGoodsVideo?: string;
  regDtm: Date;
  updDtm: Date;
  useYn: string;
  goodsDescConts?: string;
  mainThumbnailImg: string;
}

export interface Promotion {
  prmtSeq: number;
  prmtType: string;
  bannerYn: string;
  prmtTitle: string;
  prmtThumnailImg: string;
  prmtContentImg: string;
  regDtm: Date;
  updDtm?: Date;
  frDt?: Date;
  toDt?: Date;
  useYn: string;
}

export interface Code {
  code: string;
  codeNm: string;
  codeDesc?: string;
  useYn: string;
}

export interface CategoryNameType {
  mainCategoryNm: string;
  middleCategoryNm: string;
  subCategoryNm: string;
}
