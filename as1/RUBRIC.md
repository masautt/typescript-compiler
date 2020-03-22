## Assignment 1 – Lexical Analyzer

### CS323 Lecturer: Anthony Le

#### Due dates

-   All sections: Softcopy TBA (Sunday), 11:59 pm

-   Hardcopy by TBA (Thurs) by 5 pm

#### Instructions

The first assignment is to write a lexical analyzer (lexer)

You can build your entire lexer using a FSM , Or build using at least FSMs for
identifier, integer and real (the rest can be written ad-hoc/procedural) but YOU
HAVE TO CONSTRUCT A FSM for this assignment otherwise, there will be a deduction
of 2 points!

_Note_: In your documentation (design section), YOU MUST write the REs for Identifiers,
Real and Integer, and also show the NFSM using Thompson.

#### The Lexer

A major component of your assignment will be to write a procedure (Function) – lexer (), that returns a token when it is needed. Your lexer() should return a record, one field for the token and another field the actual "value" of the token (lexeme), i.e. the instance of a token.

Your main program should test the lexer i.e., your program should read a file containing the source code given from class to generate tokens and write out the results to an output file. Make sure that you print both, the tokens and lexemes.

Basically, your main program should work as follows :

While not finished (i.e. not end of the source file) do

-   call the lexer for a token
-   print the token and lexeme

endwhile

Do at least 3 test cases and make sure that you turn in proper documentation using the
documentation template.

-   A simple test case

#### (Partial) Source code:

```
Input : input.txt

while (fahr < upper) a = 23.00 whileend

Output:

| Token      | Lexeme   |
| ---------- | -------- |
| keyword    | while    |
| separator  | (        |
| identifier | fahr     |
| operator   | <        |
| identifier | upper    |
| separator  | )        |
| identifier | a        |
| operator   | =        |
| real       | 23.00    |
| keyword    | whileend |

```

#### Sample Token Assignment

| Tokens      | Example Lexemes                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| Keywords    | int, float, bool, true, false, if, else, then, endif, while, whileend, do, doend, for, forend, input, output, and, or, not |
| Identifiers | legal identifiers must start with alphabetic character follow by digits, alpha, or \$                                      |
| Separators  | ' ( ) { } [ ] , . : ; sp(space)                                                                                            |
| Operators   | \* + - = / > < %                                                                                                           |

| Additional Examples  |                                                                           |
| -------------------- | ------------------------------------------------------------------------- |
| Valid IDENTIFIERS    | num, num1, large$, num$1, num2, num2\$, a9, ab, ab2, etc...               |
| Valid Numbers        | integers whole numbers (1,2,3,...) and reals floats (5.0, 0.9, 1.75, ...) |
| Valid Block Comments | ! this is a block comment to be ignored by the Lexical Analyzer !         |
