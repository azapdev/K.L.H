import { motion } from "framer-motion";
const Section2 = () => {
  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center py-5 flex flex-col justify-around gap-15 overflow-hidden"
        style={{ backgroundImage: "url('/img/bg2.jpg')" }}
      >
        {/* CARDS */}
        <div className="flex justify-center flex-col items-center md:flex-row gap-6 md:gap-15 mx-2">
          {/* card1 */}
          <motion.div
            animate={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-rich-black flex flex-col justify-center items-center gap-3 max-w-sm capitalize p-8 border-b-12 border-dark-topaz"
          >
            <span className="text-dark-topaz text-xl md:text-4xl">
              <i className="fa-solid fa-scale-balanced"></i>
            </span>
            <p className="text-white font-bold md:text-lg whitespace-nowrap">
              request A consultation
            </p>
            <span className="text-white text-center text-sm">
              Use the consultation request service to get quick and detailed
              advice from our legal experts. Let us give you the guidance you
              need to understand your rights clearly.
            </span>
          </motion.div>

          {/* card2 */}
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="bg-rich-black flex flex-col justify-center items-center gap-3 max-w-sm capitalize  p-8 border-b-12 border-dark-topaz"
          >
            <span className="text-dark-topaz text-4xl">
              <i className="fa-solid fa-gavel"></i>
            </span>
            <p className="text-white font-bold md:text-2lg whitespace-nowrap">
              book an appointment
            </p>
            <span className="text-white text-center text-sm">
              Use the consultation request service to get quick and detailed
              advice from our legal experts. Let us give you the guidance you
              need to understand your rights clearly.
            </span>
          </motion.div>
        </div>

        {/* info */}
        <div className="flex max-w-5xl flex-col md:flex-row items-center justify-center px-4 mx-auto gap-10 ">
          {/* img */}
          <div className="md:py-10 py-5 md:px-5 px-2 border-9 border-dark-topaz rounded-2xl mx-2">
            <img
              src="img/hummer.jpg"
              alt=""
              className="md:w-7xl  md:h-60 size-40  transform md:-translate-x-22.5 -translate-x-8.5 rounded-2xl"
            />
          </div>

          {/* DESCREPTION */}
          <div className="mx-2">
            <p className="font-extrabold text-rich-black md:text-2xl text-lg my-4 text-center">
              Dedicated To Your Legal Success
            </p>
            <span>
              A leading professional entity combining legal, administrative,
              financial, and academic expertise, distinguished by a clear vision
              to create a sophisticated legal environment based on knowledge and
              a commitment to the needs of society, making it a strategic
              partner in achieving justice and sustainable development. Our team
              relies on meticulous analysis and understanding of the needs of
              individuals and institutions, with a focus on proactive
              communication to take preventative measures that protec
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
