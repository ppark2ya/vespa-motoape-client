import { rest } from 'msw';
import { API_URL } from '@constants/environments';

const homeHandlers = [
  rest.get(`${API_URL}/home/mainBoardModels`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          modelSeq: 30,
          modelName: 'GTS 300 75TH Anniversary',
          modelThumnailImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/3afb185d-3416-45ed-8321-753b0c2d0493_KakaoTalk_20210916_154519838_01.jpg',
          displayOrder: 1,
          goodsLink:
            'https://vespa-motoape.com/30/gts_300_75th_anniversary/gts.do?',
        },
        {
          modelSeq: 27,
          modelName: 'GTS 125 SUPER',
          modelThumnailImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/84414289-30c7-4ea1-896d-12b650e1e52d_%EB%A9%94%EC%9D%B8%20%EC%82%AC%EC%A7%84%2002.jpg',
          displayOrder: 2,
          goodsLink: 'https://vespa-motoape.com/27/gts_125_super/gts.do?',
        },
        {
          modelSeq: 19,
          modelName: 'PRIMAVERA',
          modelThumnailImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/mainBanner/c40bb679-a293-46f8-9e35-c3ed1523cb90_%EB%A9%94%EC%9D%B8%20%EC%82%AC%EC%A7%84%2003.jpg',
          displayOrder: 3,
          goodsLink: 'https://vespa-motoape.com/19/primavera/primavera.do?',
        },
      ]),
    );
  }),
  rest.get(`${API_URL}/home/discoverModels`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          modelSeq: 19,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'PRIMAVERA',
          modelName: 'PRIMAVERA',
          modelTitle: '누구도 따라올수 없는 아름다운 디자인',
          modelDescription1: '베스파 특유의 우아하고 아름다운 실루엣',
          modelDescription2: '안전한 라이딩이 가능한 ABS 탑재',
          modelDescription3: '피아지오 베스파 기술력이 돋보이는 i-get엔진',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/52d13026-81b3-4bb7-8287-e0d7c0fa8a4b_%ED%94%84%EB%A6%AC%EB%A7%88-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/501be877-46f8-4cae-890f-21ee4a8032dd_%ED%94%84%EB%A6%AC%EB%A7%88%EB%B2%A0%EB%9D%BC.jpg',
        },
        {
          modelSeq: 23,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'PRIMAVERA',
          modelName: '75TH Anniversary',
          modelTitle: '75주년의 여정',
          modelDescription1: '베스파 75주년 특별 한정판',
          modelDescription2: '4.3인치 TFT 디스플레이 대시보드',
          modelDescription3: 'I-GET 엔진을 통한 최고의 품질 및 신뢰성',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/5c3fa52d-55f0-4fdb-9592-d17299ff70ef_%ED%94%84%EB%A6%AC%EB%A7%88-75.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/e35b15d8-dbfb-43b0-b08e-968199b79274_%ED%94%84%EB%A6%AC%EB%A7%88%EB%B2%A0%EB%9D%BC-75.jpg',
        },
        {
          modelSeq: 24,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'SPRINT',
          modelName: 'SPRINT',
          modelTitle: '경쾌한 주행감을 느껴볼수 있는',
          modelDescription1: '강력한 개성의 직사각형 헤드라이트',
          modelDescription2: '헬멧 수납이 가능한 여유로운 트렁크',
          modelDescription3:
            '최적화된 엔진성능으로 안정적이면서도 스포티한 주행감.',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/91350a12-4788-4704-bdcf-a7d5c43dc020_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EC%8A%A4%ED%83%A0%EB%8B%A4%EB%93%9C.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/c1bea58d-0873-4ae4-8c8a-544fda063795_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8.jpg',
        },
        {
          modelSeq: 35,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'SPRINT',
          modelName: 'KOREA 에디션',
          modelTitle: '코리아 특별 한정판',
          modelDescription1: '대한민국의 특별한 스프린트',
          modelDescription2: '강한 개성의 육각형 헤드라이트',
          modelDescription3:
            '베스파 I-GET 엔진의 안정적이면서도 스포티한 주행감',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/37ea0ba9-f140-4f00-b37a-1fef1969e16f_%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8-%EC%BD%94%EB%A6%AC%EC%95%84%EC%97%90%EB%94%94%EC%85%98.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/0c833a5f-2737-40a5-8fe1-43a3ea78e8c8_%EC%BD%94%EB%A6%AC%EC%95%84-%EC%97%90%EB%94%94%EC%85%98.jpg',
        },
        {
          modelSeq: 27,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'GTS',
          modelName: 'GTS 125 SUPER',
          modelTitle: '끝없는 여행을 위한 새로운 경험.',
          modelDescription1: 'I-GET 엔진을 통한 최고의 품질 및 신뢰성',
          modelDescription2: '도시에서의 활동적인 운전이 가능한',
          modelDescription3:
            '모든 기상 조건에서의 안정성을 확보할 수 있는 LED램프',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/840b63f4-a712-40f6-80c4-790e41047207_GTS-125.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/0f789203-87c1-4450-857f-6131098ebf68_GTS-125.jpg',
        },
        {
          modelSeq: 28,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'GTS',
          modelName: 'GTS 300 SUPER SPORT',
          modelTitle: '완벽한 여행 동반자',
          modelDescription1: '가장 강력한 성능을 제공하는 HPE 엔진',
          modelDescription2: '새로운 인체 공학적 시트 및 LED 조명',
          modelDescription3: '세련된 라인의 스포티 한 디자인',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/d5dca810-9f3f-4cb8-b122-1a02a4c2a26a_GTS300-SS.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/120f634c-6703-48e2-87bd-5ca15e7b27c4_GTS-300-SS.jpg',
        },
        {
          modelSeq: 29,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'GTS',
          modelName: 'GTS 300 SUPER TECH',
          modelTitle: '끝없는 여행을 위한 새로운 경험.',
          modelDescription1: '베스파 특유의 우아하고 아름다운 실루엣',
          modelDescription2: '헬멧 수납이 가능한 여유로운 트렁크',
          modelDescription3:
            '모든 기상 조건에서의 안정성을 확보할 수 있는 LED램프',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/c1e60f9b-4f44-44fc-abc3-e7eea8175015_GTS-ST.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/dfdd9a23-49b4-4f64-a9d9-333aae0d9d00_GTS-300-ST.jpg',
        },
        {
          modelSeq: 30,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'GTS',
          modelName: 'GTS 300 75TH Anniversary',
          modelTitle: '75주년의 여행',
          modelDescription1: '베스파 75주년 특별 한정판',
          modelDescription2: '4.3 인치 풀 컬러 TFT 디스플레이 풀 디지털 계기판',
          modelDescription3: '향상된 출력과 최적화된 성능으로 편안한 라이딩',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/6c91a2fd-d216-43eb-ba27-323a60e181ff_GTS-75.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/4eb538dd-f91a-41a7-a3e6-b9baa510f4a9_GTS-300-75.jpg',
        },
        {
          modelSeq: 34,
          mainCategoryNm: 'VESPA',
          subCategoryNm: 'GTV',
          modelName: 'SEI GIORNI',
          modelTitle: '전설의 현대적 진화',
          modelDescription1: '현대적 기술에 시대를 초월한 클래식 디자인',
          modelDescription2: '최적의 라이딩 포지션을 제공하는 프로츠 시트',
          modelDescription3: '인체 공학 및 안전을 뒷받침하는 하이테크 기술력',
          modelImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/be1bdb16-8c0c-4521-8210-b99337e180ab_GTV.jpg',
          discoverImg:
            'https://vespa-bucket.s3.ap-northeast-2.amazonaws.com/model/4c400ba9-6d3b-4fe5-a947-d3de6b016dfd_GTV-300.jpg',
        },
      ]),
    );
  }),
];

export default homeHandlers;
