
export const BlogsSkeleton = () => {
    return <div className="animate-pulse pt-4">
        <div className="p-4 border-b-2 pb-4 border-slate-200 w-screen max-w-screen-md">
            <div className="flex">
                <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="pl-1 font-thin text-slate-500 flex justify-center items-center">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                </div>  
            </div>
            <div className="text-xl font-semibold">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
    
    
}

export const BlogSkeleton = () => {
    return <div className="animate-pulse pt-4">
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-semibold">
                        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className="text-slate-500 pt-2">
                        <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                    </div>
                    <div className="pt-4 text-slate-600">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className="flex pt-2">
                        <div className="flex items-center">
                            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div> 
                        </div>
                        <div className="pl-4">
                            <div className="text-xl font-bold">
                                <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                            </div>
                            <div className="pt-2 text-slate-500">
                                <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
}