import Image from 'next/image'

export default function EditorialImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 900px) 100vw, 50vw',
  position = 'center',
  mobilePosition,
  className = '',
}) {
  const styles = {
    '--image-position': position,
    '--image-position-mobile': mobilePosition || position,
  }

  return (
    <figure className={`editorial-image ${className}`} style={styles}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="editorial-image-media"
      />
    </figure>
  )
}
