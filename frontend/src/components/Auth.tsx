import { SignupInput } from "@ishavlega09/medium-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [ postInputs, setPostInputs ] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    return <div className="h-screen flex justify-center">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center px-10">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-500">
                    Already have an account?
                    <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                </div>
            </div>
            <div className="pt-7">
                <LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />
                <LabelledInput label="Email" placeholder="abc@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} /> 
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}