namespace Api {
    type Body = HTMLFormElement | Object

    interface RequestInitI extends RequestInit {
        body?: Body
    }
}
