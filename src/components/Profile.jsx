import React from 'react'
import Card from './Card'
const Profile = () => {
    const user =[
        {
          "name": "Amit Sharma",
          "age": 29,
          "city": "Mumbai",
          "profession": "Software Engineer",
          "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcRBiteaBEYaLrCJZphaN0t88OYZc4-NNQA&s"
        },
        {
          "name": "Priya Verma",
          "age": 26,
          "city": "Delhi",
          "profession": "Graphic Designer",
          "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qyiiwhrhL6T7EgmDzXcPzaSXmHU7g_TR-M8fCRhDgwriNojHqwDOGsoDmwJm3SnczJs&usqp=CAU"
        },
        {
          "name": "Rahul Nair",
          "age": 34,
          "city": "Bangalore",
          "profession": "Data Scientist",
          "profile_photo": "https://example.com/profiles/rahul_nair.jpg"
        },
        {
          "name": "Sneha Patil",
          "age": 31,
          "city": "Pune",
          "profession": "Doctor",
          "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
        },
        {
          "name": "Vikram Singh",
          "age": 38,
          "city": "Jaipur",
          "profession": "Entrepreneur",
          "profile_photo": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
        }
      ]
  return (
    <div className='flex'>
        {user.map(function(elem,ind){
          return <Card key={ind} name={elem.name} city={elem.city} age={elem.age} profession={elem.profession} photo={elem.profile_photo} />
        })}
    </div>
  )
}

export default Profile