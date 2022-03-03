import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface CustomersAddresses extends Model {
  id: number;
}

export const CustomeresAddresses = sequelize.define<CustomersAddresses>(
  "CustomeresAddresses",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "customers_addresses",
    timestamps: true,
  }
);


