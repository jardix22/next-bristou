const Event = ({tag, title, image, comments, published, summary, callToAction}) => {
  return (
    <div>
      <img src={ image } />
      <div>{ tag }</div>
      <h3>{ title }</h3>
      <div>
        <span>{ comments }</span>
        <span>{ published }</span>
      </div>
      <p>{ summary }</p>
      <a href={ callToAction }>continue reading</a>
    </div>
  )
}

export default Event
