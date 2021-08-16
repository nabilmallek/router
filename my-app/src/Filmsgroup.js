import React from 'react'
 

function Filmsgroup(props){
    return(
<div className="col-md-4 col-sm-6 border">
<div className="card">
    <di className="card-header">
      <img style={{maxWidth:'100%'}}   src={props.info.img} alt=""/>
    </di>
    <div className="card-body">
     <h2> {props.info.title} </h2>
     <h5> {props.info.description} </h5>
    </div>
</div>
</div>
    )
}
export default Filmsgroup;