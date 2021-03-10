import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('adrianxyz');
const sorter = new Sorter(numbersCollection);
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);
