
import Link from 'next/link';
import {Post} from '../../types/Post';

type Props =  {
    name:string,
    posts: Post[]
}
const Blog = ({name, posts}: Props) => {
    return(
        <div>
            <h1>Blog</h1>
            <p>Blog de {name}</p>
            <ul>
                {posts.map((post, index)=>(
                    <li key={index}>
                        <link href={`/blog/${post.id}`}>
                            {post.title}
                        </link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:Post[] = await res.json();
    return{
        props: {
            name: 'Rodrigo',
            posts
        },revalidate: 7200
    }
}
export default Blog;