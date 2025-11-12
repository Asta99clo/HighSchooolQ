import './SeccionSucursal.scss';
import React, {useState, useEffect} from 'react';
import sucursales from "../../Data/sucursales.json";
import { useNavigate } from "react-router-dom";


const SeccionSucursal = () =>{
    const navigate = useNavigate();
    //estados de react
    const [data , setData] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState("cl");
    const [sucursalActiva, setSucursalActiva]= useState(null);
    const [imgIndex, setImgIndex] = useState(0);

    
    // Cargar JSON al montar el componente
    useEffect(() => {
        setData(sucursales);
        // Al cargar, busca la sucursal de México directamente
        const definido = sucursales.find(s => s.codigoPais === "cl");
        setSucursalActiva(definido|| sucursales[0]);
    }, []);

    // Cambiar sucursal al cambiar país
    useEffect(() => {
        if (!paisSeleccionado) return;
        const found = data.find((s) => s.codigoPais === paisSeleccionado);
        setSucursalActiva(found || null);
        setImgIndex(0);
    }, [paisSeleccionado, data]);

    // Lista de países sin duplicados
    const paises = Array.from(
        new Map(data.map((s) => [s.codigoPais, s])).values()
    );



    return(
        <>
            <section className='section-sucursal' id='sucursales'>
                <div className="titulo">
                    <h1>Nuestras sucursales</h1>
                    <h3>Aprendizaje sin fronteras</h3>
                </div>
                <div className="cont-sucursal">
                    <div className="menu-vertical">
                        <select name="pais" id="pais-op" value="{paisSeleccionado}" className='selectPais' onChange={(e)=>setPaisSeleccionado(e.target.value)}>
                            <option value="">Selecciona un país</option>
                            {paises.map((p)=>(
                                <option key= {p.codigoPais} value={p.codigoPais}>
                                    {p.País} ({p.codigoPais.toUpperCase()})

                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="contenido-sucursal-info">
                        <div className="carrucel">
                            <div className="cont-img">
                                {sucursalActiva ? (
                                    <>
                                        <img src= {sucursalActiva.img[imgIndex]}alt={sucursalActiva.alt} />
                                        

                                    </>
                                ) : (
                                    <p>Cargando sucursal ... </p>
                                
                                )}
                            </div>
                            <div className="cont-puntos">
                                {sucursalActiva && sucursalActiva.img.map((_, i) =>(
                                    <button key={i}
                                            className={i===imgIndex ? "activo" : ""}
                                            onClick={()=> setImgIndex(i)}>●</button>
                                ))}
                            </div>
                        </div>
                        <div className="cont-info">
                            <div className="info">
                                {sucursalActiva ? (
                                    <>
                                        <h2>{sucursalActiva.país}</h2>
                                        <h2>{sucursalActiva.NombreSucursal}</h2>
                                        <p><span>Dirección: </span>{sucursalActiva.Dirección}</p>
                                        <p><span>Correo: </span> {sucursalActiva.Correo}</p>
                                        <p><span>Teléfono: </span>{sucursalActiva.Teléfono}</p>
                                        <button onClick={()=>navigate("/InicioSesion")}>Inscribirse</button>
                                    </>
                                ):(
                                    <p>Selecciona un país para ver sus datos</p>
                                )}
                            </div>
                            <div className="mapa">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60228.78307897591!2d-99.13148403167723!3d19.35620438678744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd778e895535%3A0x87aaf7caf70fcf21!2sEDU%2B%20Cursos%20para%20examen%20COMIPEMS%20-%20BACHILLERATO!5e0!3m2!1ses-419!2smx!4v1760277662456!5m2!1ses-419!2smx"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SeccionSucursal;