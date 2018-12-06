import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class About extends React.Component{

    render (){
return (<div><h1>this is About page now</h1></div>)
    }
}

ReactDOM.render(
    <About></About>,
    document.getElementById('root')
);