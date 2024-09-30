import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar>
        <h1>Welcome to My App</h1>
        <p>This is the main content area.</p>
      </Navbar>
      <Footer />
    </div>
  );
};

export default Home;