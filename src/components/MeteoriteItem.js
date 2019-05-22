import React from 'react';
import './MeteoriteItem.css';

const MeteoriteItem = ({name, fall, id, mass, geolocation , nametype, recclass, reclat,reclong,year}) => {
  return (
    <tr>
      <th>{name}</th>
      <td>{fall}</td>
      <td>{geolocation.latitude}</td>
      <td>{geolocation.longitude}</td>
      <td>{mass}</td>
      <td>{nametype}</td>
      <td>{recclass}</td>
      <td>{reclat}</td>
      <td>{reclong}</td>
      <td>{year}</td>
    </tr>
  )
}

export default MeteoriteItem;

// fall, geolocation (latitude,longitude), id,mass, nametype,recclass,reclat,reclong,year