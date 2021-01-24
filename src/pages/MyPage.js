import React, { useState, useEffect } from 'react';
import * as api from '../api/server';
import styled from 'styled-components';

export function MyPage(props){
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    // const password = localStorage.getItem('password');
    // console.log(token);

    const [inputs, setInputs] = useState({
        username:'', password: '', email:'', last_name:'', first_name:''
    });

    const getUserInfo = async () => {
        api.readUserInfo().then(function (data){
            setInputs({
                username: data.username,
                password: localStorage.getItem('password'),
                email: data.email,
                last_name: data.last_name,
                first_name: data.first_name
            })
        });
    };
    useEffect(() =>{
        getUserInfo();
    }, []);

    const getValue = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleUpdate = e => {
        api.updateUser(inputs.username, inputs.password, inputs.email, inputs.last_name, inputs.first_name);
    }

    return <>
        <Wrap>
            <h2>MyPage</h2>
            <Content>username: <Info name="username" type={"text"} value={inputs.username} onChange={getValue}/></Content>
            <Content>password: <Info name="password" type={"text"} value={inputs.password} onChange={getValue}/></Content>
            <Content>email: <Info name="email" type={"email"} value={inputs.email} onChange={getValue}/></Content>
            <Content>last_name: <Info name="last_name" type={"text"} value={inputs.last_name} onChange={getValue}/></Content>
            <Content>first_name: <Info name="first_name" type={"text"} value={inputs.first_name} onChange={getValue}/></Content>
            <Button id={"update"} onClick={handleUpdate}>UPDATE</Button>
        </Wrap>
    </>
}

const Wrap = styled.div`
  text-align: center;
`;
const Content = styled.p`
  margin: 5px;
`;
const Info = styled.input`
  margin: 5px 15px 5px 15px;
`;
const Button = styled.button`
  padding: 5px 15px 5px 15px;
  position: absolute;
  top: 30%;
  left: 50%;
`;