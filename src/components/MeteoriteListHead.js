import React from 'react'

const MeteoriteListHead = () => {
    return (
        <thead>
            <tr>
                <th><abbr title="Name">Name</abbr></th>
                <th><abbr title="Fall">Fall</abbr></th>
                <th><abbr title="Latitude">Lat</abbr></th>
                <th><abbr title="Longitude">Lon</abbr></th>
                <th><abbr title="Mass">Mss</abbr></th>
                <th><abbr title="Nametype">Nat</abbr></th>
                <th><abbr title="Recclass">Rcls</abbr></th>
                <th><abbr title="Reclat">Rcla</abbr></th>
                <th><abbr title="Reclong">Rclo</abbr></th>
                <th><abbr title="Year">Yr</abbr></th>
            </tr>
        </thead>
    )
}

export default MeteoriteListHead
// fall, geolocation (latitude,longitude), id,mass, nametype,recclass,reclat,reclong,year
