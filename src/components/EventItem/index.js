import './index.css'

const EventItem = props => {
  const {event, setActiveId} = props

  const {id, imageUrl, name, location} = event

  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <>
      <li className="list-item">
        <button type="button" onClick={onClickEvent}>
          <img src={imageUrl} alt="event" className="image" />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
