import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
export const Gallery = () => {
  const { hashtag } = useContext(AppContext);

  const {
    data: imageList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["imageList", hashtag],
    queryFn: () => {
      return axios
        .get(
          `https://pixabay.com/api/?key=${
            import.meta.env.VITE_API_KEY
          }&q=${hashtag}&image_type=photo`,
        )
        .then((res) => res.data);
    },
  });
  if (isError) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div className=" flex justify-center pb-10 pt-5">
      {isLoading ? (
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt="loading"
          className="h-6"
        />
      ) : imageList.hits?.length === 0 ? (
        <p>No Images Found</p>
      ) : (
        <div className="columns-3 space-y-4 max-sm:columns-1">
          {imageList.hits?.map((image) => (
            <div key={image.id}>
              <img
                src={image.largeImageURL}
                alt="img"
                className="h-max w-[300px] hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
