import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

function Home() {

  const [search ,setSearch] =useState('')
  const [foodItem, setFoodItem] = useState([])
  const [foodCategory, setFoodCategory] = useState([])

  const loadData = async () => {
    const response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    // console.log(data[0],data[1])  
    setFoodItem(data[0])
    setFoodCategory(data[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        <Navbar />
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div class="carousel-inner" id='carousal'>
            <div class="carousel-caption d-none d-md-block " style={{ zIndex: "100" }}>
              <div class="d-flex justify-content-center">
                <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                {/* <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>

            <div class="carousel-item active">
              <img src="https://picsum.photos/900/500?random=1" class="d-block w-100" alt="Burger" style={{ filter: "brightness(30%)" }} />
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

        <div className='container m-3'>
          {
            foodCategory.length > 0 ? foodCategory.map((data) => {
              return (
                <div className='row mb-4' key={data._id}>
                  {/* Category Name */}
                  <div className='col-12'>
                    <h3 className='fs-3 m-3 '>{data.CategoryName}</h3>
                    <hr />
                  </div>

                  {/* Food Items */}
                  {foodItem.length > 0 ? foodItem
                    .filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filterItem) => {
                      return (
                        <div key={filterItem._id} className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4'>
                          <Card foodItems={filterItem}
                            options={filterItem.options}
                           
                          />
                        </div>
                      );
                    })
                    : <div className='col-12 text-center'>No items available</div>}
                </div>
              );
            }) : <div className='text-center'>Loading...</div>
          }
        </div>

        <Footer />
      </div >
      <div></div>
    </>
  )
}

export default Home