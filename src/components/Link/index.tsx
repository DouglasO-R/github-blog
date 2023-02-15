import { faArrowUpRightFromSquare, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkStyle } from "./styles";

interface LinkProps {
    text: string;
    to: string
    icon: "goBack" | "goTo"
}

export function Link({ text, to, icon }: LinkProps) {
    return (
        <LinkStyle href={to} target="_blank">
            {icon === "goBack" && <FontAwesomeIcon icon={faChevronLeft} />}
            {text}
            {icon === "goTo" && <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        </LinkStyle>

    )
}