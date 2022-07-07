import React, { createContext, useEffect, useState } from "react";
import {PostProps} from "../models/community";

export interface TypeContextoPost {
    post: PostProps[],
    savePost: (item: PostProps) => void
}
const DEFAULT_VALUE = {
    post: [],
    savePost: (item: PostProps) => {},
};

export const ContextoPost = createContext<TypeContextoPost>(DEFAULT_VALUE)

export const ProvedorPost = ({ children }) => {
    const [post, setPost] = useState<PostProps[]>(DEFAULT_VALUE.post);

    function savePost(item: PostProps) {
        setPost([...post, item])
    }
    return (
        <ContextoPost.Provider
            value={{
                post,
                savePost,
            }}
        >
            {children}
        </ContextoPost.Provider>
    )

}