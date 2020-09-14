import React, { useEffect, useState } from 'react';
import DeviceItem from '../../blocks/DeviceItem/DeviceItem';

interface IDevicesList {
  devicesList: any[];
}

const DevicesList: React.FC = function () {
  const [devicesList, setDevicesList] = useState<any[] | null>(null);

  useEffect(() => {

    fetch(`https://app-publicspa-mpis-dev.azurewebsites.net/data/fakeDevicesList.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setDevicesList(data.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section>
            <h2>Lista de dispositivos</h2>
            <ul className="device-list">
              {devicesList?.map((device: any) => {
                return (
                  <DeviceItem
                    key={device.mac}
                    mac={device.mac}
                  />
                )
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DevicesList;