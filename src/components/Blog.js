import React from 'react';
import LazyLoad from 'react-lazy-load';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import '../styles/prism_default.css';

const treeTimingMD = `
### Timing (for trees)
The "time" calculations for trees are based on counters. 

I originally attempted using the JavaScript built-in \`Date.now()\` as well as \`performance.now()\` (which has up to "microsecond" resolution) to track the actual wall-clock time that each method call required, but the results varied greatly and depended on unknown factors which were hard to control. 

Ultimately, a repeatable solution was to keep track of counters placed inside each method call, and crucially inside any recursive functions or loops.

Insetad of attributes attached to the classes, most methods now accept callback functions which can be used to implement a counter. This is cleaner because it removes the need for multiple named counters for specific methods, and makes testing easier since 2 "equal" trees could have different internal counter values stored which would make them seem un-equal.

Below: An example runner for generating run "time" using a counter.
`

export class BlogTimingTrees extends React.Component {
  constructor(props) {
    super(props);
    this.code = `function singleRunInsert(sampleRate) {
      let times = [];
      const myTree = this.getEmptyTree(this.treeType);
      let i = 0;
    
      let sum = 0;
      const counterCallback = () => { sum += 1; } // <------ counter callback
    
      const randomNumbers = this.getRandomNumberSet(this.n); // generate n random numbers
      randomNumbers.forEach((val) => {
        if (i % sampleRate === 0) {
          sum = 0;
          let a = myTree.insert(val, counterCallback);
          times[i] = sum; // times index correlates to tree size
        } else {
          myTree.insert(val, undefined);
        }
        i += 1;
      });
      // return array of insert computations for each tree size
      return times;
    }`
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <>
        <div className="blog-container">
          <ReactMarkdown
            source={treeTimingMD}
            />
          <pre>
            <code className="language-javascript">
              {this.code}
            </code>
          </pre>
        </div>
      </>
    );
  }
}

export const BlogBST = () => {
  const md = 
  `
  ## Binary Search Tree slides

  This page is part of the attempt to verify the run time complexities of various Binary Search Tree methods including:

  - Insert
  - Remove
  - Contains
  - Find Max
  - Find Min
  - Print


  <p>The methods Insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(n). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about Binary Search Trees: <a href="https://en.wikipedia.org/wiki/Binary_search_tree" target="_blank">Binary search tree on Wikipedia</a></p>

  <h3>Code</h3>
  <p>
  The BST class code is located on Github  <a href="https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/binary-search-tree" target="_blank">BST class code</a>. I would caution against using this BST implementation in any real project since this isn't fully vetted. There are some potentially useful tests located here: <a href="https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/binary-search-tree/__tests__/binary-search-tree.test.js" target="_blank">BST tests</a>.</p>

  <p>The binary tree plotter used to create the tree visuals is on Github <a href="https://github.com/asdFletcher/binary-tree-plotter" target="_blank">Tree plotter</a>.</p>

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `
  return (
    <>
      <div className="blog-container">
        <ReactMarkdown source={md} escapeHtml={false}/>
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/bst/bst.001.jpeg') } alt="001"></img>
            <img src={ require('../assets/slides/bst/bst.002.jpeg') } alt="002"></img>
            <img src={ require('../assets/slides/bst/bst.003.jpeg') } alt="003"></img>
            <img src={ require('../assets/slides/bst/bst.004.jpeg') } alt="004"></img>
            <img src={ require('../assets/slides/bst/bst.005.jpeg') } alt="005"></img>
            <img src={ require('../assets/slides/bst/bst.006.jpeg') } alt="006"></img>
            <img src={ require('../assets/slides/bst/bst.007.jpeg') } alt="007"></img>
            <img src={ require('../assets/slides/bst/bst.008.jpeg') } alt="008"></img>
            <img src={ require('../assets/slides/bst/bst.009.jpeg') } alt="009"></img>
            <img src={ require('../assets/slides/bst/bst.010.jpeg') } alt="010"></img>
            <img src={ require('../assets/slides/bst/bst.011.jpeg') } alt="011"></img>
            <img src={ require('../assets/slides/bst/bst.012.jpeg') } alt="012"></img>
            <img src={ require('../assets/slides/bst/bst.013.jpeg') } alt="013"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}

export const BlogAVL = () => {
  const md = 
  `
  ## AVL Tree slides

  This page is part of the attempt to verify the run time complexities of various AVL Tree methods including:

  - Insert
  - Remove
  - Contains
  - Find Max
  - Find Min
  - Print


  <p>The methods Insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(log(n())! Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about AVL Trees: <a href="https://en.wikipedia.org/wiki/AVL_tree" target="_blank">AVL Tree on Wikipedia</a></p>

  <h3>Code</h3>
  <p>The AVL Tree class code is located on Github <a href="https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/avl-tree" target="_blank">AVL Tree class code</a>. I would caution against using this implementation in any real project since this isn't fully vetted. There are some potentially useful tests located here: <a href="https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/avl-tree/__tests__/avl-tree.test.js" target="_blank">AVL Tree tests</a>.</p>

  <p>The binary tree plotter used to create the tree visuals is on Github <a href="https://github.com/asdFletcher/binary-tree-plotter" target="_blank">Tree plotter</a></p>

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} escapeHtml={false}/>
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/avl/avl.001.jpeg')} alt="001"></img>
            <img src={ require('../assets/slides/avl/avl.002.jpeg')} alt="002"></img>
            <img src={ require('../assets/slides/avl/avl.003.jpeg')} alt="003"></img>
            <img src={ require('../assets/slides/avl/avl.004.jpeg')} alt="004"></img>
            <img src={ require('../assets/slides/avl/avl.005.jpeg')} alt="005"></img>
            <img src={ require('../assets/slides/avl/avl.006.jpeg')} alt="006"></img>
            <img src={ require('../assets/slides/avl/avl.007.jpeg')} alt="007"></img>
            <img src={ require('../assets/slides/avl/avl.008.jpeg')} alt="008"></img>
            <img src={ require('../assets/slides/avl/avl.009.jpeg')} alt="009"></img>
            <img src={ require('../assets/slides/avl/avl.010.jpeg')} alt="010"></img>
            <img src={ require('../assets/slides/avl/avl.011.jpeg')} alt="011"></img>
            <img src={ require('../assets/slides/avl/avl.012.jpeg')} alt="012"></img>
            <img src={ require('../assets/slides/avl/avl.013.jpeg')} alt="013"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}

export const BlogTreeCompare = () => {
  const md =
  `
  ## Comparison between:

  * AVL Tree 
  * Binary Search Tree 
  * Splay Tree




  `
  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} />
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/compare/comparisons.001.jpeg')} alt="001"></img>
            <img src={ require('../assets/slides/compare/comparisons.005.jpeg')} alt="005"></img>
            <img src={ require('../assets/slides/compare/comparisons.002.jpeg')} alt="002"></img>
            <img src={ require('../assets/slides/compare/comparisons.003.jpeg')} alt="003"></img>
            <img src={ require('../assets/slides/compare/comparisons.004.jpeg')} alt="004"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}

export const BlogSplay = () => {
  const md = 
  `
  ## Splay Tree slides

  This page is part of the attempt to verify the run time complexities of various Splay Tree methods including:

  - Insert
  - Remove
  - Contains
  - Find Max
  - Find Min
  - Print


  
  <p>The methods insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(n). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about Splay Trees: <a href="https://en.wikipedia.org/wiki/Splay_tree" target="_blank">Splay Tree on Wikipedia</a></p>

  <h3>Code</h3>
  <p>The Splay Tree class code is located on Github <a href="https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/splay-tree" target="_blank">Splay Tree class code</a>. I would caution against using this implementation in any real project since this isn't fully vetted. There are some potentially useful tests if you're building your own tree class located here: <a href="https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/splay-tree/__tests__/splay-tree.test.js" target="_blank">Splay Tree tests</a>.</p>

  <p>The binary tree plotter used to create the tree visuals is on Github <a href="https://github.com/asdFletcher/binary-tree-plotter" target="_blank">Tree plotter</a></p>

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} escapeHtml={false}/>
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/splay/splay.001.jpeg')} alt="001"></img>
            <img src={ require('../assets/slides/splay/splay.002.jpeg')} alt="002"></img>
            <img src={ require('../assets/slides/splay/splay.003.jpeg')} alt="003"></img>
            <img src={ require('../assets/slides/splay/splay.004.jpeg')} alt="004"></img>
            <img src={ require('../assets/slides/splay/splay.005.jpeg')} alt="005"></img>
            <img src={ require('../assets/slides/splay/splay.006.jpeg')} alt="006"></img>
            <img src={ require('../assets/slides/splay/splay.007.jpeg')} alt="007"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}

export const BlogRBT = () => {
  const md = 
  `
  ## Red Black Tree Slides

  This page is part of the attempt to verify the run time complexities of various Red Black Tree methods including:

  - Insert
  - Remove
  - Contains
  - Find Max
  - Find Min
  - Print



  <p>The methods insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(log(n)). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about Red Black Trees: <a href="https://en.wikipedia.org/wiki/Red%E2%80%93black_tree" target="_blank">Red Black Tree on Wikipedia</a></p>
  
  <h3>Code</h3>
  <p>The Red Black Tree class code is located on Github <a href="https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/red-black-tree" target="_blank">Red Black Tree class code</a>. I would caution against using this implementation in any real project since this isn't fully vetted. There are however some potentially useful tests if you're building your own tree class located here: <a href="https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/red-black-tree/__tests__/red-black-tree.test.js" target="_blank">Red Black Tree tests</a>.</p>

  <p>The binary tree plotter used to create the tree visuals is on Github <a href="https://github.com/asdFletcher/binary-tree-plotter" target="_blank">Tree plotter</a></p>

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} escapeHtml={false}/>
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/rbt/rbt.001.jpeg')} alt="001"></img>
            <img src={ require('../assets/slides/rbt/rbt.002.jpeg')} alt="002"></img>
            <img src={ require('../assets/slides/rbt/rbt.003.jpeg')} alt="003"></img>
            <img src={ require('../assets/slides/rbt/rbt.004.jpeg')} alt="004"></img>
            <img src={ require('../assets/slides/rbt/rbt.005.jpeg')} alt="005"></img>
            <img src={ require('../assets/slides/rbt/rbt.006.jpeg')} alt="006"></img>
            <img src={ require('../assets/slides/rbt/rbt.007.jpeg')} alt="007"></img>
            <img src={ require('../assets/slides/rbt/rbt.008.jpeg')} alt="008"></img>
            <img src={ require('../assets/slides/rbt/rbt.009.jpeg')} alt="009"></img>
            <img src={ require('../assets/slides/rbt/rbt.010.jpeg')} alt="010"></img>
            <img src={ require('../assets/slides/rbt/rbt.011.jpeg')} alt="011"></img>
            <img src={ require('../assets/slides/rbt/rbt.012.jpeg')} alt="012"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}


const sortingTimingMD = `
### Timing (for sorting)

The time measurements for sorting uses java's \`System.nanoTime()\`

<p>From the Java <a href="https://docs.oracle.com/javase/7/docs/api/java/lang/System.html#nanoTime()" target="_blank">docs</a>:</p>

\`Returns the current value of the running Java Virtual Machine's high-resolution time source, in nanoseconds.
This method can only be used to measure elapsed time and is not related to any other notion of system or wall-clock time. The value returned represents nanoseconds since some fixed but arbitrary origin time (perhaps in the future, so values may be negative). The same origin is used by all invocations of this method in an instance of a Java virtual machine; other virtual machine instances are likely to use a different origin.

This method provides nanosecond precision, but not necessarily nanosecond resolution (that is, how frequently the value changes) - no guarantees are made except that the resolution is at least as good as that of currentTimeMillis().\`

The sorting code was done in Java primarily for the fact that we are able to get this precise measurment of time. Compared to JavaScript which offers much less predictable \`Date.now()\` and \`performance.now()\`.

Below: Example code for sorting
`

export class BlogTimingSorting extends React.Component {
  constructor(props) {
    super(props);
    this.code = `public static long[] generateAndSortNumbers(int n, int runCount) {
      long[] times = new long[runCount];
    
      for (int i = 0; i < runCount; i++) {
        // generate numbers
        Integer[] nums =  getRandomNumberList(n);
    
        // begin timer
        long start = System.nanoTime(); 

        // sort
        QuickSort.sort(nums);

        // end timer
        long end = System.nanoTime();
        
        long elapsed = end-start;
        times[i] = elapsed;
      }
      return times;
    }`
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <>
        <div className="blog-container">
          <ReactMarkdown source={sortingTimingMD} escapeHtml={false}/>
          <pre>
            <code className="language-javascript">
              {this.code}
            </code>
          </pre>
        </div>
      </>
    );
  }
}

export const Sorting = () => {
  const md = 
  `
  ## Sorting algorithms

  This page is part of the attempt to verify the run time complexities of various sorting methods including:

  - Insertion sort
  - Selection sort
  - Merge sort
  - Quick sort


  <p></p>
  <h3>Code</h3>
  <p>The code for all the sorting algorithms (implemented in Java) is located on Github <a href="https://github.com/asdFletcher/java-sorting" target="_blank">Github repo</a>. Also included in the repo is the test suite used to generate the timing data which may  be useful to anyone wishing to test their own sorting algorithms.

  The graphs were plotted using Apple's Numbers and annotated and exported as images using Keynote.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} escapeHtml={false}/>
        <LazyLoad>
          <>
            <img src={ require('../assets/slides/sorting/sorting images.001.jpeg')} alt="001"></img>
            <img src={ require('../assets/slides/sorting/sorting images.002.jpeg')} alt="002"></img>
            <img src={ require('../assets/slides/sorting/sorting images.003.jpeg')} alt="003"></img>
            <img src={ require('../assets/slides/sorting/sorting images.004.jpeg')} alt="004"></img>
            <img src={ require('../assets/slides/sorting/sorting images.005.jpeg')} alt="005"></img>
            <img src={ require('../assets/slides/sorting/sorting images.006.jpeg')} alt="006"></img>
            <img src={ require('../assets/slides/sorting/sorting images.007.jpeg')} alt="007"></img>
            <img src={ require('../assets/slides/sorting/sorting images.008.jpeg')} alt="008"></img>
            <img src={ require('../assets/slides/sorting/sorting images.009.jpeg')} alt="009"></img>
            <img src={ require('../assets/slides/sorting/sorting images.010.jpeg')} alt="010"></img>
            <img src={ require('../assets/slides/sorting/sorting images.011.jpeg')} alt="011"></img>
            <img src={ require('../assets/slides/sorting/sorting images.012.jpeg')} alt="012"></img>
            <img src={ require('../assets/slides/sorting/sorting images.013.jpeg')} alt="013"></img>
            <img src={ require('../assets/slides/sorting/sorting images.014.jpeg')} alt="014"></img>
            <img src={ require('../assets/slides/sorting/sorting images.015.jpeg')} alt="015"></img>
          </>
        </LazyLoad>
      </div>
    </>
  );
}