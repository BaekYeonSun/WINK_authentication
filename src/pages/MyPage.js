import React, { useState } from 'react';
import styled from 'styled-components';

export function MyPage(props){
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    // console.log(token);

    const [state, setState] = useState({
        username:'', email:'', last_name:'', first_name:''
    })

    async function readUser(){
        const id = 1;
        await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/' + id, {
            method: 'get',
        })
        .then(response => response.json())
        .then(data =>
            // console.log(data.username, data.email, data.last_name, data.first_name),
            setState({
                username: data.username,
                email: data.email,
                last_name: data.last_name,
                first_name: data.first_name
            })
        )
        .catch(function (error) {
            console.log('Fetch Error : -S', error)
        });
    }

    return <>
        <Wrap readFunc = {readUser()}>
            <h2>MyPage</h2>
            <Content>username: <Info>{state.username}</Info></Content>
            {/*<Content>password: <Info>{state.password}</Info></Content>*/}
            <Content>email: <Info>{state.email}</Info></Content>
            <Content>last_name: <Info>{state.last_name}</Info></Content>
            <Content>first_name: <Info>{state.first_name}</Info></Content>
        </Wrap>
    </>
}

const Wrap = styled.div`
  text-align: center;
`;
const Content = styled.p`
  margin: 5px;
`;
const Info = styled.b`
  margin: 5px 15px 5px 15px;
`;