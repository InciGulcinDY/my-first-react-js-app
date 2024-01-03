import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../../services/ProductService';

function ProductDetail() {

    let {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(()=>{
      ProductService.getById(id).then(result=>setProduct(result.data))
    }, [])

  return (
    <div>
        <div className="container card mb-3" >
            <div className="row g-0 my-auto">
                <div className="col-md-4">
                    <img src={product.thumbnail} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{product.brand}  {product.title}</h4>
                        <h5 className="card-title">{product.description}</h5>
                        <p className="card-text">{product.category}</p>
                        <h4 className="card-title">{product.price} tl</h4>
                    </div>
                    <div className="d-grid d-md-block">
                        <button className="btn btn-primary mx-3" type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail