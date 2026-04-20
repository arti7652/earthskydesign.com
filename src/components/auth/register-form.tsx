'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function RegisterForm({ actionClassName }: { actionClassName: string }) {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await signup(name, email, password)
    router.push('/')
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <Input
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 rounded-xl border border-current/15 bg-white/80 px-4 text-sm text-foreground placeholder:text-muted-foreground"
        placeholder="Full name"
        required
      />
      <Input
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 rounded-xl border border-current/15 bg-white/80 px-4 text-sm text-foreground placeholder:text-muted-foreground"
        placeholder="Email address"
        required
      />
      <Input
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 rounded-xl border border-current/15 bg-white/80 px-4 text-sm text-foreground placeholder:text-muted-foreground"
        placeholder="Password"
        required
      />
      <Button type="submit" disabled={isLoading} className={cn('h-12 rounded-full text-sm font-semibold', actionClassName)}>
        {isLoading ? 'Creating account…' : 'Create account'}
      </Button>
    </form>
  )
}
