import styles from './WaveDivider.module.css'

interface Props {
  flip?: boolean
  color?: string
  bg?: string
}

export default function WaveDivider({ flip = false, color = '#F8F9FC', bg = '#ffffff' }: Props) {
  return (
    <div className={styles.wrap} style={{ background: bg, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={styles.svg}
        aria-hidden="true"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
