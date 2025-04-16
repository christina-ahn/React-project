import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background-color: cadetblue;
`;
const Logo = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  cursor: pointer;
`;
const Button = styled.button`
  background: inherit;
  border: 1px solid black;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  height: 100px;
  width: 200px;
`;
export { Header, Logo, Button };
