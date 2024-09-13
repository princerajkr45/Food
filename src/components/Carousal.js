import React from 'react'

function Carousal() {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div class="carousel-inner" id='carousal'>
                    <div class="carousel-caption d-none d-md-block " style={{zIndex:"100"}}>
                        <form class="d-flex">
                            <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/900/500?random=1" class="d-block w-100" alt="Burger" style={{filter:"brightness(30%)"}}/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/900/500?random=2" class="d-block w-100" alt="Momo" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/900/500?random=3" class="d-block w-100" alt="Noodles" />
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