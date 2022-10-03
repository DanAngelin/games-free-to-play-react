import Box from '../../components/UI/Box';
import classes from './Home.module.css'
import Games from '../../components/Games/Games';
import Layout from '../../components/Layout/Layout';

const Home = () => {

  return (
    <Box>
        <Layout >
            <Games />
        </Layout>
    </Box>
  )
}

export default Home