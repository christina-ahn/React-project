import styled from "styled-components";
const Aside = styled.aside`
  display: flex;
  width: 250px;
  height: calc(100vh - 64px);
  background-color: indianred;
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
export { Aside, Button };
