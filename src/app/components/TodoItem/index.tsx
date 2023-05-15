import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CheckBox from '../Checkbox';

const Box = styled.div`
  display: flex;
  alignm-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid orange;
`;

const TodoContend = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-work;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -werbkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? 'grey' : 'black')};
`;
export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <CheckBox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContend checked={todo.completed}>{todo.content}</TodoContend>
    </Box>
  );
}
