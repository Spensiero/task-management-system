
import { ReactNode } from "react";
import React from "react";
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #3178C6, #44AEE8); /* Colore sfumato */
`;

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [firstChild, secondChild] = React.Children.toArray(children);
  return (
    <Container>
      <Row>
        <div>{firstChild}</div>
        <div>{secondChild}</div>
      </Row>
    </Container>
  );
}
