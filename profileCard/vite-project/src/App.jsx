
import ProfileCard from './components/profileCard/profileCard'

function App() {

  return (
   <div>
     <ProfileCard
     pfp="https://storage.googleapis.com/pfpai/styles/3265a266-3c54-4460-9e07-3bfc95cadca2.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=headshotpro-backend-production%40stockai-362303.iam.gserviceaccount.com%2F20240701%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240701T020915Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=596fa1742ae6343d1b5c9ddb582303aec8ed3f81422d831abf593501dff42ce6b351895b5986ef3600626874d3867b4d5ae7abd29d135ba38461713a21c4c12c50adc52562f01b0a2d52c67f22f7b2ee456a76b818b2e5ecc56c45587222f2b592de5b3e3865b253942e973f6f235f016ab70db95af2cb664ee113828751f2dbde7cc170655016fcafd6e11d3e7a1fbe86add131fdf9c1f3d1ca13f49dde6c7b0c5acb933d9803512513078e86dbd541356fc540a7149cb94a35d1a9f7d4901d544692f086fe1163f0078c26ec62ffff6565d4314190aa3da2f8e8934f203608956195d8f2b8df98b7f81fe4b300956b81eb3a6c14c3afb0a34febe858ceefaf"
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
