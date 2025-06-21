import { useRef, useState } from 'react';

// Importando las imágenes de los cursos desde los assets
import imgNutricion from '../assets/img-nutricion.jpeg';
import imgLactancia from '../assets/lactancia-materna.jpeg';
import imgRecetas from '../assets/recetas-saludables.jpeg';
import imgObesidad from '../assets/alimentacion-saludable-obesidad.jpeg';
import imgNutricion2 from '../assets/img-nutricion2.jpeg';
import imgSnacks from '../assets/imagenExp.jpeg';

// Datos estáticos de los 6 cursos
const cursosData = [
  {
    id: 1,
    title: 'Introducción a la Nutrición Infantil',
    image: imgNutricion,
    shortDescription: 'Aprende los fundamentos de una alimentación balanceada para niños y asegura su crecimiento saludable.',
    longDescription: 'Este curso es la guía definitiva para padres que desean entender las necesidades nutricionales de sus hijos. Cubriremos temas como la creación de platos equilibrados, el manejo de alergias comunes, la importancia de las vitaminas y minerales, y estrategias para introducir nuevos alimentos de forma positiva. Al finalizar, tendrás la confianza para construir hábitos alimenticios que durarán toda la vida.',
    date: '2025-01-15'
  },
  {
    id: 2,
    title: 'Lactancia Materna Exitosa',
    image: imgLactancia,
    shortDescription: 'Una guía completa para nuevas madres, desde los primeros días hasta el destete, para una experiencia positiva.',
    longDescription: 'La lactancia materna es un viaje único. En este curso, te acompañamos paso a paso, abordando desde las técnicas de agarre correctas y la producción de leche, hasta los desafíos más comunes como el dolor o la baja producción. Contarás con el apoyo de expertas y una comunidad de madres para resolver todas tus dudas y vivir esta etapa con plenitud y seguridad.',
    date: '2025-02-10'
  },
  {
    id: 3,
    title: 'Cocinando Recetas Saludables en Familia',
    image: imgRecetas,
    shortDescription: 'Descubre recetas divertidas, rápidas y nutritivas para involucrar a toda la familia en la cocina y comer sano.',
    longDescription: '¡Comer sano no tiene por qué ser aburrido! Este curso práctico te enseñará a preparar desayunos energéticos, almuerzos creativos y cenas deliciosas que encantarán a todos. Aprenderás a sustituir ingredientes y planificar menús semanales.',
    date: '2025-03-05'
  },
  {
    id: 4,
    title: 'Manejo de la Obesidad Infantil',
    image: imgObesidad,
    shortDescription: 'Estrategias efectivas y compasivas para guiar a tu hijo hacia un peso saludable con hábitos sostenibles.',
    longDescription: 'Abordar el sobrepeso infantil requiere un enfoque integral y empático. Este curso te brinda herramientas basadas en evidencia para fomentar una relación sana con la comida y la actividad física, sin recurrir a dietas restrictivas. Aprenderás sobre el papel de las emociones en la alimentación.',
    date: '2025-04-20'
  },
  {
    id: 5,
    title: 'Alimentación Complementaria (BLW y Papillas)',
    image: imgNutricion2,
    shortDescription: 'Inicia la alimentación de tu bebé de forma segura y respetuosa, conociendo los métodos BLW y tradicional.',
    longDescription: 'La introducción de sólidos es un hito emocionante. Este curso te prepara para comenzarla con confianza, explicando en detalle el método Baby-Led Weaning (BLW) y el tradicional. Sabrás qué alimentos ofrecer y cómo prepararlos de forma segura.',
    date: '2025-05-18'
  },
  {
    id: 6,
    title: 'Snacks Inteligentes para Niños Activos',
    image: imgSnacks,
    shortDescription: 'Ideas creativas para meriendas que aporten energía y nutrientes a tus hijos durante el día.',
    longDescription: 'Olvida los ultraprocesados. En este curso, descubrirás un mundo de opciones para snacks saludables, fáciles de preparar y perfectos para llevar al colegio o disfrutar en casa. Desde barritas caseras hasta batidos, te daremos recetas y trucos para que tus hijos recarguen energías de la forma más sana.',
    date: '2025-06-02'
  },
];

export const MainCursos = () => {
  const dialogRef = useRef(null);
  const [selectedCurso, setSelectedCurso] = useState(null);

  const abrirModal = (curso) => {
    setSelectedCurso(curso);
    dialogRef.current.showModal();
  };

  const cerrarModal = () => {
    dialogRef.current.close();
  };

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-secondary mb-1">Cursos</h2>
      <p className="text-secondary mb-8">Necesitas mejorar tu alimentación ?<br />Estas en el lugar correcto, encuentra tu curso aquí.</p>
      
      {/* Grid de Cursos */}
      <div className="flex flex-wrap gap-8 justify-center">
        {cursosData.map((curso) => (
          <div
            key={curso.id}
            className="bg-white border border-[#d9d9d9] rounded-lg shadow-md p-4 flex flex-col items-start gap-4 w-full sm:w-[300px] md:w-[320px] lg:w-[340px]"
          >
            <img src={curso.image} alt={curso.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold text-secondary">{curso.title}</h3>
            <p className="text-secondary text-sm flex-1">{curso.shortDescription}</p>
            <button 
              className="bg-secondary text-tertiary px-4 py-2 rounded-md w-full cursor-pointer transition-all duration-300 ease-in-out  hover:scale-105 "
              onClick={() => abrirModal(curso)}
            >
              Ver más
            </button>
          </div>
        ))}
      </div>

      {/* Modal de Detalle del Curso */}
      <dialog ref={dialogRef} onClose={cerrarModal} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-xl w-[600px] max-w-[90vw] backdrop:bg-black/50"
      closedby="any">
        {selectedCurso && (
          <div className="flex flex-col gap-4">
            <img src={selectedCurso.image} alt={selectedCurso.title} className="w-full h-64 object-cover rounded-lg bg-gray-200" />
            <h2 className="text-2xl font-bold text-gray-800">{selectedCurso.title}</h2>
            <p className="text-gray-600 text-base">{selectedCurso.longDescription}</p>
            <p className="text-sm text-gray-400 mt-2">{selectedCurso.date}</p>
            
          </div>
        )}
      </dialog>
    </section>
  );
}
