export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare = (leftIndex: number, rightIndex: number): boolean =>
    this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0
      ? true
      : false;

  swap = (leftIndex: number, rightIndex: number): void => {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  };
}
