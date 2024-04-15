import React, { useState } from 'react';
import cajon from "../Assets/Images/cajon.jpg";
import guitar from "../Assets/Images/guitar.jpg";
import tuba from "../Assets/Images/tuba.jpg";
import ukulele from "../Assets/Images/ukulele.jpg";
import violin from "../Assets/Images/violin.jpg";

function SingleItemRow(props) {
  const [info, setInfo] = useState(props.info);

  // Map image names to their corresponding imports
  const imageMap = {
    'cajon': cajon,
    'guitar': guitar,
    'tuba': tuba,
    'ukulele': ukulele,
    'violin': violin,
    // Add mappings for all other images
  };

  // Get the image corresponding to the instrument name
  const selectedImage = imageMap[info.instrument_name];

  return (
    <div className='singleItem'>
      <div className='singleItem_icon'>
        {/* Use the dynamically selected image */}
        <img src={selectedImage} alt={info.instrument_name} style={{ height: '200px', width: '120px' }} />
      </div>
      <div>
        <div className='singleItem_name'>Name: {info.instrument_name}</div>
        <div>
          <div className='singleItem_classification'>Classification: {info.instrument_classification}</div>
          <div className='singleItem_playstyle'>Playstyle: {info.instrument_playstyle}</div>
          <div className='singleItem_borrow_status'>Borrow Status: {info.instrument_borrow_status}</div>
          <div className='singleItem_condition'>Condition: {info.instrument_condition}</div>
          <div className='singleItem_remark'>Remark: {info.instrument_remark}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleItemRow;
