/**
 * Type Signature -------------------------------------------------------
 * book https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch10.html#in-summary
 * git https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch01.md
 */

// [String]
const arr = ['a', 'b', 'c', 'd'];

// Number -> Number
function f(x) {
  return x * x + 1;
}

// Number -> Number
function g(x) {
  return x % 2 == 0;
}

// (String, String, String) -> String
function replace(str, needle, newStr) {
  return str.replace(needle, newStr);
}

// Number -> Number -> Number
function power(x) {
  return function(y) {
    return Math.pow(y, x);
  };
}

// Void -> Void or () -> ()
function hi() {
  console.log('hi');
}

// Note:: from medium https://hackernoon.com/function-type-signatures-in-javascript-5c698c1e9801
//1. The function name is written first followed by `::`.
//2. The input type of the function is written before the arrow.
//3. The return type of the function is written after the arrow or at last.

// length :: String → Number
const length = s => s.length;

/**
 * Type parameters / placeholder ---------------------------------------
 * - Use letter to denote non-specific type
 * - Remains static within type signature
 *    - Type 'a' must be the same for all 'a' within context
 * ก็คือเอาตัวอักษรอะไรก็ได้มาแทน Types ที่รับเข้ามาและใช้ตัวอักษรตัวเดียวกัน
 * Types ที่ return กลับออกไปสื่อความหมายว่า รับ Types อะไรเข้ามาก็ได้แต่จะคืนค่ากลับ
 * ไปเป็น Types ที่รับเข้ามา
 */

// a -> Void or  a -> ()
function logX(x) {
  console.log(x);
}

// a -> a
/** เพราะ a อาจจะเป็น Types อะไรก็ได้ แต่จะคืนค่ากลับเป็น Types เดียวกับที่รับเข้ามา */
function foo(x) {
  return x;
}

// [a] -> a
function head(arr) {
  return arr[0];
}

// (a -> b, [a]) -> [b]
/** เพราะ transform เปลี่ยนจาก Type a เป็น b ค่าที่คืนกลับออกมาจึงเป็น array ของ b*/
function map(transform, arr) {
  return arr.map(transform);
}

// Note: curry support https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/appendix_a.md
// Note: currying https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch04.md

// (a -> Boolean, [a]) -> [a] // function ข้างใน R.curry คือ function filter ปกติ
// predicate = (a -> Boolean), arr = [a], return = [a]
// (a -> Boolean) -> [a] -> [a]
let filterCurried = R.curry(function(predicate, arr) {
  return arr.filter(predicate);
});

/** What can you tell from the function signatures? */

/**
 * 1. find:: [a] -> a
 * 2. flatMap:: [a] -> (a -> [b]) -> [b]
 * 3. isDefinedAt:: (a -> b) -> a -> Boolean
 * 4. fold:: [a] -> b -> ((b,a) - b) -> b
 * 5. sliding:: Int -> [a] -> [[a]]
 * 6. zip:: [a] -> [b] -> [[a, b]] // [a, b, c] -> [1, 2, 3] -> [[a,1], [b,2], [c,3]]
 * 7. groupBy:: (a -> String) -> [a] -> {String: [a]}
 */
