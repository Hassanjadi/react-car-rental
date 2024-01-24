import './Register.css'

const Register = () => {
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
                        <label htmlFor="InputUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder='Johndee' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Contoh: johndee@gmail.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='6+ karakter' />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;