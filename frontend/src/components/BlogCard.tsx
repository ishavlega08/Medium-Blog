import { Link } from "react-router-dom";

interface BlodCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlodCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b-2 pb-4 border-slate-200 w-screen max-w-screen-md">
            <div className="flex">
                <Avatar name={authorName} size="small"/> 
                <div className="font-extralight pl-2 flex justify-center items-center">{authorName}</div>
                <div className="flex justify-center items-center pl-2">
                    <Circle />
                </div>
                <div className="pl-1 font-thin text-slate-500 flex justify-center items-center">{publishedDate}</div>  
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-md font-thin">
                { content.length >= 100 ? content.slice(0, 100) + "..." : content }
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size == "small" ? "w-6 h-6" : "w-8 h-8"}`}>
        <span className={`${size == "small" ? "text-xs" : "text-s"} font-medium text-gray-300`}>{ name[0] }</span>
    </div>  
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}