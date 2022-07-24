import { useState } from 'react'
export default function useToggle(
  initial: boolean,
): [boolean, () => void, (control: boolean) => void] {
  const [toggle, setToggle] = useState<boolean>(initial)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }
  const handleControl = (control: boolean) => {
    setToggle(control)
  }

  return [toggle, handleToggle, (control) => handleControl(control)]
}
