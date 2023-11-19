import React, { useState } from 'react'
import "./add.css"
import {AiFillStar} from "react-icons/ai"
import Review from '../../components/Review/Review'

const AddReview = () => {
  const[file,setFile] = useState(null)
  const[image, setImage] = useState(null)
  const [convertedImage, setConvertedImage] = useState(null)
  const[starIndex, setStarIndex] = useState(null)

  const handleImageChange = async (e) =>{
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    if(selectedFile){
      let base64 = await converBase64(selectedFile)
      setImage(base64.split(",")[1])
    }
  }

  const converBase64 = async (file) =>{
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () =>{
        resolve(fileReader.result)
      }
      fileReader.onerror = (error)=>{
        reject(error)
      }
    })
  }

  const showImage = () => {
    console.log(image);
    if (image) {
      const originalImage = URL.createObjectURL(
        new Blob([Uint8Array.from(atob(image), (c) => c.charCodeAt(0))], {
          type: 'image/jpeg',
        })
      );
      setConvertedImage(originalImage)
      console.log('Converted back to original image:', originalImage);
    }
  };

  const addReview = () =>{
    
  }

  return (
    <div className='addreview'>
      <h4>Empower with honest, concise reviews.</h4>
      <div className="profile">
        <input type='text' placeholder='enter product name' />
        <label htmlFor='img'>
        <div className="img-wrapper">
        <img src={file ? URL.createObjectURL(file) : "image.png"} alt='' />
        </div>
        </label>
        <b>WRITE YOUR EXPERIANCE WITH PRODUCT</b>
        <textarea placeholder='enter your review here ..?' />
        <div className='stars'>
            <b>GIVE STARS</b>
            <div className="star">
            {
                Array.from({length: 5}).fill().map((e_,i)=><AiFillStar onClick={()=>setStarIndex(i)} className={i<=starIndex ? 'starFill': ''} key={i}/>)
            }
            </div>
        </div>
      <button onClick={addReview}>ADD REVIEW</button>
      </div>
      <input id='img' type='file' onChange={handleImageChange} style={{display:"none"}}/>
    </div>
  )
}

export default AddReview
