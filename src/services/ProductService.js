import axios from "axios";

const API_URL = "https://dummyjson.com/product";

class ProductService{
    
    getAll(){
        return axios.get(API_URL);
    }

    getById(id){
        return axios.get(`${API_URL}s/${id}`);
    }
}

export default new ProductService();