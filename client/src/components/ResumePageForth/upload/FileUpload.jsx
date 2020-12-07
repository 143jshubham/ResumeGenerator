import React, { Fragment ,useState} from 'react'
import axios from 'axios'

const FileUpload = ({imgUpload}) => {
    const [file ,setFile]=useState('');
    const [FileName ,setFileName]=useState('Choose file');
    const [uploadedFile ,setUploadedFile]=useState({});


    const onChange=e =>{
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)

    }
    const onSubmit = async e =>{
        e.preventDefault();
        const formData =new FormData();
        formData.append('file' ,file);

        try{
            const res = await axios.post('/upload',formData,{
                headers:{
                    'content-Type':'multipart/formData'
                }
            });

            const {fileName,filePath}= res.data;
            setUploadedFile({fileName,filePath})
            imgUpload({fileName,filePath})

        }catch(err){
            if(err.response.status === 500){
                console.log('There was a problem with Server');
            }else{
                console.log(err.response.data.msg)
            }
        }

    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
            <div className="custom-file">
                <input 
                type="file"
                 className="custom-file-input" 
                 id="customFile"
                  onChange={onChange}
                 />

                <label className="custom-file-label" htmlFor="customFile" style={{color:'#000'}}>{FileName}</label>
                </div>
                <input type="submit" value="upload" style={{color:'#000'}} className="btn btn-primary btn-block mt-4" />
            </form>
            
        </Fragment>
    )
}
export default FileUpload