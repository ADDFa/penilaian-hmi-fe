namespace User {
    type UserT = Record<string, any>

    interface DeleteUserI {
        id: string | any
        users: UserT[]
        setUsers: React.Dispatch<React.SetStateAction<UserT[] | undefined>>
    }
}
