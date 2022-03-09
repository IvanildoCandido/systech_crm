import styled from "styled-components";

export const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const PageBar = styled.div`
  background-color: royalblue;
  color: white;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
`;
export const TitleBar = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const PageClose = styled.div`
  font-size: 20px;
`;
export const DataArea = styled.div`
  background-color: #f0eeee;
  margin: auto;
  width: 80%;
  height: 55vh;
`;
export const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0eeee;
  margin: auto;
  width: 80%;
  height: 15vh;
`;
