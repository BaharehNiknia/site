import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component{

    render (){
return (<div><h1>this is home page</h1></div>)
    }
}

ReactDOM.render(
    <Home></Home>,
    document.getElementById('root')
);