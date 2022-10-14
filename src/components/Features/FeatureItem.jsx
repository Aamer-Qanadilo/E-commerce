import React from 'react'

const FeatureItem = ({item}) => {
  return (
    <div className='featured-item'>
        <div className='featured-item__img'>
            <img src={item.imgSrc} alt="Featured item image" />
            {item.new ? <p className='featured-item__img--new'>NEW</p> : <></>}
            <div className='featured-item__img--mask'>
                <button>QUICK VIEW</button>
            </div>
        </div>
        <div className='featured-item__content'>
            <h3 className='featured-item__content--header'>{item.title}</h3>
            <p className='featured-item__content--price'>${item.price}</p>
        </div>
    </div>
  )
}

export default FeatureItem;