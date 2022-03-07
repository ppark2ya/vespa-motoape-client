import { rest } from 'msw';
import { API_URL } from '@constants/environments';

const commonHandlers = [
  rest.get(`${API_URL}/common/menu`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        modelList: [
          {
            subCategory: '1200',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/52d13026-81b3-4bb7-8287-e0d7c0fa8a4b_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg',
            modelSeq: '19',
            subCategoryNm: 'PRIMAVERA',
            modelName: 'PRIMAVERA',
            modelTitle: '누구도 따라올수 없는 아름다운 디자인',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1200',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/c6d8ed63-5ace-4088-a8af-7455ad41b9ce_%ED%94%84%EB%A6%AC%EB%A7%88-S%EB%B2%84%EC%A0%84.jpg',
            modelSeq: '20',
            subCategoryNm: 'PRIMAVERA',
            modelName: 'S Vesrion',
            modelTitle: '',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1200',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/91f7e602-11c3-4a32-bba4-204b6b266068_%ED%94%84%EB%A6%AC%EB%A7%88-%EB%A0%88%EB%93%9C.jpg',
            modelSeq: '21',
            subCategoryNm: 'PRIMAVERA',
            modelName: '(PRODUCT)RED',
            modelTitle: '',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1200',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/77cc54df-50ff-4af6-ada7-6088b48284f8_%ED%94%84%EB%A6%AC%EB%A7%88-%ED%94%BC%ED%81%AC%EB%8B%89.jpg',
            displayOrder: '1',
            modelSeq: '22',
            subCategoryNm: 'PRIMAVERA',
            modelName: 'PIC-NIC',
            modelTitle: ' ',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1200',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/5c3fa52d-55f0-4fdb-9592-d17299ff70ef_%ED%94%84%EB%A6%AC%EB%A7%88-75.jpg',
            modelSeq: '23',
            subCategoryNm: 'PRIMAVERA',
            modelName: '75TH Anniversary',
            modelTitle: '75주년의 여정',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1201',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/91350a12-4788-4704-bdcf-a7d5c43dc020_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg',
            modelSeq: '24',
            subCategoryNm: 'SPRINT',
            modelName: 'SPRINT',
            modelTitle: '경쾌한 주행감을 느껴볼수 있는',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1201',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/ea280a97-d830-4091-9136-110aeb699a70_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-S-%EB%B2%84%EC%A0%84.jpg',
            modelSeq: '25',
            subCategoryNm: 'SPRINT',
            modelName: 'S Vesrion',
            modelTitle: '',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1201',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/85cd7fe4-7083-4b6c-a3b4-0f1142a09cce_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-TFT.jpg',
            modelSeq: '26',
            subCategoryNm: 'SPRINT',
            modelName: 'TFT Vesrion',
            modelTitle: '',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1201',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/37ea0ba9-f140-4f00-b37a-1fef1969e16f_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EC%BD%94%EB%A6%AC%EC%95%84%EC%97%90%EB%94%94%EC%85%98.jpg',
            modelSeq: '35',
            subCategoryNm: 'SPRINT',
            modelName: 'KOREA 에디션',
            modelTitle: '코리아 특별 한정판',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1202',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/840b63f4-a712-40f6-80c4-790e41047207_GTS-125.jpg',
            modelSeq: '27',
            subCategoryNm: 'GTS',
            modelName: 'GTS 125 SUPER',
            modelTitle: '끝없는 여행을 위한 새로운 경험.',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1202',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/d5dca810-9f3f-4cb8-b122-1a02a4c2a26a_GTS300-SS.jpg',
            modelSeq: '28',
            subCategoryNm: 'GTS',
            modelName: 'GTS 300 SUPER SPORT',
            modelTitle: '완벽한 여행 동반자',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1202',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/c1e60f9b-4f44-44fc-abc3-e7eea8175015_GTS-ST.jpg',
            modelSeq: '29',
            subCategoryNm: 'GTS',
            modelName: 'GTS 300 SUPER TECH',
            modelTitle: '끝없는 여행을 위한 새로운 경험.',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1202',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/6c91a2fd-d216-43eb-ba27-323a60e181ff_GTS-75.jpg',
            modelSeq: '30',
            subCategoryNm: 'GTS',
            modelName: 'GTS 300 75TH Anniversary',
            modelTitle: '75주년의 여행',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1203',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/be1bdb16-8c0c-4521-8210-b99337e180ab_GTV.jpg',
            modelSeq: '34',
            subCategoryNm: 'GTV',
            modelName: 'SEI GIORNI',
            modelTitle: '전설의 현대적 진화',
            mainCategory: '1100',
            mainCategoryNm: 'VESPA',
            useYn: 'Y',
          },
          {
            subCategory: '1205',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/d9185549-c633-4241-b283-6d25fb5f7302_%EB%A9%94%EB%93%A4%EB%A6%AC.jpg',
            modelSeq: '31',
            subCategoryNm: 'MEDLEY',
            modelName: 'MEDLEY 125',
            modelTitle: '언더본 스쿠터의 최강자',
            mainCategory: '1101',
            mainCategoryNm: 'PIAGGIO',
            useYn: 'Y',
          },
          {
            subCategory: '1206',
            modelImg:
              'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/94737607-0419-4271-9909-af8e246c590f_%EB%B9%84%EB%B2%84%EB%A6%AC-400-NEW.jpg',
            modelSeq: '36',
            subCategoryNm: 'BEVERLY',
            modelName: 'Beverly 400 S HPE',
            modelTitle: '123',
            mainCategory: '1101',
            mainCategoryNm: 'PIAGGIO',
            useYn: 'Y',
          },
        ],
        partList: [
          {
            mainCategory: '2100',
            mainCategoryNm: '정품 악세사리',
          },
        ],
      }),
    );
  }),
];

export default commonHandlers;
