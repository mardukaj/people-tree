# people-tree

We are looping trough given arbitrary array and displaying oldest parent for each element (person) in array. 

In project we are using external libraries jasmine (for unit testing), lodash (for array manipulation).
- File index.html is displaying example mentioned above.
- File SpecRunner.html is used for running unit tests.
- File ToDo.js contains all functions that are used in projects.
- File ToDoSpec.js contains several unit tests written in jasmin framework (tests such as: add person, delete person, return top layer parent id for given person, return all ancestors for given person and finally return top layer parents for each person in persons array).

-------------------------

1. Imagine an arbitrary tree of People objects like 
[{id: 2, parent_id: 3}, {id: 3, parent_id: 5}, ...]. 
Write an algorithm that will find top hierarchy layer(s)
Notes:
parent_id might be other Person id or null
Use any programming language you like
Write test for it 

-------------------------
