import axios from 'axios';
import {apiURL} from "./constants";

const instanse = axios.create({
   baseURL: apiURL
});

export default instanse;