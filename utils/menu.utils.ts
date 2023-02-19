import { PipesterMenuCategory, PipesterProduct } from "../types/general.types";

export const parseMenu = (menu: any[]): PipesterMenuCategory[] => {
  const menuToReturn: PipesterMenuCategory[] = menu.map((category) => {
    const products: PipesterProduct[] = category.attributes.products.data.map(
      (product: any) => {
        return {
          title: product.attributes.productName,
          description: "",
          imageUrl: `http://localhost:1337${product.attributes.mainImage.data.attributes.url}`,
        };
      }
    );

    const newCategory: PipesterMenuCategory = {
      title: category.attributes.Name,
      products,
    };
    return newCategory;
  });
  return menuToReturn;
};
