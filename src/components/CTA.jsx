import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="contato" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Aproveite e teste nossa ferramenta!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Tudo que voce precisa para visualizar sua empresa do melhor jeito possível, temos a solução para sua necessidade
      </p>
    </div>
    <div onClick={() => alert('em teste')} className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
