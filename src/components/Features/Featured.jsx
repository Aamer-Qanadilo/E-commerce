import React from 'react'
import './styles.css'
import SectionTitle from '../common/SectionTitle';
import FeatureItem from './FeatureItem';

const Featured = ({featuredItems}) => {
    

  return (
    <section className='featured'>
        <div className="container-wrapper">
            <SectionTitle sectionHeader='Featured'/>
            <div className="featured-list">
                {featuredItems.map(item => <FeatureItem item={item}/>)}
            </div>
        </div>
    </section>
  )
}

export default Featured;