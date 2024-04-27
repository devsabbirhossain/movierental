import { useContext, useState } from "react";
import { MovieContext } from "../../lib/context/MovieContext";
import { getImageURL } from "../../lib/utilities/getImages";
import MovieDetails from "./MovieDetails";
import MovieRatings from "./MovieRatings";

const MovieCard = ({ movie }) => {
  const [ShowModal, setShowModal] = useState(false);
  const [SelectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  function handleAddToCart(event, movie) {
    event.preventDefault();

    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.log("Added Already");
    }
  }

  function handleModalClose(event) {
    event.preventDefault();
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleSelectionMovie(event, movie) {
    event.preventDefault();
    setSelectedMovie(movie);
    setShowModal(true);
  }
  return (
    <>
      {ShowModal && (
        <MovieDetails
          movie={SelectedMovie}
          onClose={handleModalClose}
          onCardAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImageURL(movie.coverImage)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <MovieRatings rating={movie.ratings} />
          <a
            onClick={(event) => handleAddToCart(event, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#">
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
          <a
            onClick={(e) => handleSelectionMovie(event, movie)}
            className="text-gray-200 border border-[#74766F] rounded-lg py-2 px-5 mt-4 flex items-center justify-center gap-2 text-[#323334] font-semibold text-sm"
            href="#">
            <img src="./assets/tag.svg" alt="" />
            <span>See Details</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
