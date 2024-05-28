// Imports from dependent package; require .d.ts to be built
import foo from "b/a";
import bar from "b/c";
// Absolute import from the same package. Appears to work as expected in VSCode.
import myLocalFunction from "a/b";
import { myPrivateFunction, myPrivateFunction2 } from "#a/c";
// Absolute import of a private module. Doesn't typecheck
// import myPrivateFunction from "a/c";
// Relative import of a private module. Works
// import myPrivateFunction from "./c";
// import { myPrivateFunction } from "#a/c";

foo();
bar();

const x: number = myLocalFunction();

myPrivateFunction();
const y: number = myPrivateFunction2();

console.log(myPrivateFunction());
