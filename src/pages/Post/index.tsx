import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';


import { Link } from "../../components/Link";
import { PostContainer, PostContent, PostFooter, PostHeader, PostInfo, PostTitle } from "./styles";

import { Post as postType } from '../../model/Posts';
import { dateFormat } from '../../lib/dateFormat';


export function Post() {
    const { post } = useParams();
    const [issue, setIssue] = useState<postType>({} as postType);
    const [loading, setLoading] = useState(true);

    const getPost = async () => {
        const response = await fetch(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${post}`);
        const data = await response.json();
        setIssue(new postType({ user_login: data.user.login, ...data }));
        setLoading(false)
    }

    useEffect(() => {
        getPost();
    }, [])


    return (
        <PostContainer>
            {loading ?
                (
                    <div>Loading</div>
                ) : (
                    <>
                        <PostInfo>
                            {/* Extract in component */}
                            <PostHeader>
                                <Link to="/" text="voltar" icon='goBack' />
                                <Link to={issue.Url} text="Ver no github" icon='goTo' />
                            </PostHeader>

                            <PostTitle>{issue.Title}</PostTitle>
                            <PostFooter>
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />
                                    {issue.Login}
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faCalendarDay} />
                                    {dateFormat(issue.CreatedAt)}
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faComment} />
                                    {issue.Comments}
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
                    </>
                )
            }

        </PostContainer >
    )
}