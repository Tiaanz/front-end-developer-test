import { Dispatch, FC, SetStateAction, useState } from 'react'

interface SizeButtonProps {
  size: string
  isSelected: boolean
  onClick: () => void
}

const SizeButton: FC<SizeButtonProps> = ({
  size,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={isSelected ? 'selected-size-button' : 'size-button'}
      onClick={onClick}
    >
      {size}
    </div>
  )
}

export default SizeButton
