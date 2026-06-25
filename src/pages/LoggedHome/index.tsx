function LoggedHome() {
	return (
		<>
			<body>
				<header className="br-header">
					<div className="container-lg">
						<div className="header-top">
							<div className="header-logo">
								<img
									src={logoHeader}
									alt="Logo do IFRN"
								/>
							</div>
							<div className="header-actions">
								<div className="header-links dropdown">
									<button
										className="br-button circle small"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir Acesso Rápido"
									>
										<img
											src={menuSandwich}
											alt=""
										/>
										<i
											className="fas fa-ellipsis-v"
											aria-hidden="true"
										></i>
									</button>
									<div className="br-list">
										<div className="header"></div>
										<Link
											to="#"
											className="br-button mr-1x"
										>
											Mais acessados
										</Link>
										<Link
											to="#"
											className="br-button mr-1x"
										>
											Mais recentes
										</Link>
										<Link
											to="#"
											className="br-button mr-1x"
										>
											Por campus
										</Link>
										<Link
											to="#"
											className="br-button mr-1x"
										>
											Por autores
										</Link>
										<Link
											to="#"
											className="br-button mr-1x"
										>
											Por temas
										</Link>
									</div>
								</div>
								<span className="br-divider vertical mx-half mx-sm-1"></span>
								<div className="header-functions dropdown">
									<button
										className="br-button circle small"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir Funcionalidades do Sistema"
									>
										<i
											className="fas fa-th"
											aria-hidden="true"
										></i>
									</button>
								</div>
								<div className="header-search-trigger">
									<button
										className="br-button circle"
										type="button"
										aria-label="Abrir Busca"
										data-toggle="search"
										data-target=".header-search"
									>
										<i
											className="fas fa-search"
											aria-hidden="true"
										></i>
									</button>
								</div>
								<div className="header-login">
									<div className="header-sign-in">
										<BrButton
											label="Cadastrar"
											action={} // função para a página Register
											className="br-button primary mr-3"
										/>
										{/* <button
											className="br-button primary mr-3"
											type="button"
										>
											Cadastrar
										</button> */}
										<BrButton
											label="Entrar"
											action={} // criar função para a página Login
											className="br-button secondary mr-3"
										/>
										{/* <button
											className="br-button secondary mr-3"
											type="button"
										>
											Entrar
										</button> */}
									</div>
									<div className="header-avatar"></div>
								</div>
							</div>
						</div>
						<div className="header-bottom">
							<div className="header-menu">
								<div className="header-menu-trigger">
									<button
										className="br-button small circle"
										type="button"
										aria-label="Menu"
										data-toggle="menu"
										data-target="#main-navigation"
										id="navigation"
									>
										<i
											className="fas fa-bars"
											aria-hidden="true"
										></i>
									</button>
								</div>
								<div className="header-info flex">
									<div className="header-title">
										IFRN Blogs
									</div>
									<div className="header-subtitle">
										Reunindo microblogs do IFRN
									</div>
								</div>
							</div>
							<div className="header-search">
								<div className="br-input has-icon">
									<label htmlFor="searchbox-84027">
										Texto da pesquisa
									</label>
									<input
										id="searchbox-84027"
										type="text"
										placeholder="O que você procura?"
									/>
									<button
										className="br-button circle small"
										type="button"
										aria-label="Pesquisar"
									>
										<i
											className="fas fa-search"
											aria-hidden="true"
										></i>
									</button>
								</div>
								<button
									className="br-button circle search-close ml-1"
									type="button"
									aria-label="Fechar Busca"
									data-dismiss="search"
								>
									<i
										className="fas fa-times"
										aria-hidden="true"
									></i>
								</button>
							</div>
						</div>
					</div>
				</header>

				<nav
					className="br-breadcrumb ml-10x"
					aria-label="Breadcrumbs"
				>
					<ol
						className="crumb-list"
						role="list"
					>
						<li className="crumb home ml-10x">
							<a
								className="br-button circle"
								href="javascript:void(0)"
							>
								{/* <span className="sr-only">Página inicial</span> */}
								<i className="fas fa-house"></i>
								<i className="icon fas fa-chevron-right"></i>
							</a>
							<span>Página inicial</span>
						</li>
					</ol>
				</nav>

				<div className="post-section">
					<div className="post-section-header d-flex">
						<span className="h6">Mais recentes</span>
						<nav
							className="br-pagination"
							aria-label="paginação"
							data-total="10"
							data-current="1"
						>
							<ul>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-previous-page="data-previous-page"
										aria-label="Voltar página"
									>
										<i
											className="fas fa-angle-left"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page active"
										href="javascript:void(0)"
										aria-label=" página 1"
									>
										1
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 2"
									>
										2
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 3"
									>
										3
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 4"
									>
										4
									</a>
								</li>
								<li className="pagination-ellipsis">
									<button
										className="br-button circle"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir ou fechar a lista de paginação"
									>
										<i
											className="fas fa-ellipsis-h"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 10"
									>
										10
									</a>
								</li>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-next-page="data-next-page"
										aria-label="Página seguinte"
									>
										<i
											className="fas fa-angle-right"
											aria-hidden="true"
										></i>
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="cards d-flex mt-3x">
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profFellipe} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Produção estudantil
											</div>
											<div>
												Postado por: Fellipe Aleixo
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto1}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profMarilia} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Inovação nos IFs
											</div>
											<div>
												Postado por: Marilia Aranha
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto4}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profJorgiano} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Noções em prática
											</div>
											<div>
												Postado por: Jorgiano Vidal
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto3}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profSilvia} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Sobre o "ser estudantil"
											</div>
											<div>Postado por: Silvia Matos</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto2}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="post-section-header d-flex mt-6x">
						<span className="h6">Mais acessados</span>
						<nav
							className="br-pagination"
							aria-label="paginação"
							data-total="10"
							data-current="1"
						>
							<ul>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-previous-page="data-previous-page"
										aria-label="Voltar página"
									>
										<i
											className="fas fa-angle-left"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page active"
										href="javascript:void(0)"
										aria-label=" página 1"
									>
										1
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 2"
									>
										2
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 3"
									>
										3
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 4"
									>
										4
									</a>
								</li>
								<li className="pagination-ellipsis">
									<button
										className="br-button circle"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir ou fechar a lista de paginação"
									>
										<i
											className="fas fa-ellipsis-h"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 10"
									>
										10
									</a>
								</li>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-next-page="data-next-page"
										aria-label="Página seguinte"
									>
										<i
											className="fas fa-angle-right"
											aria-hidden="true"
										></i>
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="cards d-flex mt-3x">
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profSilvia} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Sobre o "ser estudantil"
											</div>
											<div>Postado por: Silvia Matos</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto2}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profJorgiano} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Noções em prática
											</div>
											<div>
												Postado por: Jorgiano Vidal
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto3}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profMarilia} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Inovação nos IFs
											</div>
											<div>
												Postado por: Marilia Aranha
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto4}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<span
											className="br-avatar mt-1"
											title="Fulano da Silva"
										>
											<span className="content">
												<img src={profFellipe} />
											</span>
										</span>
										<div className="ml-3">
											<div className="text-weight-semi-bold text-up-02">
												Produção estudantil
											</div>
											<div>
												Postado por: Fellipe Aleixo
											</div>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-ellipsis-v"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={postPhoto1}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisczing elit. Sed eu lectus tempor,
										vulputate leo eget, molestie leo.
										Vivamus congue aliquam elit, eu
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac, feugiat
										suscipit urna. Nunc vulputate eros sed
										turpis...
									</p>
								</div>
								<div className="card-footer">
									<div className="d-flex">
										<div>
											<button
												className="br-button"
												type="button"
											>
												Campus Natal-Central
											</button>
										</div>
										<div className="ml-auto">
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo"
											>
												<i
													className="fas fa-heart"
													aria-hidden="true"
												></i>
											</button>
											<button
												className="br-button circle"
												type="button"
												aria-label="Ícone ilustrativo 3"
											>
												<i
													className="fas fa-share-alt"
													aria-hidden="true"
												></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="post-section-header d-flex mt-6x">
						<span className="h6">Por campus</span>
						<nav
							className="br-pagination"
							aria-label="paginação"
							data-total="10"
							data-current="1"
						>
							<ul>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-previous-page="data-previous-page"
										aria-label="Voltar página"
									>
										<i
											className="fas fa-angle-left"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page active"
										href="javascript:void(0)"
										aria-label=" página 1"
									>
										1
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 2"
									>
										2
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 3"
									>
										3
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 4"
									>
										4
									</a>
								</li>
								<li className="pagination-ellipsis">
									<button
										className="br-button circle"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir ou fechar a lista de paginação"
									>
										<i
											className="fas fa-ellipsis-h"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 10"
									>
										10
									</a>
								</li>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-next-page="data-next-page"
										aria-label="Página seguinte"
									>
										<i
											className="fas fa-angle-right"
											aria-hidden="true"
										></i>
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="cards-campus d-flex justify-content-center gap-4 mt-4x">
						<img
							src={cnat}
							alt="Logo campus CNAT"
							className="mb-2x mx-4x"
						/>
						<img
							src={natalZN}
							alt="Logo campus CNAT"
							className="mb-2x mx-4x"
						/>
						<img
							src={mossoro}
							alt="Logo campus CNAT"
							className="mb-2x mx-4x"
						/>
						<img
							src={ipanguacu}
							alt="Logo campus CNAT"
							className="mb-2x mx-4x"
						/>
						<img
							src={saoGoncalo}
							alt="Logo campus CNAT"
							className="mb-2x mx-4x"
						/>
					</div>

					<div className="post-section-header d-flex mt-6x">
						<span className="h6">Por autor(a)</span>
						<nav
							className="br-pagination"
							aria-label="paginação"
							data-total="10"
							data-current="1"
						>
							<ul>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-previous-page="data-previous-page"
										aria-label="Voltar página"
									>
										<i
											className="fas fa-angle-left"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page active"
										href="javascript:void(0)"
										aria-label=" página 1"
									>
										1
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 2"
									>
										2
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 3"
									>
										3
									</a>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 4"
									>
										4
									</a>
								</li>
								<li className="pagination-ellipsis">
									<button
										className="br-button circle"
										type="button"
										data-toggle="dropdown"
										aria-label="Abrir ou fechar a lista de paginação"
									>
										<i
											className="fas fa-ellipsis-h"
											aria-hidden="true"
										></i>
									</button>
								</li>
								<li>
									<a
										className="page"
										href="javascript:void(0)"
										aria-label=" página 10"
									>
										10
									</a>
								</li>
								<li>
									<button
										className="br-button circle"
										type="button"
										data-next-page="data-next-page"
										aria-label="Página seguinte"
									>
										<i
											className="fas fa-angle-right"
											aria-hidden="true"
										></i>
									</button>
								</li>
							</ul>
						</nav>
					</div>
					<div className="cards d-flex mt-3x mb-10x">
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<div className="ml-1">
											<div className="text-weight-semi-bold text-up-02">
												Jorgiano Vidal
											</div>
											<div>Software | T.I.</div>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={profJorgiano}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<div className="ml-1">
											<div className="text-weight-semi-bold text-up-02">
												Marilia Aranha
											</div>
											<div>Software | T.I.</div>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={profMarilia}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<div className="ml-1">
											<div className="text-weight-semi-bold text-up-02">
												Fellipe Aleixo
											</div>
											<div>Software | T.I.</div>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={profFellipe}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-3">
							<div className="br-card">
								<div className="card-header">
									<div className="d-flex">
										<div className="ml-1">
											<div className="text-weight-semi-bold text-up-02">
												Silvia Matos
											</div>
											<div>Software | T.I.</div>
										</div>
									</div>
								</div>
								<div
									className="card-content"
									tabIndex="0"
								>
									<img
										src={profSilvia}
										alt="Foto de quatro estudantes"
										className="mb-2x"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<footer className="br-footer">
					<div className="container-lg">
						<div className="logo">
							<img
								src={logoFooter}
								alt="Imagem"
							/>
						</div>
						<div
							className="br-list horizontal d-flex justify-content-center"
							data-toggle="data-toggle"
							data-sub="data-sub"
						>
							<div className="col-2">
								<a
									className="br-item header"
									href="javascript:void(0)"
								>
									<div className="content text-down-01 text-bold text-uppercase">
										Mais acessados
									</div>
									<div className="support">
										<i
											className="fas fa-angle-down"
											aria-hidden="true"
										></i>
									</div>
								</a>
								<div className="br-list">
									<span className="br-divider d-md-none"></span>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Produção estudantil
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Inovação nos IFs
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Noções em prática
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Sobre o "ser estudantil"
										</div>
									</a>
									<span className="br-divider d-md-none"></span>
								</div>
							</div>
							<div className="col-2">
								<a
									className="br-item header"
									href="javascript:void(0)"
								>
									<div className="content text-down-01 text-bold text-uppercase">
										Mais recentes
									</div>
									<div className="support">
										<i
											className="fas fa-angle-down"
											aria-hidden="true"
										></i>
									</div>
								</a>
								<div className="br-list">
									<span className="br-divider d-md-none"></span>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Sobre o "ser estudante"
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Noções em prática
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Inovação nos IFs
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Produção estudantil
										</div>
									</a>
									<span className="br-divider d-md-none"></span>
								</div>
							</div>
							<div className="col-2">
								<a
									className="br-item header"
									href="javascript:void(0)"
								>
									<div className="content text-down-01 text-bold text-uppercase">
										Por campus
									</div>
									<div className="support">
										<i
											className="fas fa-angle-down"
											aria-hidden="true"
										></i>
									</div>
								</a>
								<div className="br-list">
									<span className="br-divider d-md-none"></span>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Natal-Central
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Natal-Zona Norte
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">Mossoró</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">Ipanguaçu</div>
									</a>
									<span className="br-divider d-md-none"></span>
								</div>
							</div>
							<div className="col-2">
								<a
									className="br-item header"
									href="javascript:void(0)"
								>
									<div className="content text-down-01 text-bold text-uppercase">
										Por autores
									</div>
									<div className="support">
										<i
											className="fas fa-angle-down"
											aria-hidden="true"
										></i>
									</div>
								</a>
								<div className="br-list">
									<span className="br-divider d-md-none"></span>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Jorgiano Vidal
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Marilia Aranha
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Fellipe Aleixo
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Silvia Matos
										</div>
									</a>
									<span className="br-divider d-md-none"></span>
								</div>
							</div>
							<div className="col-2">
								<a
									className="br-item header"
									href="javascript:void(0)"
								>
									<div className="content text-down-01 text-bold text-uppercase">
										Por temas
									</div>
									<div className="support">
										<i
											className="fas fa-angle-down"
											aria-hidden="true"
										></i>
									</div>
								</a>
								<div className="br-list">
									<span className="br-divider d-md-none"></span>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Vida acadêmica
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Desenvolvimento de software
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Eventos estudantis
										</div>
									</a>
									<a
										className="br-item"
										href="javascript:void(0)"
									>
										<div className="content">
											Projetos de Desenvolvimento de
											Software
										</div>
									</a>
									<span className="br-divider d-md-none"></span>
								</div>
							</div>
						</div>
						<div className="d-none d-sm-block">
							<div className="row align-items-end justify-content-between py-5">
								<div className="col">
									<div className="social-network">
										<div className="social-network-title">
											Redes Sociais
										</div>
										<div className="d-flex">
											<a
												className="br-button circle"
												href="javascript: void(0)"
												aria-label="Compartilhar por Facebook"
											>
												<i
													className="fab fa-facebook-f"
													aria-hidden="true"
												></i>
											</a>
											<a
												className="br-button circle"
												href="javascript: void(0)"
												aria-label="Compartilhar por Twitter"
											>
												<i
													className="fab fa-twitter"
													aria-hidden="true"
												></i>
											</a>
											<a
												className="br-button circle"
												href="javascript: void(0)"
												aria-label="Compartilhar por Linkedin"
											>
												<i
													className="fab fa-linkedin-in"
													aria-hidden="true"
												></i>
											</a>
											<a
												className="br-button circle"
												href="javascript: void(0)"
												aria-label="Compartilhar por Whatsapp"
											>
												<i
													className="fab fa-whatsapp"
													aria-hidden="true"
												></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<span className="br-divider my-3"></span>
					<div className="container-lg">
						<div className="info">
							<div className="text-down-01 text-medium pb-3">
								Secretaria de Educação Profissional e
								Tecnológica - SETEC - 2.1.5-30
							</div>
						</div>
					</div>
				</footer>
			</body>
		</>
	);
}

export default LoggedHome;
