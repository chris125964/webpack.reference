export class Tile {
  _value: number;
  _index: number;

  constructor() {
    this._index = -1;
    this._value = -1;
  }

  public get index() {
    return this._index;
  }
  public set index(index: number) {
    this._index = index;
  }
  public get value() {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
}
