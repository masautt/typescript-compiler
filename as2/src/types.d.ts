//Types
export interface Token { value: string; type: TokenType; }
export interface Rule { type : string; values : any}
export type TokenType = 'keyword' | 'separator' | 'identifier' | 'operator' | 'unknown' | 'real';