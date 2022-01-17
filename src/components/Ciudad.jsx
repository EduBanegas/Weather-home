import './Ciudad.css'

export default function Ciudad ({datos}) {

    
    return  (
        <div className="ciudad">
            <div className="container">
                    <h2>{datos.name}</h2>
                    <div className="info">
                        <div>Temperatura: {datos.temp} ºC</div>
                        <div>Clima: {datos.weather}</div>
                        <div>Viento: {datos.wind} km/h</div>
                        <div>Cantidad de nubes: {datos.clouds}</div>
                        <div>Latitud: {datos.latitud}º</div>
                        <div>Longitud: {datos.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}