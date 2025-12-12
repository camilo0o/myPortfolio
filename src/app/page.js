import Image from "next/image";

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center gap-12 px-6 py-16 md:px-12 lg:px-24 text-center">
      <h1 className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Camilo</span> Developer.</h1>
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

      <div className="flex justify-center mt-8 px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Tecnologías y Herramientas</h2>

          {/* LENGUAJES */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Lenguajes</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["c", "c++", "java", "javascript", "python"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Servlets", "APIs REST", "Tomcat", "apache"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FRONTEND */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["html", "css", "bootstrap", "flaticon", "tailwind"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          {/* FRAMEWORKS Y BIBLIOTECAS */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Frameworks y Bibliotecas</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["react", "nextjs", "Opencv"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BASE DE DATOS */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Base de Datos</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["sql", "mysql", "dbeaver"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HERRAMIENTAS */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Herramientas</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git", "Github", "Jetbrains", "VSCode"].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow cursor-default hover:scale-105 transition"
                >
                  <img src={`/${tech}.svg`} alt={tech} className="h-5 w-5" />
                  <span className="capitalize">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ANÁLISIS Y ABSTRACCIÓN */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Análisis y Abstracción</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "POO",
                "Estructuras de datos",
                "Modelado UML",
                "Patrones de diseño",
                "Algoritmos"
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow hover:scale-105 transition"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     <div className="flex justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Habilidades no técnicas</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Comunicación efectiva
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Resolución de problemas
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Trabajo en equipo
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Pensamiento crítico
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Adaptabilidad
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Flexibilidad
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Liderazgo
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
            Gestión del tiempo
          </span>
        </div>

        {/* Botón de descarga dentro de la card (opcional) */}
        <div className="flex justify-center mt-8">
          <a
            href="/CV_Ernesto_Camilo_Fagundez.pdf"
            download
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>

    </main>
    
  
  );
}
