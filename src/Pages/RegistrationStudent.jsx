import axios from "axios";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";
import IsStudent from "../hooks/IsStudent";
const RegistrationStudent = () => {
    let { student, isLoading } = IsStudent();
    let navigate = useNavigate();
    if (student?.isRegistration === true) {
        console.log(student)
        return navigate('/');
    }

    let axiosSecure = UseAxiosSecure();
    let { user, loading } = useContext(AuthContext);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async student => {
            const { data } = await axiosSecure.post('/students', student)
            return data;
        },
        onSuccess: () => {
            toast.success('Please Wait For Admin Approach');
            navigate('/');

        }
    })

    let handleRegistration = async (e) => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let old = form.old.value;
        let gender = form.gender.value;
        let className = form.class.value;
        let photo = form.photo.files[0];
        let formData = new FormData();
        formData.append('image', photo)
        const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
            formData
        );
        console.log(data)
        let student = { name, old, gender, className, email: user?.email, img: data.data.url, isRegistration: false };

        try {
            await mutateAsync(student)
        } catch (err) {
            toast.error(err.message)
            navigate('/')
        }


    }

    if(isLoading){
        return
    }
    return (
        <div className='bg-slate-200 p-12'>
            <form onSubmit={handleRegistration} className="space-y-16">

                <div className="flex gap-12 justify-between">
                    <input type="text" name="name" className="input border-orange-400 border-2 w-full p-6 " placeholder="Write Your Name..." required />
                    <select defaultValue={''} name="old" className="w-full border-orange-400 border-2  p-3" id="" required>
                        <option value={''} disabled >old</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>

                    </select>
                </div>

                <div className="flex gap-12 justify-between">
                    <input type="email" value={user?.email} readOnly name="email" className="input w-full p-6  border-orange-400 border-2 " placeholder="Email" required />
                    <select defaultValue={''} name="gender" className="w-full  border-orange-400 border-2 " id="" required>
                        <option value={''} disabled>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                </div>


                <div className="flex gap-12 justify-between">
                    <select defaultValue={''} name="class" className="w-full border-orange-400 border-2  p-3" id="" required>
                        <option disabled value="" >Class</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>

                    </select>



                    <input name="photo" type="file" className="file-input w-full  " required />

                </div>



                <button disabled={isPending || student || isLoading || student || student?.isRegistration === true} className="btn w-full bg-orange-400 text-white p-4">  {!isPending && !loading && !isLoading && student ? 'Please Wait For Admin Approach' : <div> {
                    isPending || isLoading ?
                        <FaSpinner className='animate-spin text-center' /> : 'Registration'}
                </div>
                }
                </button>

            </form>

        </div>
    );
};

export default RegistrationStudent;