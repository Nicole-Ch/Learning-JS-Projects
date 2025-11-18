//ES6 modules
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);
