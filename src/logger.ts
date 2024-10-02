import pino from 'pino';

import { env } from '@config';

export const logger = pino({
  base: {},
  level: env.LOG_LEVEL,
  formatters: {
    level: (label) => ({ level: label }),
  },
  transport:
    env.NODE_ENV === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            messageKey: 'message',
            translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
          },
        }
      : undefined,
  messageKey: 'message',
  timestamp: env.NODE_ENV === 'development' ? true : () => `,"datetime":"${new Date(Date.now()).toISOString()}"`,
});
