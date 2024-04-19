import { ProductCardContext } from "@/lib/contexts";
import { Product } from "@/lib/types";
import { ReactNode } from "react";
import ProductImage from "./_ProductImage";
import ProductButton from "./_ProductButton";
import ProductTitle from "./_ProductTitle";
import ProductInfo from "./_ProductInfo";
import ProductCategory from "./_ProductCategory";
import ProductRating from "./_ProductRating";
import ProductPrice from "./_ProductPrice";

type TProps = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;

export default function ProductCard({ product, image, info, action }: TProps) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="ProductCard">
        {image}
        <div className="ProductCard_bottom">
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}
