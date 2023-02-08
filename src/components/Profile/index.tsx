import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "../Link";
import { ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader, ProfileInfo } from "./styles";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";



export function Profile() {
    return (
        <ProfileContainer>
            <img src="https://via.placeholder.com/300 " alt="https://via.placeholder.com/150 " />

            <ProfileContent>
                <ProfileHeader>
                    <h1>Cameron Williamson</h1>
                    <Link text="github" to="/home" icon="goTo" />
                </ProfileHeader>

                <ProfileInfo>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit.
                    Nunc, volutpat pulvinar vel mass.
                </ProfileInfo>

                <ProfileFooter>
                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        Douglas
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        Douglas
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        Douglas
                    </div>
                </ProfileFooter>
            </ProfileContent>
        </ProfileContainer>
    )
}