interface SeedOfLifeProps {
  size?: number
  strokeColor?: string
  strokeWidth?: number
  className?: string
}

export function SeedOfLife({
  size = 100,
  strokeColor = '#c9a96a',
  strokeWidth = 0.8,
  className = '',
}: SeedOfLifeProps) {
  const r = 18
  const cx = 50
  const cy = 50

  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI) / 3
    return {
      cx: cx + r * Math.cos(angle),
      cy: cy - r * Math.sin(angle),
    }
  })

  const circles = [{ cx, cy }, ...petals]

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
      {/* Outer bounding circle */}
      <circle
        cx={cx}
        cy={cy}
        r={r * 2}
        stroke={strokeColor}
        strokeWidth={strokeWidth * 0.7}
        fill="none"
        opacity={0.4}
      />
      {/* Seven seed circles */}
      {circles.map((c, i) => (
        <circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={r}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
      ))}
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={1} fill={strokeColor} opacity={0.6} />
    </svg>
  )
}
