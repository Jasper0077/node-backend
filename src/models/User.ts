import { BaseModel, BaseModelFilter } from "./BaseModel";

export interface User extends BaseModel {
  name: string,
  ccPhone: string,
  email: string,
  phone: string
}

export interface UserClaims {
  canGetAllUsers?: boolean;
  canCreateUser?: boolean;
  canUpdateUser?: boolean;
  canDeleteUser?: boolean;
  [x: string]: any;
}

export interface UserPassword {
  password: string,
  updatedAt: Date
}

export interface UserFilter extends BaseModelFilter {
  id?: Array<number>;
  email?: string;
  ccPhone?: string;
  phone?: string;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      description: User
 *      properties:
 *        id:
 *          $ref: '#components/schemas/BaseModel/properties/id'
 *        name:
 *          type: string
 *          example: Jasper Hwong
 *        ccPhone:
 *          type: string
 *          example: +65
 *        phone:
 *          type: string
 *          example: 12345678
 *        email:
 *          type: string
 *          example: jasper@hwong.com
 *        claims:
 *          type: object
 *          example:
 *             {
 *               "canGetAllUsers": true,
 *               "canCreateUser": true,
 *               "canUpdateUser": true,
 *               "canDeleteUser": true,
 *               "clinics": {
 *                 "id": 1,
 *                 "role": "Admin"
 *               },
 *               "defaultClinic": 1
 *             }
 *         createdAt:
 *           $ref: '#/components/schemas/BaseModel/properties/createdAt'
 *         updatedAt:
 *           $ref: '#/components/schemas/BaseModel/properties/updatedAt'
 *         deletedAt:
 *           $ref: '#/components/schemas/BaseModel/properties/deletedAt'
 * 
 */