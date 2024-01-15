namespace Fouls {
    interface Fouls {
        fouls: Record<string, any>[]
        setFouls: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
    }

    interface AddFoulsI {
        user: User.UserT
        getUserScore: (then?: () => void) => void
    }

    interface RemoveFoulsI {
        id: string | number
        getUserScore: (then?: () => void) => void
    }
}
