interface GeometricSigilProps {
  size?: number
  strokeColor?: string
  strokeWidth?: number
  className?: string
  variant?: 'diamond' | 'hexagon' | 'rings' | 'triangle' | 'sliders'
}

export function GeometricSigil({
  size = 48,
  strokeColor = '#c9a96a',
  strokeWidth = 0.9,
  className = '',
  variant = 'diamond',
}: GeometricSigilProps) {
  const cx = 50
  const cy = 50

  const renderShape = () => {
    switch (variant) {
      case 'rings':
        return (
          <>
            <circle cx={cx} cy={cy} r={38} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <circle cx={cx} cy={cy} r={27} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <circle cx={cx} cy={cy} r={16} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <circle cx={cx} cy={cy} r={5} fill={strokeColor} opacity={0.7} />
          </>
        )

      case 'hexagon': {
        const pts = Array.from({ length: 6 }, (_, i) => {
          const a = (i * Math.PI) / 3 - Math.PI / 6
          return `${cx + 38 * Math.cos(a)},${cy + 38 * Math.sin(a)}`
        }).join(' ')
        const innerPts = Array.from({ length: 6 }, (_, i) => {
          const a = (i * Math.PI) / 3 - Math.PI / 6
          return `${cx + 22 * Math.cos(a)},${cy + 22 * Math.sin(a)}`
        }).join(' ')
        return (
          <>
            <polygon points={pts} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <polygon points={innerPts} stroke={strokeColor} strokeWidth={strokeWidth * 0.6} fill="none" opacity={0.5} />
            <circle cx={cx} cy={cy} r={4} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
          </>
        )
      }

      case 'triangle': {
        const tTop = `${cx},${cy - 38}`
        const tBR = `${cx + 33},${cy + 19}`
        const tBL = `${cx - 33},${cy + 19}`
        const iTop = `${cx},${cy - 20}`
        const iBR = `${cx + 17},${cy + 10}`
        const iBL = `${cx - 17},${cy + 10}`
        return (
          <>
            <polygon points={`${tTop} ${tBR} ${tBL}`} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <polygon points={`${iTop} ${iBR} ${iBL}`} stroke={strokeColor} strokeWidth={strokeWidth * 0.6} fill="none" opacity={0.6} />
            <line x1={cx} y1={cy - 38} x2={cx} y2={cy + 19} stroke={strokeColor} strokeWidth={0.4} opacity={0.4} />
            <line x1={cx - 33} y1={cy + 19} x2={cx + 33} y2={cy + 19} stroke={strokeColor} strokeWidth={0.4} opacity={0.4} />
          </>
        )
      }

      case 'sliders':
        return (
          <>
            <line x1={20} y1={28} x2={80} y2={28} stroke={strokeColor} strokeWidth={strokeWidth} opacity={0.5} />
            <line x1={20} y1={50} x2={80} y2={50} stroke={strokeColor} strokeWidth={strokeWidth} opacity={0.5} />
            <line x1={20} y1={72} x2={80} y2={72} stroke={strokeColor} strokeWidth={strokeWidth} opacity={0.5} />
            <circle cx={38} cy={28} r={5} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx={62} cy={50} r={5} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
            <circle cx={45} cy={72} r={5} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
          </>
        )

      case 'diamond':
      default: {
        const outer = `${cx},${cy - 40} ${cx + 28},${cy} ${cx},${cy + 40} ${cx - 28},${cy}`
        const mid = `${cx},${cy - 24} ${cx + 17},${cy} ${cx},${cy + 24} ${cx - 17},${cy}`
        return (
          <>
            <polygon points={outer} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            <polygon points={mid} stroke={strokeColor} strokeWidth={strokeWidth * 0.6} fill="none" opacity={0.5} />
            <line x1={cx} y1={cy - 40} x2={cx} y2={cy + 40} stroke={strokeColor} strokeWidth={0.4} opacity={0.3} />
            <line x1={cx - 28} y1={cy} x2={cx + 28} y2={cy} stroke={strokeColor} strokeWidth={0.4} opacity={0.3} />
            <circle cx={cx} cy={cy} r={3} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} />
          </>
        )
      }
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {renderShape()}
    </svg>
  )
}
