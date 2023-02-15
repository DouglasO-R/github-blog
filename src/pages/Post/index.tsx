import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from "../../components/Link";
import { PostContainer, PostContent, PostFooter, PostHeader, PostInfo, PostTitle } from "./styles";
import { useEffect } from 'react';

const markdown = `A paragraph with *emphasis* and **strong importance**.
                
                > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

                * Lists
                * [ ] todo
                * [x] done

                A table:

                | a | b |
                | - | - |
                `;

export function Post() {


    return (
        <PostContainer>
            <PostInfo>
                {/* Extract in component */}
                <PostHeader>
                    <Link to="/" text="voltar" icon='goBack' />
                    <Link to="/" text="Ver no github" icon='goTo' />
                </PostHeader>

                <PostTitle>JavaScript data types and data structures</PostTitle>
                <PostFooter>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        Douglas
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        Douglas
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        Douglas
                    </div>

                </PostFooter>
            </PostInfo>

            <PostContent>
                <ReactMarkdown
                    linkTarget={'_blank'}
                >
                    {markdown}
                </ReactMarkdown>
            </PostContent>

        </PostContainer>
    )
}