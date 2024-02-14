
import Header from './../../shared/Header/Header';
import Navbar from './../../shared/Navbar/Navbar';
import LeftSideNav from './../../LeftSideNav/LeftSideNav';
import RightSideNav from './../../RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import {useLoaderData} from 'react-router-dom'
import NewsCard from './NewsCard';

const Home = () => {
  const news=useLoaderData()
 
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div ><LeftSideNav></LeftSideNav></div>
            <div className='col-span-2'>
            {
          news.map(Anews=><NewsCard key={Anews._id}
            news={Anews}
          ></NewsCard>)

              }
              <button className='text-center mx-auto'>Show All</button>
            </div>
            <div ><RightSideNav></RightSideNav></div>
          </div>
           </div>
    );
};

export default Home;