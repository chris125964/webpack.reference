export interface MemContent {
  nr: number;
  index: number;
  indexx: number;
}

/**
 * Inhalt der Memory-Tile
 *
 * @export
 * @class Content
 */
export class Content {
  private size: number;
  private singleContent: MemContent[];

  constructor(size: number) {
    this.size = size;
    this.singleContent = new Array<MemContent>();
  }

  /**
   * wählt aus einem Feld von Zahlen zwischen 0 und _arraySize_ _x_ verschiedene
   * Zahlen aus, verdoppelt diese und mischt sie danach.
   * Dies ist die Basis für ein Memory.\
   * \
   * __Beispiele__:
   * - createXFromY(2, 5) liefert z.B. [ 0, 4, 4, 0]\
   * - createXFromY(3, 10) liefert z.B. [ 1, 7, 2, 7, 1, 2]
   *
   * @param {number} x Anzahl von Zahlen, die zufällig ausgewählt werden sollen
   * @param {number} arraySize Größe des Felds, aus dem die zufälligen Zahlen ausgewählt werden sollen
   * @returns Feld mit 2 * _x_ Elementen des Datentyps _MemContent_
   * @memberof Content
   */
  createXFromY = (x: number): MemContent[] => {
    if (x > this.size) {
      throw `x (${x}) must not be greater than this.size (${this.size})`;
    }
    let initialArray = new Array<MemContent>();
    let pairArray = new Array<MemContent>();
    for (let loop = 0; loop < this.size; loop += 1) {
      initialArray.push({ nr: loop, index: 0, indexx: 0 });
    }
    let subsetArray = this.shuffleArray(initialArray);
    for (let loop = 0; loop < x; loop += 1) {
      pairArray.push({ nr: subsetArray[loop].nr, index: 1, indexx: loop });
      pairArray.push({ nr: subsetArray[loop].nr, index: 2, indexx: loop });
    }
    let subsetPairArray = this.shuffleArray(pairArray);
    return subsetPairArray;
  };

  createTileContent = () => {
    //
    this.singleContent = this.createXFromY(15);
  };

  /** "mischt" ein Array mit Zahlen durch. Der Algorithmus ist geklaut:
   *  (shuffle algorithm: https://bost.ocks.org/mike/shuffle)
   *  Als Ergebnis erhält man ein Array, welches die gleichen Zahlen wie das Eingabe-Array enthält, allerdings
   * in einer zufälligen Reihenfolge
   *
   * @param {number[]} array Array mit den Zahlen, die durchgemischt werden sollen
   * @returns Array mit den gleichen Zahlen wie das Eingabe-Array, allerdings in einer zufälligen Reihenfolge
   */
  shuffleArray = (array: MemContent[]) => {
    const cloneArray = array.slice();
    let m = cloneArray.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = cloneArray[m];
      cloneArray[m] = cloneArray[i];
      cloneArray[i] = t;
    }

    return cloneArray;
  };

  showContent = () => {
    for (let loop = 0; loop < this.singleContent.length; loop += 1) {
      console.log(`${loop}: ${JSON.stringify(this.singleContent[loop], null)}`);
    }
  };

  getTile = (index: number) => {
    return this.singleContent[index];
  };
}
