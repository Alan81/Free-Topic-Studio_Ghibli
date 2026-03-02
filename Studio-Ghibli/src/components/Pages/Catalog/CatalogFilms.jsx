import React, { useState } from 'react'
import '../../CSS/Catalog/CatalogFilms.css'
import Img from '../../Image/Banner/Text Catalog of Works.png'
import Bottom_Pattern from '../../Image/Pattern/Bottom Pattern.png'
import Top_Pattern from '../../Image/Pattern/Top Pattern.png'
import Img1 from '../../Image/Banner/Posters/The Boy and The Heron.png'
import Img2 from "../../Image/Banner/Posters/Mary And The Witch's flower.png"
import Img3 from '../../Image/Banner/Posters/When Marnie Was There.png'
import Img4 from '../../Image/Banner/Posters/The Tale Of The Princess Kaguya.png'
import Img5 from '../../Image/Banner/Posters/The Wind Rises.png'
import Img6 from '../../Image/Banner/Posters/From On Up Poppy Hill.png'
import Img7 from '../../Image/Banner/Posters/The Secret World Of Arrietty.png'
import Img8 from '../../Image/Banner/Posters/Ponyo.png'
import Img9 from '../../Image/Banner/Posters/Tales From Earthsea.png'
import Img10 from "../../Image/Banner/Posters/Howl's Moving Castle.png"
import Img11 from '../../Image/Banner/Posters/The Cat Returns.png'
import Img12 from '../../Image/Banner/Posters/Spirited Away.png'
import Img13 from '../../Image/Banner/Posters/Princess Mononoke.png'
import Img14 from '../../Image/Banner/Posters/Whisper Of The Heart.png'
import Img15 from '../../Image/Banner/Posters/Pom Poko.png'
import Img16 from '../../Image/Banner/Posters/Ocean Waves.png'
import Img17 from '../../Image/Banner/Posters/Porco Rosso.png'
import Img18 from '../../Image/Banner/Posters/Only Yeasterday.png'
import Img19 from "../../Image/Banner/Posters/Kiki Delivery Service.png"
import Img20 from '../../Image/Banner/Posters/NausicaA Of The Valley Of The Wind.png'
import Img21 from '../../Image/Banner/Posters/My Neighbor Totoro.png'
import Img22 from '../../Image/Banner/Posters/Grave Of The FireFlies.png'
import Img23 from '../../Image/Banner/Posters/Castle In The Sky.png'

const Poster = [
    {
      id: 1,
      img: Img1,
      link: "#",
      genres: ["Drama", "Adventure"]
    },
    {
      id: 2,
      img: Img2,
      link: "#",
      genres: ["Adventure", "Drama"]
    },
    {
      id: 3,
      img: Img3,
      link: "#",
      genres: ["Drama"]
    },
    {
      id: 4,
      img: Img4,
      link: "#",
      genres: ["Fantasy", "Drama"]
    },
    {
      id: 5,
      img: Img5,
      link: "#",
      genres: ["Romantic", "Drama"]
    },
    {
      id: 6,
      img: Img6,
      link: "#",
      genres: ["Drama", "Romantic"]
    },
    {
      id: 7,
      img: Img7,
      link: "#",
      genres: ["Adventure"]
    },
    {
      id: 8,
      img: Img8,
      link: "#",
      genres: ["Adventure", "Drama"]
    },
    {
      id: 9,
      img: Img9,
      link: "#",
      genres: ["Adventure", "Fantasy"]
    },
    {
      id: 10,
      img: Img10,
      link: "#",
      genres: ["Romantic", "Drama"]  
    },
    {
      id: 11,
      img: Img11,
      link: "#",
      genres: ["Adventure", "Fantasy"]
    },
    {
      id: 12,
      img: Img12,
      link: "#",
      genres: ["Drama", "Fantasy"]
    },
    {
      id: 13,
      img: Img13,
      link: "#",
      genres: ["Drama", "Romantic"]
    },
    {
      id: 14,
      img: Img14,
      link: "#",
      genres: ["Drama", "Adventure"]
    },
    {
      id: 15,
      img: Img15,
      link: "#",
      genres: ["Drama"]
    },
    {
      id: 16,
      img: Img16,
      link: "#",
      genres: ["Romantic", "Drama"]
    },
    {
      id: 17,
      img: Img17,
      link: "#",
      genres: ["Adventure", "Drama"]
    },
    {
      id: 18,
      img: Img18,
      link: "#",
      genres: ["Romantic", "Drama"]
    },
    {
      id: 19,
      img: Img19,
      link: "#",
      genres: ["Drama", "Adventure"]
    },
    {
      id: 20,
      img: Img20,
      link: "#",
      genres: ["Drama", "Adventure"]
    },
    {
      id: 21,
      img: Img21,
      link: "#",
      genres: ["Fantasy", "Drama", "Adventure"]
    },
    {
      id: 22,
      img: Img22,
      link: "#",
      genres: ["Drama"]
    },
    {
      id: 23,
      img: Img23,
      link: "#",
      genres: ["Drama", "Adventure"]
    },
]

const CatalogFilms = () => {
    // Состояние для выбранного жанра
    const [selectedGenre, setSelectedGenre] = useState("All");

    // Фильтрация постеров на основе выбранного жанра
    const filteredPosters = selectedGenre === "All" 
        ? Poster 
        : Poster.filter(poster => poster.genres.includes(selectedGenre));

    return (
        <section id='catalog-films'  className='section'>
            <div className='logContainer'>
                <div className='logMainRow'>

                    <div className='logBannerSection'>
                        <img src={Img} alt="Catalog Banner" className='bg-log-banner' />
                    </div>

                    <div className='CatalogRow'>

                        <div className='logGenresGrid'>
                            <ul className='logGrid'>
                                <li className={selectedGenre === "All" ? "active" : ""} onClick={() => setSelectedGenre("All")}>
                                  All
                                </li>

                                <li className={selectedGenre === "Drama" ? "active" : ""} onClick={() => setSelectedGenre("Drama")}>
                                  Drama
                                </li>

                                <li className={selectedGenre === "Fantasy" ? "active" : ""} onClick={() => setSelectedGenre("Fantasy")}>
                                  Fantasy
                                </li>

                                <li className={selectedGenre === "Romantic" ? "active" : ""} onClick={() => setSelectedGenre("Romantic")}>
                                    Romantic
                                </li>

                                <li className={selectedGenre === "Adventure" ? "active" : ""} onClick={() => setSelectedGenre("Adventure")}>
                                    Adventure
                                </li>
                            </ul>
                        </div>

                        <div className='logPosterRow'>
                            <img src={Top_Pattern} alt="Top Pattern" className='TopPattern'/>

                            <div className='logPosterGrid'>
                                {filteredPosters.map((poster) => (
                                    <div key={poster.id} className="logPosterCard">
                                        <a href={poster.link} className='logPosterLink'>
                                            <img src={poster.img} alt={`Poster ${poster.id}`} className='logPosterImage'/>
                                        </a>
                                    </div>
                                ))}
                            </div>                            

                            <img src={Bottom_Pattern} alt="Bottom Pattern" className='BottomPattern' />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatalogFilms