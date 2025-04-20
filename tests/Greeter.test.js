import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Greeter from '../src/Greeter.vue'

describe('Greeter.vue', () => {
    it('renders button', () => {
        const wrapper = mount(Greeter, { props: { message: 'Hi!' } })
        expect(wrapper.text()).toContain('Say Hello')
    })

    it('prints message when clicked', async () => {
        const spy = vi.spyOn(console, 'log')
        const wrapper = mount(Greeter, { props: { message: 'Hi there!' } })
        await wrapper.find('button').trigger('click')
        expect(spy).toHaveBeenCalledWith('Hi there!')
    })
})
