import express from "express";
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = process.env.PORT || 3000;

const options: Options = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Backend',
      version: '1.0.0',
      description: "A typical node backend demo."
    },
  },
  server: [
    {
      url: `http://localhost:${PORT}/api`
    }
  ],
  basePath: "/api",
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts", "./src/controllers/*.ts"],
}

const openapiSpecification = swaggerJsdoc(options);

const router = express.Router()

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(openapiSpecification));

export { router };

/**
 * @openapi
 * components:
 *   parameters:
 *     id:
 *       name: id
 *       schema:
 *         type: string
 *         format: int64
 *         example: 1
 *     userId:
 *       name: userId
 *       schema:
 *         type: number
 *         format: int64
 *         example: 1
 *     clientId:
 *       name: clientId
 *       schema:
 *         type: string
 *         example: dee8c34a-b7a4-476d-9e72-b959566833c5
 *     orderBy:
 *       name: orderBy
 *       schema:
 *         type: string
 *     sort:
 *       name: sort
 *       schema:
 *         type: string
 *         enum: [asc, desc]
 *         example: asc
 *     limit:
 *       name: limit
 *       schema:
 *         type: integer
 *         example: 25
 *     page:
 *       name: page
 *       schema:
 *         type: integer
 *         example: 1
 *
 *   responses:
 *     Success:
 *       description: Success
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Success
 *               data:
 *                 type: object
 *               errors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: null
 *     Unauthorized:
 *       description: Unauthorized
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Unauthorized
 *               data:
 *                 type: object
 *                 example: null
 *               errors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: null
 *     InvalidInputs:
 *       description: Invalid inputs
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Invalid inputs
 *               data:
 *                 type: object
 *                 example: null
 *               errors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [password is required]
 *     BadRequest:
 *       description: Malformed or unrecognised inputs
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Bad request
 *               data:
 *                 type: object
 *                 example: null
 *               errors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: null
 *     ServerError:
 *       description: Internal Server Error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Invalid inputs
 *               data:
 *                 type: object
 *                 example: null
 *               errors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: null
 */