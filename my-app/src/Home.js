import React from 'react'
import Filmsgroup from './Filmsgroup';
 function Home() {
    return (
      <div className="row">
      
      
      <Filmsgroup 
      info = {
    {
          img:'/images films/braveheart.jpg',
          title:'Brave Heart',
          description:'History film',

}
}
      />
       <Filmsgroup 
      info = {
    {
          img:'/images films/Gladiator.jpeg',
          title:'Gladiator',
          description:'History film',

}
}
 />
       <Filmsgroup 
      info = {
    {
          img:'/images films/me before you.jpg',
          title:'Me before you',
          description:'Romantic film',

}
}
 />
       <Filmsgroup 
      info = {
    {
          img:'/images films/resort.jpg',
          title:'Resort',
          description:'Romantic film',

}
}
 />
      <Filmsgroup 
      info = {
    {
          img:'/images films/speed.jpg',
          title:'Speed',
          description:'Action film',

}
}
 /> 
       <Filmsgroup 
      info = {
    {
          img:'/images films/ong bak.jpg',
          title:'Ong bak',
          description:'Action film',

}
}
 />
      </div>
    )


    
}
export default Home