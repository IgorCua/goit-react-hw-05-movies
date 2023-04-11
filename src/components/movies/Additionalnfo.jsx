import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { requestAPI } from "helpers/moviesAPI";
import parse from 'html-react-parser';
import { List, CastItem, Image, Title, Text, ReviewsItem} from "./AdditionalInfo.styled"; 

export const AdditionalInfo = () => {
    const {id} = useParams();
    const locationObj = useLocation();
    const location = locationObj.pathname.split('/').slice(-1).join('');
    const [creditsObj, setRequestObj] = useState([]);
    const [reviewsObj, setReviewsObj] = useState([]);
    const imgSourse = 'https://image.tmdb.org/t/p/w500';
    const API_KEY = "5aa25f9e8e2618b75e9d0b59d473edb9";
    const reviews = reviewsObj.data ? reviewsObj.data.results : [];
    
    useEffect(()=>{
        if(location === 'cast'){
            requestAPI(`${id}/credits`).then(req => setRequestObj(req));
        } 
        if (location === 'reviews'){
            requestAPI(`${id}/reviews`).then(req => setReviewsObj(req));
        }
    }, [location, id]);

    // if (location === 'reviews') console.log('reviewsObj ', reviewsObj)

    function requestObjCheck(obj) {
        return obj.profile_path ? `${imgSourse}${obj.profile_path}?api_key=${API_KEY}` : "";
    }

    return (
        <List>
            {location === 'cast' && creditsObj.data?.cast.map(elem =>{
                return <CastItem key={elem.id}>
                    <Image src={requestObjCheck(elem)} alt="" />
                    <Title>{elem.name}</Title>
                    <Text>{elem.character}</Text>
                </CastItem>
            })}

            {location === 'reviews' && reviews.length === 0 
                                    ? <Title>This film have no reviews.</Title>
                                    : reviews.map(elem => {
                                            return <ReviewsItem key={elem.id}>
                                                <Title>Author: {elem.author}</Title>
                                                <Text>{parse(elem.content)}</Text>
                                            </ReviewsItem>
                                        })
                                    
            }
        </List>
    )
}