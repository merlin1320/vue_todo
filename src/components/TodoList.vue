<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from './TodoType.d.ts'
import TodoItem from './TodoItem.vue'
const todos = ref<Todo[]>([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true },
  { id: 3, text: 'Deploy the App', completed: false },
])

const newTodoText = ref('')

function addTodo(text: string) {
  const newTodo: Todo = {
    id: todos.value.length + 1,
    text,
    completed: false,
  }
  todos.value.push(newTodo)
}

function toggleTodo(id: number) {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

function removeTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.value.splice(index, 1)
    console.log(`Todo with id ${id} removed`)
    console.log(todos)
  }
}
</script>

<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    <input
      type="text"
      v-model="newTodoText"
      placeholder="Add a new todo"
      @keyup.enter="addTodo(newTodoText)"
    />
    <button @click="addTodo(newTodoText)">Add</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-row">
        <TodoItem :todo="todo" @toggle="toggleTodo" />
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  padding: 1rem;
  background-color: #420bba;
  border-radius: 8px;
}
.todo-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #0848b0;
}
.todo-row:last-child {
  border-bottom: none;
}
.todo-row button {
  background-color: #5a0507;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
.todo-row button:hover {
  background-color: #6c0908;
}
.todo-row button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.5);
}
.todo-row button:active {
  background-color: #5f0506;
}
.todo-row button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.todo-row button:disabled:hover {
  background-color: #ccc;
}
.todo-row button:disabled:focus {
  box-shadow: none;
}
.todo-row button:disabled:active {
  background-color: #ccc;
}
</style>
