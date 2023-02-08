import { InputStyle, SearchContainer, SearchHeader } from "./styles";


export function Search() {

    return (
        <SearchContainer>

            <SearchHeader>
                <h1>Publicações</h1>
                <span>6 publicações</span>
            </SearchHeader>

            <InputStyle
                type="text"
                placeholder="Buscar conteúdo"
            />
        </SearchContainer>
    )
}