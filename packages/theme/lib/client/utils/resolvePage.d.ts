import type { PostData } from "../types";
export declare const formateDateString: (date: string) => string;
export declare const resolveDate: (date: string, type: "year" | "month" | "day") => string;
export interface PostDataWithDate {
    date: string;
    data: PostData[];
}
export declare const getPostsByYear: (posts: PostData[]) => {
    year: string;
    data: PostData[];
}[];
