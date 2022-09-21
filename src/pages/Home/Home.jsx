import Box from '../../components/UI/Box';
import classes from "./Home.module.css";
import Games from '../../components/Games/Games';
import Header from '../../components/Header/Header';

const Home = () => {

  return (
    <Box>
      <Header />
        <Games />
    </Box>
  )
}

export default Home