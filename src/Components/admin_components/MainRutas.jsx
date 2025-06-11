import editIcon from '../../assets/edit.svg'; // Asegúrate de tener estos SVGs en assets
import deleteIcon from '../../assets/delete.svg';
import {TableComponent} from './TableComponent'



export const MainRutas = ({pagina}) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#b692d6] rounded-t-lg px-8 py-4 mb-2">
        <h1 className="text-2xl font-bold text-secondary">{pagina === "citas" ? "Citas" : pagina === "pacientes" ? "Pacientes" : "Diagnosticos"}</h1>
      </div>
      <TableComponent pagina={pagina}/>
    </div>
  );
};
