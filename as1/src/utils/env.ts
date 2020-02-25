//Name of File : env.ts
//Purpose      : Houses environment variablesd
//Summary      : For now this file just has the file size limit

//LIMITS

export const IDENTIFIER_LIMIT = 20; //String Length
export const REALNUM_LIMIT = 10000; //Number limit
export const FILE_SIZE_LIMIT = 5000; //In bytes
export const FILE_SIZE_LIMIT_MSG = `./input.txt is too large. File limit size is ${FILE_SIZE_LIMIT /
    1000} KB. 'You can change the FILE_SIZE_LIMIT in ./utils/env'`;

//ENV VARIABLES

export const FILE_NAME = './input.txt';