import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { routes } from "../../Routes/routes";
import type { cards } from "../../types";

const Section4 = () => {
  const navigate = useNavigate();

  const cards: cards[] = [
    {
      title: "Conferences and Seminars",
      text: "We are committed to attending and participating in legal events to enhance knowledge and...",
      data: "2025-12-28",
      label: "Read More",
    },
    {
      title: "Conferences and Seminars",
      text: "We are committed to attending and participating in legal events to enhance knowledge and...",
      data: "2025-12-28",
      label: "Read More",
    },
    {
      title: "Conferences and Seminars",
      text: "We are committed to attending and participating in legal events to enhance knowledge and...",
      data: "2025-12-28",
      label: "Read More",
    },
    {
      title: "Conferences and Seminars",
      text: "We are committed to attending and participating in legal events to enhance knowledge and...",
      data: "2025-12-27",
      label: "Read More",
    },
  ];

  return (
    <>
      <section className="container mt-16 flex flex-col  m-auto justify-center gap-8 md:px-20 py-10 overflow-hidden">
        {/* TITEL */}
        <motion.div
          animate={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl ms-4 flex flex-col items-start gap-4"
        >
          <h2 className="md:text-3xl text-2xl text-rich-black font-bold">
            Latest News And Updates
          </h2>
          <p className="text-sm text-rich-black font-light">
            Follow the latest legal developments and activities of K.L.H, from
            articles, events, and news that reflect our vision and role in
            supporting justice and development.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          animate={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-6 flex-wrap justify-center items-center py-10"
        >
          {cards.map(({ title, text, data, label }, index) => (
            <div
              className="md:max-w-md w-64 h-96 my-4"
              style={{ perspective: "1000px" }}
              key={index}
            >
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <Card
                  className="absolute w-full h-full flex flex-col justify-between overflow-hidden backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <img
                      src="img/judg.jpg"
                      alt="Event cover"
                      className="aspect-video w-full p-2 object-cover brightness-75"
                    />
                    <CardHeader>
                      <CardTitle className="text-lg">{title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {text}
                      </CardDescription>
                    </CardHeader>
                  </div>
                  <CardFooter className="flex justify-between p-4">
                    <Badge variant="secondary">{data}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer hover:bg-rich-black hover:text-white transition-colors duration-300"
                      onClick={() => navigate("/about")}
                    >
                      {label}
                    </Button>
                  </CardFooter>
                </Card>

                {/* Back Side */}
                <div
                  className="absolute h-full w-full flex flex-col justify-center items-center bg-slate-900 rounded-xl"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src="img/logo.svg"
                    alt="Logo"
                    className="object-contain w-24 h-24 mb-4"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <Link to={routes.ABOUT}>
            <Button
              variant="outline"
              className="mt-4 font-bold text-lg px-6 py-5 bg-shiny-red text-white hover:bg-white hover:text-shiny-red hover:border-shiny-red transition-colors duration-300 cursor-pointer"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Section4;
