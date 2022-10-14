import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './styles.css';

const About = () => {
  return (
    <section className='about'>
        <div className="container-wrapper">
            <SectionTitle sectionHeader='About Matter'/>
            <div className='about-body'>
                <div className="about-body__img">
                    <img src="/assets/images/about.png" alt="About matter image" />
                </div>
                <div className='about-body__content'>
                    <p>Our mission is threefold - to foster designer-artisan collaborations, inspire consumers to value provenance and process, and pioneer industry change and sustainability for rural textile communities. </p>
                    <h3>Artisan Employment Days Created</h3>
                    <p>123456</p>
                    <h3>Countries Involved To Date</h3>
                    <p>India</p>
                    <p>China</p>
                    <p>Sri Lanka</p>
                    <h3>#MatterTribe</h3>
                    <p>12 designers</p>
                    <p>12 Factories</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;