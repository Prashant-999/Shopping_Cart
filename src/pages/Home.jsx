import { useState } from "react";
import axios from "axios";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading, setLoading] = useState(false)

  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setLoading(true);

    try{
        const response = await axios.get(API_URL)
        setPosts(response.data)
    }
    catch(error){
        console.log("Error Aagya jii");
        setPosts([]);
    }
  }

  return <div>This is your HomePage</div>;
};

export default Home;
