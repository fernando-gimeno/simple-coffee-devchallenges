import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

type Coffee = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | string | null;
  votes: number;
  popular: boolean;
  available: boolean;
};

function App() {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const reponse = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        if (reponse.ok) {
          const data = await reponse.json();
          setData(data);
          setLoading(false);
          setError(null);
        } else {
          setError("Error fetching data");
        }
      } catch (error) {
        setError("Error fetching data");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-hero-bg bg-no-repeat bg-contain flex flex-col justify-center items-center">
      <div className="mt-16 mb-16 container flex flex-col items-center w-10/12 h-auto bg-card-bg z-10 rounded-lg text-soft-white font-dm-sans p-8">
        <div className="flex flex-col items-center bg-[url('./assets/vector.svg')] bg-no-repeat bg-right-top p-8">
          <h1 className="text-heading font-bold text-center">Our Collection</h1>
          <p className="text-soft-gray text-center w-full max-w-[500px] text-body font-semibold pt-3">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="flex gap-2">
          <Button isSelected>All Products</Button>
          <Button>Available Now</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((coffee: Coffee) => (
            <Card
              key={coffee.id}
              src={coffee.image}
              title={coffee.name}
              price={coffee.price}
              rating={coffee.rating}
              isPopular={coffee.popular}
              isSoldOut={coffee.available}
              votes={coffee.votes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
