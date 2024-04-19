import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export default function ProductInfo({ children }: TProps) {
  return <div className="ProductCard_info">{children}</div>;
}
