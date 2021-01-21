import React from 'react';
import styled from 'styled-components';

export function LabelWithInput({label, ...rest}){
    return <Wrap>
        <Label>{label} :</Label>
        <Input {...rest}/>
    </Wrap>;
}

const Wrap = styled.div`
  width: 100%;
  text-align: center;
`;

const Label = styled.div`
  float: left;
  width: 40%;
  margin: 10px 0px 10px 20px;
`;

const Input = styled.input`
  float: left;
  width: 40%;
  margin: 10px;
  outline: none;
  text-align: center;
`;
