import React, { ReactNode } from 'react'
interface Props {
    children?: ReactNode;
    DivClassName: string;
    articleHead: ReactNode;


}
function Article({ DivClassName, articleHead, children }: Props) {
    return (
        <div
            className={DivClassName + " text-container"}
        >
            <article>
                <div className='ArticleHead'>{articleHead}</div>
                {
                    children && <div className='ArticleChilds'>{children}</div>
                }
            </article>
        </div >
    )
}

export default Article;