// import React from "react";
// import SocialMenu from "./SocialMenu";
// import MainMenu from "./MainMenu";
// import Menus from "./Menus";
// import { getCategories } from "@/actions/category";
// import { getProducts } from "@/actions/product";

// export default async function Header() {
//   const categories = await getCategories();
//   const products = await getProducts();

//   return (
//     <header>
//       <SocialMenu className="hidden lg:block" />
//       <MainMenu />
//       <Menus 
//         className="hidden lg:block" 
//         categories={categories} 
//         products={products}
//       />
//     </header>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import SocialMenu from './SocialMenu';
import MainMenu from './MainMenu';
import Menus from './Menus';
import axios from 'axios';
import {
  TypeCategoryModel,
  TypeProductModel,
  TypePageModel,
  TypeSlideModel,
} from '@/types/models';

export default function Header() {
  const [categories, setCategories] = useState<TypeCategoryModel[]>([]);
  const [products, setProducts] = useState<TypeProductModel[]>([]);
  const [campaigns, setCampaigns] = useState<TypeSlideModel[]>([]);
  const [pages, setPages] = useState<TypePageModel[]>([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/categories`)
      .then((res) => setCategories(res.data.data || []))
      .catch((err) => console.error('Failed to fetch categories:', err));

    // Fetch products
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/products`)
      .then((res) => setProducts(res.data.data || []))
      .catch((err) => console.error('Failed to fetch products:', err));

    // Fetch campaigns
    const slug = 'homepage-product-best-deals-section';
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/slides?slug=${slug}`)
      .then((res) => setCampaigns(res.data.data || []))
      .catch((err) => console.error('Failed to fetch campaigns:', err));

    // Fetch pages
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/public/pages`)
      .then((res) => setPages(res.data.data || []))
      .catch((err) => console.error('Failed to fetch pages:', err));
  }, []);

  return (
    <header>
      <SocialMenu className="hidden lg:block" />
      <MainMenu />
      <Menus
        className="hidden lg:block"
        categories={categories}
        products={products}
        campaigns={campaigns}
        pages={pages}
      />
    </header>
  );
}
