// modules/arrayUtils.js

function chunkArray(array, chunkSize) {
  if (chunkSize <= 0) return [];
  let chunked = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunked.push(array.slice(i, i + chunkSize));
  }
  return chunked;
}

function findUniqueElements(array) {
  return Array.from(new Set(array));
}

module.exports = { chunkArray, findUniqueElements };
