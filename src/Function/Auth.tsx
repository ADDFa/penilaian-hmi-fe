class Auth {
    static get token() {
        return localStorage.getItem("token_access")
    }

    static get refreshToken() {
        return localStorage.getItem("token_refresh")
    }

    static set auth(data: Record<string, any>) {
        for (const key in data) {
            if (typeof data[key] === "string") {
                localStorage.setItem(key, data[key])
            }

            if (typeof data[key] === "object") {
                const dataObj = JSON.stringify(data[key])
                localStorage.setItem(key, dataObj)
            }
        }
    }
}

export default Auth
