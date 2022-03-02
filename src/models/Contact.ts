import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface ContactInstance extends Model {
  id: number;
  type: string;
  description: string;
  responsible: string;
}

export const Contact = sequelize.define<ContactInstance>(
  "Contact",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    responsible: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "contacts",
    timestamps: false,
  }
);
