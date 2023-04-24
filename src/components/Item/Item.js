import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, name, price, category, img, stock, alias, seedQuantity}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'></img>
            </picture>
            <section className='Info'>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item