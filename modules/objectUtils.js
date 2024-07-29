// modules/objectUtils.js

function deepCloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function mergeObjects(...objs) {
  return Object.assign({}, ...objs);
}

module.exports = { deepCloneObject, mergeObjects };
