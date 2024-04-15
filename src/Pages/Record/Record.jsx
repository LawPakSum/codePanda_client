import React, { useEffect, useState } from 'react';
import RecordRow from '../../Components/RecordRow';
import axios from 'axios';
import RecordFilter from '../../Components/RecordFilter';

function Record() {

  const [records, setRecords] = useState([]);
  const [filterRecord, setFilterRecord] = useState([]);
  const [filter, setFilter] = useState({
    getTime:"",
    returnTime:"",
    returned:""
  });
  //for filter
  const updateRecordFilter = (newFilter) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      getTime: newFilter.getTime,
      returnTime: newFilter.returnTime,
      returned: newFilter.returned
    }));
  }

  useEffect(()=>{
    var temp = records.filter(i=>
      i.record.returned.startsWith(filter.returned)
    )
    if(filter.returnTime){
      temp = temp.filter(i => new Date(i.record.return_time) <= new Date(filter.returnTime));
    }
    if(filter.getTime){
      temp = temp.filter(i => new Date(i.record.get_time) >= new Date(filter.getTime));
    } 
    setFilterRecord(temp);
  }, [filter])
  //end

  useEffect(()=>{
    const itemUrl = process.env.REACT_APP_SERVER_URL+"/getRecordInfo";
    let userId = 2;
    axios.get(itemUrl).then((response)=>{
      var targetRecords = [];
      response.data.map((record)=>{
        if(record.user.user_id === userId){
          targetRecords.push(record);
        }
      })
      setRecords(targetRecords);
      setFilterRecord(targetRecords);
    },[]).catch((error)=>{
      console.log(error);
    },[])
  },[])

  return (
    <div>
        <RecordFilter updateRecordFilter={updateRecordFilter}></RecordFilter>
        <div className='records_page page_main'>
            <div className='records_items'>
              {
                filterRecord.map((record, index)=>{
                  return(
                    <div className='single_item' key={index}>
                    <RecordRow info={record}></RecordRow>
                  </div> 
                  )
                })
              }
            </div>
        </div>
    </div>
  );
}

export default Record;