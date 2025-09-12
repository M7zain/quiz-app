import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Developed by{" "}
            <Link 
              href="https://zoudne.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Zoudne
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
