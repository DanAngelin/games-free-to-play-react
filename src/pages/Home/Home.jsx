import Box from '../../components/UI/Box';
import classes from "./Home.module.css";
import Games from '../../components/Games/Games';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  return (
    <Box>
        <Header />
        <Games />
        <Footer />
    </Box>
  )
}

export default Home