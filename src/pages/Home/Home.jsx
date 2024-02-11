
import Header from './../../shared/Header/Header';
import Navbar from './../../shared/Navbar/Navbar';
import LeftSideNav from './../../LeftSideNav/LeftSideNav';
import RightSideNav from './../../RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="border"><LeftSideNav></LeftSideNav></div>
            <div className="col-span-2 border">  <h1 className='font-poppins '>This is home page</h1></div>
            <div className="border"><RightSideNav></RightSideNav></div>
          </div>
           </div>
    );
};

export default Home;