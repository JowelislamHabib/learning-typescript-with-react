interface SimpleCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const SimpleCard = ({ name, price, isSpecial = false }: SimpleCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      {isSpecial && <span>Special Offer!</span>}
    </div>
  );
};

export default SimpleCard;
