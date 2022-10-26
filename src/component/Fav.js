import React from 'react'
import './style.css';
import { useAppContext } from './context/appContext';


export default function Fav() {
  const { fav, addToFav, removeFromFav } = useAppContext();
    console.log('favorites are', fav);

    const favChecker = (id) => {
        const boolean = fav.some((book) => book.id === id);
        return boolean
    }
  return (
    <div className='favs'>
       {fav.length>0? fav.map((book) => {
                return <div key={book.id} className="book">
                    <div><h2>{book.title.slice(0, 12)}...</h2></div>
                    <div><img src={book.image_url} alt="@" /></div>
                    <div><h5> Author:{book.authors}</h5></div>
                    <div>{favChecker(book.id) ?
                      (  <button onClick={() => removeFromFav(book.id)} className='buttons'>Remove from Favorites</button>) :( <button onClick={() => addToFav(book)} className='button'>Add to Favorites</button> )
                }
                </div>

                </div>
            }):<h1>you dont have any fav</h1>}
    </div>
  )
}
