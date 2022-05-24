import { Knex } from "knex";

export interface BaseRepositoryInterface<Model, Filter> {
  getAll(
    input: Filter,
    select?: Array<string>,
    trx?: Knex.Transaction,
  ): Promise<GetAllResult<Model>>;

  getById(
    id: number,
    select?: Array<string>,
    trx?: Knex.Transaction
  ): Promise<Model>;

  create(
    data: Omit<Model, "id">,
    trx?: Knex.Transaction,
  ): Promise<Model>;

  update(
    data: Omit<Model, "id">,
    trx?: Knex.Transaction,
  ): Promise<Model>;

  delete(
    id: number,
    trx?: Knex.Transaction,
  ): Promise<null>;
}



export interface GetAllResult<Model> {
  data?: Array<Model>,
  meta: {
    total: number,
    per: number,
    page: number
    lastPage: number,
  }
}