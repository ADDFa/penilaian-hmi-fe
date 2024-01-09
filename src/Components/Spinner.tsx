const Spinner = () => {
    return (
        <div className="row row-cols-1">
            <div className="col text-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner
