import React from 'react';
import { Link } from 'react-router-dom';
import ImageExample from '../../assets/imageExample.jpg';
import './Blog-style.css';

const blog = () => {
    return(
        <div className='blog-body'>
            <div className='big-box'>
                <div className='box-modeling-blog'>
                    <Link to='/ExampleBlog' className='Link'>
                        <img src={ImageExample} alt='Topic' className='img'/>
                        <div className='down-side'>
                            <h3 className='Title'>This is an example of a blog</h3>
                            <p className='little-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar auctor erat eu maximus.</p>
                        </div>
                    </Link>
                </div>
                <div className='box-modeling-blog'>
                    <Link to='/ExampleBlog' className='Link'>
                        <img src={ImageExample} alt='Topic' className='img'/>
                        <div className='down-side'>
                            <h3 className='Title'>This is an example of a blog</h3>
                            <p className='little-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar auctor erat eu maximus.</p>
                        </div>
                    </Link>
                </div>
                <div className='box-modeling-blog'>
                    <Link to='/ExampleBlog' className='Link'>
                        <img src={ImageExample} alt='Topic' className='img'/>
                        <div className='down-side'>
                            <h3 className='Title'>This is an example of a blog</h3>
                            <p className='little-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar auctor erat eu maximus.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default blog;
