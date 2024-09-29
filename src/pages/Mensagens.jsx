import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const mockCorretores = [
  {
    id: 1,
    nome: 'João Silva',
    fotoUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    nome: 'Ana Souza',
    fotoUrl: 'https://via.placeholder.com/150',
  },
  // Outros corretores...
];

function Mensagens() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [corretorSelecionado, setCorretorSelecionado] = useState(null);

  const handleGoToHome = () => {
    navigate('/cliente-dashboard');
  };

  const handleSair = () => {
    // Implementar lógica para sair
    alert("Saindo...");
  };

  const handleEnviar = () => {
    if (mensagem.trim() === "") {
      alert("Por favor, digite uma mensagem.");
    } else {
      // Adicionar a nova mensagem à lista de mensagens
      setMensagens([...mensagens, { remetente: 'Você', texto: mensagem }]);
      setMensagem(''); // Limpar o campo de entrada
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEnviar();
    }
  };

  const handleCorretorSelecionado = (corretor) => {
    setCorretorSelecionado(corretor);
    setMensagens([]); // Limpa as mensagens ao selecionar um novo corretor
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white border-b-2 border-black flex justify-between items-center p-4">
        <h1 className="text-bg_azul_escuro text-3xl font-bold">Saúde Digital</h1>
        <div className="flex space-x-4">
          <Button text="Página Principal" onClick={handleGoToHome} />
          <Button text="Sair" onClick={handleSair} />
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-1/4 bg-white p-4 h-full border-r border-gray-300">
          <div className="space-y-4">
            {mockCorretores.map((corretor) => (
              <div
                key={corretor.id}
                className="flex items-center border-b border-gray-300 pb-2 mb-2 last:mb-0"
                onClick={() => handleCorretorSelecionado(corretor)}
              >
                <img
                  src={corretor.fotoUrl}
                  alt={`Foto de ${corretor.nome}`}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <p className="text-lg">{corretor.nome}</p>
              </div>
            ))}
          </div>
        </aside>

        <main className="w-3/4 bg-white p-4 flex flex-col border-l border-gray-300">
          <div className="flex-1 border border-gray-300 rounded-lg p-4 overflow-y-auto h-full flex flex-col">
            {/* Simulação de mensagens */}
            {corretorSelecionado ? (
              <>
                <h2 className="text-lg font-bold mb-2">
                  Chat com {corretorSelecionado.nome}
                </h2>
                {mensagens.length === 0 ? (
                  <p>Nenhuma mensagem encontrada.</p>
                ) : (
                  mensagens.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.remetente === 'Você' ? 'text-right' : 'text-left'}`}>
                      <strong>{msg.remetente}: </strong>
                      <span>{msg.texto}</span>
                    </div>
                  ))
                )}
              </>
            ) : (
              <p>Selecione um corretor para iniciar o chat.</p>
            )}
          </div>

          {/* Área para enviar nova mensagem */}
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={handleKeyDown} // Enviar mensagem ao pressionar Enter
              className="border border-gray-300 rounded-lg p-2 w-full"
              disabled={!corretorSelecionado} // Desabilitar se nenhum corretor estiver selecionado
            />
            <button
              className="bg-bg_azul_escuro text-white rounded-lg px-4 py-2 ml-2"
              onClick={handleEnviar}
              disabled={!corretorSelecionado} // Desabilitar se nenhum corretor estiver selecionado
            >
              Enviar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Mensagens;
