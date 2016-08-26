import React, { Component, PropTypes, } from 'react';

export default class SimpleForm extends Component {

  componentDidMount(){
    var url = "/ocguix/validate/initPageData.action" ;
    fetch(url).then(function(response) {
      console.info(response) ;
      return response.json();
    }).then(function(data) {
      console.log(data);
    }).catch(function(e) {
      console.log("Oops, error");
    });
  }
  render(){
    return (<div>hello world</div>) ;
  }
}
