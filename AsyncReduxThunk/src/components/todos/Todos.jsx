import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';

function Todos() {
const dispatch = useDispatch();
const todos = useSelector((state) => state.todos);
return (
	<div>
	<h1>Todos</h1>
	<button onClick={
		() => dispatch(fetchTodos())
		}>
		Fetch Todos</button>
	{todos.loading && <p>Loading...</p>}
	<ul>
		{todos.data?.map((todo) => (
		<li key={todo.id}>{todo.title}</li>
		))}
	</ul>
	</div>
);
}
export default Todos;