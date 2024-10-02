# node-ts-fastify-template

### Table of Contents

- [Quick Start](#quick-start)
- [Core Features](#core-features)

### Quick Start

Make sure you have the following minimum versions for `node` and `npm`:

```sh
❯ node --version
v22.9.0
❯ npm --version
10.8.0
```

Create environment variable file:

```sh
# update the values in the newly created .env file accordingly
cp .env.example .env
```

Install dependencies:

```sh
# Install all the dependencies
npm ci
```

### Core Features

- **Highly performant:** Fastify is one of the best web server framework that is actively maintained and stable while beating all the other remaining frameworks in the ecosystem in terms of requests handled per second - https://fastify.dev/benchmarks/

- **Logging:** Sophisticated logging which standardized the log format and display differently according to environment for best developer experience and production-grade monitoring - favoring best human readability in local environment while outputting structured log in remote environments for easier integration with external logs monitoring solution like [Grafana](https://grafana.com/)

- **Automated documentation:** Once the schema for the request and response of API endpoints are defined, swagger API documentation will be automatically generated. Requests will be validated according to the schema as well
