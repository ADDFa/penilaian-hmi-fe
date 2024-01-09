import { Message } from "./Alert"

class HandleResponseError {
    constructor(err: Record<string, any>) {
        console.log(err)
        if ("errors" in err) this.showErrors(err.errors)
        if ("message" in err) this.showMessage(err.message)
    }

    private showErrors(err: Record<string, any>) {
        for (const name in err) {
            const el = document.querySelector(`[name="${name}"]`)
            if (!el) return
            if (el.classList.contains("is-invalid")) return

            el.classList.add("is-invalid")

            const invalidEl = document.createElement("p")
            invalidEl.classList.add("invalid-feedback")
            invalidEl.id = name

            const invalidText = document.createTextNode(err[name])
            invalidEl.append(invalidText)

            el.parentElement?.append(invalidEl)

            this.handleInput(el)
        }
    }

    private handleInput(el: Element) {
        const onInput: EventListenerOrEventListenerObject = () => {
            el.classList.remove("is-invalid")

            const parentEl = el.parentElement as HTMLElement
            const invalidEl = parentEl.querySelector(".invalid-feedback")
            if (invalidEl) invalidEl.remove()
        }

        el.addEventListener("input", onInput)
    }

    private showMessage(text: string) {
        Message.fire({ icon: "warning", text })
    }
}

export default HandleResponseError
