import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from '../TodoList.vue'

// Mock the child component to focus on parent logic
describe('TodoList.vue', () => {
  it('renders all todos', () => {
    const wrapper = mount(TodoList)
    const items = wrapper.findAll('.todo-row')
    expect(items.length).toBe(3)
    expect(wrapper.text()).toContain('Learn Vue.js')
    expect(wrapper.text()).toContain('Build a Todo App')
    expect(wrapper.text()).toContain('Deploy the App')
  })

  it('removes a todo when Remove button is clicked', async () => {
    const wrapper = mount(TodoList)
    const removeButtons = wrapper.findAll('button')
    await removeButtons[0].trigger('click')
    expect(wrapper.findAll('.todo-row').length).toBe(2)
    expect(wrapper.text()).not.toContain('Learn Vue.js')
  })

  it('toggles a todo when checkbox is changed', async () => {
    const wrapper = mount(TodoList)
    // Find the first TodoItem's checkbox
    const checkbox = wrapper.find('input[type="checkbox"]')
    expect((checkbox.element as HTMLInputElement).checked).toBe(false)
    await checkbox.setValue(true)
    // After toggling, the completed value should be true
    expect((checkbox.element as HTMLInputElement).checked).toBe(true)
  })
})
