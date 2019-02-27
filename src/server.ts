import express from 'express';
import routes from './routes/routes';
import config from './config/config';

let app: express.Application = express();
routes(app);

const port = process.env.Port || 3339;
var server = app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started @ http://localhost:${ port }` );
} ); 

function stop() {
    server.close();
  }

console.log(`Environment : ${config.app.name}`);

export{ server , stop };