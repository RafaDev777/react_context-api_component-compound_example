import { useProductCardContext } from "@/lib/contexts";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ProductRating() {
  const { product } = useProductCardContext();

  return (
    <div className="ProductCard_rating">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= product.rating.stars ? (
          <AiFillStar key={i} />
        ) : (
          <AiOutlineStar key={i} />
        ),
      )}
    </div>
  );
}
