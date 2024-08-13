import { useEffect, useState } from "react";
import axios from "axios";
import Imgcard from "./Img";

function App() {
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://pixabay.com/api/?key=30072496-11300e093fcc0a44ba8cab571"
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
                  ></img>
                  <div className=" grid grid-cols-[20%_auto] mx-auto">
                    <figure className="w-[80px] h-[80px] top-[10px] left-[10px] absolute">
                      <img src="https://clipartcraft.com/images/best-logo-design-transparent-6.png"></img>
                    </figure>
                    <div
                      className=" absolute grid grid-cols-2 gap-[20px]
                  text-white max-w-[100%] text-[20px] top-[10px] 
                  right-[20px] items-center"
                    >
                      <button
                        className="  rounded-[25px] p-[5px] 
bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
                      >
                        Login
                      </button>
                      <button className="bg-gradient-to-r from-teal-400 to-blue-500  hover:from-pink-500 hover:to-orange-500 rounded-[25px] p-[4px]">
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-[40%] left-[19%] text-white text-center 
                  "
                >
                  <h1
                    className="sm:text-[40px] text-[15px]
                  font-bold"
                  >
                    Stunning royalty-free images & royalty-free stock
                  </h1>
                  <p className="sm:text-[20px] text-[10px]">
                    Over 4.9 million+ high quality stock images, videos and
                    music shared by our talented community.
                  </p>
                </div>
              </div>
            </header>
            <div
              className="grid sm:grid-cols-5 gap-2 grid-cols-2 max-w-[100%]
            bg-gradient-to-r from-[grey] to-[black]"
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
}

export default App;
