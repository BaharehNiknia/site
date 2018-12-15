import React from 'react'
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap'
import Pic from './pic.jpg' 
import Rose from './Rose.jpg'
import YellowRose from './yellowRose.jpg'


class Img extends React.Component{
render(){

 return(<Grid>
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src={Pic} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>
            &nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={Rose} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>
            &nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src={YellowRose} alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>
            &nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>);  
}


}
 export default Img;