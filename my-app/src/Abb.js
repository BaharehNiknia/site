import React from "react"
import Table from "../src/components/common/Table.js"
import Pgr from "./components/common/Pgr.js"
import Jmb from "./components/common/Jmb.js"
import Lbl from "./components/common/Lbl.js"
import Pnlgrp from "./components/common/Pnlgrp.js"

class Form extends React.Component{

    render(){
        return(
            <fragment>
            <Pgr></Pgr>
            <Table></Table>
            <Jmb></Jmb>
            <Lbl></Lbl>
            <Pnlgrp></Pnlgrp>
            </fragment>
        );
    }}

    export default Form;
