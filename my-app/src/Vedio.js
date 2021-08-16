import React from 'react'

 function Vedio() {
    return (
        <div>
           <h2>Gladiator</h2> 
           <video width="500" height="300" controls>
            < source src="../vedios/glad.mp4" type="video/mp4"/>
             </video>
             <h2>Me befor you</h2>
             <video width="500" height="300" controls>
                 <source src="../vedios/me.mp4" type="video/mp4"/>
             </video>
             <h2>Ong bak</h2>
            <video width="500" height="300" controls>
                <source src="../vedios/ong.mp4 " type="video/mp4"/>
                </video> 
           
        </div>
    )
}
export default Vedio
