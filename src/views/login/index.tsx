import { selectCount, useAppSelect, useAppDispatch, increment } from "../../redux"

export default function Login() {
  const count = useAppSelect(selectCount)
  const dispatch = useAppDispatch()
  return (
    <div>
      login

      count 
      {count}
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  )
}