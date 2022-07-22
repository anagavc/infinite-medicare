import {
  Header,
  Categories,
  GetStarted,
  Features,
  Staff,
  Reviews,
} from "../sections";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center relative w-full">
      <header className="relative flex flex-col justify-center items-center">
        <Header />
        <Categories />
      </header>
      <main className="w-full flex flex-col justify-between">
        <GetStarted />
        <Features />
        <Staff />
        <Reviews />
      </main>
    </div>
  );
};

export default Home;
