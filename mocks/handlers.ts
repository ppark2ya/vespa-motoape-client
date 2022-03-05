import { rest } from 'msw';

export const handlers = [
  rest.get(`/test`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        msg: 'success!',
        data: {},
      }),
    );
  }),
];
