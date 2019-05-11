import React from 'react';
import LazyLoad from 'react-lazy-load';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import '../styles/prism_default.css';

const timingMD = `
### Timing
The "time" calculations are based on counters. 

I originally attempted using the JavaScript built-in Date.now() as well as performance.now() (which has up to "microsecond" resolution) to track the actual wall-clock time that each method call required, but the results varied greatly and depended on unknown factors which were hard to control. 

Ultimately, a repeatable solution was to keep track of counters placed inside each method call, and crucially inside any recursive functions or loops.

Insetad of attributes attached to the classes, most methods now accept callback functions which can be used to implement a counter. This is cleaner because it removes the need for multiple named counters for specific methods, and makes testing easier since 2 "equal" trees could have different interlan counter values stored which would make them seem un-equal.

Below: An example runner for generating run "time" using a counter.
`

export class BlogTiming extends React.Component {
  constructor(props) {
    super(props);
    this.md = `
    ### Timing
    The "time" calculations are based on counters. 
    
    I originally attempted using the JavaScript built-in Date.now() as well as performance.now() (which has up to "microsecond" resolution) to track the actual wall-clock time that each method call required, but the results varied greatly and depended on unknown factors which were hard to control. 
    
    Ultimately, a repeatable solution was to keep track of counters placed inside each method call, and crucially inside any recursive functions or loops.
    
    Insetad of attributes attached to the classes, most methods now accept callback functions which can be used to implement a counter. This is cleaner because it removes the need for multiple named counters for specific methods, and makes testing easier since 2 "equal" trees could have different interlan counter values stored which would make them seem un-equal.
  
    Below: An example runner for generating run "time" using a counter.
    `
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
            source={timingMD}
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


  The methods Insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(n). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about Binary Search Trees: [Binary search tree on Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
  
  ### Code
  The BST class code is located on Github [BST class code](https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/binary-search-tree). I would caution against using this BST implementation in any real project since this isn't fully vetted. There are some potentially useful tests located here: [BST tests](https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/binary-search-tree/__tests__/binary-search-tree.test.js).

  The binary tree plotter used to create the tree visuals is on Github [Tree plotter](https://github.com/asdFletcher/binary-tree-plotter)

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `
  return (
    <>
      <div className="blog-container">
        <ReactMarkdown source={md} />
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


  The methods Insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(log(n())! Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about AVL Trees: [AVL Tree on Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
  
  ### Code
  The AVL Tree class code is located on Github [AVL Tree class code](https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/avl-tree). I would caution against using this implementation in any real project since this isn't fully vetted. There are some potentially useful tests located here: [AVL Tree tests](https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/avl-tree/__tests__/avl-tree.test.js).

  The binary tree plotter used to create the tree visuals is on Github [Tree plotter](https://github.com/asdFletcher/binary-tree-plotter)

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} />
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
  * 
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


  The methods insert, remove, contains, find max, and find min should all be O(log(n)) time complexity, on average. With a worst case of O(n). Print is a traversal and hits each node once so is O(n) in all cases. Space complexity is not analyzed here but should be O(n). Learn more about Splay Trees: [Splay Tree on Wikipedia](https://en.wikipedia.org/wiki/Splay_tree)
  
  ### Code
  The Splay Tree class code is located on Github [Splay Tree class code](https://github.com/asdFletcher/data-structures-and-algorithms/tree/master/src/data-structures/splay-tree). I would caution against using this implementation in any real project since this isn't fully vetted. There are some potentially useful tests if you're building your own tree class located here: [Splay Tree tests](https://github.com/asdFletcher/data-structures-and-algorithms/blob/master/src/data-structures/splay-tree/__tests__/splay-tree.test.js).

  The binary tree plotter used to create the tree visuals is on Github [Tree plotter](https://github.com/asdFletcher/binary-tree-plotter)

  The cartesian graphs themselves were plotted using Chart JS with code that simply put the data structures through their paces and output the data in a format that ChartJS can digest.
  `

  return (
    <>
      <div className="blog-container">
      <ReactMarkdown source={md} />
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