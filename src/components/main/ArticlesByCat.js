import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Typography, Grid, Container } from '@mui/material';
import ArticleCard from './ArticleCard';

export default function ArticlesByCat() {
    let param = useParams();
    const catId = param.catId;
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [cat, setCat] = useState({});
    const APIposts = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/posts?categories=" + catId;
    const APIcat = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/categories/" + catId;
    useEffect(() => {
        axios.get(APIposts)
            .then(res => setPosts(res.data))
    }, [APIposts]);

    useEffect(()=>{
        axios.get(APIcat)
             .then(res=>{
                 setCat(res.data);
                 setLoaded(true);
             })
    },[posts,APIcat]);



    if (!loaded) {
        return (

            <Container>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        paddingBottom: 3 //theme.spacing(3)
                    }}
                >
                    One Moment...
                </Typography>

            </Container>
        )
    }

    return (
        <Container>
            <Typography variant="h4" sx={{
                fontWeight: 800,
                paddingBottom: 3 //theme.spacing(3)
            }} >
                Category: {cat.name}
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {posts.map((post, ind) => {
                    return (<Grid item key={ind} xs={12} sm={6} md={4}>
                        <ArticleCard post={post} />
                    </Grid>)
                })
                }
            </Grid>
        </Container>
    )
}