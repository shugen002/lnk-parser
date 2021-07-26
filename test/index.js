var fs = require("fs");
var { LNKFile } = require("../dist");

var file = fs.readFileSync("test/emoji.lnk");
var lnk = new LNKFile(
  file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength)
);

var a = BigInt(1);
a.__proto__.toJSON = function () {
  return this.toString();
};
var b = new Uint8Array(1);
b.__proto__.toJSON = function () {
  return Array.from(this);
};

console.log(lnk);
console.log(JSON.stringify(lnk, null, 1));
