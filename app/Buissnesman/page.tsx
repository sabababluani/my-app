'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import styles from './page.module.scss';


const Buissnesman = () => {

    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('asc');
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
            .then((result) => {
                setProducts(result.data)
                console.log(result);
            })
            .catch((error) => {
                console.log('verr', error.response);
            })
    }, [sort, limit])

    const onSortChange = (e: any) => {
        setSort(e.target.value);
    }

    const onLimitChange = (e: any) => {
        setLimit(+e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputContainer}>
                <label htmlFor="1">Limit</label>
                <input type="number"
                    id="1"
                    value={limit}
                    onChange={onLimitChange}
                />
            </div>
            <ul className={styles.container}>
                {products.map((product: any) =>
                    <li>
                        <div className={styles.imgContainer}>
                            <img src={product.image} />
                        </div>
                        <div className={styles.titleContainer}>
                            <p>{product.title}</p>
                        </div>
                        <div>
                            <p>{product.price}$</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Buissnesman;


