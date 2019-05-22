import React from "react";
import MeteoriteItem from "./MeteoriteItem";
import MeteoriteListHead from "./MeteoriteListHead";

const MeteoriteList = ({ meteorites }) => {
  return (
    <div style={{overflowX:"auto"}}>
      <table   className="table is-hoverable is-striped is-fullwidth is-narrow table-container">
      <MeteoriteListHead />
        <tbody >
          {meteorites.map((meteorite, i) => {
            const year = (typeof meteorite.year !== 'undefined') ? meteorite.year : 'N/A' ;
            const substr = year.substring(0,4);
            
              return <MeteoriteItem 
              key={i} 
              name={meteorite.name}
              fall={meteorite.fall} 
              geolocation={(typeof meteorite.geolocation !== 'undefined') ? meteorite.geolocation : 'Not applicable'}
              mass={meteorite.mass} 
              nametype={meteorite.nametype} 
              recclass={meteorite.recclass} 
              reclat={meteorite.reclat} 
              reclong={meteorite.reclong} 
              year={substr} 
            />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MeteoriteList;
// fall, geolocation (latitude,longitude), id,mass, nametype,recclass,reclat,reclong,year
