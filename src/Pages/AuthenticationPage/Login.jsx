import { FaFacebook, FaGithub, FaGoogle, FaSpinner } from 'react-icons/fa';
import authentication from '../../assets/authentication/login attiute.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    let { signIn, setLoading, loading, continueWithGoogle } = useContext(AuthContext);
    let location = useLocation();
    console.log(location)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate = useNavigate();
    const onSubmit = async (d) => {
        console.log(d)
        try {
            await signIn(d.email, d.password)
            toast.success('sign in success')
            navigate(location?.state || '/');
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    }

    let handleGoogleLogin = async () => {
        try {

            await continueWithGoogle();
            toast.success('sign up Success!!')
            navigate(location?.state || '/');
        } catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    }
    return (
        <div>
            <div className="flex justify-evenly items-center ">
                <div className='w-full'>
                    <img src={authentication} alt="" />
                </div>
                <div className='w-full border-2 p-10'>
                    <h1 className='text-4xl text-black font-semibold text-center mb-4'>Sign in</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email"  {...register('email', { required: true })} />
                        {errors.email && <p className='text-lg font-semibold text-red-600 '>email is required</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" {...register('password', { required: true })} />
                        {errors.password && <p className='text-lg font-semibold text-red-600 '>password is required</p>}
                        <button disabled={loading} className="btn bg-[#ff3811] text-white mt-4">{loading ? <FaSpinner className='animate-spin text-center' /> : 'Login'}</button>
                    </form>

                    <div className="divider mt-8">or sign up with</div>
                    <div className='flex justify-evenly mt-6 px-10'>
                        <div onClick={handleGoogleLogin} className='text-center cursor-pointer  text-xl bg-slate-300 rounded-full p-5'> <FcGoogle size={22}></FcGoogle></div>

                        <div className='text-center cursor-pointer text-xl bg-slate-300 rounded-full p-5'> <FaFacebook size={22}></FaFacebook></div>

                        <div className='text-center cursor-pointer text-xl bg-slate-300 rounded-full p-5'> <FaGithub size={22}></FaGithub></div>

                    </div>

                    <p className='text-center mt-10'>don't have an Account? <Link state={location?.state} to={'/register'} className='text-blue-500 underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;