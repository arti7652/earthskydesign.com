'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import type { TaskKey } from '@/lib/site-config'

type CreateTaskButtonProps = {
  taskKey: TaskKey
  label: string
  className?: string
}

export function CreateTaskButton({ taskKey, label, className }: CreateTaskButtonProps) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', media: '' })
  const [submitting, setSubmitting] = useState(false)

  const isProfile = taskKey === 'profile'

  const close = () => {
    setOpen(false)
    setForm({ title: '', description: '', media: '' })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      try {
        const storageKey = `esd:create:${taskKey}`
        const existing = JSON.parse(localStorage.getItem(storageKey) || '[]')
        existing.unshift({ ...form, createdAt: new Date().toISOString() })
        localStorage.setItem(storageKey, JSON.stringify(existing))
      } catch {}
      toast({
        title: `${label} draft saved`,
        description: `“${form.title || 'Untitled'}” is ready in your drafts.`,
      })
      setSubmitting(false)
      close()
    }, 250)
  }

  return (
    <>
      <Button
        size="sm"
        onClick={() => setOpen(true)}
        className={
          className ??
          'h-10 gap-1 rounded-full bg-[#140c0a] px-4 text-[#fff5ef] shadow-[0_12px_30px_rgba(20,12,10,0.28)] hover:bg-[#2a1814]'
        }
      >
        <Plus className="h-4 w-4" />
        Create {label}
      </Button>

      <Dialog open={open} onOpenChange={(next) => (!next ? close() : setOpen(true))}>
        <DialogContent className="sm:max-w-lg border-black/10 bg-[rgba(255,246,238,0.98)] text-[#1a0f0c] backdrop-blur-md">
          <DialogHeader>
            <DialogTitle>Create {label}</DialogTitle>
            <DialogDescription className="text-[#5f4750]">
              {isProfile
                ? 'Spin up a new social profile surface in seconds.'
                : 'Drop in a visual and a few words — we will handle the rest.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="create-title">{isProfile ? 'Display name' : 'Title'}</Label>
              <Input
                id="create-title"
                required
                value={form.title}
                onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                placeholder={isProfile ? 'e.g. Maya Okafor' : 'e.g. Sunset rooftop series'}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-media">{isProfile ? 'Avatar URL' : 'Image URL'}</Label>
              <Input
                id="create-media"
                value={form.media}
                onChange={(event) => setForm((prev) => ({ ...prev, media: event.target.value }))}
                placeholder="https://…"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-description">{isProfile ? 'Bio' : 'Caption'}</Label>
              <Textarea
                id="create-description"
                rows={4}
                value={form.description}
                onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
                placeholder={isProfile ? 'A short intro about you…' : 'Tell the story behind this visual…'}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="ghost"
                onClick={close}
                className="text-[#5f4750] hover:bg-black/5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-[#140c0a] px-5 text-[#fff5ef] shadow-[0_12px_30px_rgba(20,12,10,0.28)] hover:bg-[#2a1814]"
              >
                {submitting ? 'Saving…' : `Publish ${label}`}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
