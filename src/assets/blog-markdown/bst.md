
  ## Binary search tree slides

  This page is part of the attempt to verify the run time complexities of various Binary Search Tree methods including:

  - Insert
  - Remove
  - Contains
  - Find Max
  - Find Min
  - Print


  The methods Insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(n). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n).
  
  The BST class code is located on Github [BST class code](https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/binary-search-tree). I would caution against using this BST implementation in any real project since this isn't fully vetted. There are some potentially useful tests located [BST tests](https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/binary-search-tree/__tests__/binary-search-tree.test.js).

  The binary tree plotter used to create the tree visuals is on Github [Tree plotter](https://github.com/asdFletcher/binary-tree-plotter)

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.

  ### Timing
  The "time" calculations are based on counters. 
  
  I originally attempted using the JavaScript built-in Date.now() as well as performance.now() (which has up to "microsecond" resolution) to track the actual wall-clock time that each method call required, but the results varied greatly and depended on unknown factors which were hard to control. 
  
  Ultimately, a repeatable solution was to keep track of counters placed inside each method call, and crucially inside any recursive functions or loops. A perhaps cleaner alternative is to place callback functions instead of counters and the "time" kept track of the "runner". This would remove the need to store any counter data on the class and would make writing tests a little easier (currently the counters are set to zero when comparing expected trees to result trees).
  