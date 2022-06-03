import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: teal;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`;
const Title = styled.h2`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 25%;
     
    margin: 10px 0px;
    padding: 10px;
    &:hover{
        border: 2px solid teal;
    }
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    font-size: 14px;
    &:hover{
        background-color: #c1c1c1;
        color: teal;
        font-weigth: 900;
        
    }
    background-size: cover;
    margin-bottom: 10px;
`;

const Link = styled.a`
    display: flex;
    font-size: 14px;
    font-weigth: 200;
    border: none;
    &:hover{
        color: #000;
        font-weight: 900;
        font-size: 15px;
        cursor: pointer;
    }
    padding: 5px 20px;
    text-decoration: underline;
`;
/***************************************** */
const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='UserName' />
            <Input placeholder='PassWord' />
        </Form>
        <Button>LOGIN</Button>
        <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>
    </Container>
  )
}

export default Login