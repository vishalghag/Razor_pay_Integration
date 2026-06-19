import Card from "../Card/Card";
import data from "../Card/card.json";

const RazorPay = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center m-2">RazorPay</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-2">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default RazorPay;
