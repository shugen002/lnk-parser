import { FileAttributesFlags } from "./FileAttributesFlags";
import { LinkFlags } from "./LinkFlags";
export declare class ShellLinkHeader {
    HeaderSize: number;
    LinkCLSID: Uint8Array;
    LinkFlags: LinkFlags;
    FileAttributes: FileAttributesFlags;
    CreationTime: bigint;
    AccessTime: bigint;
    WriteTime: bigint;
    FileSize: number;
    IconIndex: number;
    ShowCommand: number;
    HotKey: number;
    Reserved1: Uint8Array;
    Reserved2: Uint8Array;
    Reserved3: Uint8Array;
    constructor(file?: ArrayBuffer);
    parse(buf: ArrayBuffer): void;
}
