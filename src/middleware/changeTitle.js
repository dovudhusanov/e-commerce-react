function changeTitle(title) {
    const prevTitle = document.title
    document.title = title
    return () => {
        document.title = prevTitle
    }
}

export default changeTitle