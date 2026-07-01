import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import whiteLogo from "../../assets/ifrn/logo-register-login.png";

// Declaração do schema para validação dos dados do formulário
const schema = yup.object().shape({
	usuario: yup
		.string()
		.required("Usuário é obrigatório")
		.min(8, "Usuário deve ter pelo menos 8 caracteres"),
	nome: yup
		.string()
		.required("Nome é obrigatório")
		.min(3, "Nome deve ter pelo menos 3 caracteres"),
	senha: yup
		.string()
		.test(
			"type",
			"A senha deve ser composta apenas de números.",
			(value) => !value || /^\d+$/.test(value),
		)
		.test(
			"len",
			"A senha deve ter pelo menos 8 caracteres.",
			(value) => !value || value.length >= 8,
		),
	confirma_senha: yup
		.string()
		.required("É obrigatória a confirmação da senha.")
		// O .oneOf diz que o valor deve ser um dos elementos do array.
		// O [yup.ref('senha')] busca o valor atual do campo senha.
		.oneOf(
			[yup.ref("senha")],
			"Confirmação da senha deve ser igual à anterior.",
		),
});

// ############ FUNÇÃO PRINCIPAL ############
function Register(): React.ReactNode {
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function dataHandler(data) {
		console.log("Dados de cadastro válidos: ", data);
		navigate("/loggedhome");
	}

	return (
		<>
			<div className="bg-green-vivid-50">
				<div className="main-login">
					<div className="logo-ifrn">
						<img
							src={whiteLogo}
							alt=""
						/>
					</div>

					<form
						onSubmit={handleSubmit(dataHandler)}
						className="col-sm-6 col-md-4 col-lg-3 bg-pure-0"
					>
						<div className="br-card p-6x d-flex flex-column justify-items-center align-items-center">
							<h2>Realizar cadastro</h2>

							{/* CAMPO: USUARIO */}
							<div className="col-sm-6 col-lg-10 mb-3">
								<div
									className={`br-input small ${errors.usuario !== undefined ? "danger" : ""}`}
								>
									<label htmlFor="usuario">Usuário</label>
									<div className="input-group">
										<div className="input-icon">
											<i
												className="fas fa-user"
												aria-hidden="true"
											></i>
										</div>
										<input
											className="small"
											id="usuario"
											type="text"
											placeholder="Digite um nome de usuário"
											{...register("usuario")} // conectado ao hook form
										/>
									</div>
									{/* EXIBIÇÃO DO ERRO */}
									{errors.usuario && (
										<span className="feedback danger">
											{errors.usuario.message}
										</span>
									)}
								</div>
							</div>

							{/* CAMPO: NOME */}
							<div className="col-sm-6 col-lg-10 mb-3">
								<div
									className={`br-input small ${errors.nome !== undefined ? "danger" : ""}`}
								>
									<label htmlFor="nome">Nome</label>
									<div className="input-group">
										<div className="input-icon">
											<i
												className="fas fa-user"
												aria-hidden="true"
											></i>
										</div>
										<input
											className="small"
											id="nome"
											type="text"
											placeholder="Digite seu nome"
											{...register("nome")} // conectado ao hook form
										/>
									</div>
									{/* EXIBIÇÃO DO ERRO */}
									{errors.nome && (
										<span className="feedback danger">
											{errors.nome.message}
										</span>
									)}
								</div>
							</div>

							{/* CAMPO: SENHA */}
							<div className="col-sm-5 col-lg-10 mb-3">
								<div
									className={`br-input input-button ${errors.senha !== undefined ? "danger" : ""}`}
								>
									<label htmlFor="input-password">
										Senha
									</label>
									<input
										id="input-password"
										type="password"
										placeholder="Digite uma senha"
										{...register("senha")} // conectado ao hook form
									/>
									<button
										className="br-button"
										type="button"
										aria-label="Exibir senha"
										role="switch"
										aria-checked="false"
									>
										<i
											className="fas fa-eye"
											aria-hidden="true"
										></i>
									</button>
									{/* EXIBIÇÃO DO ERRO */}
									{errors.senha && (
										<span className="feedback danger">
											{errors.senha.message}
										</span>
									)}
								</div>
							</div>

							{/* CAMPO: CONFIRMAR SENHA */}
							<div className="col-sm-5 col-lg-10 mb-3">
								<div
									className={`br-input input-button ${errors.confirma_senha !== undefined ? "danger" : ""}`}
								>
									<label htmlFor="input-password-2">
										Confirme sua senha
									</label>
									<input
										id="input-password-2"
										type="password"
										placeholder="Confirme sua senha"
										{...register("confirma_senha")} // conectado ao hook form
									/>
									<button
										className="br-button"
										type="button"
										aria-label="Exibir senha"
										role="switch"
										aria-checked="false"
									>
										<i
											className="fas fa-eye"
											aria-hidden="true"
										></i>
									</button>
									{/* EXIBIÇÃO DO ERRO */}
									{errors.confirma_senha && (
										<span className="feedback danger">
											{errors.confirma_senha.message}
										</span>
									)}
								</div>
								<Link
									to="/register"
									className="login-register"
								>
									Já possui uma conta? Faça seu login
								</Link>
							</div>
							<div className="login-buttons mt-2x d-flex align-self-end">
								<Link
									to="/unloggedhome"
									className="br-button secondary mr-3"
								>
									Cancelar
								</Link>
								{/* <button
									className="br-button secondary mr-3"
									type="button"
								>
									Cancelar
								</button> */}
								<button
									className="br-button secondary mr-3"
									type="button"
								>
									Cadastrar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;
