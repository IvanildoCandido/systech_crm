import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

type Dictionary = {
  [key: string]: unknown;
};

export interface ContactInstance extends Model, Dictionary {
  id: number;
  type: string;
  description: string;
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
  },
  {
    tableName: "contacts",
    timestamps: false,
  }
);
