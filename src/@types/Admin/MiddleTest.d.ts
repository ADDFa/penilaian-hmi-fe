import UserScore from "../../Pages/Admin/UserTraining/Function/UserScore"

namespace MiddleTest {
    interface AddMiddleTestI {
        score: UserScore | undefined
        getUserScore: (then?: () => void) => void
    }

    interface DeleteMiddleTestI {
        id: number | string
        getUserScore: (then?: () => void) => void
    }

    interface EditMiddleTestI {
        getUserScore: (then?: () => void) => void
        UrlSearchParams: URLSearchParams
    }
}
