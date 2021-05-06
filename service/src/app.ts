import fastify from 'fastify';
import routes from './routes';
import cors from 'fastify-cors';
import * as schemas from './consts/schemas';

function init() {
  const app = fastify({
    logger: true,
  });

  Object.values(schemas)
    .filter((schema) => !schema.$id.endsWith('RequestSchema'))
    .forEach((schema) => {
      app.addSchema(schema);
    });

  app.register(routes);

  app.setErrorHandler((error, req, res) => {
    // check if we have a validation error
    if (error.validation) {
      res.status(400).send({
        // @ts-ignore
        message: `A validation error occurred when validating the ${error.validationContext}`,
        errors: error.validation,
      });

      return;
    }

    req.log.error(error);

    res.status(500).send('unknown error');
  });

  return app;
}

// If called directly i.e. "node app"
if (require.main === module) {
  const app = init();

  app.register(cors);

  // TODO: serve static files?

  app.listen(3333, '0.0.0.0', (err) => {
    if (err) {
      app.log.fatal(err);
      process.exit(1);
    }
  });
}

// Required as a module => executed on aws lambda
export default init;
