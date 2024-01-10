namespace UserTraining {
    type UserTrainingT = {
        training: Record<string, any>
        users: Record<string, any>[]
    }

    interface DeleteUserTrainingI {
        user_id: string | number
        userTraining: UserTrainingT
        setUserTraining: React.Dispatch<
            React.SetStateAction<UserTrainingT | undefined>
        >
    }

    interface UsersScoreI {
        users: Record<string, any>[]
    }
}
