import { Card } from "../Card";

import { Post } from "../../model/Posts";

import { ListContainer } from "./style";


const renderUsers = (post: Post, index: number) => (
    <Card key={index} post={post} />
)

interface ListProps {
    posts: Post[]
}

export function List({ posts }: ListProps) {

    return (
        <ListContainer>
            {posts.map(renderUsers)}
        </ListContainer>
    )
}