import { FileAttributesFlags } from "./FileAttributesFlags";
import { LinkFlags } from "./LinkFlags";

export class ShellLinkHeader {
  HeaderSize = 76;
  LinkCLSID = new Uint8Array([
    0x00, 0x02, 0x14, 0x01, 0x00, 0x00, 0x00, 0x00, 0xc0, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x46,
  ]);
  LinkFlags: LinkFlags = new LinkFlags();
  FileAttributes: FileAttributesFlags = new FileAttributesFlags();
  CreationTime: bigint = BigInt("0");
  AccessTime: bigint = BigInt("0");
  WriteTime: bigint = BigInt("0");
  FileSize: number = 0;
  IconIndex: number = 0;
  ShowCommand: number = 0;
  HotKey: number = 0;
  Reserved1 = new Uint8Array([0, 0]);
  Reserved2 = new Uint8Array([0, 0, 0, 0]);
  Reserved3 = new Uint8Array([0, 0, 0, 0]);
  constructor(file?: ArrayBuffer) {
    if (file) {
      this.parse(file);
    }
  }
  parse(buf: ArrayBuffer) {
    var data = new DataView(buf);
    this.HeaderSize = data.getUint32(0, true);
    this.LinkCLSID = new Uint8Array(buf.slice(4, 20));
    this.LinkFlags = new LinkFlags(data.getUint32(20, true));
    this.FileAttributes = new FileAttributesFlags(data.getUint32(24, true));
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
  }
}
