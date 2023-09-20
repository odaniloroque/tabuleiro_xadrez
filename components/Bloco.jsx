import styles from '../styles/Bloco.module.css'
export default function Bloco(props){
  return <div 
            style={{backgroundColor: props.preta ? "#000" : "#fff"}}
            className={styles.bloco}></div>
}