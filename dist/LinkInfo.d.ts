import { CommonNetworkRelativeLink } from "./CommonNetworkRelativeLink";
import { VolumeID } from "./VolumeID";
export declare class LinkInfo {
    LinkInfoSize: number;
    LinkInfoHeaderSize: number;
    LinkInfoFlags: number;
    VolumeIDOffset: number;
    LocalBasePathOffset: number;
    CommonNetworkRelativeLinkOffset: number;
    CommonPathSuffixOffset: number;
    LocalBasePathOffsetUnicode?: number;
    CommonPathSuffixOffsetUnicode?: number;
    VolumeID?: VolumeID;
    LocalBasePath?: string;
    CommonNetworkRelativeLink?: CommonNetworkRelativeLink;
    CommonPathSuffix: string;
    LocalBasePathUnicode?: string;
    CommonPathSuffixUnicode?: string;
    constructor(file?: ArrayBuffer);
    parse(buf: ArrayBuffer): void;
}
