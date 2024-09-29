import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const mockCorretores = [
  {
    id: 1,
    nome: 'João Silva',
    ocupacao: 'Corretor de Saúde',
    cidade: 'São Paulo, SP',
    fotoUrl: 'https://via.placeholder.com/150',
    sobreMim: 'Tenho 10 anos de experiência no mercado de planos de saúde...',
    servicosPlanos: ['Plano de Saúde A', 'Plano de Saúde B', 'Plano Dental'],
    avaliacoes: [
      {
        id: 1,
        clienteNome: 'Maria Souza',
        clienteFotoUrl: 'https://via.placeholder.com/150',
        descricao: 'Ótimo atendimento! Super recomendo.',
      },
    ],
  },
  {
    id: 2,
    nome: 'Maria Souza',
    ocupacao: 'Corretora de Saúde',
    cidade: 'Rio de Janeiro, RJ',
    fotoUrl: 'https://via.placeholder.com/150',
    sobreMim: 'Especialista em planos de saúde empresariais...',
    servicosPlanos: ['Plano de Saúde C', 'Plano Dental Pro'],
    avaliacoes: [
      {
        id: 2,
        clienteNome: 'Carlos Oliveira',
        clienteFotoUrl: 'https://via.placeholder.com/150',
        descricao: 'Muito atenciosa e profissional.',
      },
    ],
  },
]

function CorretorPerfil() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [corretor, setCorretor] = useState(null)

  useEffect(() => {
    const corretorData = mockCorretores.find((cor) => cor.id === parseInt(id))
    setCorretor(corretorData)
  }, [id])

  const handleGoToHome = () => {
    navigate('/cliente-dashboard')
  }

  const handleMessages = () => {
    navigate('/messages')
  }

  const handleLogout = () => {
    navigate('/login')
  }

  if (!corretor) {
    return <div>Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-bg_bege">
      <header className="bg-white border-b-2 border-black flex justify-between items-center p-4">
        <h1 className="text-bg_azul_escuro text-3xl font-bold">Saúde Digital</h1>
        <div className="flex space-x-4">
          <Button text="Página Principal" onClick={handleGoToHome} />
          <Button text="Mensagens" onClick={handleMessages} />
          <Button text="Desconectar" onClick={handleLogout} />
        </div>
      </header>

      <div className="flex justify-center items-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <img
                src={corretor.fotoUrl}
                alt={`Foto de ${corretor.nome}`}
                className="w-48 h-48 rounded-full object-cover mr-8"
              />
              <div>
                <h2 className="text-3xl font-bold mb-1">{corretor.nome}</h2>
                <p className="text-xl text-gray-700 mb-1">{corretor.ocupacao}</p>
                <p className="text-lg text-gray-500">{corretor.cidade}</p>
              </div>
            </div>
            <div className="flex justify-end w-1/3">
              <Button text="Iniciar Chat" onClick={() => alert(`Iniciando chat com ${corretor.nome}`)} />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2">Sobre mim</h3>
            <p className="text-lg text-gray-700">{corretor.sobreMim}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2">Serviços e Planos Disponíveis</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {corretor.servicosPlanos.map((servico, index) => (
                <li key={index}>{servico}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
          <h3 className="text-2xl font-bold mb-4">Avaliações</h3>
          <div className="space-y-4">
            {corretor.avaliacoes.map((avaliacao) => (
              <div key={avaliacao.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <img
                    src={avaliacao.clienteFotoUrl}
                    alt={`Foto de ${avaliacao.clienteNome}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <h4 className="text-xl font-bold">{avaliacao.clienteNome}</h4>
                </div>
                <p className="text-gray-700">{avaliacao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorretorPerfil;
