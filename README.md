# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hjonsu/lotide`

**Require it:**

`const _ = require('@hjonsu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: checks to see if two primitive values are strictly equal

* `eqArrays(arr1, arr2)`: returns true if arr1 is equal to arr2, otherwise returns false

* `assertArraysEqual(arr1, arr2)`: checks to see if two arr are equal

* `middle(arr)`: returns the middle index of an arr after it has been sorted, middle index's value for odd lengthed arr, middle two index's value for even lengthed arr

* `head(arr)`: returns the head, or first index value, of the arr

* `tail(arr)`: returns the tail, or last index value, of the arr
head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  eqArrays,