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
            translateTime: 'UTC:yyyy-mm-dd"T"HH:MM:ss.l"Z"',
          },
        }
      : undefined,
  messageKey: 'message',
  timestamp: env.NODE_ENV === 'development' ? true : () => `,"datetime":"${new Date(Date.now()).toISOString()}"`,
});
