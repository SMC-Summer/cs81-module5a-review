Reflection on hobbyTracker.js

What did you learn from reading and commenting on this code?

Reading and commenting on this code was a practical reinforcement of how higher-order functions work in a real-world context.
It's one thing to know the definition of map, filter, and reduce, but another to see them used cleanly to manipulate a data structure like an array of objects.
It solidified my understanding of their distinct roles:

- reduce is for aggregation—boiling an entire array down to a single value (like a sum or a count).

- filter is for selection—creating a smaller subset of an array based on a condition without changing the items themselves.

- map is for transformation—creating a new array of the same length but with each item transformed in some way.

Adding comments forced me to articulate why a certain function was chosen for a specific task, which deepened my appreciation for their purpose.


What was the most confusing part?

The most confusing part at first glance was the one-liner in the uniqueHobbies function: return [...new Set(names)];. It's a very concise and modern way to get unique values, but it combines three distinct concepts:

- The map call to create the initial array of strings.

- The new Set() constructor, which cleverly de-duplicates the array by its nature.

- The spread syntax ... to convert the Set object back into an Array.

While powerful, this line can be a bit dense for someone who isn't familiar with Sets or the spread syntax. Breaking it down into its constituent parts was necessary to explain it clearly in the comments.
It's a great example of how elegant code can sometimes sacrifice a bit of immediate readability for conciseness.
