/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { baseUrl, dummyFilesData } from "../constants/Constants";
// import "./FilesPage.css";

// const filesData = [
//     {
//         file: "File 1 with long name to see how it looks",
//         isProcessed: true
//     },
//     {
//         file: "File 2",
//         isProcessed: true
//     },
//     {
//         file: "File 3",
//         isProcessed: false
//     },
//     {
//         file: "File 4",
//         isProcessed: true
//     },
//     {
//         file: "File 5",
//         isProcessed: true
//     },
//     {
//         file: "File 6",
//         isProcessed: false
//     },
//     {
//         file: "File 7",
//         isProcessed: false
//     },
// ]

const FilesPage = ({ token }) => {

    const [files, setFiles] = useState([]);

    const getFiles = () => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/files`, {headers: {Authorization: `Bearer ${token}`}})
                .then((response) => response.json())
                .then((result) => {
                    resolve(result);
                }).catch(error => reject(error));
        });
    }

    useEffect(() => {
        getFiles()
            .then((files) => setFiles(files))
            .catch((error) => {
                console.log(error);
                setFiles(dummyFilesData);
            })
    }, []);

  return (
    <div className="m-3">
        <table className="table table-striped table-bordered" style={{boxShadow: "0 0 4px grey"}}>
            <thead>
                <tr>
                    <th>Task Id</th>
                    <th>Upload Time</th>
                    <th>Video File Id</th>
                    <th>Location File URL</th>
                    <th>Video File URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    files.map((file, index) => {
                        return (
                            <tr className="align-middle">
                                <td>{file.taskId}</td>
                                <td>{`${new Date(file.uploadTime).toLocaleString()}`}</td>
                                <td>{file.videoFileId}</td>
                                <td><a href={file.locationFileURL} className="btn btn-primary" target="_blank" rel="noreferrer">View</a></td>
                                <td><a href={file.videoFileURL} className="btn btn-primary" target="_blank" rel="noreferrer">View</a></td>
                                <td>
                                    {
                                        file.is_processed ? <span>Processed</span> : (
                                            <button className="btn btn-success">Process</button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  );
};

export default FilesPage;
