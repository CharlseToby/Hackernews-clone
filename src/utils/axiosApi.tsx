import axios from "axios";

export const BASE_URL = "https://hacker-news.firebaseio.com/v0";


export const getStories = async(type: string | undefined) => {
  if(type){
    try{
      const response = await axios.get(`${BASE_URL}/${type}stories.json`);
      const storyIds = response.data;
      const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
      return stories;
      // console.log(stories);
      
    } catch(error){
      console.log("error occureed while geting list of stories");
    }
  }
}

const getStory =async (id:string) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);
    // console.log(story);
    return story;
    
  } catch (error) {
    console.log("Error occured while getting a story");
    
  }
}