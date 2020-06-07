import React from 'react';


const MediaCard =({title,body,imageUrl}) =>  <div className="MediaCard"> <h2> Title: { title } </h2> <p> Body: { body }</p> <img src={imageUrl} alt = {imageUrl}/>  </div>

export default MediaCard;
