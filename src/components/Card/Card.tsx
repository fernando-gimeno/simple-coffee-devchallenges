import starFilled from "../../assets/Star_fill.svg";
import star from "../../assets/Star.svg";

type Props = {
  title: string;
  src: string;
  price: string;
  isPopular?: boolean;
  isSoldOut?: boolean;
  rating?: number | string | null;
  votes: number;
};
const Card = ({
  isPopular,
  isSoldOut,
  rating,
  src,
  title,
  price,
  votes,
}: Props) => {
  return (
    <div className="w-full h-full font-dm-sans text-small font-semibold">
      <div className="relative">
        {isPopular && (
          <div className="absolute top-2 left-2 px-2 py-1 z-10 rounded-full bg-popular text-black">
            Popular
          </div>
        )}
        <img src={src} alt={title} className="rounded-lg" />
      </div>
      <div className="flex justify-between items-center py-3">
        <h3 className="text-body font-semibold">{title}</h3>
        <span className="bg-soft-green text-black p-1 rounded-md text-price">
          {price}
        </span>
      </div>
      <div className="flex gap-1 items-center text-label">
        {rating ? (
          <img src={starFilled} alt="star" />
        ) : (
          <img src={star} alt="star" />
        )}
        <div>
          {rating ? <span>{rating}</span> : <span className="text-soft-gray">No rating</span>}
          <span className="text-soft-gray ml-1">({votes})</span>
        </div>
        {!isSoldOut && <div className="text-sold-out text-label w-full text-end">Sold out</div>}
      </div>
    </div>
  );
};

export default Card;
