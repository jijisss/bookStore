import React, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = ( addressData ) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        //fullAddress -> 전체 주소반환
        addressData.setAddressDatas({
            zipCode : data.zonecode,
            newAddress :  (data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress)
        });
    }
    return (<DaumPostCode onComplete={handleComplete} className="post-code" />);
}

export default DaumPost;