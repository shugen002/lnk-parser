export class LinkTargetIDList {
  IDList: Array<ItemID> = [];
  IDListSize: number = 2;
  TerminalID: number = 0;
  constructor(file?: ArrayBuffer) {
    if (file) {
      this.parse(file);
    }
  }
  parse(buf: ArrayBuffer) {
    var view = new DataView(buf);
    this.IDListSize = view.getUint16(0, true);
    var offset = 2;

    let ItemIDSize;
    while ((ItemIDSize = view.getUint16(offset, true)) > 0) {
      let ItemID = {
        ItemIDSize,
        Data: new Uint8Array(buf, offset + 2, ItemIDSize - 2),
      };
      this.IDList.push(ItemID);
      offset += ItemIDSize;
    }
    this.TerminalID = ItemIDSize;
  }
}

export interface ItemID {
  ItemIDSize: number;
  Data: Uint8Array;
}
