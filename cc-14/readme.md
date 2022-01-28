# JS-CC-014 : Bracket Validator

- '(', '{', '[' are called "openers."
- ')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested (returns true or false).

Examples:
- "{ [ ] ( ) }" should return true
- "{ [ ( ] ) }" should return false
- "{ [ }" should return false

- Simply making sure each opener has a corresponding closer is not enough—we must also confirm that they are correctly ordered.
- For example, "{ [ ( ] ) }" should return false, even though each opener can be matched to a closer.
