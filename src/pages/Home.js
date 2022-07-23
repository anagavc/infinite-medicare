import Layout from "../components/Layouts/Layout";

import {
  Header,
  Categories,
  GetStarted,
  Features,
  Staff,
  Reviews,
  Blog,
  Contact,
} from "../sections";
const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center relative w-full bg-pry-100">
        <header className="relative flex flex-col justify-center items-center">
          <Header />
          <Categories />
        </header>
        <main className="w-full flex flex-col justify-between">
          <GetStarted />
          <Features />
          <Staff />
          <Reviews />
          <Blog />
          <Contact />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
