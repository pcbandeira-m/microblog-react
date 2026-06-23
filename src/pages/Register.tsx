import "../App.css";
import logoHeader from "../assets/ifrn/logo-header.png";
import whiteLogo from "../assets/ifrn/logo-register-login.png";

function Register() {
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
						<div className="br-card p-6x d-flex flex-column justify-items-center align-items-center">
							<h2>Realizar login</h2>
							<div className="col-sm-6 col-lg-10 mb-3">
								<div className="br-input small">
									<label htmlFor="input-icon-small">
										Usuário
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
											placeholder="Digite um nome de usuário"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-10 mb-3">
								<div className="br-input small">
									<label htmlFor="input-icon-small">
										Nome
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
											placeholder="Digite seu nome"
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
										placeholder="Digite uma senha"
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
							</div>
							<div className="col-sm-5 col-lg-10 mb-3">
								<div className="br-input input-button">
									<label htmlFor="input-password">
										Confirme sua senha
									</label>
									<input
										id="input-password"
										type="password"
										placeholder="Confirme sua senha"
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
									Já possui uma conta? Faça seu login
								</label>
							</div>
							<div className="login-buttons mt-2x d-flex align-self-end">
								<button
									className="br-button secondary mr-3"
									type="button"
								>
									Cancelar
								</button>
								<button
									className="br-button primary mr-3"
									type="button"
								>
									Cadastrar
								</button>
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	);
}

export default Register;
