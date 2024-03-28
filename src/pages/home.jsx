import React from 'react';
import { Link } from 'react-router-dom';

import hHeader from '../assets/home/hHeader.png'
import H1 from "../assets/home/h1.png";
import H2 from "../assets/home/h2.png";
import H3 from "../assets/home/h3.png";
import H4 from "../assets/home/h4.png";
import H5 from "../assets/home/h5.png";
import H6 from "../assets/home/h6.png";
import H7 from "../assets/home/h7.png";
import H8 from "../assets/home/h8.png";
import H9 from "../assets/home/h9.png";
import H10 from "../assets/home/h10.png";
import H11 from "../assets/home/h11.png";
import H12 from "../assets/home/h12.png";
import H13 from "../assets/home/h13.png";
import hFooter from "../assets/home/footer.png";


const Home = () => {
  return (
    <>
    <Link to="/download">
        <img src={hHeader} className='img-fluid mx-auto' />
        <div className='flex flex-wrap w-full justify-center items-center'>
            <img src={H1} className='img-fluid' />
            <img src={H2} className='img-fluid' />
        </div>
        <div className='flex flex-wrap w-full justify-center items-center gap-10'>
            <img src={H3} className='img-fluid' />
            <img src={H4} className='img-fluid' />
        </div>
        <div className='flex flex-wrap w-full justify-center items-center gap-10'>
            <img src={H5} className='img-fluid' />
            <img src={H6} className='img-fluid' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <br/><br/>
            <img src={H7} className='img-fluid' />
            <img src={H8} className='img-fluid' />
            <br/><br/>
            <img src={H9} className='img-fluid w-full' />
            <img src={H10} className='img-fluid w-full' />
            <img src={H11} className='img-fluid w-full' />
            <img src={H12} className='img-fluid w-full' />
            <img src={hFooter} className='img-fluid w-full' />
        </div>
    </Link>
    </>
  )
}

export default Home