export interface MemContent {
  nr: number;
  index: number;
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

  createTileContent = () => {
    //
    let arr = new Array<MemContent>();
    for (let loop = 0; loop < this.size; loop += 1) {
      arr.push({ nr: loop, index: 1 });
      arr.push({ nr: loop, index: 2 });
    }
    this.singleContent = this.shuffleArray(arr);
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
