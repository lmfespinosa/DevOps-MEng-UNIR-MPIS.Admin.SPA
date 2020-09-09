import React, { useEffect, useState } from 'react';
import './DeviceItem.scss';
import DeviceDetail from '../DeviceDetails/DeviceDetails';

interface IDeviceItem {
  mac: string,
  handleSelectDevice?: (ev: any) => void
}

const DeviceItem: React.FC<IDeviceItem> = function ({ mac }) {
  const [itemSelected, setItemSelected] = useState(false);
  const handleSelectDevice = (ev: any) => {
    console.log(ev.target.value)
    setItemSelected(!itemSelected);
  }

  return (
    <li className="device-item">
      <label htmlFor={mac} className="device-item__label">
        <input
          type="checkbox"
          className="device-item__input"
          id={mac}
          name={mac}
          onChange={handleSelectDevice}
          value={mac}
        />
        <h3>{mac}</h3>
      </label>
      {itemSelected ?
        <div className="device-info">
          <DeviceDetail
            paramsFetch={mac}
          />
        </div>
        : null
      }
    </li>
  )
}

export default DeviceItem;