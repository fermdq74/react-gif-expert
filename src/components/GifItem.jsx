export const GifItem = ({ title, url }) => {

    return (
        <>
            <div className="card">
                <img src={ url} title={ title } />
                <p>{ title }</p>
            </div>
        </>
    )
}
