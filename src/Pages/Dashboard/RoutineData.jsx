const RoutineData = ({ days,index }) => {
   
    return (
       
            <div className="space-y-9">
                {
                    days.map(day => 
                       <input type="text"  name={`${day}[]`}    placeholder="Subject.." className="input" required />)
                }

         
        </div>
    );
};

export default RoutineData;