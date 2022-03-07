import JSONBig from "json-bigint";

// const { stringify, parse } = JSONBig({ useNativeBigInt: true });
const { stringify, parse } = JSONBig();

console.log(parse('{"foo":"bar"}'))
console.log(stringify({ foo: "omg" }))
