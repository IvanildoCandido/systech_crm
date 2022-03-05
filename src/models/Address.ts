import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

type Dictionary = {
  [key: string]: unknown;
};

export interface AddressInstance extends Model, Dictionary {
  id: number;
  cep: string;
  street: string;
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
    street: {
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
