import React, { ReactNode } from 'react'
export interface LinkProps {
    children: ReactNode;
    link: string;
    className?: string;
    id?: string;
}
function Link({ id, className, link, children }: LinkProps) {
    return (
        <a
            id={id ? id : " "}
            className={className ? className : ""}
            href={link}>
            {children}
        </a>
    )
}

export default Link;