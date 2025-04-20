import { createApp, h } from 'vue'
import Greeter from './Greeter.vue'

window.Greeter = {
    init(selector, props) {
        const target = document.querySelector(selector)
        if (!target) {
            console.error(`[Greeter] Element "${selector}" not found.`)
            return
        }

        const app = createApp({
            render() {
                return h(Greeter, props)
            },
        })

        app.mount(target)
    },
}
