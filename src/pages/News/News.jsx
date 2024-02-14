import {useParams} from 'react-router-dom'
import Header from './../../shared/Header/Header';
import Navbar from './../../shared/Navbar/Navbar';
import RightSideNav from './../../RightSideNav/RightSideNav';

const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
           < Navbar></Navbar>
           <div className='grid grid-cols-4'>
            <div className='col-span-3'>Details page
            <p>{id}</p>
            </div>
           
            <div className='col-span-1'>
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default News;