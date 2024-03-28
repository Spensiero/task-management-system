
import React from "react";
import styled from '@emotion/styled';
import { ILayout } from "@/interfaces/interfaces";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #3178C6, #44AEE8); /* Colore sfumato */
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Row = styled.div`
  height: 96px; 
  width: 100%; 
  display: flex; 
`;

const ContentRight = styled.div`
  justify-content: flex-end;
  display: flex; 
  width: 100%; 
  margin: 20px;
`;

const ContentLeft = styled.div`
  justify-content: flex-start;
  display: flex; 
  width: 100%; 
  margin-left: 20px;
  margin-top: 30px;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 25px;
`;




export default function Layout({ title, children }: ILayout) {
  const [firstChild, secondChild] = React.Children.toArray(children);
  return (
    <Container>
      <Column>
        <Row>
          <ContentLeft>{title}</ContentLeft>
          <ContentRight>{firstChild}</ContentRight>
        </Row>
        <div>{secondChild}</div>
      </Column>
    </Container>
  );
}
