export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bb9f223d9amsh2c702cd39954c2cp152315jsn80ef090364da",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bb9f223d9amsh2c702cd39954c2cp152315jsn80ef090364da',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
