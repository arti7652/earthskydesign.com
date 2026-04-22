'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function LoginForm({ actionClassName }: { actionClassName: string }) {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await login(email, password)
    router.push('/')
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
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
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 rounded-xl border border-current/15 bg-white/80 px-4 text-sm text-foreground placeholder:text-muted-foreground"
        placeholder="Password"
        required
      />
      <Button type="submit" disabled={isLoading} className={cn('h-12 rounded-full text-sm font-semibold', actionClassName)}>
        {isLoading ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  )
}
