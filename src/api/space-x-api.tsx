import axios from "axios";
import { SingleLaunchData } from "./types";

const url = "https://api.spacexdata.com/v3/launches";

interface QueryParams {
    offset: number;
}

// we also want to add an offset and limit, so we can paginate the results
// when the user clicks the next page, we add an increase to the page number, and then pull back more data?

const getAllSpaceXLaunches = (params: QueryParams) => {
  axios.get(url, { params: { limit: 10, offset: params.offset } });
};

// here we should set a type

// we need to pass in the offset for the screen

// filter by year - can pass in launch_year query
// sort all launches by date - there are output control querystrings - sort

export { getAllSpaceXLaunches };
