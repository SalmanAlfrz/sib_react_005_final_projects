import { Grid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CardNews from "../components/CardNews";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { savedAdded } from "../features/savedSlice";

const SearchPage = () => {
    const dispatch = useDispatch()
    const search = useSelector((state)=> state.search)

    const API_URL = `https://newsapi.org/v2/everything?from=2022-10-22&to=2022-10-22&sortBy=popularity&apiKey=2e16c29780634b86a48f907eeb7285d0`
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

    useEffect(()=> {
        // hitApi()
        axios.get(`${API_URL}&q=${search.search}`)
        .then((res)=>{
            let datares = [...res.data.articles.slice(0,20)]
            datares = datares.map(datares => {
                datares.save = 'unsave'
                datares.category = 'search'
                return datares
            })
            setData(datares)
            setLoading(false)
        })
        .catch((err)=>{
            // return text news not found\
        });
    },[API_URL, search])

    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={6} pr={["10px", "100px"]} pl={["10px", "100px"]}>
            {/* news loading, news found, and news not found */}
            {loading ? (
                <Text fontSize="2xl" fontWeight="bold" justifyContent="center" textAlign="center">Loading...</Text>
            ) : (
                data.length === 0 ? (
                    <Text fontSize="2xl" fontWeight="bold" justifyContent="center" textAlign="center">News Not Found</Text>
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
                            save={item.save}
                            category={item.category}
                            index={index}
                            getDatabyIndex={getDatabyIndex}
                        />
                    ))
                )
            )}
        </Grid>
    );
}

export default SearchPage;