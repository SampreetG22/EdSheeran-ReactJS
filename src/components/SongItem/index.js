import {BiTrashAlt} from 'react-icons/bi'
import './index.css'

const SongItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, genre, name, duration} = details
  const deleteClicked = () => {
    deleteSong(id)
  }
  return (
    <li className="listItem">
      <div className="container1">
        <img src={imageUrl} alt="track" className="thumbnailCSS" />
        <div className="nameAndGenre">
          <p className="songName">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="durationAndDelete">
        <p className="duration">{duration}</p>
        <button
          data-testid="delete"
          onClick={deleteClicked}
          className="trashBtn"
          type="button"
        >
          <BiTrashAlt />
        </button>
      </div>
    </li>
  )
}

export default SongItem
