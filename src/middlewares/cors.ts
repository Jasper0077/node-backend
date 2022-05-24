import cors from "cors";

const allowedOrigins = (
  process.env.CORS_ORIGINS ||
  /* istanbul ignore next */
  "http://localhost:3001"
).split(",");
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "User-Agent",
    "Host",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,POST,DELETE",
  origin: allowedOrigins,
  preflightContinue: false,
};

export const corsWithOptions = cors(options);