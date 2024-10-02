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
       <Carousal setSearch={setSearch}/>

        <div className='container m-3 '>
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