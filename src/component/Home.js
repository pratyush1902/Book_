import React, { useState, useEffect } from 'react'
import { Api_url } from '../Api'
import './style.css';
import axios from 'axios'
import { useAppContext } from './context/appContext';
// import { useNavigate } from 'react-router';


export default function Home() {
    const [books, setBooks] = useState([]);
    const { fav, addToFav, removeFromFav } = useAppContext();
    // console.log('favorites are', fav);
    // const navigate=useNavigate();

    const favChecker = (id) => {
        const boolean = fav.some((book) => book.id === id);
        return boolean
    }


    useEffect(() => {
        axios.get(Api_url).then((res) => {
            console.log(res.data);
            setBooks(res.data)
        })
            .catch((err) => {
                console.log(err);
            })

    }, [])
    return (
        <div className='home'>
            {books.map((book) => {
                return <div key={book.id} className="book">
                    <div><h2>{book.title.slice(0, 12)}...</h2></div>
                    <div><img src={book.image_url} alt="@"  /></div>
                    <div><h5> Author:{book.authors}</h5></div>
                    <div>{favChecker(book.id) ?
                      (  <button onClick={() => removeFromFav(book.id)} className='buttons'>Remove from Favorites</button>) :( <button onClick={() => addToFav(book)} className='button'>Add to Favorites</button> )
                }
                </div>

                </div>
            })}
        </div>
    )
}
