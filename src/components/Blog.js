import React from 'react';
import LazyLoad from 'react-lazy-load';

class Blog extends React.Component {
  render() {
    return (
      <>
        <div className="blog-container">
          <h2>Binary search tree slides</h2>
          <p>Below are some slides created while confirming the various run time complexity of various binary search tree methods. These slides were created in Keynote and exported as images. I wonder if there's any way to dynamically update this content?</p>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.001.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.002.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.003.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.004.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.005.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.006.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.007.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.008.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.009.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.010.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.011.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.012.jpeg')}></img></LazyLoad>
          <LazyLoad><img src={ require('../assets/slides/bst/bst.013.jpeg')}></img></LazyLoad>
        </div>
      </>
    );
  }
}

export default Blog;
