import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OurStudentsData from './OurStudentsData';
import { useState } from 'react';
const OurStudents = () => {

    let [className, setClassName] = useState('');


    let handleFilterByClass = async (e) => {
        setClassName(e.target.value)
    }


    console.log(className==='5')


    return (
        <div className='flex justify-between   mt-8'>
            <Tabs className={''}>
                <TabList>
                    <Tab>All Students</Tab>
                    <Tab>Male</Tab>
                    <Tab>Female</Tab>
                </TabList>

                <TabPanel>
                    <OurStudentsData className={className} category={'All Students'} ></OurStudentsData>
                </TabPanel>

                <TabPanel>
                    <OurStudentsData className={className} category={'Male'}></OurStudentsData>
                </TabPanel>

                <TabPanel>
                    <OurStudentsData className={className} category={'Female'}></OurStudentsData>
                </TabPanel>
            </Tabs>

            <div>
                <select onChange={handleFilterByClass} defaultValue="Select class" className="select">
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
    );
};

export default OurStudents;