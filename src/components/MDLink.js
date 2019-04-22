import React from 'react';

export default (props) => {
  return (
    <a href={props.href} target="_blank">{props.children[0]}</a>
  );
}