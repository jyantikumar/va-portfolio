export default function Footer() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jyanti Austria Kumar</p>
        <div className="flex gap-4">
          <a href="mailto:jyantiaustriakumar@gmail.com" className="hover:text-foreground">Email</a>
          <a href="https://github.com/jyantikumar" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="https://jyantikumar.github.io/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Old Portfolio</a>
        </div>
      </div>
    </footer>
  )
}