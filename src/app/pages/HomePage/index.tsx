import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ToDoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';

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

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    { id: '1', content: 'first', completed: false, editing: false },
    { id: '2', content: 'second', completed: false, editing: false },
    { id: '3', content: 'third', completed: false, editing: false },
  ]);
  const [number, setnumber] = React.useState();
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="TODO-MAIN" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>TO-DO LIST</Title>
          <ToDoInput
            setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
          />
          <TodoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
