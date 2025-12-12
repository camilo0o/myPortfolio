export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center gap-4 text-gray-400 bg-black/60 backdrop-blur w-full text-center">
        <div className="flex gap-6">
        <a href = "https://github.com/camilo0o" >
            <img src="/simple-icons--github.svg" alt="GitHub" className="h-6 w-6" />
        </a>

        <a href = "https://www.linkedin.com/in/camilo-fagundez" >
            <img src="/simple-icons--linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
        </a>
        </div>

      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Camilo Fagundez. Todos los derechos reservados. +598 92 336 666. camilo.pfs@gmail.com
      </p>
    </footer>
  );
}