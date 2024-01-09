import Auth from "./Auth"
import HandleResponseError from "./HandleResponseError"
import ParseBody from "./ParseBody"

class Api {
    private baseUrl = "http://127.0.0.1:8000"
    private uri = ""

    private init: RequestInit = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    constructor(uri: string, init?: Api.RequestInitI) {
        this.uri = uri

        if (init?.body) {
            this.init.method = "POST"

            const body = new ParseBody(init.body)
            this.init.body = body.getBody
        }
    }

    private async getToken(): Promise<string> {
        const token = Auth.token
        if (!token) return ""

        let payloadStr = token.split(".")[1]
        payloadStr = atob(payloadStr)

        const payload = JSON.parse(payloadStr)
        const exp = payload.exp * 1000
        const date = new Date()
        const time = date.getTime() + 10

        if (exp < time) {
            const req = await fetch(`${this.baseUrl}/api/refresh-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token_refresh: Auth.refreshToken })
            })
            if (!req.ok) {
                localStorage.clear()
                location.href = "/"
            }

            const res = await req.json()
            Auth.auth = res
        }

        return Auth.token as string
    }

    async result(): Promise<any> {
        const token = await this.getToken()
        const init: RequestInit = {
            ...this.init,
            headers: {
                ...this.init.headers,
                Authorization: `Bearer ${token}`
            }
        }

        const req = await fetch(`${this.baseUrl}/api/${this.uri}`, init)
        const res = await req.json()
        if (req.status === 200) return res

        new HandleResponseError(res)
        return undefined
    }
}

export default Api
