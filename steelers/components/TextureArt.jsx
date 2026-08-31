const wavePaths = Array.from({ length: 15 }, (_, index) => {
  const y = 20 + index * 18
  const bend = 18 + (index % 5) * 9
  return `M-30 ${y} C 70 ${y - bend}, 95 ${y + bend}, 170 ${y} S 285 ${
    y - bend
  }, 390 ${y} S 525 ${y + bend}, 690 ${y}`
})

export default function TextureArt({
  motif = 'waves',
  label,
  className = '',
  cover = false,
}) {
  return (
    <div className={`texture-art ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 660 300"
        preserveAspectRatio={cover ? 'xMidYMid slice' : 'xMidYMid meet'}
        role="presentation"
      >
        {motif === 'sun' && (
          <>
            {Array.from({ length: 12 }, (_, index) => (
              <circle
                key={index}
                cx="330"
                cy="150"
                r={18 + index * 15}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            ))}
            <path d="M0 150H660M330 0V300" stroke="currentColor" strokeWidth="2" />
          </>
        )}

        {(motif === 'waves' || motif === 'strata') &&
          wavePaths.map((path, index) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth={motif === 'strata' ? 4 : 7}
              transform={
                motif === 'strata'
                  ? `rotate(${index % 2 ? 1.5 : -1.5} 330 150)`
                  : undefined
              }
            />
          ))}

        {motif === 'grid' && (
          <>
            {Array.from({ length: 14 }, (_, index) => (
              <path
                key={`v-${index}`}
                d={`M${20 + index * 48} 0L${90 + index * 38} 300`}
                stroke="currentColor"
                strokeWidth="2"
              />
            ))}
            {Array.from({ length: 8 }, (_, index) => (
              <path
                key={`h-${index}`}
                d={`M0 ${20 + index * 40}H660`}
                stroke="currentColor"
                strokeWidth="2"
              />
            ))}
          </>
        )}
      </svg>
      {label && <span>{label}</span>}
    </div>
  )
}
