import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className='descpt'>{description}</p>
       <div className="place-img"><img className="imHt" src={imgUrl} alt={title} /></div> 
      </div>
    </li>
  )
}

export default Card
