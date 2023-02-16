import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown'


import { Link } from "../../components/Link";
import { PostContainer, PostContent, PostFooter, PostHeader, PostInfo, PostTitle } from "./styles";

import { dateFormat } from '../../lib/dateFormat';
import { useDataFetchGitHub } from '../../hooks/useDataFetchGitHub';


export function Post() {
    const { post } = useParams();
    const { issue } = useDataFetchGitHub(post);
    const navigate = useNavigate();

    const handleGoBackPage = () => {
        navigate(-1);
    }

    return (
        <PostContainer>

            <PostInfo>
                {/* Extract in component */}
                <PostHeader>
                    <Link onGoBack={handleGoBackPage} text="voltar" icon='goBack' />
                    <Link to={issue?.Url} text="Ver no github" icon='goTo' />
                </PostHeader>

                <PostTitle>{issue?.Title}</PostTitle>
                <PostFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        {issue?.Login}
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {issue.CreatedAt && dateFormat(issue.CreatedAt)}
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        {issue?.Comments}
                    </div>

                </PostFooter>
            </PostInfo>

            <PostContent>
                <ReactMarkdown
                    linkTarget={'_blank'}
                >
                    {issue.Data}
                </ReactMarkdown>
            </PostContent>




        </PostContainer >
    )
}