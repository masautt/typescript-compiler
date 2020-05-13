# Assignment 3 - Code Generator

### Note

Due to the circumstances of COVID-19 and finals week, this code generator will only be satisfying the [Simple Input for Assignment File](https://moodle-2019-2020.fullerton.edu/pluginfile.php/3854477/mod_resource/content/1/TestCaseAssignment.txt) on Titanium.

We were hoping to accomplish more with this code generator but our inability to meet physically has hindered our progress.

## 1. Problem Statement

The goal for this TypeScript Code Generator is to print the following output based on the input : 

#### simpleAssignment.txt
```
! Find the sum between two numbers!
int num;
int num2;
int sum;

num = 0;
num2 = 15;
sum = 0;
sum = num + num2;
```

#### output (Terminal)

```
1 	 PUSHI 	 0
2 	 POPM 	 2000
3 	 PUSHI 	 15
4 	 POPM 	 2001
5 	 PUSHI 	 0
6 	 POPM 	 2002
7 	 PUSHM 	 2000
8 	 PUSHM 	 2001
9 	 ADD 	 
10 	 POPM 	 2002

Symbol Table
Identifier	MemoryLocation	Type
num 		 2000 		 integer
nu2m 		 2001 		 integer
sum 		 2002 		 integer
```

The rest of the problem statement is recap from `as1` :

The possible token classes are `identifiers`, `keywords`, `operators`, `separators`, and `realnums`.

|Token|Description|Example|
|-|-|-|
|`identifier`|A string that starts with a letter and can be followed by an alphanumeric character or a dollar sign ($)|`myId123$`|
|`keywords`|`int float bool true false if else thenendif while whileend do doend for forend input output and or not`|`int`|
|`operators`|`*` `+` `-` `=` `/` `>` `<` `%`|`/`|
|`separators`|`'` `(` `)` `{` `}` `[` `]` `.` `:` `;` ` `|`;`|
|`realnums`|Doubles or integers|`20.98`|
 
 
 The Lexer will not consider any comments encapsulated by an exclamation mark (`!`). If the Lexer fails to find a token class for a given input substring it will print an error message to the console and identify the missing token class as `unknown`.

## 2. Getting Started

**NOTE**: You can skip the installation process by running the codegen in a browser at [this repl.it link](https://repl.it/@msautter/typescript-compiler-as3).

### Requirements

#### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript Engine. It allows JavaScript to run outside of the browser.

| OS      | Link                                                   |
| ------- | ------------------------------------------------------ |
| Windows | https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi |
| MacOS   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.pkg     |
| Linux   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.tar.gz  |

#### TypeScript

TypeScript is a superset of JavaScript created by Microsoft. It adds static types and traditional object oriented programming fundamentals to JavaScript.

All code is written in TypeScript in the `src` folder and then transpiled to JavaScript in the `lib` folder using the `tsc` (TypeScript compiler) command.

TypeScript can be installed using [NPM](https://www.npmjs.com/), the Node Package Manager. NPM is installed by default with every Node.js installation.

TypeScript is included as a dev dependency in each assignment's `package.json`. When you run `npm install` in a folder with a `package.json` file it will install all packages listed in that file.

To run the TypeScript Transpiler, you must have TypeScript installed globally on your machine with :

```bash
npm install -g typescript
```

**Note**: make sure you have Node.js and npm installed at this point for the above command to work

### Cloning the Repo

```bash
git clone https://github.com/masautt/typescript-compiler
cd typescript-compiler
```

### Running the Code Generator

```bash
cd as3
npm install
npm start
```

1. `cd as3` will navigate you to the folder for assignment 1

2. `npm install` will add the following packages to your `/node_modules/` folder.

```json
  "devDependencies": {
    "@types/chalk": "^2.2.0",
    "@types/inquirer": "^6.5.0",
    "@types/node": "^13.9.2",
    "@types/table": "^4.0.7",
    "typescript": "^3.8.3"
  },
  "dependencies": {
    "chalk": "^3.0.0",
    "inquirer": "^7.1.0",
    "table": "^5.4.6"
  }
```

3. `npm start` will run the TypeScript compiler with `tsc` which will transpile all the TypeScript files in `/src/` to JavaScript files in `/lib/`. Then, it will start the node application by running `node ./lib/index.js`

## 3. Code Generator Design

### Data Structures

For the code generator we needed to make use of a stack. JavaScript does not come with a default stack so we had to implement our own.

The following file can be found in `./as3/src/stack.ts`

```typescript
export class Stack {
   // Every stack needs data and a number to identify the num of elements
    data: any[];
    top: number;

    // Constructor can take data as an argument and add it to the stack
    // Or it can initialize a new stack without any arguments
    constructor(data?: any[]){
        this.data = data ? data : [];
        this.top = data ? data.length : 0;
   }

    // Push will add a new element to the end of the stack
    push(element : any) {
      this.data[this.top] = element;
      this.top = this.top + 1;
   }
   
   // Length returns the length of the stack
   length() {
      return this.top;
   }

   // Peek will return the last element of the stack
   peek() {
      return this.data[this.top-1];
   }

   // isEmpty checks if the stack is empty
   isEmpty() {
     return this.top === 0;
   }

   // Pop will return the end of the stack and remove it
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop();
     }
   }

   // Print loops through the stack and console.logs everything
   print() {
      var top = this.top - 1;
      while(top >= 0) {
          console.log(this.data[top]);
           top--;
       }
    }
}
```

### Algorithms

#### getIdentifiers ( tokens : Token []) => identifiers : Identifer []

##### Input

`tokens` is an array of type `Token` defined by `lexer.ts`

##### Output

`identifiers` is an array of type `Identifier` defined by  `codegen.ts`

##### Purpose

Produces an array of identifiers based on the tokens generated from the lexer. Each identifier contains a value, a type, and an address.

```typescript
const getIdentifiers = (tokens : Token[]) : Identifier[] => {
    const identifiers : Identifier[] = []
    tokens.forEach((token : Token, i : number) => {
        if (token.type == "identifier") {
            if (IdentifierTypes.includes(tokens[i-1].value)) {
                identifiers.push({
                    value : token.value,
                    type : tokens[i-1].value,
                    address : STARTING_IDENTIFIER_ADDR++
                })
            }
        }
    })
    return identifiers;
}
```

Later we print the identifiers with the following loop :
```typescript
    console.log("Symbol Table")
    console.log("Identifier\tMemoryLocation\t\tType");
    identifiers.forEach((i : Identifier) => console.log(`${i.value}\t\t${i.address}\t\t\t${i.type}`))
```
##### Output
```
Symbol Table
Identifier      MemoryLocation          Type
num             2000                    int
num2            2001                    int
sum             2002                    int
```

##### Steps

| #   | Code                                                     | Explanation                                                                                                 |
| --- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1   | `    const identifiers : Identifier[] = []`                      | Generate a new array of identifiers to be returned at the end of the function execution                                                                            |
| 2   | `tokens.forEach((token : Token, i : number) => {`              | Loop through each token that in the Tokens array that's passed in. Also use `i` as an index.                                                                                     |
| 3   | `if (token.type == "identifier") {`   | If the token is an identifier...
| 4   | ` if (IdentifierTypes.includes(tokens[i-1].value)) {`| If the identifier is initialized with `int`, `bool`, or `float`...
| 5   | `identifiers.push({value : token.value, type : tokens[i-1].value, address : STARTING_IDENTIFIER_ADDR++})` | Add a new identifier to the identifier array with the value and type from the token info. Use the global variable `STARTING_IDENTIFIER_ADDR` as an incremental memory address|
|6|`    return identifiers;`| Return the new array of identifiers|

`isRule` is called once for every rule in a `forEach` rule.

```typescript
rules.forEach((rule: Rule) => {
    if (isRule(restOfTokens, rule)) {
        console.log(`\t${rule.type}`);
        foundRule = true;
    }
})
```
##### Helper Functions

```typescript
//Responsible for printing the assembly instruction
    const printASM = (opNum : number, instruction : string, address? : number | string) => 
        console.log(`${opNum}\t${instruction}\t${address?address:""}`);
    
//Grabs the identifier address from the identifier array
    const getIdAddr = (i : number) => 
        identifiers.find((identifier : Identifier) => identifier.value === tokens[i].value)?.address
```

#### Limitations

Besides limiting our application to only analyze `sampleAssignment.txt` we also had to simplify the file for our lexer to work properly on it. 

We made the mistake of not considering multiple variables being initialized on the same line and we didn't have the time to implement this.

Thus we changed `sampleAssignment.txt` from this :

```
! Find the sum between two numbers!
int num, nu2m, sum;
num = 0;
nu2m = 15;
sum = 0;
sum = num + nu2m;

```

to this :

```
! Find the sum between two numbers!
int num;
int num2;
int sum;

num = 0;
num2 = 15;
sum = 0;
sum = num + num2;
```


#### Shortcomings

As we mentioned previously, the major shortcoming with this code generator is the fact we only could get it to work with `sampleAssignment.txt`.
