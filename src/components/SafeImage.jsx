export default function SafeImage({ fallback, ...props }) {
  return <img {...props} onError={(event) => {
    event.currentTarget.onerror = null
    event.currentTarget.src = fallback
  }} />
}
