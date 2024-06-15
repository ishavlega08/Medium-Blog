import { Appbar } from "../components/Appbar"

export const Publish = () => {
    return <div>
        <Appbar />
        <div className="flex flex-col justify-center items-center pt-8">
            <div className="max-w-screen-lg w-full">               
                <input type="text" className="text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
            </div>   
            <div className="max-w-screen-lg w-full">
                <TextEditor /> 
            </div>
        </div>
    </div>
}

function TextEditor() {
    return <form>
       <div className="w-full mb-4 bg-gray-50">
           <div className="px-4 py-2 bg-white">
               <textarea id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0" placeholder="Write an article..." required ></textarea>
           </div>
       </div>
       <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200">
           Publish post
       </button>
    </form>
    
}