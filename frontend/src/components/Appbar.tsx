import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar =  () => {
    return <div className="flex justify-between border-b px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center text-xl">
                Medium
        </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-4">New</button>
            </Link>
            <Avatar name="Ishav" size="big"/>
        </div>
    </div>
}