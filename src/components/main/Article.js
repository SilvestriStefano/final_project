import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Typography, Container, Box } from '@mui/material';

export default function Article() {
    let param = useParams();
    const slug = param.slug;
    const [post, setPost] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [datePosted, setDatePosted] = useState('');
    const APIpost = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/posts?slug=" + slug;
    useEffect(() => {
        axios.get(APIpost)
            .then(res => {
                setPost(res.data[0]);
                setDatePosted(new Date(res.data[0].date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }));
                setLoaded(true)
            })
    }, [APIpost])

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
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 800,
                    paddingBottom: 3 //theme.spacing(3)
                }}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            >
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    fontStyle: 'italic',
                    paddingBottom: 3 //theme.spacing(3)
                }}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            >
            </Typography>
            <Typography
                variant="subtitle2"
                component="p"
                sx={{
                    paddingBottom: 3 //theme.spacing(3)
                }}
                dangerouslySetInnerHTML={{ __html: datePosted }}
            >
            </Typography>
            <Box mb={2}>
                <img src={post.featured_media_src_url} alt="featured" />
            </Box>
            <Typography
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
            </Typography>
        </Container>
    )
}
