import React, { useState } from 'react';
import {Navbar,Container, Card,Button, Row, Col} from "react-bootstrap";
import './Postview.css';


const Postview=()=> {

const[posts,setpost]=useState([]);
React.useEffect(()=>{
fetch("http://localhost:3004/user")
.then((res)=>res.json())
.then((responseData)=>setpost(responseData));

},[])




  return (
    <div className="site-container">

      <div className='page-header'>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Instaclone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text style={{backgroundColor:"black"}}>
                <img src="https://thumbs.dreamstime.com/b/camera-icon-isolated-white-background-symbol-vector-185770595.jpg" alt="camera" width="60" height="50"/>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>


      <div className='post-container'>


        {
          posts.map((post,index)=>{
            return(
              <Container key={index} style={{marginTop:'20px',marginBottom:'20px'}}>
          <Row>
            <Col md={{span:6, offset:3}}>
            <Card >
          <Card.Header >
              <label style={{float:'left'}}><b>{post.name}</b><br></br>{post.location}</label>
              <img style={{float:'right'}} src="https://cdn0.iconfinder.com/data/icons/modern-ui-1/64/dots-horizontal-nav-more-512.png" alt="dots" width="50" height="30"/>
            </Card.Header>
          <Card.Body className="text-center">
            <Card.Title>
              <img src={post.PostImage} alt='img' className='img' width="450" height="400" />
              
            </Card.Title>
            <Card.Text>
              <b>{post.description}</b>
            </Card.Text>
            <Button variant="primary">{post.likes}  Likes</Button>
          </Card.Body >
          <Card.Footer className="text-muted">{post.Date}</Card.Footer>
        </Card>
            </Col>
          </Row>
        </Container>
            )
            

          })
        }


        
        
      </div>

    </div>
  );
}

export default Postview;
