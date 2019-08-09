"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "SkillType",
    embedded: false
  },
  {
    name: "Skill",
    embedded: false
  },
  {
    name: "Trade",
    embedded: false
  },
  {
    name: "Rating",
    embedded: false
  },
  {
    name: "Offer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/victor-cosenza-b8ed0c/graphql-backend/dev`
});
exports.prisma = new exports.Prisma();
