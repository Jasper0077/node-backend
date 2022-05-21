import { Request, Response } from "express";
import morgan from "morgan";

morgan.token("input", function getInput(req: Request): string {
  let input: Record<string, any> = {};
  if (req.method == "GET") {
    input = req.query
  } else {
    input = req.body
  }
  input = { ...input }
  if (input.password) {
    input.password = "*"
  }
  if (input.passKey) {
    input.passKey = "*"
  }
  return JSON.stringify(input);
});

morgan.token("response-body", (req: Request, res: Response): string => {
  try {
    if (res.responseBody) {
      const body = { ...JSON.parse(res.responseBody) };
      if (body?.data?.accessToken) {
        body.data.accessToken = "*";
      }
      if (body?.data?.refreshToken) {
        body.data.refreshToken = "*";
      }
      return JSON.stringify(body);
    }
    return "";
  } catch (error) {
    return "Error parsing response body";
  }
});

export { morgan };