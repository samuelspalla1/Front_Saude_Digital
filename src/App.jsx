import React, { useState } from "react"
import Input from "./components/Input"
import { useNavigate } from "react-router-dom"

function App({ isLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")
  const [cpf, setCpf] = useState("")
  const [corretorCode, setCorretorCode] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "" || (isLogin ? false : userType === "")) {
      alert("Por favor, preencha todos os campos.");
    } else if (!isLogin && userType === "cliente" && cpf === "") {
      alert("Por favor, preencha o CPF.");
    } else if (!isLogin && userType === "corretor" && (cpf === "" || corretorCode === "")) {
      alert("Por favor, preencha o CPF e o Código do Corretor.")
    } else {
      console.log("Dados enviados: ", { email, password, cpf, corretorCode })
      navigate("/login")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg_bege">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg border-2 border-bg_azul_escuro">
        <h1 className="text-3xl font-bold text-center mb-6">{isLogin ? "Saúde Digital" : "Cadastrar-se"}</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isLogin && (
            <div className="mb-4 text-center w-full">
              <label className="block text-gray-700 mb-2 text-center">Tipo de Usuário</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="border rounded-md p-2 w-full text-center"
              >
                <option value="">Selecione um tipo</option>
                <option value="cliente">Cliente</option>
                <option value="corretor">Corretor</option>
              </select>
            </div>
          )}
          {!isLogin && (
            <Input
              label="CPF"
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          )}
          {!isLogin && userType === "corretor" && (
            <Input
              label="Código do Corretor"
              type="text"
              id="corretor-code"
              placeholder="Digite o Código do Corretor"
              value={corretorCode}
              onChange={(e) => setCorretorCode(e.target.value)}
            />
          )}
          <button
            type="submit"
            className="w-full bg-bg_azul_escuro hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
          <button
            type="button"
            className="w-full text-bg_azul_escuro font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => window.location.href = isLogin ? "/register" : "/login"}
          >
            {isLogin ? "Cadastre-se" : "Voltar ao Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
