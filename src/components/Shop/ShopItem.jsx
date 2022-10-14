import React from 'react'
import './styles.css'

const ShopItem = ({item}) => {
  return (
    <div className='shop-body__item'>
        <img src={item.src} alt="shop item image" />
        <h3 className='shop-body__item--title'>{item.title}</h3>
        <div className='shop-body__item--mask'>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default ShopItem;