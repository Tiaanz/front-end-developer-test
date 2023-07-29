import { FC } from 'react'

interface SizeButtonProps {
  size:string
}

const SizeButton: FC<SizeButtonProps> = ({size}) => {
  return <div className='size-button'>{size}</div>
}

export default SizeButton