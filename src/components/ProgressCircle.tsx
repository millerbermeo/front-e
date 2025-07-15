import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

interface Props {
    percentage: number
    size?: number // tamaño total del SVG
    label?: string
    color?: string
}

const ProgressCircle: React.FC<Props> = ({
    percentage,
    size = 70,
    label = 'Seguridad',
    color = '#1E88E5'
}) => {
    const stroke = 5
    const radius = (size - stroke) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className='flex justify-start flex-col items-center'>
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                {/* Círculo SVG */}
                <svg width={size} height={size} className="rotate-[-90deg]">
                    {/* Círculo de fondo (gris claro) */}
                    <circle
                        stroke="#E5E7EB"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                    />
                    {/* Círculo animado (progreso) */}
                    <motion.circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                </svg>

                {/* Contenido centrado */}
                <div className="absolute flex flex-col items-center">
                    <span className="text-lg font-bold" style={{ color }}>
                        <CountUp end={percentage} duration={1.5} />%
                    </span>
                </div>
            </div>
            <div className="text-sm text-gray-500 text-center leading-tight mt-1">
                {(() => {
                    const words = label.trim().split(' ');
                    const lines: string[] = [];

                    for (let i = 0; i < words.length; i++) {
                        const word = words[i];
                        if (word.length > 2 || i === 0) {
                            // palabra larga o primera → va sola
                            lines.push(word);
                        } else {
                            // palabra corta → se une con la anterior línea
                            lines[lines.length - 1] += ` ${word}`;
                        }
                    }

                    return lines.map((line, index) => (
                        <div key={index}>{line}</div>
                    ));
                })()}
            </div>



        </div>
    )
}

export default ProgressCircle
