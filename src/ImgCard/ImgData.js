import { useEffect, useState } from "react";
import axios from "axios";
import Imgcard from "./Img";
import SearchIMG from "../SearchIMG/SearchImg";
import { Link } from "react-router-dom";

export const ImgData = () => {
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [term, setTerm] = useState("");
  useEffect(() => {
    getData();
  }, [term]);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=30072496-11300e093fcc0a44ba8cab571&q=${term}&image_type=photo&pretty=true`
      );
      setState(response.data.hits);
      console.log(response);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching data: ", err);
      setError("Failed to fetch data."); // Set error message
      setLoading(false);
    }
  };
  return (
    <div className="container max-w-[100%] ">
      <div>
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-23 font-bold ">
            Loading...
          </h1>
        ) : error ? (
          <h1 className="text-6xl text-center mt-24 font-bold text-red-600">
            {error}
          </h1>
        ) : (
          <div>
            <header>
              <div className="w-[100%]">
                <div className="relative">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/01/09/13/08/wooden-house-8497574_1280.jpg"
                    className="w-full h-[500px] object-cover brightness-[50%] "
                    alt="img"
                  ></img>
                  <div className=" grid grid-cols-[20%_auto] mx-auto">
                    <figure className="sm:w-[80px] w-[40px] h-[20px] sm:h-[80px] top-[10px] left-[10px] absolute">
                      <img
                        src="https://clipartcraft.com/images/best-logo-design-transparent-6.png"
                        alt="img"
                      ></img>
                    </figure>
                    <div
                      className=" absolute grid grid-cols-2 gap-[20px]
                    text-white max-w-[100%] sm:text-[20px] text-[15px] top-[10px] 
                    right-[20px] items-center"
                    >
                      <Link
                        to={"/Login"}
                        className="rounded-[25px] p-[2px] sm:p-[5px] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
                      >
                        Login
                      </Link>

                      <Link
                        to={"/SignUp"}
                        className="bg-gradient-to-r from-teal-400 to-blue-500  hover:from-pink-500 hover:to-orange-500 rounded-[25px] p-[2px] sm:p-[4px]"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute sm:top-[15%] sm:left-[10%] sm:right:[10%] left-[10%]
                    text-white text-center top-[20%]  sm:my-2 my-4 right-[10%]
                    "
                >
                  <h1
                    className="sm:text-[30px] text-[15px]
                    font-bold"
                  >
                    Stunning royalty-free images & royalty-free stock
                  </h1>
                  <p className="sm:text-[20px] text-[10px]">
                    Over 4.9 million+ high quality stock images, videos and
                    music shared by our talented community.
                  </p>
                  <SearchIMG search={setTerm} />{" "}
                  {/* here passing data child to parent */}
                </div>
              </div>
            </header>
            <div
              className="grid sm:grid-cols-5 gap-2 grid-cols-2 max-w-[100%]
  "
            >
              {state?.map((elem) => (
                <Imgcard key={elem.id} image={elem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
