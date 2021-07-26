import { CommonNetworkRelativeLink } from "./CommonNetworkRelativeLink";
import { VolumeID } from "./VolumeID";

export class LinkInfo {
  LinkInfoSize: number = 0;
  LinkInfoHeaderSize: number = 0;
  LinkInfoFlags: number = 0;
  VolumeIDOffset: number = 0;
  LocalBasePathOffset: number = 0;
  CommonNetworkRelativeLinkOffset: number = 0;
  CommonPathSuffixOffset: number = 0;
  LocalBasePathOffsetUnicode?: number;
  CommonPathSuffixOffsetUnicode?: number;

  VolumeID?: VolumeID;
  LocalBasePath?: string;
  CommonNetworkRelativeLink?: CommonNetworkRelativeLink;
  CommonPathSuffix: string = "";
  LocalBasePathUnicode?: string;
  CommonPathSuffixUnicode?: string;

  constructor(file?: ArrayBuffer) {
    if (file) {
      this.parse(file);
    }
  }
  parse(buf: ArrayBuffer) {
    const view = new DataView(buf);
    this.LinkInfoSize = view.getUint32(0, true);
    this.LinkInfoHeaderSize = view.getUint32(4, true);
    this.LinkInfoFlags = view.getUint32(8, true);
    this.VolumeIDOffset = view.getUint32(12, true);
    this.LocalBasePathOffset = view.getUint32(16, true);
    this.CommonNetworkRelativeLinkOffset = view.getUint32(20, true);
    this.CommonPathSuffixOffset = view.getUint32(24, true);
  }
}
