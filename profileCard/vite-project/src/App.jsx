
import ProfileCard from './components/profileCard/profileCard'
import pfp from './assets/circlePfp.png'

function App() {

  return (
   <div>
     <ProfileCard
      pfp={pfp}
      name="Jane"
      age="20"
      place="London"
      followers="200"
      likes="5k"
      photos="65"
    />
   </div>
    
  )
}

export default App
