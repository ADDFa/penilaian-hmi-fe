import UserScore from "../../Pages/Admin/UserTraining/Function/UserScore"

namespace Liveliness {
    interface AddLiveliness {
        score: UserScore | undefined
        getUserScore: (then?: () => void) => void
    }

    interface DeleteLiveLiness {
        id: number | string
        getUserScore: (then?: () => void) => void
    }

    interface EditLivelinessI {
        getUserScore: (then?: () => void) => void
        UrlSearchParams: URLSearchParams
        setUrlSearchParams: SetURLSearchParams
    }
}
