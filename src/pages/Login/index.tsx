import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import whiteLogo from "../../assets/ifrn/logo-register-login.png";

// Declaração do schema para validação dos dados do formulário
const schema = yup.object().shape({
	usuario: yup.string().required("Usuário é obrigatório"),
	senha: yup.string().required("Senha é obrigatória"),
});

// Criação do Tipo com base no schema do yup para o typescript
type LoginFormData = yup.InferType<typeof schema>;

// ############ FUNÇÃO PRINCIPAL ############
function Login() {
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// Função que será disparada apenas se os dados forem válidos
	function dataHandler(data: LoginFormData): void {
		console.log("Dados de login válidos: ", data);
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
						<div className="br-card card-login p-6x d-flex flex-column justify-items-center align-items-center">
							<h2>Realizar login</h2>
							{/* CAMPO: USUÁRIO */}
							<div className="col-sm-6 col-lg-10 mb-3">
								<div
									className={`br-input small ${errors.usuario ? "danger" : ""}`}
								>
									<label htmlFor="usuario">Login</label>
									<div className="input-group">
										<div className="input-icon">
											<i
												className="fas fa-user"
												aria-hidden="true"
											></i>
										</div>
										<input
											className="small"
											id="input-icon-small"
											type="text"
											placeholder="Digite seu login"
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

							{/* CAMPO: SENHA */}
							<div className="col-sm-5 col-lg-10 mb-3">
								<div
									className={`br-input input-button ${errors.senha ? "danger" : ""}`}
								>
									<label htmlFor="input-password">
										Senha
									</label>
									<input
										id="input-password"
										type="password"
										placeholder="Digite sua senha"
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
								</div>
								{/* EXIBIÇÃO DO ERRO */}
								{errors.senha && (
									<span className="feedback danger">
										{errors.senha.message}
									</span>
								)}

								<Link to="/register">
									Ainda não possui uma conta? Faça seu
									cadastro
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
									class="br-button secondary mr-3"
									type="button"
								>
									Cancelar
								</button> */}
								<button
									type="submit"
									className="br-button primary mr-3"
								>
									Entrar
								</button>
								{/* <button
									class="br-button primary mr-3"
									type="button"
								>
									Entrar
								</button> */}
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
