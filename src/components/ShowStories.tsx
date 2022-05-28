import React from "react";
import Story from './Story';
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";

const ShowStories = (props: any) => {
  let myParam = useParams();

  let type = myParam.type;
  const { isLoading, stories } = useAxios(type);

  return(
    <div className="stories">
      {isLoading? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {stories?.map((story) => (
            <Story key={story.id} story ={story} />
          ))}
        </>
      )}
    </div>
  );
};


export default ShowStories