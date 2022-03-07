import homeHandlers from './home';
import commonHandlers from './common';

export const handlers = [...homeHandlers, ...commonHandlers];
