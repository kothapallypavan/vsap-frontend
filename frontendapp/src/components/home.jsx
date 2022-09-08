import { useState } from "react";
import { Form,Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    useEffect(() => {
      if (localStorage.getItem("user")){
        navigate("/dashboard");  
      }
    },[])
  
    const cardcss = {
      height:"540px",
      padding:"70px",
      width:"500px",
      margin:"80px auto",
    }
    const mailchange = (e)=>{
      setEmail(e.target.value);
    }
    const passwordchange = (e)=>{
      setPassword(e.target.value);
    }
    const formsubmit = ()=>{
      console.log(email,password);
      axios.post(
        "http://localhost:8080/auth/signin",{
          email:email,
          password:password
        }
      )
      .then((res) => {
        if(res.status == 200 || res.data == 201){
          localStorage.setItem("token",res.data.jwt);
          localStorage.setItem("user",email);
          navigate("/dashboard");
        }
        else{
          window.alert("Bad credentials");
        }
      });
    }
    return (
      <div>
        <Card style={cardcss}>
          <Form>
            <h1 style={{marginBottom:"30px"}}>Login</h1>
            <Form.Group>
              <Form.Label >Email address </Form.Label>
              <Form.Control onChange={mailchange} style={{marginBottom:"30px"}} type="email"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password </Form.Label>
              <Form.Control onChange={passwordchange} style={{marginBottom:"30px"}} type="password"/>
            </Form.Group>
            <Button style={{marginBottom:"20px"}} variant="primary" type="submit"  onClick={formsubmit} disabled={!email || !password}>submit</Button>
          </Form>
          <Card.Text>Forgot password? <a href="#">click me</a></Card.Text>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
                <p style={{width: '70px', textAlign: 'center'}}>or</p>
            <div style={{flex: 1, height: '1px', backgroundColor: 'grey'}} />
          </div>
          <Card.Text>Create a new account <a href="signup">click me</a></Card.Text>
        </Card>
      </div>
      );
};
export default Home;