import { InputStyle, SearchContainer, SearchHeader } from "./styles";

interface SearchProps {
    onSearch: (filter: string) => void
}
export function Search({ onSearch }: SearchProps) {

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    }

    return (
        <SearchContainer>

            <SearchHeader>
                <h1>Publicações</h1>
                <span>6 publicações</span>
            </SearchHeader>

            <InputStyle
                type="text"
                placeholder="Buscar conteúdo"
                onChange={handleOnchange}
            />
        </SearchContainer>
    )
}