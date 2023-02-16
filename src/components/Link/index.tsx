import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkStyle } from "./styles";

interface LinkProps {
    text: string;
    to?: string;
    icon: "goBack" | "goTo";
    onGoBack?: () => void
}

export function Link({ text, to, icon, onGoBack }: LinkProps) {

    return (
        <LinkStyle >
            {icon === "goTo" ? (
                <a href={to} target="_blank">
                    {text}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            ) : (
                <button type="button" onClick={onGoBack}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    {text}
                </button>
            )}
        </LinkStyle>

    )
}