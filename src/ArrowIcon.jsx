import './App.css'

const ArrowIcon = (props) => {

  return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${props.rotation})`}}>
<path d="M11.0002 8.57104L7.05018 12.521C6.86158 12.7032 6.60898 12.804 6.34678 12.8017C6.08458 12.7994 5.83377 12.6943 5.64836 12.5089C5.46295 12.3235 5.35778 12.0726 5.35551 11.8104C5.35323 11.5482 5.45402 11.2956 5.63618 11.107L11.2932 5.45004C11.3858 5.35686 11.496 5.28291 11.6173 5.23244C11.7387 5.18198 11.8688 5.15601 12.0002 5.15601C12.1316 5.15601 12.2617 5.18198 12.383 5.23244C12.5044 5.28291 12.6145 5.35686 12.7072 5.45004L18.3642 11.107C18.5418 11.2965 18.6388 11.5476 18.6346 11.8073C18.6304 12.067 18.5253 12.3148 18.3416 12.4984C18.1579 12.682 17.9099 12.7869 17.6503 12.791C17.3906 12.795 17.1395 12.6978 16.9502 12.52L13.0002 8.57004V18.156C13.0002 18.4213 12.8948 18.6756 12.7073 18.8631C12.5198 19.0507 12.2654 19.156 12.0002 19.156C11.735 19.156 11.4806 19.0507 11.2931 18.8631C11.1055 18.6756 11.0002 18.4213 11.0002 18.156V8.57104Z" fill="white" fill-opacity="0.9"/>
</svg>

  )
}

export default ArrowIcon