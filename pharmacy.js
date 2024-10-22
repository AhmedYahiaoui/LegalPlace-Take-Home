import { DrugTypes } from './drugTypes.js';

class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      switch (drug.name) {
        case DrugTypes.HERBAL_TEA:
          this._updateHerbalTea(drug);
          break;
        case DrugTypes.FERVEX:
          this._updateFervex(drug);
          break;
        case DrugTypes.MAGIC_PILL:
          break;
        case DrugTypes.DAFALGAN:
          this._updateDafalgan(drug);
          break;
        default:
          this._updateStandardDrug(drug);
          break;
      }
    });
    return this.drugs;
  }

  _updateHerbalTea(drug) {
  if (drug.benefit < 50) {
    drug.benefit++;
  }
  drug.expiresIn--;
  if (drug.expiresIn < 0 && drug.benefit < 50) {
    drug.benefit++;
  }
  }

  _updateFervex(drug) {
    if (drug.benefit < 50) {
      drug.benefit++;
      if (drug.expiresIn <= 10 && drug.benefit < 50) {
        drug.benefit++;
      }
      if (drug.expiresIn <= 5 && drug.benefit < 50) {
        drug.benefit++;
      }
    }
    drug.expiresIn--;
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    }
  }

  _updateDafalgan(drug) {
    drug.benefit = Math.max(0, drug.benefit - 2);
    drug.expiresIn--;
    if (drug.expiresIn < 0) {
      drug.benefit = Math.max(0, drug.benefit - 2);
    }
  }

  _updateStandardDrug(drug) {
    if (drug.benefit > 0) {
      drug.benefit--;
    }
    drug.expiresIn--;
    if (drug.expiresIn < 0 && drug.benefit > 0) {
      drug.benefit--;
    }
  }

}

module.exports = { Drug, Pharmacy };
