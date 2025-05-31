import toast from "react-hot-toast";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddExamSchedule = () => {
    let axiosSecure = UseAxiosSecure();
    let navigate = useNavigate();
    let handleSubmit = async (e) => {
        e.preventDefault();
        let form = e.target;
        let subject = form.subject.value.toLowerCase();
        let date = form.date.value;
        let className = form.class.value;
        let examInfo = { subject, date, className };
        console.log(examInfo);

        let { data } = await axiosSecure.post('/exam-schedule', examInfo);
        if (data.acknowledged) {
            toast.success(`${subject}, exam schedule added success on class ${className}`)
            let notification = { className, date, subject, category: 'add-exam-schedule' };
            navigate('/dashboard/exam-schedule-admin')
            let { data } = await axiosSecure.post('/user-notification', notification);
        } else {
            toast.error(`${subject}, exam schedule already added on class ${className}`)
        }
        console.log(data)
    }
    return (
        <div>
            <h1 className="my-7 lg:text-5xl text-3xl text-center">Add Exam Schedule</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-10 mt-14 border-2 p-8 justify-between px-10">

                    <input type="text" name="subject" placeholder="Subject.." className="input border-red-600" required />
                    <input type="date" name="date" placeholder="Type here" className="input border-red-600" required />
                    <select name="class" className="border-2 p-3" defaultValue={''} id="" required>
                        <option value='' disabled>Select Class</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="  mt-10 px-12">
                    <button className="btn bg-orange-400 text-white mt-4 px-24  ">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddExamSchedule;