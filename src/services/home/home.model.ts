import {
  Merge,
  MainBoardModel,
  MotorcycleModel,
  CategoryNameType,
} from '@/types/scheme';

export interface Writer extends MainBoardModel {
  writerName: string;
  writerId: string;
}

export type HomeMainBoardModelsAPIResponse = Merge<
  Pick<MotorcycleModel, 'modelSeq' | 'modelName'>,
  Pick<MainBoardModel, 'modelThumnailImg' | 'displayOrder' | 'goodsLink'>
>;

export type DiscovorModelsAPIResponse = Merge<
  Pick<
    MotorcycleModel,
    | 'modelSeq'
    | 'modelName'
    | 'modelTitle'
    | 'modelDescription1'
    | 'modelDescription2'
    | 'modelDescription3'
    | 'modelImg'
    | 'discoverImg'
  >,
  Pick<CategoryNameType, 'mainCategoryNm' | 'subCategoryNm'>
>;
