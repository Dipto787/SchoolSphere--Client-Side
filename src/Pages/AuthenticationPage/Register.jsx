import { FaFacebook, FaGithub, FaGoogle, FaSpinner } from 'react-icons/fa';
import authentication from '../../assets/authentication/login attiute.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
const Register = () => {
    let location = useLocation();
    console.log(location)
    let { signUp, continueWithGoogle, loading, setLoading, updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate = useNavigate();
    const onSubmit = async (d) => {
        let img = d.image;
        let name = d.name;
        let formData = new FormData();
        formData.append('image', img[0])
        try {
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );
            await signUp(d.email, d.password)
            await updateUserProfile(name, data.data.url)
            toast.success('sign up Success!!')
            navigate(location?.state || '/');
        } catch (error) {
            setLoading(false);
            toast.error(error.message)
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
        <div >
            <div className="flex justify-evenly items-center ">
                <div className='w-full'>
                    <img src={authentication} alt="" />
                </div>
                <div className='w-full border-2 p-10'>
                    <h1 className='text-4xl text-black font-semibold text-center mb-4'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Name" {...register('name', { required: true })} />
                        {errors.name && <p className='text-lg font-semibold text-red-600 '>Name is required</p>}
                        <label className="label">Image</label>
                        <input type="file" className="file-input w-full" {...register('image', { required: true })} />
                        {errors.image && <p className='text-lg font-semibold text-red-600 '>Image is required</p>}
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email"  {...register('email', { required: true })} />
                        {errors.email && <p className='text-lg font-semibold text-red-600 '>email is required</p>}
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" {...register('password', { required: true })} />
                        {errors.password && <p className='text-lg font-semibold text-red-600 '>password is required</p>}
                        <button disabled={loading} className="btn bg-[#ff3811] text-white mt-4">
                            {  loading ? <FaSpinner className='animate-spin text-center' /> : 'Register'}</button>
                    </form>

                    <div className="divider mt-8">or sign up with</div>
                    <div className='flex justify-evenly mt-6 px-10'>
                        <button onClick={handleGoogleLogin} className='text-center cursor-pointer  text-xl bg-slate-300 rounded-full p-5'> <FcGoogle size={22}></FcGoogle></button>

                        <div className='text-center cursor-pointer text-xl bg-slate-300 rounded-full p-5'> <FaFacebook size={22}></FaFacebook></div>

                        <div className='text-center cursor-pointer text-xl bg-slate-300 rounded-full p-5'> <FaGithub size={22}></FaGithub></div>

                    </div>

                    <p className='text-center mt-10'>Already have an Account? <Link to={'/login'} className='text-blue-500 underline'>Login</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Register;