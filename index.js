// index.js

const { chunkArray, findUniqueElements } = require('./modules/arrayUtils.js');
const { deepCloneObject, mergeObjects } = require('./modules/objectUtils.js');

// Problem 1: Chunking an Array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(array1, 2);
console.log('Chunked Array:', chunkedArray); // [[1, 2], [3, 4], [5, 6], [7, 8]]

// Problem 2: Finding Unique Elements
const array2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = findUniqueElements(array2);
console.log('Unique Array:', uniqueArray); // [1, 2, 3, 4, 5]

// Problem 3: Deep Cloning an Object
const object1 = { a: 1, b: { c: 2 } };
const deepClonedObject = deepCloneObject(object1);
console.log('Deep Cloned Object:', deepClonedObject); // { a: 1, b: { c: 2 } }

// Problem 4: Merging Objects
const object2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log('Merged Object:', mergedObject); // { a: 1, b: 3, c: 4 }
