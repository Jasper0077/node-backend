export interface BaseModel {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
}

export interface BaseModelFilter {
  orderBy?: string;
  sort?: SortType;
  limit?: number;
  page?: number;
}

export const SortType = {
  ascending: "asc",
  descending: "desc",
} as const;
export type SortType = typeof SortType[keyof typeof SortType];

/**
 * @openapi
 * components:
 *   schemas:
 *     BaseModel:
 *       description: Base model
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2022-01-01T00:00:000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2022-01-01T00:00:000Z
 *         deletedAt:
 *           type: string
 *           format: date-time
 *           example: 2022-01-01T00:00:000Z
 */