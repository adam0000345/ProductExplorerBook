
import config from '../config.json';
export default class Utils {

  static dedupe(items) {
    let unique = {};
    items.forEach(function (i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  static guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 & 0x8);
      return v.toString(16);
    });
  }

  static removeFromArray(array, value) {
    const index = array.indexOf(value);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  }


  static isEmpty(value) {

    if (value === undefined) return true;
    if (value === null) return true;
    if (value === "") return true;
    if (value === []) return true;
    if (value === {}) return true;
    if (/^\s*$/.test(value)) return true;
    return false;
  }

  static sortFieldArray(array, field) {
    array = array.sort(function (x, y) {
      let model = config.sorting[field];
      let key = 0;
      if (Utils.isEmpty(model)) return  0;
      let indexX = model.indexOf(x);
      let indexY = model.indexOf(y);
      if (indexX === -1 || indexY === -1 ) return 0;
      if (indexX < indexY) key =  1;
      if (indexX < indexY) key =  -1;
      return key;
    });
    //console.log(array);
    return array;
  }

  static sortObjectByKey(object, key) {

    return object;
  }


  static stringToIndex(str, length) {

    let hash = this.hash(str);
    return Math.abs(parseInt(hash) % length + 1)
  }

  static hash(val) {
    var hash = 0, i, chr;
    if (val.length === 0) return hash;
    for (i = 0; i < val.length; i++) {
      chr = val.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }


  static lowerCase(str) {
    str = str.toLowerCase();
    let caps = config.caps;
    for (let i in config.caps) str = str.replace(i,caps[i]);
    return str;
  }


  static getLabelColor(labelValue) {
    let colorMap = config.colors;
    if (colorMap[labelValue] === undefined) {
      let bank = config.colorBank;
      let i = Utils.stringToIndex(labelValue + bank.join(""), bank.length)
      return bank[i];
    }
    return colorMap[labelValue];

  }

}