export function CharacterPagination({
    next,
    prev,
    onNext,
    onPrev,
}){
    return(
        <div>
            <button
                disabled={!prev}
                onClick={onPrev}
            >
                Previous
            </button>

            <button
                disabled={!next}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    )
}