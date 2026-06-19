import { Link } from "react-router-dom";
// @ts-ignore: side-effect import of CSS without module declarations
import "../App.css";
import logoHeader from "../assets/ifrn/logo-header.png";
import menuSandwich from "../assets/icons/icon-sandwich.svg";
import profSilvia from "../assets/authors/silvia.png";
import profMarilia from "../assets/authors/marilia.png";
import profJorgiano from "../assets/authors/jorgiano.png";
import profFellipe from "../assets/authors/fellipao.png";
import postPhoto1 from "../assets/posts/students1.jpeg";
import postPhoto2 from "../assets/posts/students2.jpeg";
import postPhoto3 from "../assets/posts/woman1.jpeg";
import postPhoto4 from "../assets/posts/woman2.jpeg";

function UnloggedHome() {
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
										<button
											className="br-button primary mr-3"
											type="button"
										>
											Cadastrar
										</button>
										<button
											className="br-button secondary mr-3"
											type="button"
										>
											Entrar
										</button>
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
					<div className="cards d-flex">
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
										convallis risus semper eu. Donec nisl
										eros, mattis ac lectus ac...
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
				</div>
			</body>
		</>
	);
}

export default UnloggedHome;
