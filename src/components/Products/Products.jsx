import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products.jsx'
import {useAutoAnimate} from '@formkit/auto-animate/react'


const Products = () => {

    const[parents] = useAutoAnimate({});




    const [MenuProducts, setMenuProducts] = useState(ProductsData)

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product)=>product.type === type))
    }
  return (
    <div className={css.container}>
        <img src={Plane} alt="product" />
        <h1>Our Featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu} >
                <li onClick={()=> setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>
                <li onClick={()=>filter("foundation")}>Foundations</li>
                </ul>

                <div className={css.list} ref={parents}>
                    {
                        MenuProducts.map((product, i)=>(
                            <div className={css.product}>
                               <div className="left-s">
                                <div className={css.name}>
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span></div>

                                    <span>#{product.price}</span>
                                    <div>Shop now</div>

                                </div>
                                <img src={product.img} alt="product" className="img-p"/>

                            </div>

                        ))
                    }



                    </div>
                </div>
    </div>
  )
}

export default Products