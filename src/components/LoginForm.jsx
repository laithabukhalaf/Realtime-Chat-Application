import { useState } from "react"
import axios from "axios"

const LoginForm=()=>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const authObject={ 'project-ID':"74513c93-5493-4a60-99f7-e791389f1b61", "User-Name":username, 'User-Secret':password}
         try {
          await axios.get('https://api.chatengine.io/chats',{headers:authObject})

          localStorage.setItem('username',username)
          localStorage.setItem('password',password)

          window.location.reload();
         } catch (error) {
             setError('incorrect credentials')
             
         }

    }
    const handleChange=(e)=>{
        setUsername(e.target.value)
    }
    const handleChange2=(e)=>{
        setPassword(e.target.value)
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={handleChange} className="input" placeholder="UserName" required/>
                    <input type="password" value={password} onChange={handleChange2} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 clasclassName="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm