import './profileCard.css';

 function profileCard(props) {
  return (
    <div className='card'>
      <div className='pfp'>
      <img src={props.pfp} alt="Profile"></img>
      </div>
      <div className='pInfo'>
      <h2>{props.name} <span>{props.age}</span></h2>

      <p>{props.place}</p>
      </div>
      <div className='stats'>
      <ul>
          <li>
            <strong>{props.followers}</strong>
            <p>Followers</p>
          </li>
          <li>
            <strong>{props.likes}</strong>
            <p>Likes</p>
          </li>
          <li>
            <strong>{props.photos}</strong>
            <p>Photos</p>
          </li>
        </ul>
  
      </div>
    </div>
  )
}

export default profileCard;
