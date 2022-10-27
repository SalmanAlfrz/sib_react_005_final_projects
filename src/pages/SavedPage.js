import { Grid , Text} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CardNews from "../components/CardNews";
import {  useEffect, useState } from 'react';
import { savedDelete } from "../features/savedSlice";

const SavedPage = () => {
    const dispatch = useDispatch()
    const saved = useSelector((state)=> state.saved)
    const [loading, setLoading] = useState(true);
    
    const deleteOnClicked = (index) => {
        dispatch(
            savedDelete(saved.data[index].title)
        )
    }

    useEffect(()=>{
        
        setLoading(false)
    },[])

    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={6} pr={["10px", "100px"]} pl={["10px", "100px"]}>
            {loading ? (
                <Text fontSize="2xl" fontWeight="bold" justifyContent="center" textAlign="center">Loading...</Text>
            ) : (
                saved.data.map((item, index) => (
                    <CardNews
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        imageUrl={item.urlToImage}
                        publishedAt={item.publishedAt}
                        imageAlt={item.title}
                        category={item.category}
                        status={item.save}
                        handleDelete={()=>deleteOnClicked(index)}
                    />
                ))
            )}
        </Grid>
    );
}

export default SavedPage;