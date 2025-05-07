import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../App.vue'

describe('App.vue', () => {
  it('renders the TodoList component', () => {
    const wrapper = mount(App)
    // Check if TodoList is present by looking for its root element
    expect(wrapper.findComponent({ name: 'TodoList' }).exists()).toBe(true)
  })
})
