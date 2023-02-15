import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { Link } from "../Link";
import { ProfileContainer, ProfileContent, ProfileFooter, ProfileHeader, ProfileInfo } from "./styles";
import { User } from "../../model/User";

interface ProfileProps {
    user: User
}

export function Profile({ user }: ProfileProps) {
    return (
        <ProfileContainer>
            <img src={user.avatar} alt="github avatar of user" />

            <ProfileContent>
                <ProfileHeader>
                    <h1>{user.name}</h1>
                    <Link text="github" to={`${user.html_url}`} icon="goTo" />
                </ProfileHeader>

                <ProfileInfo>
                    {user.bio}
                </ProfileInfo>

                <ProfileFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        {user.login}
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        {user.company ?? "don't have"}
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {user.following}
                    </div>
                </ProfileFooter>
            </ProfileContent>
        </ProfileContainer>
    )
}