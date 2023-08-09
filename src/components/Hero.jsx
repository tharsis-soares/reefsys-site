import styles from "../style";
import { discount, robot, cyberpunk } from "../assets";
import GetStarted from "./GetStarted";
import { testenew } from "../assets";


// xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",


const Hero = () => {
  return (
    <>
    <a href="#home">
      <img src={testenew} alt="" className="absolute w-16 xs:w-32 ss:w-24 sm:w-44 md:w-56 lg:w-74 ml-14 xl:ml-0 top-0" />
    </a>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} pt-16 ss:pt-16`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">30%</span> desconto no{" "}
              <span className="text-white">plano de 1 ano</span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold text-[24px] sm:text-[72px] text-white ss:leading-[100.8px] leading-[75px]">
              Conheça
              <br className="sm:block" />{" "}
              <span className="text-gradient text-[72px]">REEFSYS</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[28px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Aplicações Web
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Nosso time sabe muito! temos que escrever uma coisa bem legal aqui.
            Bem legal, vamos descrever algumas coisas
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={cyberpunk}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </>
  );
};

export default Hero;
