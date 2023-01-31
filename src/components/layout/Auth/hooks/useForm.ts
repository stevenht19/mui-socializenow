import { useState } from 'react'

const useForm = <T>(initialValues: T, action: Function) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<T>(initialValues)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const actualValues = Object.values(formValues as Object)
      if (!actualValues.every(value => value.trim().length)) return;
  
      setIsSubmitting(true)
      await action()
      setIsSubmitting(false) 
    } catch (_error) {
      setIsSubmitting(false) 
    }
  
  }

  return {
    formValues,
    onChange,
    isSubmitting,
    handleSubmit
  }

}

export default useForm