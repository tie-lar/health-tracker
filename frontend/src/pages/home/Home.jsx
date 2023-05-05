import { Usergroups } from '../../components';
import { Header, Footer, Tracker, Features  } from '../../containers';

const Home = () => {
  return (
    <>
      <div className='gradient__bg'>
          <Header />
      </div>
     <Features />
     <Usergroups />
     <Tracker />
    </>
  )
};

export default Home;
