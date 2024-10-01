import { z } from 'zod';

import { customStringValidation } from '@utils';

const schema = z.object({
  // General
  NODE_ENV: customStringValidation('environment variable NODE_ENV'),
  LOG_LEVEL: customStringValidation('environment variable LOG_LEVEL').default('debug'),
  // Web Server
  WEB_SERVER_HOST: customStringValidation('environment variable WEB_SERVER_HOST'),
  WEB_SERVER_PORT: z.coerce.number({
    required_error: 'Invalid environment variable WEB_SERVER_PORT',
    invalid_type_error: 'Invalid environment variable WEB_SERVER_PORT',
  }),
});

const validatedEnv = schema.safeParse(process.env);

if (validatedEnv.success === false) {
  const issues = validatedEnv.error.issues.map((issue) => {
    const { message } = issue;
    return message.charAt(0).toLowerCase() + message.slice(1);
  });
  issues.forEach((issue) =>
    console.log(JSON.stringify({ level: 'error', datetime: new Date(Date.now()).toISOString(), message: issue })),
  );
  process.exit(1);
}

export const env = validatedEnv.data;
