import styled from 'styled-components'



export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  padding-top:100px;
  background-color: white;
  display:flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position:relative;
`

export const Form = styled.div`
  height: 400px;
  margin:40px;
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
  div{
    display:flex;
  }
`

export const ModalContainer = styled.div`
  z-index: 990;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top:0;
  display:flex;
  justify-content: center;
  align-items: center;
  display: none;
  div{
    width: 300px;
    height: 300px;
    background-color: white;
    margin: 180px 100px;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div p{
    padding: 30px;
    height: 80px;
  }
  ${({active})=> active &&`
    display:block;
  `}
`
export const PopupButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: grey;
  color:white;
  border-radius: 50%;
  margin-left:10px;
  display:flex;
  align-items: center;
  justify-content: center;
`


export const Navbar = styled.div`
  height: 90px;
  width: 100%;
  background-color: palevioletred;
  position:absolute;
  top:0;
  z-index:400px;
  ul{
    display:flex;
    list-style-type: none;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }
  ul li {
    margin-top:15px;
  }
`


export const WrapperPresupost = styled.div`
  display:flex;
`

export const Lista = styled.div`
  width:700px;
  border:3px solid black;
  border-radius: 20px;
  background-color: lightyellow;
  height: 600px;
  display:flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap:wrap;
  padding:20px;
  margin-top:50px;
  div{
    border: 3px solid black;
    border-radius: 15px;
    width: 200px;
    height: 170px;
    background-color: palevioletred;
    margin: 10px;
  }
  div ul{
    list-style-type: circle;
    padding:10px;
    margin:0;
    margin-left:20px;
    font-size:12px;
  }
  span{
    position: absolute;
    top:94px;
    width: 500px;
  }
`