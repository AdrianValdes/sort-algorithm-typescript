import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const sorterNums = new Sorter(numbersCollection);
const sorterChars = new Sorter(charactersCollection);
sorterChars.sort();
sorterNums.sort();
console.log(charactersCollection.data);
