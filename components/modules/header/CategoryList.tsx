"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

export default function CategoryList() {
  return (
    <div className="absolute h-[420px] w-[240px] shadow-xl top-[64px] border">
      <ul>
        <li className="h-[36px] w-full flex items-center justify-between px-4 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Computer & Laptop
          </span>
        </li>

        <li className="h-[36px] w-full flex items-center justify-between px-4 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Computer Accessories
          </span>
        </li>

        <li className="h-[36px] w-full flex items-center justify-between px-4 group cursor-pointer hover:bg-gray-50">
          <span className="text-body-sm-400 text-gray-600 capitalize group-hover:text-gray-900">
            SmartPhone
          </span>
          <CaretRightIcon size={12} className="group-hover:text-gray-900" />
          <div className=" hidden group-hover:grid absolute h-full xl:w-[868px] bg-white shadow-xl border top-0 left-[250px] p-5 grid-cols-[100px_1fr_1fr] xl:grid-cols-[164px_1fr_1fr] gap-5">
            <div className="">
              <ul>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    all
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    oppo
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    realme
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    xiomi
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    iphone
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    nokia
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    huawei
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    infinix
                  </span>
                </li>
                <li className="group hover:bg-gray-50 h-[36px] px-4 flex items-center">
                  <span className="capitalize text-body-sm-400 text-gray-600 group-hover:text-body-sm-500">
                    techno
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="flex flex-col gap-4">
                <span className="text-body-md-600 uppercase">
                  featured phones
                </span>

                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="/images/product_card.svg"
                    alt="card image"
                    width={80}
                    height={80}
                  />

                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Samsung Electronics Samsung Galaxy S21 5G
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      $160
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="/images/product_card.svg"
                    alt="card image"
                    width={80}
                    height={80}
                  />

                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Samsung Electronics Samsung Galaxy S21 5G
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      $160
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 border p-3">
                  {/* image */}
                  <Image
                    src="/images/product_card.svg"
                    alt="card image"
                    width={80}
                    height={80}
                  />

                  <div className="flex flex-col gap-2">
                    <span className="text-body-sm-400">
                      Samsung Electronics Samsung Galaxy S21 5G
                    </span>
                    <span className="text-body-sm-600 text-secondary-500">
                      $160
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border h-[390px] bg-[url('/images/banner_subcategories.svg')] bg-center bg-cover bg-no-repeat"></div>
          </div>
        </li>

        <li className="h-[36px] w-full flex items-center justify-between px-4 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Headphone
          </span>
        </li>

        <li className="h-[36px] w-full flex items-center justify-between px-4 cursor-pointer">
          <span className="text-body-sm-400 text-gray-600 capitalize">
            Mobile Accessories
          </span>
        </li>
      </ul>
    </div>
  );
}
