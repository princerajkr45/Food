import React from 'react'
import burger from '../assets/burger.avif'
import pizza from '../assets/pizza.avif'
import fries from '../assets/fries.avif'
import momo from '../assets/momo.jpg'

function Carousal({ setSearch }) {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div class="carousel-inner" id='carousal'>
                    <div class="carousel-caption d-none d-md-block " style={{zIndex:"100"}}>
                        <form class="d-flex" onSubmit={(e)=>e.preventDefault()}>
                            <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
                            
                        </form>
                    </div>
                    
                    <div class="carousel-item active">
                        <img src={burger} class="d-block w-100" alt="Burger" style={{filter:"brightness(30%)"}}/>
                    </div>
                    <div class="carousel-item">
                        <img src={pizza} class="d-block w-100" alt="Pizza" />
                    </div>
                    <div class="carousel-item">
                        <img src={momo} class="d-block w-100" alt="Momo" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </>
    )
}

export default Carousal