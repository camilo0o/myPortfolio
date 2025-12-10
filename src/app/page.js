import Image from "next/image";

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Camilo Fagundez</h1>
      <div className="flex justify-center">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
          <p className="text-gray-600 dark:text-gray-300">
          Soy un estudiante del Tecnólogo en Informática con orientación
          en desarrollo de software, tecnologías cloud y seguridad informática. Me apasiona la programación desde
          un punto de vista integral, abarcando distintas areas para ampliar mis conocimientos
          y habilidades.
          </p>

        </div>
      </div>
    </main>
    
  
  );
}
