import React, { useEffect, useState } from "react";
import './shop.css';


function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getproducts();
    }, []);


    const getproducts = () => {
        fetch('http://localhost:5000/')
            .then((res) => res.json())
             .then((json) => setProducts(JSON.parse(json)))
    };

    console.log(products);

    return (
        <div className="d-flex row justify-content-around ">
            {products.map((item) => {
                return (
                    <div key={item.id} class=" two card col-3 mx-1 my-2">
                        <div >
                            <img src={item.image} class="card-img-top" alt="..." />
                        </div>
                        <div class="three card-body text-center">
                            <p class="qw card-title">{item.title}</p>
                            <p class="card-text">{item.price} EGP</p>
                            <a href="#" class="btt btn btn-primary">Buy</a>
                        </div>
                    </div>


                );
            })}
        </div>
    );





}
export default Shop