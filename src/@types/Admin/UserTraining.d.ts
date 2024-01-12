import UserScore from "../../Pages/Admin/UserTraining/Function/UserScore"

namespace UserTraining {
    interface DeleteUserTrainingI {
        user_id: string | number
        users: UserScore[]
        setUsers: React.Dispatch<React.SetStateAction<UserScore[] | undefined>>
    }
}
