import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className="flex flex-col justify-center items-center pt-8">
            <div className="max-w-screen-lg w-full">               
                <input onChange={(e) => {
                    setTitle(e.target.value);
                }} type="text" className="text-gray-900 text-2xl border rounded-lg focus:outline-none block w-full p-2.5" placeholder="Title" />

                <TextEditor onChange={(e) => {
                    setContent(e.target.value);
                }}/> 
                <button onClick={ async () => {
                    const token = localStorage.getItem("token");

                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                           Authorization: `Bearer ${token}`
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-800 rounded-lg">
                    Publish Blog
                </button>
            </div>   
        </div>
    </div>
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void } ) {
    return <form>
       <div className="w-full mb-4">
           <div className=" bg-white">
               <textarea onChange={onChange} id="editor" rows={8} className="block w-full text-md text-gray-800 bg-white border rounded-lg focus:outline-none p-2.5" placeholder="Write a blog..." required ></textarea>
           </div>
       </div>
    </form>
}