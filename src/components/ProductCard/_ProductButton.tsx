import { ReactNode } from "react";
import { Product } from "@/lib/types";
import { useProductCardContext } from "@/lib/contexts";

type TProps = {
  children: ReactNode;
  onClick: (product: Product) => void;
};

export default function ProductButton({ children, onClick }: TProps) {
  const { product } = useProductCardContext();

  const handleClick = () => {
    onClick(product);
  };

  return (
    <button className="ProductCard_button" onClick={handleClick} type="button">
      {children}
    </button>
  );
}
