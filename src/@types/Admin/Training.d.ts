namespace Training {
    type TrainingT = Record<string, any>

    interface DeleteTrainingI {
        id: string | number
        trainings: TrainingT[]
        setTrainings: React.Dispatch<
            React.SetStateAction<TrainingT[] | undefined>
        >
    }
}
