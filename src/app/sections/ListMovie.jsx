"use client";

import { useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ListMovie() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const params = useSearchParams();
  const data = useGetMovies(sortBy, params.get("page"));
  const currentPage = parseInt(params.get("page")) || 1;

  return (
    <>
      <div>
        <select
          name=""
          id=""
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-200 rounded-lg mb-10 pl-1 pt-1 pr-1 pb-1"
        >
          <option value="popularity.desc">Popularity Desc</option>
          <option value="popularity.asc">Popularity Asc</option>
          <option value="revenue.desc">Revenue Desc</option>
          <option value="revenue.asc">Revenue Asc</option>
        </select>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
        {data?.results?.map((item, index) => (
          <Link href={`/movie/${item.id}}`} key={item.id}>
            <Card
              image={item.poster_path}
              id={item.id}
              overview={item.overview}
              popularity={item.popularity}
              title={item.title}
              key={item.id}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-10 ">
        <ul className="flex items-center gap-10 mt-10 mb-10">
          <li>
            <Link href={`/?page=${currentPage - 1}`}>
              <AiOutlineLeft />
            </Link>
          </li>
          {[...Array(6).keys()].map((i) => (
            <li key={i}>
              <Link href={`/?page=${i + 1}`}>{i + 1}</Link>
            </li>
          ))}
          <li>
            <Link href={`/?page=${currentPage + 1}`}>
              <AiOutlineRight />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
