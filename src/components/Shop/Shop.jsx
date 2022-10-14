import React from 'react'
import SectionTitle from '../common/SectionTitle';
import ShopItem from './ShopItem';
import shopItems from './shopItems';


const Shop = () => {


  return (
    <section className='shop'>
        <div className="container-wrapper">
            <SectionTitle sectionHeader='Shop'/>
            <div className="about-body">
                {shopItems.map(item => <ShopItem item={item}/>)}
            </div>
        </div>       
    </section>
  )
}

export default Shop;