import { useState } from "react"
import Form from "../components/Form"
import Input from "../components/Input"

export default function Login(){
    const [value, setValue] = useState("")
    const update = (e) => {
        setValue(e.target.value)
    }
    return(
        <div className="h-[100vh] bg-amber-600 flex justify-evenly items-center flex-col">
            <div className="text-center">
                <h1>Welcome Back!</h1>
                <h3>Let's turn your to-dos into done-dos.</h3>
            </div>
            
            <Form>
                <h2 className="absolute left-[44%] m-3">Log in</h2>
                <Input label="Email" placeholder="Enter your email"></Input>
            </Form>
        </div>
    )
}