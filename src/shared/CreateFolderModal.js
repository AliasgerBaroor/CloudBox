"use client"
import { useState } from "react"

const CreateFolderModal = () => {
  let [folderName, setFolderName] = useState("")
  let [error, setError] = useState(false)
  let [isEmpty, setisEmpty] = useState(true)

  let handleFormChange = (folder_name) => {
if(folder_name.length === 0) {
  setError(true)
  setisEmpty(true)
} else {
  setisEmpty(false)
  setError(false)
  setFolderName(folder_name)
}
  }
  let handleFormBlur = (folder_name) => {
if(folder_name.length === 0) {
  setError(true)
  setisEmpty(true)
} else {
  setisEmpty(false)
  setError(false)
  setFolderName(folder_name)
}
  }

  let handleFormSubmit = () => {

  }
  return (
    <>
  <div className="modal fade" id="createFodlerModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'none'}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create Folder</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
    <div className="form-group">
  <label htmlFor="fname">Folder Name:</label>
  <input type="text" className={`form-control ${error && "is-invalid"}`} id="foldername" placeholder="Folder Name" onChange={(e)=> handleFormChange(e.target.value)} onBlur={(e)=> handleFormBlur(e.target.value)} />
 {error && ( <small className="text-info">Folder name can't be empty!</small>)}
</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleFormSubmit} disabled={error || isEmpty ? true : false}>Create</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CreateFolderModal