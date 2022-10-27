import { Grid, Text } from "@chakra-ui/react";
import CardNews from "../components/CardNews";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { savedAdded } from "../features/savedSlice";


const CovidPage = () => {
    const dispatch = useDispatch()
    const API_URL = 'https://newsapi.org/v2/top-headlines?sortBy=popularity&apiKey=5c682f5b08ff463bb6861a79201a109f'
    const title = 'COVID-19'
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    //function to save in redux
    const getDatabyIndex = (index) =>{
        const newState = data.map(obj => {
            if(obj.title === data[index].title){
                return {...obj, save: 'Save'}
            }
            return obj
        })
        setData(newState)
        dispatch(
            savedAdded(newState[index])
        )
    }
    
    //useEffect to hit api
    useEffect(()=> {
        axios.get(`${API_URL}&q=${title}`)
        .then((res)=>{
            let datares = [...res.data.articles.slice(0,20)]
            datares = datares.map(datares => {
                datares.save = 'unsave'
                datares.category = title
                return datares
            })
            setData(datares)
            setLoading(false)
        })
        .catch((err)=>{
        });
    },[])



    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={6} pr={["10px", "100px"]} pl={["10px", "100px"]}>
            {loading ? (
                <Text fontSize="2xl" fontWeight="bold" justifyContent="center" textAlign="center">Loading...</Text>
            ) : (
                data.map((item, index) => (
                    <CardNews
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        imageUrl={item.urlToImage}
                        publishedAt={item.publishedAt}
                        imageAlt={item.title}
                        category="COVID-19"
                        status={item.save}
                        handleClick={()=> getDatabyIndex(index)}
                    />
                ))
            )}
        </Grid>

    );
}

export default CovidPage;