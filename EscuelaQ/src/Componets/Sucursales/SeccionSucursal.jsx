import './SeccionSucursal.scss';

const SeccionSucursal = () =>{
    return(
        <>
            <section className='section-sucursal'>
                <div className="titulo">
                    <h1>Nuestras sucursales</h1>
                    <h3>Aprendizaje sin fronteras</h3>
                </div>
                <div className="cont-sucursal">
                    <div className="menu-vertical">
                        <select name="pais" id="pais-op" value="pais" className='selectPais'>
                            <option value="">Selecciona un país</option>
                            <option value="mx"> México 🇲🇽</option>
                            <option value="pr">Puerto Rico 🇵🇷</option>
                            <option value="ar">Argentina 🇦🇷</option>
                            <option value="br">Brasil 🇧🇷</option>
                            <option value="ca">Canadá 🇨🇦</option>
                            <option value="cl">Chile 🇨🇱</option>
                            <option value="cz">República Checa 🇨🇿</option>
                            <option value="pe">Perú 🇵🇪</option>
                            <option value="co">Colombia 🇨🇴</option>
                            <option value="gt">Guatemala 🇬🇹</option>
                        </select>
                    </div>
                    <div className="contenido-sucursal-info">
                        <div className="carrucel">
                            <div className="cont-img">
                                <img src="/assets/img/Sucursales/canadaE.webp" alt="" />
                            </div>
                            <div className="cont-puntos">
                                <p>.</p>
                                <p>.</p>
                                <p>.</p>
                            </div>
                        </div>
                        <div className="cont-info">
                            <div className="info">
                                <h2>País</h2>
                                <p>Nombre Sucursal</p>
                                <p>Dirección</p>
                                <p>Corrreo</p>
                                <p>Teléfono</p>
                                <button>Inscribirse</button>
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