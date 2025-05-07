<script setup lang="ts">
import type { Todo } from './TodoType.d.ts'
defineProps<{
  todo: Todo
}>()
const emit = defineEmits<{
  (e: 'toggle', id: number): void
}>()
</script>

<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="emit('toggle', todo.id)" />
    <span>{{ todo.text }}</span>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}
.todo-item input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.todo-item input[type='checkbox']:checked {
  background-color: #5a0507;
}
.todo-item input[type='checkbox']:checked:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.5);
}
.todo-item input[type='checkbox']:checked:active {
  background-color: #5f0506;
}
.todo-item input[type='checkbox']:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.todo-item span {
  font-size: 1.2rem;
  color: #fff;
}
.todo-item span.completed {
  text-decoration: line-through;
  color: #ccc;
}
.todo-item span:hover {
  text-decoration: underline;
}
.todo-item span:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.5);
}
.todo-item span:active {
  color: #5f0506;
}
.todo-item span:disabled {
  color: #ccc;
}
.todo-item span:disabled:hover {
  text-decoration: none;
}
.todo-item span:disabled:focus {
  box-shadow: none;
}
.todo-item span:disabled:active {
  color: #ccc;
}
.todo-item span:disabled:active:hover {
  text-decoration: none;
}
</style>
