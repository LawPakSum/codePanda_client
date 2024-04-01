import React, { useEffect, useState } from 'react';
import ItemFilter from '../../Components/ItemFilter';
import RecordRow from '../../Components/RecordRow';
import axios from 'axios';

function Record() {

  const [records, setRecords] = useState([]);

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
    },[]).catch((error)=>{
      console.log(error);
    },[])
  },[])

  return (
    <div>
        <ItemFilter></ItemFilter>
        <div className='records_page page_main'>
            <div className='records_items'>
              {
                records.map((record, index)=>{
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