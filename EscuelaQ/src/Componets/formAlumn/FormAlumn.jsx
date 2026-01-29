import './FormAlumn.scss';
import NavBar from '../NavBar/NavBar';

const FormAlumn = () => {
    return (
        <>
            <NavBar></NavBar>
            <section className="cont-form">
                <div className="form-alumn">
                    <h3> Crear cuenta Estudiante</h3>
                    <form action="" className="formulario">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" placeholder="Eduardo" required />
                        <label htmlFor="ApellidoPaterno">
                            Apellido Paterno
                        </label>
                        <input type="text" placeholder="Gutierrez" required />
                        <label htmlFor="ApellidoMaterno">
                            Apellido Materno
                        </label>
                        <input type="text" placeholder="Gonzalez" required />
                        <label htmlFor="Correo">Correo</label>
                        <input
                            type="email"
                            required
                            placeholder="micorreo@sitio.com"
                        />
                        <label htmlFor="Contraseña">Contraseña</label>
                        <input
                            type="password"
                            placeholder="*********"
                            required
                            min={8}
                            max={12}
                        />
                        <p className="info-password">
                            La contraseña debe tener entre 8 y 12 caracteres.
                        </p>
                        <label htmlFor="ContraseñaC">
                            Confirmar Contraseña
                        </label>
                        <input type="password" required />
                        <label htmlFor="Pais" required>
                            País
                        </label>
                        <select name="pais" id="pais" className="selectPais">
                            <option className="seleccionado" value="">
                                Selecciona un país
                            </option>
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

                        <button className="btnGlobal btnForm btn">
                            Registrar datos
                        </button>
                        <p className="seguridadP">
                            Tus datos están seguros. Nunca compartiremos tu
                            información.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
};
export default FormAlumn;
