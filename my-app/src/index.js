import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

//import './index.css';
//import Header from './components/header.js';
//import Footer from './components/Footer.js';

//import React from "react"
//import ReactDOM from "react-dom"
import FullPage from "./components/FullPage";

//import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

//history={browserHistory} 
ReactDOM.render(
    <Router > 
        <FullPage/>
    </Router>,
    document.getElementById("root")
);
//class Chosen extends React.Component {
 // render() {
 //   return (
 //     <div>
 //       <select className="Chosen-select" ref={el => this.el = el}>
 //         {this.props.children}
        
 //       </select>
 //     </div>
 //   );
 // }
//}
//function Do(){
//return(<div>hi this is simple react</div>)
//}
//ReactDOM.render(<Do></Do>,document.getElementById('root'));


//var http = require('http');

//http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
 // res.write('<input type="file" name="filetoupload"><br>');
 // res.write('<input type="submit">');
 // res.write('</form>y');
//  return res.end();
//}).listen(8010); 
   
//var MongoClient=require('mongodb').MongoClient;
//var url = "mongodb://localhost:1040/mydb";

//MongoClient.connect(url, { useNewUrlParser: true });

//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  console.log("Database created!");
//  db.close();
//});
//function Fill(){
 //   return <h1>hellosite Bahareh Niknia test</h1>
//}

//ReactDOM.render(
 //   <fragment>
 //   <Header></Header>
 //   <Footer></Footer>
 //   </fragment>
//    ,
//    document.getElementById('root')
//)










