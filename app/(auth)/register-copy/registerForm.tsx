'use client'

import { startTransition, useActionState } from 'react'
import { useRef, useState, useEffect } from 'react'
import { registerUserOnServer } from '@/app/(auth)/register-copy/registerUserOnServer'
import { isFormValid } from '@/lib/utils'
import { Alert, TextField, FileInput, Button } from '@/components/mui'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const initialState = { message: '' }

export const RegisterForm = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: null as File | null,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const fileRef = useRef<HTMLInputElement>(null)

  const [serverState, formAction, isPending] = useActionState(registerUserOnServer, initialState)
  const router = useRouter()

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = field === 'avatar' ? e.target.files?.[0] ?? null : e.target.value
    setFields(prev => ({ ...prev, [field]: value }))
  }

  const clientValidateAndSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = isFormValid(fields, setErrors)
    if (!isValid) return

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })

		startTransition(() => {
    	formAction(formData)
  	})
  }

  return (
    <form onSubmit={clientValidateAndSubmit} className='flex flex-col gap-2'>
      {serverState?.message && (
        <Alert severity="error" message={serverState.message} />
      )}

      <TextField
        label="Your Name"
        // name="name"
        value={fields.name}
        onChange={handleChange('name')}
        helperText={errors.name}
        required
      />
      <TextField
        label="Your Email"
        // name="email"
        type="email"
        value={fields.email}
        onChange={handleChange('email')}
        helperText={errors.email}
        required
      />
      <TextField
        label="Password"
        // name="password"
        type="password"
        value={fields.password}
        onChange={handleChange('password')}
        helperText={errors.password}
        required
      />
      <TextField
        label="Confirm Password"
        // name="confirmPassword"
        type="password"
        value={fields.confirmPassword}
        onChange={handleChange('confirmPassword')}
        helperText={errors.confirmPassword}
        required
      />

      <FileInput
        // name="avatar"
        ref={fileRef}
        onChange={handleChange('avatar')}
        helperText={errors.avatar}
      />

      {fields.avatar && typeof fields.avatar === 'object' && (
        <div className="mt-2">
          <Image
            src={URL.createObjectURL(fields.avatar)}
            alt="Preview"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
      )}

      <Button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Register'}
      </Button>
    </form>
  )
}
