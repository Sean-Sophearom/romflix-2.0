import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "node-html-parser";
import React, { useEffect, useState } from "react";
import { Minus, Plus, Spinner } from "../../components/icons";
import MovieGrid from "../../components/MovieGrid";
import { useGlobalContext } from "../../lib/context";

// export default function MovieDetail({ movie, related, trailer }) {
//   // const [movie, setMovie] = useState({});
//   // const [related, setRelated] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const router = useRouter();

//   console.log(movie);

//   const { getCount, addMovie, removeMovie } = useGlobalContext();

//   const [count, setCount] = useState(getCount(movie.id));

//   const add = () => {
//     addMovie(movie);
//     setCount(count + 1);
//   };

//   const remove = () => {
//     if (count <= 0) return;
//     removeMovie(movie);
//     setCount(count - 1);
//   };

//   // useEffect(() => {
//   //   setCount(getCount(movie.id));
//   // }, [setCount, getCount, movie]);

//   // const getMovie = async (id) => {
//   //   if (!id) return;
//   //   setLoading(true);
//   //   let thisMovie = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0eb72e5a87c3896938cd899d9b93a334`);
//   //   let relatedMovies = fetch(
//   //     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0eb72e5a87c3896938cd899d9b93a334`
//   //   );
//   //   [thisMovie, relatedMovies] = await Promise.all([thisMovie, relatedMovies]);
//   //   [thisMovie, relatedMovies] = await Promise.all([thisMovie.json(), relatedMovies.json()]);

//   //   setMovie(thisMovie);
//   //   setRelated(relatedMovies.results);
//   //   setLoading(false);
//   // };

//   // useEffect(() => {
//   //   getMovie(router.query.id);
//   // }, [router.query.id]);

//   // useEffect(() => {
//   //   if (movie.title) document.title = movie.title;
//   // }, [movie]);

//   const head = (
//     <Head>
//       <title>{movie.title}</title>
//     </Head>
//   );

//   // if (loading)
//   //   return (
//   //     <>
//   //       {head}
//   //       <div className="flex justify-center">
//   //         <Spinner />
//   //       </div>
//   //     </>
//   //   );

//   return (
//     <>
//       {head}
//       <div
//         style={{
//           background: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path}) center center / cover no-repeat`,
//         }}
//       >
//         <div className="flex flex-col md:flex-row text-white bg-black bg-opacity-60 px-2 py-2 md:py-0">
//           <img
//             className="max-w-[200px] sm:max-w-[250px] md:max-w-[315px] m-2 border border-white object-contain mx-auto"
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             width="581"
//             height="387"
//             alt={movie.title}
//           />
//           <div className="box space-y-2">
//             <h1 className="text-2xl font-bold py-4">{movie.title}</h1>
//             <p>Overview: {movie.overview}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Budget: {movie.budget || "Unknown"} $</p>
//             <p>Revenue: {movie.revenue || "Unknown"} $</p>
//             <p>Rating: {movie.vote_average}</p>
//             <p>Votes: {movie.vote_count}</p>
//             <p>Status: {movie.status}</p>

//             <div className="flex items-center gap-4 justify-center pt-4 pb-2">
//               <button
//                 className="btn px-3 py-2 sm:py-1 sm:px-[6px] w-auto ring-1 ring-white"
//                 onClick={remove}
//                 disabled={count <= 0}
//               >
//                 <Minus />
//               </button>
//               <span className="text-base">{count}</span>
//               <button className="btn px-3 py-2 sm:py-1 sm:px-[6px] w-auto ring-1 ring-white" onClick={add}>
//                 <Plus />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-black mt-8 py-4">
//         <iframe src={trailer} frameBorder="0" allowFullScreen className="mx-auto w-4/5 aspect-video"></iframe>
//       </div>

//       <div className="py-4">
//         <MovieGrid movies={related} title="Related Movies" />
//       </div>
//     </>
//   );
// }

export default function HI({ movie }) {
  // console.log(movie);
  return <div></div>;
}

export const getServerSideProps = async (ctx) => {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=0eb72e5a87c3896938cd899d9b93a334`
  ).then((res) => res.json());

  // const relatedMovies = await fetch(
  //   `https://api.themoviedb.org/3/movie/${ctx.query.id}/similar?api_key=0eb72e5a87c3896938cd899d9b93a334`
  // ).then((res) => res.json());
  // cs.get(`https://icefilms.tv/search/${movie.title.split(" ").join("+")}/1`).then(console.log);

  const searchRes = await fetch(`https://icefilms.tv/search/${movie.title.split(" ").join("+")}/1`, {
    headers: {
      referer:
        "https://icefilms.tv/search/black+panther/1?__cf_chl_tk=VyxBVfydPdikUmJJjhm3Q.Mt7wUQ9t3nzvNbLce0q9s-1669395678-0-gaNycGzNBn0",
      cookie: {
        cf_clearance: "jPZ8fj4xP5VuE8DdzCQg54G6x4CytvYfr_W1vSCu8c0-1669395685-0-150",
        cf_chl_2: "579aa9e70acae9e",
        PHPSESSID: "cdnqa27r7j73hhvtbutg9r3ir0",
      },
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    },
  });
  const html = await searchRes.text();

  const root = parse(html);

  console.log(root.innerText);
  // const m = root.querySelector(".movie").innerText;

  // const items = root.querySelectorAll(".flw-item");

  // const item = items.find((i, idx) => {
  //   const titleDiv = i.querySelector(".film-name");
  //   const title = titleDiv.innerText.trim();
  //   const href = titleDiv.firstChild.getAttribute("href");

  //   if (href.split("/")[1] === "tv") return false;

  //   const infos = i.querySelectorAll(".film-infor span");

  //   const year = infos[1].innerText.trim();
  //   const runtime = infos[2].innerText.slice(0, -1).trim("");

  //   const conditions = [
  //     movie.title === title,
  //     movie.release_date.slice(0, 4) == year,
  //     Math.abs(movie.runtime - runtime) < 3,
  //   ].every((i) => i);

  //   return conditions || idx > 10;
  // });

  // const href = item.querySelector(".film-name").firstChild.getAttribute("href");

  // const movieRes = await fetch(`https://tinyzonetv.to${href}`).then((res) => res.text());
  // const innerRoot = parse(movieRes);

  // const trailer = innerRoot.querySelector("iframe#iframe-trailer").getAttribute("data-src");

  return {
    props: {
      movie: JSON.parse(JSON.stringify(movie)),
      // related: JSON.parse(JSON.stringify(relatedMovies.results)),
      // trailer,
    },
  };
};
