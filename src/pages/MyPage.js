import React from 'react';
import styled from 'styled-components';

export function MyPage(props){
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    console.log(token);
    return <>
        <Wrap>
            <h2>MyPage</h2>
            <Content>username: <Info>{username}</Info></Content>
            <Content>password: <Info>{password}</Info></Content>
            {/*<p>email:  <b>{props.email}</b></p>*/}
            {/*<p>last_name:  <b>{props.last_name}</b></p>*/}
            {/*<p>first_name:  <b>{props.first_name}</b></p>*/}
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