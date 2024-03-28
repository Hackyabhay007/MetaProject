import React from 'react'
import { Link } from 'react-router-dom'
import dHeader from "../assets/dHeader.png"
import D1 from "../assets/d1.png"
import D2 from "../assets/d2.png"
import D3 from "../assets/d3.png"
import D4 from "../assets/d4.png"
import D5 from "../assets/d5.png"
import D6 from "../assets/d6.png"
import D7 from "../assets/d7.png"
import D8 from "../assets/d8.png"
import Footer from "../assets/footer.png"


const Download = () => {
  return (
    <>
        <Link to="/metamask">
            <img src={dHeader} className='img-fluid' />
            <div className='flex gap-5 flex-col md:mx-52 p-2'>
                <img src={D1} className='img-fluid' />
                <img src={D2} className='img-fluid' />
                <img src={D3} className='img-fluid' />
                <img src={D4} className='img-fluid' />
                <img src={D5} className='img-fluid' />
                <img src={D6} className='img-fluid' />
                <img src={D7} className='img-fluid' />
                <img src={D8} className='img-fluid' />
                <img src={Footer} className='img-fluid' />
            </div>
        </Link>
    </>
  )
}

export default Download