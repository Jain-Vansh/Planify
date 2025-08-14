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
        <div className="h-[100vh] bg-[#FF714B] flex justify-evenly items-center flex-col">
            <div className="text-center text-[#F2F2F2]">
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
    )
}