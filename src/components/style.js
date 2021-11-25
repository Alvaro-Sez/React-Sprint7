import styled from 'styled-components'



export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding:40px;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`

export const Form = styled.div`
  height: 400px;
  width: 400px;
  input{
    margin:10px;
  }
`


export const Panell = styled.div`
  height: 100px;
  width: 350px;
  border: 3px solid black;
  border-radius:15px;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  padding: 15px;
  button{
    background-color: orangered;
    font-size:20px;
    border:none;
    width: 25px;
    height: 25px;
    margin:0 10px;
    border-radius:5px;
    color:white;
  }
  input{
    margin:0;
    width: 50px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance:none;
  }
`