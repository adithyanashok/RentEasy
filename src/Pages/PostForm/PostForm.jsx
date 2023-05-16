import React from 'react'
import './PostForm.css'
import UploadIcon from '@mui/icons-material/Upload';
const PostForm = () => {
    return (
        <div className='formContainer' >
            <div className="subContainer">
                <div className="formHeading">
                    <h1>Enter Your Property Details</h1>
                </div>
                <div className="formInputSub">
                    <div className="inputField3">
                        <label className='ide' htmlFor="">Owner Details</label>
                        <input id='input' type="text" placeholder='Enter Owner Name' />
                        <input id='input' type="text" placeholder='Enter Owner Phone' />
                        <input id='input' type="text" placeholder='Enter Owner Email' />
                        <input id='input' type="text" placeholder='Enter Owner Address' />
                        <label className='ide2' htmlFor="">Property Details</label>
                        <input id='input' type="text" placeholder='Enter Property Name' />
                        <input id='input' type="text" placeholder='Enter State' />
                    </div>
                    <div className="inputField">
                        <input className='input' type="text" placeholder='Enter District' />
                        <input className='input' type="text" placeholder='Enter City' />
                        <input className='input' type="text" placeholder='Enter Address' />
                        <input className='input' type="text" placeholder='Enter Amount/Month' />
                        <label id='select-label' for="bedroom">Bedrooms:</label>
                        <select className='bedroom-bathroom' name="bedroom">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="inputField2">
                        <div className="select">

                            <label for="bathroom">Bathrooms:</label>
                            <select className='bedroom-bathroom' name="bathroom">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <label for="bathroom">Select Days:</label>
                            <select className='bedroom-bathroom' name="bathroom">
                                <option value="30">30 days</option>
                                <option value="60">60 days</option>
                                <option value="90">90 days</option>
                                <option value="130">130 days</option>
                            </select>
                            <div className="file-input">
                                <input className='inputFile' type="file" name="" />
                                <input className='inputFile' type="file" name="" />
                                <input className='inputFile' type="file" name="" />
                                <input className='inputFile' type="file" name="" />
                                
                            </div>
                            <button id='button' >Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostForm
