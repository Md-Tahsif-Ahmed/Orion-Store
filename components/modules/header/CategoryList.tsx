"use client";

import {
  TypeCategoryModel,
  TypeProductModel,
  TypeSlideModel,
} from "@/types/models";
import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function CategoryList({
  categories,
  products,
  campaigns,
}: {
  categories: TypeCategoryModel[];
  products: TypeProductModel[];
  campaigns: TypeSlideModel[];
}) {
  const router = useRouter();
  const filterProducts = products.filter((item) => item.featured == true);
  return (
    <div className="absolute h-[420px] w-[240px] shadow-xl top-[64px] border">
      <ul>
        {categories?.map((item, idx) => (
          <li
            key={idx}
            className="h-[36px] w-full flex items-center justify-between px-4 group cursor-pointer hover:bg-gray-50"
          >
            <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900">
              {item.name}
            </span>
            {item.subCategory.length > 0 && (
              <>
                <CaretRightIcon
                  size={12}
                  className="group-hover:text-gray-900"
                />

                <div className=" hidden group-hover:grid absolute h-full xl:w-[868px] bg-white shadow-xl border top-0 left-[250px] p-5 grid-cols-[100px_1fr_1fr] xl:grid-cols-[164px_1fr_1fr] gap-7">
                  <div className="">
                    <ul>
                      {item.subCategory.map(
                        (itemSub: TypeCategoryModel, idx_sub) => (
                          <li
                            onClick={() =>
                              router.push(`/categories/${item.slug}/products`)
                            }
                            key={idx_sub}
                            className="group hover:bg-gray-50 h-[36px] px-4 flex items-center"
                          >
                            <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                              {itemSub.name}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4">
                      <span className="text-body-md-600 uppercase font-semibold">
                        featured products
                      </span>

                      {filterProducts
                        .slice(0, 3)
                        .map((itemFilter, idxFilter) => (
                          <div
                            key={idxFilter}
                            className="flex items-center gap-3 border px-3"
                          >
                            {/* image */}
                            <Image
                              src={itemFilter.images[0].url ?? ""}
                              alt="card image"
                              width={80}
                              height={0}
                              className="h-[60px] object-scale-down"
                            />

                            <div className="flex flex-col gap-2">
                              <span className="text-body-sm-400">
                                {itemFilter.name}
                              </span>
                              <span className="text-body-sm-600 text-secondary-500">
                                {itemFilter.price}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  {campaigns.length > 0 ? (
                    <div
                      className="border h-[365zpx] bg-center"
                      style={{
                        backgroundImage: `url(${campaigns[0].image})`,
                      }}
                    ></div>
                  ) : (
                    <div className="border h-[390px] bg-[url('/images/banner_subcategories.svg')] bg-center bg-cover bg-no-repeat"></div>
                  )}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
