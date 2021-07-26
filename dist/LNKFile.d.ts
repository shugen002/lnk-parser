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
export declare class LNKFile {
    ShellLinkHeader: ShellLinkHeader;
    LinkTargetIDList: LinkTargetIDList;
    StringData?: StringData;
    LinkInfo: LinkInfo;
    constructor(file?: ArrayBuffer);
    parse(file: ArrayBuffer): void;
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
