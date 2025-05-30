const RoutineData = ({ days, index, schedule }) => {
          
    return (

        <div className="space-y-9">
            {
                days.map(day =>
                    <input type="text"  defaultValue={schedule?.[day]?.[index] || ''} name={`${day}[]`} placeholder="Subject.." className="input" required />)
            }


        </div>
    );
};

export default RoutineData;