import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    console.log(`this.props.language: `, this.props.language);
    console.log(`this.codeEl: `, this.codeEl);
    return (
      <pre>
        {/* <code ref={this.setRef} className={`language-${this.props.language}`}> */}
        <code ref={this.setRef} className={`language-javascript`}>
          {this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: ''
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock;
