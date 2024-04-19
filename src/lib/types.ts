export type Product = {
  id: number;
  title: string;
  image: string;
  category: string;
  rating: {
    stars: number;
    reviews: number;
  };
  price: number;
};
