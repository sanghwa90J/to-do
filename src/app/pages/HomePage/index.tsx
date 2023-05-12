import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.17);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  alignm-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid orange;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="TODO-MAIN" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>TO-DO LIST</Title>
          <TodoList>
            <TodoItem>
              <TodoCheck type="checkbox" />?
            </TodoItem>
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
