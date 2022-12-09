import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Footer from '../components/Footer';

const Home = () => {

    const searchData = useSelector((state) => state.search.search);
    const API_URL = 'http://www.omdbapi.com/?apikey=ca3b17a';
    window.onscroll = () => {
        const header = document.getElementById('navbar');
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    };

    const [movieList, setMovieList] = useState();

    useEffect(() => {
        axios
            .get(`${API_URL}&s=${searchData}`)
            .then((res) => {

                setMovieList(res.data.Search);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [API_URL, searchData]);
    return (
        <div className='mx-auto bg-gradient-to-br from-[#161334]/80 via-[#B286AB] to-[#7493D3] bg-cover'>
            <Navbar />
            <div className='flex flex-wrap gap-4 justify-evenly w-5/6 mx-auto'>
                {movieList?.length > 0 ? (
                    movieList.map((movie) => <Card key={movie.imdbID} movie={movie} />)
                ) : (
                    <div className='empty'>
                        <h2>No movieList Found</h2>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Home;