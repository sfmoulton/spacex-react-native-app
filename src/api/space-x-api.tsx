import axios from "axios";

const url = "https://api.spacexdata.com/v3/launches"; // This should be kept in a seperate file, with any other urls

interface QueryParams {
  offset: number;
}

// At the moment offset is being used to paginate the returned data - this was a temporary workaround to prevent returning the whole list of data during development
// In future, pagination will be implemented, so that this offset number is increased as the user clicks on e.g. the "Load More" button

const getAllSpaceXLaunches = (params: QueryParams) => {
  return axios.get(url, { params: { limit: 10, offset: params.offset } });
};

// With the SpaceX API, we can pass additional parameters, so we can return the data by year
// Or we can pass in `sort` and `order` querystrings, which will mean we can sort by date in ascending/descending order

export { getAllSpaceXLaunches };
