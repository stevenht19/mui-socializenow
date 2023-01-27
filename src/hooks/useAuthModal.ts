import useAccount from './useAccount'
import useBoolean from './useBoolean'

const useAuthModal = () => {
  const { account } = useAccount()
  const { boolean, setTrue, setFalse } = useBoolean()

  const verifyIfUserExists = (action: Function) => {
    if (account) {
      action()
      return;
    }
    setTrue()
  }

  return {
    user: account,
    open: boolean,
    onOpen: setTrue,
    onClose: setFalse,
    verifyIfUserExists
  }
}

export default useAuthModal