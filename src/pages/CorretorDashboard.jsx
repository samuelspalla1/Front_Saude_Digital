/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

function CorretorDashboard() {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/corretor-perfil-edit/1");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg_bege">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg border-2 border-bg_azul_escuro">
        <h1 className="text-3xl font-bold text-center mb-6">Corretor Dashboard</h1>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full text-center">
            <h2 className="text-2xl font-semibold mb-4">Acesse seu Perfil</h2>
            <p className="mb-6 text-gray-700">Clique abaixo para ver e editar seu perfil.</p>
            <button
              onClick={handleGoToProfile}
              className="w-full bg-bg_azul_escuro hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Ir para Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorretorDashboard;
