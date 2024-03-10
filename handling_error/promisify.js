import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

readFilePromise('./data.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));