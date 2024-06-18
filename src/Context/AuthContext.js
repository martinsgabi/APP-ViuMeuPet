import { createContext, useState } from "react";

//login:
export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);//true/false
    const [error, setError] = useState(false);
    const [observacoes, setObservacoes] = useState(false);
    const [cadastro, setCadastro] = useState(false);

    async function Login(email, senha) {
        if (email != "" && senha != "") {
            await fetch('http://10.139.75.18/api/Usuarios/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })
                .then(res => res.json())
                .then(json => {
                    if(json.usuarioId != 0){
                        setLogado(true);
                    }
                    else{
                        setError(true)
                    }
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, observacoes:observacoes, setObservacoes, cadastro:cadastro, setCadastro }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;