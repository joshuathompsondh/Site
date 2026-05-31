interface EyeInTriangleProps {
  size?: number
  strokeColor?: string
  strokeWidth?: number
  showRays?: boolean
  className?: string
}

export function EyeInTriangle({
  size = 100,
  strokeColor = '#c9a96a',
  strokeWidth = 0.9,
  showRays = true,
  className = '',
}: EyeInTriangleProps) {
  const cx = 50
  const cy = 50

  // Equilateral triangle vertices (pointing up), inscribed in r=42
  const R = 42
  const triTop = { x: cx, y: cy - R }
  const triBR = { x: cx + R * Math.cos(-Math.PI / 6), y: cy - R * Math.sin(-Math.PI / 6) }
  const triBL = { x: cx - R * Math.cos(-Math.PI / 6), y: cy - R * Math.sin(-Math.PI / 6) }

  // Inscribed circle in equilateral triangle: r = side / (2√3)
  // Centroid (= incenter for equilateral) is at 1/3 of height from base
  const triHeight = triTop.y - triBR.y // negative (top is smaller y)
  const incenterY = triBR.y + (triBR.y - triTop.y) / 3
  // For equilateral: incenter = centroid = (sum of y) / 3
  const centroidY = (triTop.y + triBR.y + triBL.y) / 3
  const inRadius = 20

  // Eye shape (almond) — horizontal, centered at (cx, centroidY)
  const eyeHalf = 18
  const eyeY = centroidY
  const eyeCurveAmt = 10

  // Rays
  const rayCount = 12
  const rayInner = 46
  const rayOuter = 54

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
      {/* Triangle */}
      <polygon
        points={`${triTop.x},${triTop.y} ${triBR.x},${triBR.y} ${triBL.x},${triBL.y}`}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Inscribed circle */}
      <circle
        cx={cx}
        cy={centroidY}
        r={inRadius}
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.6}
        fill="none"
        opacity={0.5}
      />

      {/* Eye almond shape */}
      <path
        d={`M ${cx - eyeHalf} ${eyeY} Q ${cx} ${eyeY - eyeCurveAmt} ${cx + eyeHalf} ${eyeY} Q ${cx} ${eyeY + eyeCurveAmt} ${cx - eyeHalf} ${eyeY} Z`}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* Iris */}
      <circle
        cx={cx}
        cy={eyeY}
        r={7}
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.7}
        fill="none"
      />

      {/* Pupil */}
      <circle cx={cx} cy={eyeY} r={2.5} fill={strokeColor} opacity={0.8} />

      {/* Crosshairs */}
      <line
        x1={cx - eyeHalf}
        y1={eyeY}
        x2={cx + eyeHalf}
        y2={eyeY}
        stroke={strokeColor}
        strokeWidth={0.3}
        opacity={0.35}
      />
      <line
        x1={cx}
        y1={eyeY - eyeCurveAmt}
        x2={cx}
        y2={eyeY + eyeCurveAmt}
        stroke={strokeColor}
        strokeWidth={0.3}
        opacity={0.35}
      />

      {/* Horizontal crossbar through triangle */}
      <line
        x1={triBL.x + 2}
        y1={triBL.y}
        x2={triBR.x - 2}
        y2={triBR.y}
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.5}
        opacity={0.3}
      />

      {/* Rays */}
      {showRays &&
        Array.from({ length: rayCount }, (_, i) => {
          const angle = (i * 2 * Math.PI) / rayCount - Math.PI / 2
          return (
            <line
              key={i}
              x1={cx + rayInner * Math.cos(angle)}
              y1={cy + rayInner * Math.sin(angle)}
              x2={cx + rayOuter * Math.cos(angle)}
              y2={cy + rayOuter * Math.sin(angle)}
              stroke={strokeColor}
              strokeWidth={0.5}
              opacity={0.4}
            />
          )
        })}
    </svg>
  )
}
