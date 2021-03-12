import styles from "../styles/components/Profile.module.scss";
import XpBar from "../components/XpBar.jsx";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext.jsx";
import { UserContext } from "../contexts/UserContext.jsx";

const Profile = () => {
    const { level } = useContext(MissionContext);

    const { name, gender } = useContext(UserContext);

    return (
        <div className={styles.container}>
            {gender === "masculino" ? (
                <img src="./img/masculino.png" />
            ) : (
                <img src="./img/feminino.png" />
            )}
            <div className={styles.info}>
                <p>{name}</p>
                <span>Nível {level}</span>
                <XpBar />
            </div>
        </div>
    );
};

export default Profile;
