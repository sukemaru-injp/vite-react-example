import styled from 'styled-components'

const Button = styled.button`
padding: 15px 20px;
background-color: rgb(138, 43, 226);
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;

&:disabled {
  background-color: #ccc;
}
`

export default Button
