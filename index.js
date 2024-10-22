import { Drug, Pharmacy } from "./pharmacy.js";
import { DrugTypes } from './drugTypes.js';
import fs from "fs";

// Using the enum, will reduce and avoid the typing issues in case of adding a new drugs
const drugs = [
  new Drug(DrugTypes.DOLIPRANE, 20, 30),
  new Drug(DrugTypes.HERBAL_TEA, 10, 5),
  new Drug(DrugTypes.FERVEX, 12, 35),
  new Drug(DrugTypes.MAGIC_PILL, 15, 40),
  new Drug(DrugTypes.DAFALGAN, 8, 20),
];

const pharmacy = new Pharmacy(drugs);
const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

// Write the simulation results to output.json file
fs.writeFile(
  "outputResult.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);
