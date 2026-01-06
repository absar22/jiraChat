import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[#f7f3f1] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

        <p className="font-medium">© 2025 JiraChat</p>

        <div className="flex gap-6">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </footer>
  )
}
