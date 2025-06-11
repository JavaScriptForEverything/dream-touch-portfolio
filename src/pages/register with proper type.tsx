import { Input } from '@/components/ui'
import { useAppDispatch, } from '@/hooks/redux'
import { isFormValid } from '@/lib/utils'
import { useState, } from 'react'
import * as userReducer from '@/store/userReducer'

// 1. First define the form field types
type FormFieldConfig = {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'password' | 'file'
  helperText: string
}

// 2. Create a const assertion for formFields to preserve literal types
const formFields = {
  name: { label: 'Your Name', placeholder: 'riajul islam', type: 'text' as const, helperText: '' },
  email: { label: 'Your Email', placeholder: 'your@gmail.com', type: 'email' as const, helperText: '' },
  password: { label: 'Your Password', placeholder: '********', type: 'password' as const, helperText: '' },
  confirmPassword: { label: 'Your Confirm Password', placeholder: '********', type: 'password' as const, helperText: '' },
} as const

// 3. Derive the FormFields type from formFields keys
type FormFields = {
  [K in keyof typeof formFields]: string
}

// 4. Create initial fields with proper typing
const initialFields: FormFields = Object.fromEntries(
  Object.keys(formFields).map(key => [key, ''])
) as FormFields

const Register = () => {
  const dispatch = useAppDispatch()

  const [fields, setFields] = useState<FormFields>(initialFields)
  const [fieldsError, setFieldsError] = useState<FormFields>(initialFields)

  // ... rest of your useEffect hooks remain the same ...

  // 5. Strongly typed change handler
  const changeHandler = <K extends keyof FormFields>(name: K) => 
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setFields({ ...fields, [name]: evt.target.value })
    }

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!isFormValid(fields, setFieldsError)) return
    
    dispatch(userReducer.registerUser(fields))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 w-full">
      {/* ... rest of your JSX remains the same ... */}

      <form noValidate onSubmit={submitHandler} className="w-full max-w-md">
        {(Object.entries(formFields) as Array<[keyof FormFields, FormFieldConfig]>).map(
          ([key, { label, type, placeholder, helperText }]) => (
            <div className="mb-4" key={key}>
              <label className="block mb-1 text-sm font-bold text-gray-700">
                {label}
              </label>
              <Input
                type={type}
                placeholder={placeholder}
                value={fields[key]}  // No type assertion needed now
                onChange={changeHandler(key)} // Properly typed
              />
              {fieldsError[key] && (
                <span className='text-red-500'>{fieldsError[key]}</span>
              )}
              {helperText && (
                <span className='text-red-500'>{helperText}</span>
              )}
            </div>
          )
        )}

        {/* ... rest of your form JSX ... */}
      </form>

      {/* ... rest of your component JSX ... */}
    </div>
  )
}

export default Register