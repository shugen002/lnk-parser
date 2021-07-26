import { LinkInfo } from "./LinkInfo";
import { LinkTargetIDList } from "./LinkTargetIDList";
import { ShellLinkHeader } from "./ShellLinkHeader";

/**
 * [MS-SHLLINK]: Shell Link (.LNK) Binary File Format
 *
 * Specifies the Shell Link Binary File Format, which contains information that can be used to access another data object. The Shell Link Binary File Format is the format of Windows files with the extension "LNK".
 *
 * The Shell Link Binary File Format consists of a sequence of structures that conform to the following ABNF rules RFC5234
 *
 * SHELL_LINK = SHELL_LINK_HEADER [LINKTARGET_IDLIST] [LINKINFO] [STRING_DATA] *EXTRA_DATA
 *
 * @links MS-SHLLINK https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-shllink/16cb4ca1-9339-4d0c-a68d-bf1d6cc0f943
 * @links ABNF https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-shllink/ac7b5968-68f5-4e5c-8b11-00a6f4ae98ff#gt_24ddbbb4-b79e-4419-96ec-0fdd229c9ebf
 * @link RFC5234 https://www.rfc-editor.org/rfc/rfc5234.txt
 */

export class LNKFile {
  ShellLinkHeader = new ShellLinkHeader();
  LinkTargetIDList = new LinkTargetIDList();
  StringData?: StringData;
  LinkInfo: LinkInfo = new LinkInfo();
  constructor(file?: ArrayBuffer) {
    if (file) {
      this.parse(file);
    }
  }
  parse(file: ArrayBuffer) {
    let pointer = 0;
    var data = new DataView(file);
    var headerSize = data.getUint32(0, true);
    this.ShellLinkHeader = new ShellLinkHeader(
      data.buffer.slice(0, headerSize)
    );
    pointer += headerSize;
    if (this.ShellLinkHeader.LinkFlags.HasLinkTargetIDList) {
      var IDListSize = data.getUint16(pointer, true);
      this.LinkTargetIDList = new LinkTargetIDList(
        data.buffer.slice(pointer, pointer + IDListSize + 2)
      );
      pointer += IDListSize + 2;
    }

    if (this.ShellLinkHeader.LinkFlags.HasLinkInfo) {
      var InfoSize = data.getUint32(pointer, true);
      this.LinkInfo = new LinkInfo(
        data.buffer.slice(pointer, pointer + InfoSize)
      );
      pointer += InfoSize;
    }

    if (!this.ShellLinkHeader.LinkFlags.IsUnicode) {
      console.warn("Not Unicode File , stop decode.");
      return;
    }
    var decoder = new TextDecoder("utf-16le");
    this.StringData = {};
    if (this.ShellLinkHeader.LinkFlags.HasName) {
      let countCharacters = data.getUint16(pointer, true);
      let len = countCharacters * 2;
      this.StringData.NAME_STRING = {
        countCharacters,
        string: decoder.decode(
          data.buffer.slice(pointer + 2, pointer + 2 + len)
        ),
      };
      pointer += len + 2;
    }
    if (this.ShellLinkHeader.LinkFlags.HasRelativePath) {
      let countCharacters = data.getUint16(pointer, true);
      let len = countCharacters * 2;
      this.StringData.RELATIVE_PATH = {
        countCharacters,
        string: decoder.decode(
          data.buffer.slice(pointer + 2, pointer + 2 + len)
        ),
      };
      pointer += len + 2;
    }
    if (this.ShellLinkHeader.LinkFlags.HasWorkingDir) {
      let countCharacters = data.getUint16(pointer, true);
      let len = countCharacters * 2;
      this.StringData.WORKING_DIR = {
        countCharacters,
        string: decoder.decode(
          data.buffer.slice(pointer + 2, pointer + 2 + len)
        ),
      };
      pointer += len + 2;
    }
    if (this.ShellLinkHeader.LinkFlags.HasArguments) {
      var countCharacters = data.getUint16(pointer, true);
      let len = countCharacters * 2;
      this.StringData.COMAND_LINE_ARGUMENTS = {
        countCharacters,
        string: decoder.decode(
          data.buffer.slice(pointer + 2, pointer + 2 + len)
        ),
      };
      pointer += len + 2;
    }
    if (this.ShellLinkHeader.LinkFlags.HasIconLocation) {
      let countCharacters = data.getUint16(pointer, true);
      let len = countCharacters * 2;
      this.StringData.ICON_LOCATION = {
        countCharacters,
        string: decoder.decode(
          data.buffer.slice(pointer + 2, pointer + 2 + len)
        ),
      };
      pointer += len + 2;
    }
  }
}

export interface StringData {
  NAME_STRING?: StringStruct;
  RELATIVE_PATH?: StringStruct;
  WORKING_DIR?: StringStruct;
  COMAND_LINE_ARGUMENTS?: StringStruct;
  ICON_LOCATION?: StringStruct;
}
export interface StringStruct {
  countCharacters: number;
  string: string;
}
