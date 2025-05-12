// import './Login.scss';
// import { useNavigate } from 'react-router-dom';



// const PageLogin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassWord] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // render password
//     const [isShowPassword, setIsShowPassword] = useState(false);

//     const validateEmail = (email) => {
//         return String(email)
//             .toLowerCase()
//             .match(
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//             );
//     };

//     return (
//         <div className="login-container">
//             <div className="header">
//                 <span> Don's have an account yet? </span>
//                 <button
//                     onClick={() => { navigate('/register') }}
//                 >
//                     Sign up
//                 </button>
//             </div>
//             <div className="title col-4  mx-auto">
//                 Website học tập
//             </div>
//             <div className="welcome col-4 mx-auto">
//                 Trang đăng nhập
//             </div>
//             <div className="content-form col-4 mx-auto">
//                 <form
//                     onSubmit={(event) => {
//                         event.preventDefault(); // ngăn reload page
//                     }}
//                 >
//                     <div className="form-group">
//                         <label>Email</label>
//                         <input
//                             type={"email"}
//                             className="form-control"
//                             value={email}
//                             onChange={(event) => { setEmail(event.target.value) }}
//                             autoComplete="email"
//                         />
//                     </div>
//                     <div className="form-group pass-group1">
//                         <label>Password</label>
//                         <input
//                             type={isShowPassword ? "text" : "password"}
//                             className="form-control"
//                             value={password}
//                             onChange={(event) => { setPassWord(event.target.value) }}
//                             autoComplete="current-password"
//                         />
//                         {isShowPassword ?
//                             <span
//                                 className='icon-eye'
//                                 onClick={() => { setIsShowPassword(false) }}>
//                                 <IoMdEye />
//                             </span>
//                             :
//                             <span
//                                 className='icon-eye'
//                                 onClick={() => { setIsShowPassword(true) }}>
//                                 <IoEyeOff />
//                             </span>
//                         }
//                     </div>
//                     <span className='forgot-name'>
//                         Forgot password ?
//                     </span>
//                     <div>
//                         <button
//                             className='btn-submit'
//                             onClick={() => { handleLogin() }}
//                             disabled={isLoading}
//                         >
//                             {isLoading === true && <ImSpinner3 className='loader-icon' />}
//                             <span>Login</span>
//                         </button>
//                     </div>
//                 </form>


//                 <div className='back-homepage text-center'>
//                     <span onClick={() => { navigate('/') }}>
//                         Go to homepage
//                     </span>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default PageLogin;