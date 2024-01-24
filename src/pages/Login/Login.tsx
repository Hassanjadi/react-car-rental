import './Login.css'

const Login = () => {
    return (
        <div className='login d-flex flex-row'>
            <div className="bg-images">
                <img src="https://i.ibb.co/HrQjPp1/Background-Img.png" alt="Background-Img" />
            </div>
            <div className="form-login">
                <div className='mb-3'>    
                    <img src="" alt="" />
                    <h2>Welcome, Admin BCR</h2>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Contoh: johndee@gmail.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='6+ karakter' />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;