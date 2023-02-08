import { Card } from "../Card";
import { ListContainer } from "./style";


const users = Array(9).fill(0);

const renderUsers = (item: any, index: number) => (
    <Card key={index} />
)

export function List() {

    return (
        <ListContainer>
            {users.map(renderUsers)}
        </ListContainer>
    )
}