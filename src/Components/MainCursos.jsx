import cursoImg from '../assets/img-nutricion2.jpeg';

export const MainCursos = () => {
  // Datos de ejemplo para los cursos
  const cursos = Array(6).fill({
    title: 'Title',
    description: 'Body text for whatever youd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    image: cursoImg
  });

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-secondary mb-1">Cursos</h2>
      <p className="text-secondary mb-8">Necesitas mejorar tu alimentación ?<br />Estas en el lugar correcto, encuentra tu curso aquí.</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {cursos.map((curso, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#d9d9d9] rounded-lg shadow-md p-4 flex flex-col items-start gap-4 w-full sm:w-[300px] md:w-[320px] lg:w-[340px]"
          >
            <img src={curso.image} alt="curso" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-semibold text-secondary">{curso.title}</h3>
            <p className="text-secondary text-sm flex-1">{curso.description}</p>
            <button className="bg-secondary text-tertiary px-4 py-2 rounded hover:bg-opacity-90 transition-all">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
