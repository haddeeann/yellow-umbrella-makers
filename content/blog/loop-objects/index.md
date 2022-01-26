---
title: Looping Through Objects
data: '2022-01-25'
---

This is some short cut notes for how to loop through objects in JavaScript. 

Looping through objects.
1. Easiest way to turn an object into an array 

    const object1 = {
    a: 'somestring',
    b: 42
    };
    
console.log(Object.entries(object1));

1. Loop through using entries

    const object1 = {
    a: 'somestring',
    b: 42
    };

    for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
    }

    // expected output:
    // "a: somestring"
    // "b: 42"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

The order of the array returned by Object.entries() is the same as that provided by a for...in loop. If there is a need for different ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

2. The for ... in loop

    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
    console.log(`${property}: ${object[property]}`);
    }

    // expected output:
    // "a: 1"
    // "b: 2"
    // "c: 3"

The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

3. Getting the keys ouf of an object

    const object1 = {
    a: 'somestring',
    b: 42,
    c: false
    };

    console.log(Object.keys(object1));
    // expected output: Array ["a", "b", "c"]

The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.