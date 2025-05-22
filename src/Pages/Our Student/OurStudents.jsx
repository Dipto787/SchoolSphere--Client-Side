import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurStudentsData from './OurStudentsData';
import { useEffect, useState } from 'react';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
const OurStudents = () => {
    let [perPage, setPerPage] = useState(35);
    let [currentPage, setCurrentPage] = useState(0);
    let axiosSecure = UseAxiosSecure()
    let [className, setClassName] = useState('');
    let [count, setCount] = useState(0);
    let [gender, setGender] = useState('');
    let handleFilterByClass = async (e) => {
        setCurrentPage(0);
        setClassName(e.target.value)
    }

    
    useEffect(() => {
        axiosSecure.get(`/countStudents?className=${className}&gender=${gender}`)
            .then(res => {
                setCount(res.data.count)
            })
    }, [className, gender])

    console.log(count)

    let pages = [...Array(Math.ceil(count / perPage)).keys()];
    console.log(pages)
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between    mt-8'>
                <Tabs onSelect={(index) => {
                    setCurrentPage(0);
                    if (index === 0) setGender('All Students');  
                    else if (index === 1) setGender('Male');
                    else if (index === 2) setGender('Female');
                }} className={'  px-4'}>
                    <TabList>
                        <Tab>All Students</Tab>
                        <Tab>Male</Tab>
                        <Tab>Female</Tab>
                    </TabList>

                    <TabPanel>
                        <OurStudentsData className={className} page={currentPage} size={perPage} category={'All Students'} ></OurStudentsData>
                    </TabPanel>

                    <TabPanel>
                        <OurStudentsData className={className} page={currentPage} size={perPage} category={'Male'}></OurStudentsData>
                    </TabPanel>

                    <TabPanel>
                        <OurStudentsData className={className} page={currentPage} size={perPage} category={'Female'}></OurStudentsData>
                    </TabPanel>
                </Tabs>

                <div >
                    <select onSelect={handleFilterByClass} defaultValue="Select class" className="select">
                        <option>Select Class</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>


            </div>
            {/* Pagination */}

            <div className='text-center m-4 '>
                {/* <p>{currentPage}</p> */}
                {
                    pages.map(page => (<button onClick={() => setCurrentPage(page)}

                        className={`btn mr-4 border-2  ${page === currentPage ? 'bg-blue-500 text-white' : ''} px-8 text-center`}>{page}</button>
                    ))
                }

            </div>
        </div>
    );
};

export default OurStudents;