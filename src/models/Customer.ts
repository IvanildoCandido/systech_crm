import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";
import { Address } from "./Address";
import { CustomeresAddresses } from "./CustomersAddresses";

export interface CustomerInstance extends Model {
  id: number;
  name: string;
  cpf: string;
  gender: string;
  birthdate: Date;
  created_at: Date;
  updated_at: Date;
}

export const Customer = sequelize.define<CustomerInstance>(
  "Customer",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "customers",
    timestamps: true,
  }
);

Customer.belongsToMany(Address, {
  through: {
    model: CustomeresAddresses,
  },
  foreignKey: "id_customer",
  constraints: true,
});
Address.belongsToMany(Customer, {
  through: {
    model: CustomeresAddresses,
  },
  foreignKey: "id_address",
  constraints: true,
});
