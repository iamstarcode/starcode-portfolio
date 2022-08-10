
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { TwStyle } from 'twin.macro';

import { useSpring } from 'framer-motion';
import ClientOnly from '../utils/clientonly';

export interface IFloatingCard {
    children: React.ReactNode,
    styles: { position: TwStyle }
}

const FloatingCard: React.FC<IFloatingCard> = ({ styles, children }: IFloatingCard) => {

    const min = -100; const max = 100
    const rand = (min: number, max: number) => {
        return { x: Math.floor(min + Math.random() * (max - min)), y: Math.floor(min + Math.random() * (max - min)) }
    }
    const springOptions = {
        stiffness: 110,
        damping: 80
    }
    const { x, y } = rand(min, max)
    const springX = useSpring(0, springOptions)
    const springY = useSpring(0, springOptions)
    springY.set(y)
    springX.set(x)

    useEffect(() => {
        const interval = setInterval(() => {
            const { x, y } = rand(min, max)
            springY.set(y)
            springX.set(x)
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    return (
        <ClientOnly>
            <motion.div css={styles.position} tw="w-11 h-11 flex justify-center items-center bg-base-100 box-shadow[ 0rem 0.5rem calc(4 * 0.5rem) var(--shadow-color)] rounded-lg"
                style={{
                    x: springX,
                    y: springY
                }}
            >
                {children}
            </motion.div>
        </ClientOnly>
    );
}

export default FloatingCard
