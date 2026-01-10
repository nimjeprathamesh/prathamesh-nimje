import { useContext } from "react";
import { motion } from "framer-motion";
import { MyContext } from "../../Context/Context";
import { shopifyData } from "../../utils/constants";
import Shopify from "./Shopify";

const ShopifyApps = () => {
    const { theme } = useContext(MyContext);

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            className="content"
            id="portfolio"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="xl:mb-17.5 mb-5">
                <motion.div className="max-sm:px-2 text-center mx-auto">
                    <motion.p
                        className={`section-title ${
                            theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Shopify Apps I have developed and Published
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div className="mx-auto flex justify-center">
                <motion.div
                    className="grid xl:grid-cols-3 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {shopifyData.map((data, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            custom={index}
                        >
                            <Shopify data={data} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ShopifyApps;