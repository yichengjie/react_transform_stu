import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users </h3>
            </section>
          </div>
        )
    }
};
export default App ;
