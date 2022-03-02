import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface AddressInstance extends Model {
  id: number;
  cep: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  notes: string;
}

export const Address = sequelize.define<AddressInstance>(
  "Address",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    cep: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    complement: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "addresses",
    timestamps: false,
  }
);
