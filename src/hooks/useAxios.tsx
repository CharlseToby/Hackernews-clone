import { useState, useEffect } from "react";
import { getStories } from "../utils/axiosApi";

export type StoryType = {
  by: string,
  title: string,
  id: number,
  kids: [number],
  url: string,
  time: number,
}

const useAxios = (type: string | undefined) => {
  const [stories, setStories] = useState<StoryType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
    .then((stories) => {
      setStories(stories);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
    });
  }, [type]);

  return { isLoading, stories };

}

export default useAxios;