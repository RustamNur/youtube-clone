import styled from "styled-components";
import { device } from "../../breakpoint";

const Wrapper = styled.section`
  position: fixed;
  top: 50px;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #212121;
  outline: none;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow-y:scroll;
  z-index: 10;
`;

const Container = styled.div`
  overflow: auto;
`;

Container.Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 24px;
  background-color: #212121;
  width: 100%;
  color: white;
  font-weight: 400;
  &:hover {
    background-color: darkgrey;
    
  }
`;

Container.Hr = styled.hr`
  margin: 12px 0;
  border: 1px solid darkgray;
`;

Container.Img = styled.img`
  width: 20px;
  height: 20px;
`;
Container.ImgProfile = styled.img`
  width: 24px;
  height: 24px;
`;

export { Wrapper, Container };
