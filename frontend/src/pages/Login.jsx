import { useState } from "react"
import Form from "../components/Form"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Login(){
    const [value, setValue] = useState("")
    const update = (e) => {
        setValue(e.target.value)
    }
    return(
        <div className="h-[100vh] bg-[#222831] flex justify-evenly">
            <div className="w-[100vw] flex flex-col items-center">
                <div className="text-center text-[#EEEEEE] m-10">
                    <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
                    <h3 className="text-2xl font-semibold">Let's turn your to-dos into done-dos.</h3>
                </div>
            
                <Form>
                    <h2 className="absolute top-4 text-2xl font-semibold">Log in</h2>
                    <Input label="Username" placeholder="Enter your username" margin="ml-4"></Input>
                    <Input label="Password" placeholder="Enter your password" margin="ml-5"></Input>
                    <Button text="Log in"></Button>
                    <p className="absolute bottom-8">Don't have an account? <u>Sign-up</u></p>
                </Form>
            </div>
            <div className="w-[100vw] relative">
                <div className="w-2/3 h-2/3 bg-[#393E46] absolute left-1/12 top-1/12 rounded-3xl"></div>
                <div className="w-2/3 h-2/3 bg-[#00ADB5] absolute left-1/6 top-1/6 rounded-3xl"></div>
                <div className="w-2/3 h-2/3 bg-[#EEEEEE] absolute left-1/4 top-1/4 rounded-3xl text-center text-[#393E46]">
                    <h1 className="text-3xl m-10 font-semibold">Release new build</h1>
                    <h2 className="text-lg m-10">Get build 2.1.2 verified by Jamie and release it. </h2>
                    <h3 className="text-lg m-10 bg-[#00ADB5] p-4 rounded-3xl">Assigned to: John Doe</h3>
                </div>
            </div>
            
        </div>
    )
}