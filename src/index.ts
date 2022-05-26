import "dotenv/config";

import express, { Express, Request, Response } from "express";
import { errorReponseHandler, missingRouteHandler, morgan } from "./middlewares";
import { PORT } from "./utils/constants";

const app: Express = express();

// override send to store response body for morgan token to retrieve
const originalSend = app.response.send;
app.response.send = function sendOverride(body) {
  this.responseBody = body;
  return originalSend.call(this, body);
};

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

if (process.env.NODE_ENV === "development") {
  app.use("/api/docs", require("./routes/docs").router);
}

app.use(errorReponseHandler);
app.use(missingRouteHandler);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})