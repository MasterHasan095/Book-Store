import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";


const DeleteBook = () =>{
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        axios
          .delete(`http://localhost:5555/books/${id}`)
          .then((response) => {
            setLoading(false);
            handleDeleteBook();
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
       
      }, []);

      const handleDeleteBook =()=>{
        navigate("/");
      }
    return (
        <h1>
            Delete
        </h1>
    )
}
export default DeleteBook;