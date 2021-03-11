import styles from "../styles/components/ModalUser.module.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const ModalUser = ({ onClose }) => {
    const {
        handleClassChange,
        handleInputEntry,
        handleGenderChange,
    } = useContext(UserContext);

    return (
        <div className={styles.modalActive}>
            <div className={styles.container}>
                <h1>
                    Antes de começar sua aventura, por favor crie seu personagem
                </h1>
                <form>
                    <div className={styles.nickGenderContainer}>
                        <div className={styles.nick}>
                            <p>Nickname</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleInputEntry}
                            />
                        </div>

                        <div
                            onChange={handleGenderChange}
                            className={styles.gender}
                        >
                            <p>Gênero</p>
                            <div>
                                <div>
                                    <input
                                        type="radio"
                                        id="masculino"
                                        name="genero"
                                        value="Masculino"
                                    />
                                    <label htmlFor="masculino">
                                        <img
                                            src="./img/masculino.png"
                                            alt="masculino"
                                        />
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="feminino"
                                        name="genero"
                                        value="Feminino"
                                    />
                                    <label htmlFor="feminino">
                                        <img
                                            src="./img/feminino.png"
                                            alt="feminino"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.classesContainer}>
                        <p>Classe</p>
                        <div
                            onChange={handleClassChange}
                            className={styles.classes}
                        >
                            <div>
                                <input
                                    type="radio"
                                    id="artista"
                                    name="classe"
                                    value="Artista"
                                />
                                <label htmlFor="artista"></label>
                                <p>Artista</p>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="estudioso"
                                    name="classe"
                                    value="Estudioso"
                                />
                                <label htmlFor="estudioso"></label>
                                <p>Estudioso(a)</p>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="explorador"
                                    name="classe"
                                    value="Explorador"
                                />
                                <label htmlFor="explorador"></label>
                                <p>Explorador(a)</p>
                            </div>
                        </div>
                        <button
                            className={styles.completeButton}
                            type="submit"
                            onClick={onClose}
                        >
                            Concluído
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalUser;
