//Name of File : index.ts
//Purpose      : Starting file for this typescript project
//Summary      : Houses startLexer function that takes the path to a txt file, checks if it's not too large, then runs tokenize( )

import { FILE_SIZE_LIMIT, FILE_NAME } from './utils/env';
import { readFile, stat, Stats } from 'fs';
import { tokenize } from './utils/lexer/_exports';
import { printFileErrors } from "./utils/lexer/output";


// Check the file size, if it's less than the limit, then run the Lexer with tokenize( )
const startLexer = (path: string) =>
    stat(path, (err: any, stats: Stats) =>
        err
            ? console.log(err)
            : stats.size >= FILE_SIZE_LIMIT
                ? printFileErrors()
                : readFile(path, 'utf8', (err: any, input: string) =>
                    err ? console.log(err) : tokenize(input)
                )
    );


startLexer(FILE_NAME);
