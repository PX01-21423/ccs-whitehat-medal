export default function CircuitFrame({ children, className = '' }) {
  return (
    <div className={`circuit-frame ${className}`}>
      <i className="corner corner-tl" /><i className="corner corner-tr" />
      <i className="corner corner-bl" /><i className="corner corner-br" />
      {children}
    </div>
  )
}
