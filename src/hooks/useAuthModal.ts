import useBoolean from './useBoolean'

const useAuthModal = () => {
  const user = false
  const { boolean, setTrue, setFalse } = useBoolean()

  const verifyIfUserExists = (action: Function) => {
    if (user) {
      action()
      return;
    }
    setTrue()
  }

  return {
    user,
    open: boolean,
    onOpen: setTrue,
    onClose: setFalse,
    verifyIfUserExists
  }
}

export default useAuthModal