import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, Grid, Container } from '@mui/material';
import ArticleCard from './ArticleCard';

export default function Articles() {
    const [posts, setPosts] = useState([]);
    const APIposts = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/posts/";
    useEffect(() => {
        axios.get(APIposts)
            .then(res => setPosts(res.data))
    }, [APIposts])

    return (
        <Container>
            <Typography variant="h4" sx={{
                fontWeight: 800,
                paddingBottom: 3 //theme.spacing(3)
            }} >
                Articles
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
