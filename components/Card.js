const Card = ({ tag, title, comments, published }) => {
  return (
    <div>
      <div>{ tag }</div>
      <h2>{ title }</h2>
      <div>
        <span>{ comments }</span>
        <span>{ published }</span>
      </div>
    </div>
  )
}

export default Card
