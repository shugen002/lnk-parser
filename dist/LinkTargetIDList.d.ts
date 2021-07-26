export declare class LinkTargetIDList {
    IDList: Array<ItemID>;
    IDListSize: number;
    TerminalID: number;
    constructor(file?: ArrayBuffer);
    parse(buf: ArrayBuffer): void;
}
export interface ItemID {
    ItemIDSize: number;
    Data: Uint8Array;
}
