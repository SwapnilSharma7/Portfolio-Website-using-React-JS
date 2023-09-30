import { motion } from "framer-motion"
export default function OpenCard(){
    return (
        <div>
            <motion.div
                animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                }}
            />
        </div>
    )
}