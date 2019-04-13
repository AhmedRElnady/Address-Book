import React from "react";

const ContactPicture = (props) => {
    const { pictureUrl } = props,
        imgSource = pictureUrl || 'pictures/1.png';

    return (
        <div style={{
            height: '200px', width: '200px', borderWidth: '.1rem',
            borderStyle: 'solid', borderColor: 'grey'
        }} className="text-center mb-1" >

            <img className="img-fluid mb-2 mt-2" height="200" width="200" src={imgSource} alt="contactPic" />
        </div>
    )

}

export default ContactPicture;