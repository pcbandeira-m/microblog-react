import "../App.css";
import { Link } from "react-router-dom";
import logoHeader from "../assets/ifrn/logo-header.png";
import whiteLogo from "../assets/ifrn/logo-register-login.png";
import BrButton from "../../components/BrButton";

function Login() {
	return (
		<>
			<body className="bg-green-vivid-50">
				<header className="br-header bg-pure-0">
					<div className="container-lg">
						<div className="header-top">
							<div className="header-logo">
								<img
									src={logoHeader}
									alt="Logo do IFRN"
								/>
							</div>
						</div>
					</div>
				</header>

				<div className="main-login">
					<div className="logo-ifrn">
						<img
							src={whiteLogo}
							alt=""
						/>
					</div>

					<div className="col-sm-6 col-md-4 col-lg-3 bg-pure-0">
						<div className="br-card card-login p-6x d-flex flex-column justify-items-center align-items-center">
							<h2>Realizar login</h2>
							<div className="col-sm-6 col-lg-10 mb-3">
								<div className="br-input small">
									<label htmlFor="input-icon-small">
										Login
									</label>
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
										/>
									</div>
								</div>
							</div>

							<div className="col-sm-5 col-lg-10 mb-3">
								<div className="br-input input-button">
									<label htmlFor="input-password">
										Senha
									</label>
									<input
										id="input-password"
										type="password"
										placeholder="Digite sua senha"
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
								<label className="login-register">
									Ainda não possui uma conta? Faça seu
									cadastro
								</label>
							</div>

							<div className="login-buttons mt-2x d-flex align-self-end">
								<Link
									to="/"
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
								<Link
									to="/loggedhome"
									className="br-button primary mr-3"
								>
									Entrar
								</Link>
								{/* <button
									class="br-button primary mr-3"
									type="button"
								>
									Entrar
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	);
}

export default Login;
