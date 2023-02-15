

import { dateFormat } from "../../lib/dateFormat";
import { Post } from "../../model/Posts";
import { CardContainer, CardContent, CardHeader, CardLink } from "./style";

interface CardProps {
    post: Post
}



export function Card({ post }: CardProps) {
    return (
        <CardLink href={`/${String(post.Number)}`} >
            <CardContainer>
                <CardHeader>
                    <h1>{post.Title}</h1>
                    <span>{dateFormat(post.CreatedAt)}</span>
                </CardHeader>

                <CardContent>
                    {post.Data}

                </CardContent>

            </CardContainer>
        </CardLink >
    )
}