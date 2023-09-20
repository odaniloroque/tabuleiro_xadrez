import styles from '../styles/Linha.module.css'
import Bloco from "./Bloco";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <Bloco preta={props.preta} />
      <Bloco preta={!props.preta} />
      <Bloco preta={props.preta} />
      <Bloco preta={!props.preta} />
      <Bloco preta={props.preta} />
      <Bloco preta={!props.preta} />
      <Bloco preta={props.preta} />
      <Bloco preta={!props.preta} />
    </div>
  )

  // if (props.preta) {
  //   return (

  //     <div className={styles.linha}>
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //     </div>
  //   )
  // }
  // else {
  //   return (
  //     <div className={styles.linha}>
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //       <Bloco preta />
  //       <Bloco />
  //     </div>
  //   )
  // }

}