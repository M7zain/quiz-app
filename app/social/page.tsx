import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function SocialPage() {
  const links = [
    { href: 'https://wa.me/966000000000', label: 'واتساب' },
    { href: 'https://t.me/username', label: 'تيليجرام' },
    { href: 'https://x.com/username', label: 'تويتر X' },
    { href: 'https://instagram.com/username', label: 'انستغرام' },
  ]

  return (
    <div className="mx-auto max-w-md px-4 py-8 text-center">
      <div className="mb-6 flex flex-col items-center gap-3">
        <Image src="/user.png" alt="المحامي مرزوق العاصي" width={80} height={80} className="rounded-full" />
        <h1 className="text-xl font-bold">المحامي مرزوق العاصي</h1>
        <p className="text-muted-foreground text-sm">روابط التواصل الاجتماعي</p>
      </div>

      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <Button key={l.href} asChild variant="outline" className="w-full py-6 text-base">
            <Link href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}


