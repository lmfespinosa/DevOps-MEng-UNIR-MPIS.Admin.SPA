import React, { useEffect, useState } from 'react';
import './DeviceDetails.scss'

interface IDeviceDetails {
  paramsFetch: string
}

const DeviceDetails: React.FC<IDeviceDetails> = function ({ paramsFetch }) {
  const [hardware, setHardware] = useState<any[] | null>(null);
  const [software, setSoftware] = useState<any[] | null>(null);
  const [operativeSystem, setOperativeSystem] = useState<any[] | null>(null);


  useEffect(() => {
    // HARDWAER
    fetch(`http://localhost:3000/data/fakeHardwareByDevice.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(data => {
        setHardware(data.data)
      })
      .catch((err) => console.log(err))
    // SOFTWARE
    fetch(`http://localhost:3000/data/fakeSoftware.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(data => {
        setSoftware(data.data)
      })
      .catch((err) => console.log(err))
    // OPERATIVE SYSTEM
    fetch(`http://localhost:3000/data/fakeOperativeSystem.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(data => {
        setOperativeSystem(data.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className="device-details">
      <ul>
        <h4>HARDWARE</h4>
        {hardware?.map((detail: any) => {
          return (
            <li key={detail.id}>
              <ul>
                <li className="name">{detail.device}</li>
                <li className="name">{detail.type_hardware}</li>
              </ul>
            </li>
          )
        })}
      </ul>
      <ul>
        <h4>SOFTWARE</h4>
        {software?.map((detail: any) => {
          return (
            <li key={detail.id}>
              <ul>
                <li className="name">{detail.name}</li>
              </ul>
            </li>
          )
        })}
      </ul>
      <ul>
        <h4>SISTEMA OPERATIVO</h4>
        {operativeSystem?.map((detail: any) => {
          return (
            <li key={detail.id}>
              <ul>
                <li className="name">{detail.name}</li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DeviceDetails;