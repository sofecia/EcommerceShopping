import React from 'react'
import styled from 'styled-components';
import lsmlIMG from '../assets/me.jpg';

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
    flex-wrapper: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
`;
const Agreement = styled.span`
`;
const Button = styled.button`
`;
/***************************************** */
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='Name' />
                <Input placeholder='Last Name' />
                <Input placeholder='UserName' />
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Input placeholder='Confim Password' />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register