import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ArticleCard({ post, authorId }) {
    const navigateTo = useNavigate();

    const [author, setAuthor] = useState('');
    const APIauthor = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/users?id=" + authorId;
    useEffect(() => {
        axios.get(APIauthor)
            .then(res => setAuthor(res.data[0]))
    }, [APIauthor])
    const openArticle = ()=>{
        navigateTo('/article/'+post.slug);
    };
    
    return (
        <Card sx={{ maxWidth: "100%", borderRadius: "0 0 5% 5%" }} onClick={openArticle}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={post.featured_media_src_url}
                    sx={{ maxHeight: '8rem' }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    >
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                    </Typography>
                </CardContent>
                <Box sx={{
                    display: "flex",
                    margin: "0.5rem 1rem 1rem 1rem",
                    flexDirection:'column',
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}>
                    <Typography
                        variant="subtitle2"
                        component='p'
                        color="text.primary"
                        dangerouslySetInnerHTML={{ __html: `by ${author.name}` }}>
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component='p'
                        color="text.secondary"
                    >
                        {new Date(post.date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    )
}
