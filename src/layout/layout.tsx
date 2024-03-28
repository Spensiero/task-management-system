
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

const HeaderRow = styled.div`
  height: 96px; 
  width: 100%; 
  display: flex; 
`;

const TableRow = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  width: calc(100% - 40px);
  margin-bottom: 50px;

  @media only screen and (min-height: 800px) {
    margin-bottom: 150px;
  }
`;

const ContentRight = styled.div`
  justify-content: flex-end;
  display: flex; 
  margin: 20px;
`;

const ContentLeft = styled.div`
  justify-content: flex-start;
  display: flex; 
  width: 100%; 
  padding-left: 20px;
  padding-top: 30px;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 25px;
`;

export default function Layout({ title, children }: ILayout) {
  const [firstChild, secondChild] = React.Children.toArray(children);
  return (
    <Container>
      <Column>
        <HeaderRow>
          <ContentLeft>{title}</ContentLeft>
          <ContentRight>{firstChild}</ContentRight>
        </HeaderRow>
        <TableRow>{secondChild}</TableRow>
      </Column>
    </Container>
  );
}
