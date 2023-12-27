/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { baseUrl, dummyIncidentData } from "../constants/Constants";
// import "./className=.css";

const Incidents = ({ token }) => {

    const [incidents, setIncidents] = useState([]);

    const getIncidents = () => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/incidents`, {headers: {Authorization: `Bearer ${token}`}})
                .then((response) => response.json())
                .then((result) => {
                    resolve(result);
                }).catch(error => reject(error));
        });
    }

    useEffect(() => {
        getIncidents()
            .then((incidents) => setIncidents(incidents))
            .catch((error) => {
                console.log(error);
                setIncidents(dummyIncidentData);
            })
    }, []);
  return (
    <div className="m-3">
        <table className="table table-striped table-bordered" style={{boxShadow: "0 0 4px grey"}}>
            <thead>
                <tr>
                    <th>Incident Id</th>
                    <th>Uploaded Time</th>
                    <th>Image</th>
                    <th>Classification Id</th>
                    <th>Video File Id</th>
                    <th>Created By</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Post Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    incidents.map((incident, index) => {
                        return (
                            <tr className="align-middle">
                            <td>{incident.taskId}</td>
                            <td>{new Date(incident.uploadTime).toLocaleString()}</td>
                            <td><a href={incident.image} className="btn btn-primary" target="_blank" rel="noreferrer">View</a></td>
                            <td>{incident.classificationId}</td>
                            <td>{incident.videoFileId}</td>
                            <td>{incident.createdBy}</td>
                            <td>{incident.latitude}</td>
                            <td>{incident.longitude}</td>
                            <td>
                                {
                                    incident.is_processed && incident.is_processed === 1 ? <span>Processed</span> : (
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

export default Incidents;
