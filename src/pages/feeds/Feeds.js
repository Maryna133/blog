import React, { useState } from 'react'
import './Feeds.css'
import Modal from '../../components/modal/Modal'

const Feeds = () =>{

    const [modalActive, setModalActive] = useState(true)

    return <div className='feeds-container'>
        
                <button className='feeds-bottom' onClick={() => setModalActive(true)}>Add new post</button>
                <div className='feeds-post'>
                    <h3 className='feeds-post__title'>Title</h3>
                    <div className='feeds-post__image'>
                        <img className='feeds-post__item'/>
                        <img className='feeds-post__item'/>
                        <img className='feeds-post__item'/>
                       
                    </div> 
                    <div className='feeds-section'>
                        <p className='feeds-post__info'>Date,Author</p>
                        <button className='feeds-bottom edit'>Edit</button>    
                    </div>  
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div> 
                     
}
export default Feeds;