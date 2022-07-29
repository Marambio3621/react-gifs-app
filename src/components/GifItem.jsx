export const GifItem = ({title, url}) => {

  return (
    <>
        <div className="card">
            <img className="gif_size" src={url} alt={title} />
            <p>{title}</p>
        </div>
        {/*<li key={id}> {title} </li>*/ }
    </>
  )
}
