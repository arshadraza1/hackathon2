export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isFeatured: boolean;
  }
  
  export interface Category {
    [x: string]: string | undefined;
    id: string;
    name: string;
    imageUrl: string;
  }
  