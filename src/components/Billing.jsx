import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Elevando Experiências Digitais a Novos Patamares
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Na Reefsys, acreditamos que a tecnologia web é o alicerce para experiências digitais excepcionais. Nesta seção, mergulhe em nossa abordagem inovadora para a criação de soluções tecnológicas de última geração. Desde o desenvolvimento de interfaces envolventes até a implementação de funcionalidades avançadas, saiba como estamos moldando o futuro do digital ao empregar tecnologias web de ponta. Explore como nossas soluções não apenas atendem às necessidades presentes, mas também antecipam as demandas futuras, proporcionando aos nossos clientes uma vantagem competitiva duradoura no cenário digital em constante evolução."
      </p>
    </div>
  </section>
);

export default Billing;
