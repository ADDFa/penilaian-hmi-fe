class ParseBody {
    private body: any

    constructor(body: Api.Body) {
        if (body instanceof HTMLFormElement) {
            this.body = this.bodyFromForm(body)
        } else {
            this.body = body
        }
    }

    private bodyFromForm(form: HTMLFormElement) {
        let body: any = new FormData(form)
        body = Object.fromEntries(body)

        return body
    }

    public get getBody(): any {
        const data = this.body
        const result: Record<string, any> = {}
        for (const name in data) {
            if (data[name]) result[name] = data[name]
        }

        return JSON.stringify(result)
    }
}

export default ParseBody
