import React from 'react';  

let Example = React.createClass ({  
  getDefaultProps: function() {
    return {
      name: 'shashank'
    }
  },
  render: function() {
    return (
      <div>
        <h1>It works: {this.props.name}</h1>
      </div>
    );
  }

});

module.exports = Example;