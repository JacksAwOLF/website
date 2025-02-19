import FAQ from 'components/FAQ';
import Footer from 'components/Footer';
import Landing from 'components/Landing';
import Schedule from 'components/Schedule';

const Home = () => (
  <main>
    <Landing />
    <section>What is ECE Day?</section>
    <Schedule />
    <FAQ />
    <Footer />
  </main>
);

export default Home;

// Experimental: Fully disable client-side JS to improve page load
export const config = {
  unstable_runtimeJS: false,
};
