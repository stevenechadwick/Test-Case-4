import { Entity } from "electrodb";
import { DynamoDB } from "aws-sdk";

const client = new DynamoDB.DocumentClient();

const ComboEntity = new Entity(
  {
    model: {
      entity: "combo",
      version: "1",
      service: "Test-Case-4",
    },
    attributes: {
      ServerID: {
        type: "number",
        field: "ServerID",
      },
      ComboID: {
        type: "number",
        field: "ComboID",
      },
      Character: {
        type: "string",
        field: "Character",
      },
      Input: {
        type: "string",
        field: "Input",
      },
      Video: {
        type: "string",
        field: "Video",
      },
      Credit: {
        type: "string",
        field: "Credit",
      },
      Damage: {
        type: "number",
        field: "Damage",
      },
      Tags: {
        type: ["string"],
        field: "Tags",
      },
      Starter: {
        type: "string",
        field: "Starter",
      },
      Notes: {
        type: "string",
        field: "Notes",
      },
      GameVersion: {
        type: "string",
        field: "Game Version",
      },
      CreatedAt: {
        type: "string",
        field: "Created At",
      },
      UpdatedAt: {
        type: "string",
        field: "Updated At",
      },
      AddedBy: {
        type: "string",
        field: "Added By",
      },
    },
    indexes: {
      combo: {
        pk: {
          field: "ServerID",
          composite: ["ComboID"],
        },
      },
    },
  },
  {
    client,
    table: "Combos",
  },
);

export { ComboEntity };
