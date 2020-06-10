import React, {useState} from 'react';
import Signup from './Signup';
import Login from './Login';
import {Tabs,Tab,Card} from 'react-bootstrap';

const Home = (props) => {
    const [data,setData]=useState({})
    return(
        <Card style={{ width: '33%', alignContent: 'center' }}>
        <Tabs defaultActiveKey="SignUp" id="uncontrolled-tab-example">
<Tab eventKey="SignUp" title="SignUp">
<Signup dataSignup={(data)=>setData(data)}/>
</Tab>
<Tab eventKey="Login" title="Login">
<Login data={data}/>
</Tab>
</Tabs>
</Card>
      )
}

export default Home;