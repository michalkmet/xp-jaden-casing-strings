# Notes

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Initial refactor
- ✅ User stories
- User Story 1: Simple one word string to Jaden case
- ✅ UAT1.1: When I pass 'a', Then it should return 'A'
- ✅ UAT1.2: When I pass 'Ab', Then it should return 'Ab'
- ✅ UAT1.3: When I pass 'hello', Then it should return 'Hello'
- ✅ UAT1.4: When I pass 'hey, Then it should return 'Hey'

Pomodoro 2:
- ✅ Refactor user stories
- ✅ UAT2.1: When I pass 'a a', Then it should return 'A A'
- ✅ UAT2.2: When I pass 'aa bb', Then it should return 'Aa Bb'
- ⚠ TODO UAT2.3: When I pass 'hey dude', Then it should return 'Hey Dude'