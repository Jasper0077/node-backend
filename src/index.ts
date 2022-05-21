import "dotenv/config";

import express, { Express, Request, Response } from "express";
import { morgan } from "./middlewares";
import { PORT } from "./utils/constants";

const app: Express = express();

app.use(morgan(
  '":method :url HTTP/:http-version" :remote-addr [:date[clf]] Input :input Response :response-body',
));

app.use("/api/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Success",
    data: null, 
    errors: null
  })
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})