import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { ...data, id: response.id }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemDetail
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    img={product.img}
                    stock={product.stock}
                    alias={product.alias}
                    seedQuantity={product.seedQuantity}
                />
            )}
        </div>
    )
}

export default ItemDetailContainer
