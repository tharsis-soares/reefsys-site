import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Empoderando o Futuro dos Negócios: <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Na Reefsys, nossa paixão reside na criação de soluções digitais que transcendem o convencional. Moldamos ideias em realidade através da inovação alinhada à tecnologia, estabelecendo um novo padrão de excelência no mundo do software. Com um compromisso inabalável com a qualidade e a visão voltada para o futuro, capacitamos nossos clientes a navegar pelas águas complexas do mundo digital com confiança. Bem-vindo ao universo da Reefsys, onde a criatividade encontra a funcionalidade e a tecnologia se harmoniza com a elegância.
      </p>

      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
