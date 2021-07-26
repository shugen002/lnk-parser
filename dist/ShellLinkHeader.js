"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellLinkHeader = void 0;
var FileAttributesFlags_1 = require("./FileAttributesFlags");
var LinkFlags_1 = require("./LinkFlags");
var ShellLinkHeader = /** @class */ (function () {
    function ShellLinkHeader(file) {
        this.HeaderSize = 76;
        this.LinkCLSID = new Uint8Array([
            0x00, 0x02, 0x14, 0x01, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x46,
        ]);
        this.LinkFlags = new LinkFlags_1.LinkFlags();
        this.FileAttributes = new FileAttributesFlags_1.FileAttributesFlags();
        this.CreationTime = BigInt("0");
        this.AccessTime = BigInt("0");
        this.WriteTime = BigInt("0");
        this.FileSize = 0;
        this.IconIndex = 0;
        this.ShowCommand = 0;
        this.HotKey = 0;
        this.Reserved1 = new Uint8Array([0, 0]);
        this.Reserved2 = new Uint8Array([0, 0, 0, 0]);
        this.Reserved3 = new Uint8Array([0, 0, 0, 0]);
        if (file) {
            this.parse(file);
        }
    }
    ShellLinkHeader.prototype.parse = function (buf) {
        var data = new DataView(buf);
        this.HeaderSize = data.getUint32(0, true);
        this.LinkCLSID = new Uint8Array(buf.slice(4, 20));
        this.LinkFlags = new LinkFlags_1.LinkFlags(data.getUint32(20, true));
        this.FileAttributes = new FileAttributesFlags_1.FileAttributesFlags(data.getUint32(24, true));
        this.CreationTime = data.getBigUint64(28, true);
        this.AccessTime = data.getBigUint64(36, true);
        this.WriteTime = data.getBigUint64(44, true);
        this.FileSize = data.getUint32(52, true);
        this.IconIndex = data.getUint32(56, true);
        this.ShowCommand = data.getUint32(60, true);
        this.HotKey = data.getUint16(64, true);
        this.Reserved1 = new Uint8Array(buf.slice(66, 68));
        this.Reserved2 = new Uint8Array(buf.slice(68, 72));
        this.Reserved3 = new Uint8Array(buf.slice(72, 76));
    };
    return ShellLinkHeader;
}());
exports.ShellLinkHeader = ShellLinkHeader;
//# sourceMappingURL=ShellLinkHeader.js.map