import mongoose, { Schema, SchemaDefinition } from 'mongoose';

// todo create schema definition
const itemsSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The item is required to be added into the database."]
    }
  });

const item = mongoose.model("Item", itemsSchema);

export interface IItem { name: string };
export const Item = (entity: IItem): mongoose.Document => new item(entity);

// export const listSchema = new mongoose.Schema({
//   name: String,
//   items: [itemsSchema]
// });

// export const List = mongoose.model("List", listSchema);