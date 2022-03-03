import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface CustomersContacts extends Model {
  id: number;
}

export const CustomersContacts = sequelize.define<CustomersContacts>(
  "CustomersContacts",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "customers_contacts",
    timestamps: true,
  }
);


