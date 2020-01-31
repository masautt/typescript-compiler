# CPSC 323 - Compilers and Programming Languages

### Lecturer : Anthony Le

## Background

"Basic concepts of programming languages and principles of translation. Topics include history of programming languages, various programming paradigms, language design issues and criteria, design of compilers for modern programming languages." - _CSUF 2019-2020 University Catalog_

"This course is an introduction to the principles of Programming Languages and compiler design. The
course will cover some of the theoretical foundations underlying Programming Languages, compiler
design including study on regular languages, FSM, context free languages and different grammars.
Furthermore, the course will deal with the actual construction of the parts of a compiler and discuss more
advanced feature such as optimization. " - _Anthony Le's CPSC 323 Course Syllabus_

# Compiler Assigment

Students will be asked to build their own compiler that implements the following :

1. Lexical Analyzer (Assignment 1)
2. Syntax Analyzer (Assignment 2)
3. Semantic Analyzer (Assignment 3)

## Why JavaScript?

For this project, students were suggested to use either C, C++, C#, Java, or Python. I've written several applications in C++ and C# and I've seen how long it takes to get up and running with these enterprise languages. I also considered giving Python a chance, but I've been avoiding the language ever since [coding breaking change from Python 2 to 3](https://snarky.ca/why-python-3-exists/).

This semester, Professor Le lifted the language limitations and instructed us to use whichever language we feel most comfortable with; and in this case, for me its JavaScript.

JavaScript is being used everywhere and has been proven to have the flexibility to tackle any project. It may not be as efficient as C or as easy to develop in as Python, but I know it will make for an excellent language to build a compiler.

## Why TypeScript?

As much as I love writing my applications in JavaScript, there are times I want to pull my hair out and go back to C# or Java. JavaScript has proven to be a difficult language for new developers due to it's confusing runtime errors and lack of static types.

Luckily, Microsoft saw this as an issue as well when they began developing their [Visual Studio Code editor](https://code.visualstudio.com/) in JavaScript. The code-base became so large that it was difficult to determine where runtime errors were originating from.

In 2012, Microsoft announced it's efforts to develop a superset of JavaScript that allowed for statically typed variables as well as optional implementations of traditional object oriented fundamentals.

Facebook also released their own version of a statically typed JavaScript superset, Flow, in 2014, but as you can see from [npm trends](https://www.npmtrends.com/flow-bin-vs-typescript), it's clear TypeScript is king.

![Flow vs. TypeScript](https://i.imgur.com/pwCzygL.png)

# Getting Started

This project requires the following :

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/)
3. [TypeScript](https://www.typescriptlang.org/)

## Installting Tools

## Git

Git is a free and open source distributed version control system. It is used to download the code for this project. You are most likely viewing this document on Github, the most popular website for hosting git projects.

### Installation

| OS      | Link                               |
| ------- | ---------------------------------- |
| Windows | https://git-scm.com/download/win   |
| MacOS   | https://git-scm.com/download/mac   |
| Linux   | https://git-scm.com/download/linux |

## Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript Engine. It allows JavaScript to run outside of the browser.

### Installation

| OS      | Link                                                   |
| ------- | ------------------------------------------------------ |
| Windows | https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi |
| MacOS   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.pkg     |
| Linux   | https://nodejs.org/dist/v12.14.1/node-v12.14.1.tar.gz  |

## TypeScript

TypeScript is a superset of JavaScript created by Microsoft. It adds static types and traditional object oriented programming fundamentals to JavaScript.

All code is written in TypeScript in the `src` folder and then transpiled to JavaScript in the `lib` folder using the `tsc` (TypeScript compiler) command.

### Installation

TypeScript can be installed using [NPM](https://www.npmjs.com/), the Node Package Manager. NPM is installed by default with every Node.js installation.

TypeScript is included as a dev dependency in each assignment's `package.json`. When you run `npm install` in a a folder with a `package.json` file it will install all packages listed in that file.

If you wish to install TypeScript globally on your machine you can use the following :

```bash
npm install -g typescript
```

**Note**: make sure you have Node.js and npm installed at this point for the above command to work!

## Cloning the Repo

```bash
git clone https://github.com/masautt/typescript-compiler
cd typescript-compiler
```

# Running the Compiler

Each assignment has a different version of the compiler. You need to navigate to each folder and install all npm packages to properly run each Node application.

## Assignment 1

```bash
cd as1
npm install
npm start
```

Running the above command navigates to assignment 1's directory, installs the following packages from `package.json` and starts the Node.js application.

```json
"devDependencies": {
    "@types/jest": "^25.1.1",
    "@types/node": "^13.5.2",
    "jest": "^25.1.0",
    "ts-jest": "^25.1.0",
    "typescript": "^3.7.5"
}
```

## Assignment 2

```bash
cd as2
npm install
npm start
```

Running the above command navigates to assignment 2's directory, installs the following packages from `package.json` and starts the Node.js application.

```json
"devDependencies": {
    "@types/jest": "^25.1.1",
    "@types/node": "^13.5.2",
    "jest": "^25.1.0",
    "ts-jest": "^25.1.0",
    "typescript": "^3.7.5"
}
```

## Assignment 3

```bash
cd as3
npm install
npm start
```

Running the above command navigates to assignment 3's directory, installs the following packages from `package.json` and starts the Node.js application.

```json
"devDependencies": {
    "@types/jest": "^25.1.1",
    "@types/node": "^13.5.2",
    "jest": "^25.1.0",
    "ts-jest": "^25.1.0",
    "typescript": "^3.7.5"
}
```

#####
