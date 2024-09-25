// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, changeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const activeClassName = isActive ? 'active-container' : 'item-container'

  const onChangeImage = () => {
    changeImage(id)
  }

  return (
    <li className={activeClassName}>
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail"
          onClick={onChangeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
