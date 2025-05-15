// app/actions/registerUserOnServer.ts
'use server'

import { redirect } from 'next/navigation'

export async function registerUserOnServer(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const avatar = formData.get('avatar') as File

  // ✅ Server-side validation (e.g. required, match, etc.)
  if (!name || !email || !password || !confirmPassword) {
    return { message: 'All fields are required.' }
  }

  if (password !== confirmPassword) {
    return { message: 'Passwords do not match.' }
  }

  if (!email.includes('@')) {
    return { message: 'Invalid email format.' }
  }

  try {
    const res = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      body: formData,
      headers: {
        // Let the browser set Content-Type (multipart/form-data)
      },
    })

    const data = await res.json()

    if (!res.ok) {
      return { message: data.message || 'Registration failed' }
    }

    redirect('/login') // ✅ Success redirect

  } catch (err) {
    return { message: 'Server not reachable' }
  }
}
