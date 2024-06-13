
interface BlodCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlodCardProps) => {
    return <div className="border-b-2 pb-4 border-slate-200">
        <div className="flex">
            <Avatar name={authorName} /> 
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
}

function Avatar({ name }: { name: string } ) {
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
        <span className="text-xs font-medium text-gray-300">{ name[0] }</span>
    </div>  
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}