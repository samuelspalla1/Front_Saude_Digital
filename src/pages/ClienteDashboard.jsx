import React, { useEffect, useState } from 'react';
import Button from '../components/Button'; // Importando o botão reutilizável
import { useNavigate } from 'react-router-dom';

// Simulação de dados vindos do backend (apenas exemplo, substituir por dados reais do backend)
const mockCorretores = [
  {
    id: 1,
    nome: 'João Silva',
    fotoUrl: 'https://via.placeholder.com/150', // Substitua pelo caminho correto
  },
  {
    id: 2,
    nome: 'Maria Souza',
    fotoUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    nome: 'Carlos Oliveira',
    fotoUrl: 'https://via.placeholder.com/150',
  },
];

function ClienteDashboard() {
  const navigate = useNavigate();
  const [corretores, setCorretores] = useState([]);

  // Função simulando chamada ao backend
  useEffect(() => {
    // Substitua isso por uma chamada de API real
    const fetchCorretores = async () => {
      // Exemplo: const response = await fetch('/api/corretores');
      // const data = await response.json();
      setCorretores(mockCorretores); // Aqui, os dados simulados são usados, substitua pelos dados da API
    };
    fetchCorretores();
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleMessages = () => {
    navigate('/messages');
  };

  const handleVerPerfil = (id) => {
    // Navegar para a página de perfil do corretor com o ID
    navigate(`/corretor-perfil/${id}`);
  };


  return (
    <div className="min-h-screen bg-bg_bege">
      {/* Header */}
      <header className="bg-white border-b-2 border-black flex justify-between items-center p-4">
        <h1 className="text-bg_azul_escuro text-3xl font-bold">Saúde Digital</h1>
        <div className="flex space-x-4">
          <Button text="Mensagens" onClick={handleMessages} />
          <Button text="Desconectar" onClick={handleLogout} />
        </div>
      </header>

      {/* Conteúdo */}
      <div className="flex">
        {/* Menu Lateral */}
        <aside className="w-1/4 bg-white p-4 min-h-screen">
          <h2 className="text-xl font-bold mb-4">Filtros</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Plano</label>
            <select className="border rounded-md p-2 w-full">
              <option value="">Selecione um plano</option>
              <option value="basico">Básico</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Região</label>
            <select className="border rounded-md p-2 w-full">
              <option value="">Selecione uma região</option>
              <option value="norte">Norte</option>
              <option value="sul">Sul</option>
              <option value="centro-oeste">Centro-Oeste</option>
            </select>
          </div>
        </aside>

        {/* Área Principal */}
        <main className="w-3/4 bg-bg_bege p-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Mapear corretores vindos do backend */}
            {corretores.map((corretor) => (
              <div key={corretor.id} className="bg-white p-4 rounded shadow-md">
                <img
                  src={corretor.fotoUrl}
                  alt={`Foto de ${corretor.nome}`}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-center">{corretor.nome}</h3>
                <div className="flex justify-center">
                <Button text="Ver Perfil" onClick={() => handleVerPerfil(corretor.id)} />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ClienteDashboard;
