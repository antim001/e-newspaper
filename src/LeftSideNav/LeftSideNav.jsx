
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import one from '../../public/1.png'
import two from '../../public/2.png'
import three from '../../public/3.png'

const LeftSideNav = () => {
  const [categories,setCategories]=useState([]);

    useEffect(()=>{
          fetch('categories.json')
          .then(res=>res.json())
          .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div className='space-y-4'>
            <h2 className='ml-2 text-xl font-bold'>All categoris</h2>
            {
                categories.map(category=><Link key={category.id}
                    to={`/category/${category.id}`}
                className='block ml-4 text-xl '>
                    {category.name}
                    
                </Link>)
            }
        </div>
        <div>
            <h1 className='text-xl mt-2 mb-2'>All news</h1>
        <div className="card bg-base-100 shadow-xl">
   <figure><img src={one} alt="" /></figure>
   <div className="card-body">
     <p> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
     <span className='font-bold'>sports</span>
    
  </div>
</div>
{/* 2nd card */}
<div className="card bg-base-100 shadow-xl">
   <figure><img src={two} alt="" /></figure>
   <div className="card-body">
     <p> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
     <span className='font-bold'>sports</span>
    
  </div>
</div>
<div className="card bg-base-100 shadow-xl">
   <figure><img src={three} alt="" /></figure>
   <div className="card-body">
     <p> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
     <span className='font-bold'>sports</span>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default LeftSideNav;
