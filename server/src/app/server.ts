import express, { RequestHandler, Request, Response } from 'express';
import path from 'path';

const app = express()
const port: string | number = process.env.PORT || 5000;

// running server app from ./server/app or ./server/dist (for prod)
const angular_app_location = '../../../dist/client/heroku-node-test'; // output from ng build --prod
const angular_dist_location = path.join(__dirname, angular_app_location);

const angular_assets_location = '../../src/assets'; /** @TODO more consistent locations / file structure */

const angularAppResponse: RequestHandler = (req: Request, res: Response) => {
  console.log('NODE: Router default 200 response\n' + angular_dist_location);
  // serve default file (index.html) for Angular app
  res.status(200).sendFile('/', {root: angular_dist_location});
  //res.send('{ "test_id": 200 }');
};

app.use("*", angularAppResponse);

//create a server object:
app.listen(port,() => console.log(`hosting @${port}`));