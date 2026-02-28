import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
import "../../i18n";
import { routes } from "../../Routes/routes";
import type { cards } from "../../types";

const Section4 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cards: cards[] = [
    {
      title: t("common:news.card"),
      text: t("common:news.subcard"),
      data: "2025-12-28",
      label: t("common:news.read_more"),
    },
    {
      title: t("common:news.card"),
      text: t("common:news.subcard"),
      data: "2025-12-28",
      label: t("common:news.read_more"),
    },
    {
      title: t("common:news.card"),
      text: t("common:news.subcard"),
      data: "2025-12-28",
      label: t("common:news.read_more"),
    },
    {
      title: t("common:news.card"),
      text: t("common:news.subcard"),
      data: "2025-12-28",
      label: t("common:news.read_more"),
    },
  ];

  return (
    <>
      <section
        className="relative container m-auto flex flex-col justify-center gap-8 overflow-hidden bg-cover py-10 md:px-20"
        style={{ backgroundImage: "url('/img/bg2.webp')" }}
      >
        <div className="bg-rich-black/40 absolute top-0 right-0 z-0 h-full w-full"></div>
        {/* TITEL */}
        <motion.div
          animate={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 ms-4 flex max-w-3xl flex-col items-start gap-4"
        >
          <h2 className="text-2xl font-bold text-black md:text-5xl">
            {t("common:news.title")}
          </h2>
          <p className="text-rich-black text-sm font-light md:text-lg">
            {t("common:news.subtitle")}
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          animate={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 py-10"
        >
          {cards.map(({ title, text, data, label }, index) => (
            <div
              className="my-4 h-96 w-64 md:max-w-md"
              style={{ perspective: "1000px" }}
              key={index}
            >
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 1 }}
                className="relative h-full w-full shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <Card
                  className="absolute flex h-full w-full flex-col justify-between overflow-hidden backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <img
                      src="img/judg.webp"
                      alt="Event cover"
                      className="aspect-video w-full object-cover p-2 brightness-75"
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
                      className="hover:bg-rich-black cursor-pointer border-2 bg-gray-200 transition-colors duration-300 hover:text-white"
                      onClick={() => navigate("/about")}
                    >
                      {label}
                    </Button>
                  </CardFooter>
                </Card>

                {/* Back Side */}
                <div
                  className="absolute flex h-full w-full flex-col items-center justify-center rounded-xl bg-slate-900"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src="img/logo.svg"
                    alt="Logo"
                    className="mb-4 h-24 w-24 object-contain"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <div className="z-10 flex justify-center">
          <Link to={routes.ABOUT}>
            <Button
              variant="outline"
              className="bg-shiny-red hover:text-shiny-red border-shiny-red mt-4 cursor-pointer px-6 py-5 text-lg font-bold text-white transition-colors duration-300 hover:bg-white"
            >
              {t("common:news.view_all")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Section4;
