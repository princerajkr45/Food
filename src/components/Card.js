import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';


function Card(props) {

    const priceRef =useRef()
    const dispatch = useDispatchCart();
    const data = useCart()
    const optionsObject = props.options[0];
    const priceOptions = Object.entries(optionsObject);
    const [qty,setQty] =useState(1)
    const [size,setSize] = useState('')
    const foodItem =props.foodItems

    const finalPrice = qty * parseInt(optionsObject[size])

    const handleAddToCard = async () => {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price:finalPrice, qty: qty, size: size })

        console.log(data)
    }

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])

    // const finalPrice = (qty * foodItem.price) + (qty * foodItem.price * (optionsObject[size] / 100))
    return (
        <>
            <div className="card mt-3 " style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={foodItem.img} alt="..." className='' style={{height:"120px" ,objectFit:"fill"}}/>
            <div className="card-body ">
                <h5 className="card-title">{foodItem.name}</h5>
                {/* <p className="card-text">{props.description}</p> */}
                <div className='container w-100 '>
                    <select className='m-2 h-100  bg-success' onChange={(e)=> setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>

                            )
                        })}
                    </select>

                        <select className='m-2  h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map(([key]) => {
                          return (
                            <option key={key} value={key}>{key}</option>
                          )
                        })
                        }
                    </select>

                    <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                    </div>
                    <hr></hr>
                        <div className='btn bg-success rounded justify-center mx-1' onClick={handleAddToCard}>Add to Cart</div>
                </div>
            </div>
        </div>
    </ >
  )
}

export default Card