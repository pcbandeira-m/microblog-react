import { Link } from "react-router-dom";
import "../App.css";
import logoHeader from "../assets/ifrn/logo-header.png";
import logoFooter from "../assets/ifrn/logo-footer.png";
import menuSandwich from "../assets/icons/icon-sandwich.svg";
import postPhoto4 from "../assets/posts/woman2.jpeg";

function Post() {
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
											label="Publicar"
											action={} // criar função para publicar post
											className="br-button primary mr-3"
										/>
										{/* <button
											className="br-button primary mr-3"
											type="button"
										>
											Publicar
										</button> */}
										<BrButton
											label="Perfil"
											action={} // criar função para acesso ao perfil (?)
											className="br-button secondary mr-3"
										/>
										{/* <button
											className="br-button secondary mr-3"
											type="button"
										>
											Perfil
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
							<span>Post</span>
						</li>
					</ol>
				</nav>

				<div className="content-section ml-10x mb-8x">
					<div className="post-infos ml-10x">
						<h2>Inovação nos IFs</h2>
						<legend>Publicado por: Marilia Aranha</legend>
						<legend>13 de junho de 2026</legend>
					</div>
					<div className="post-content d-flex flex-column align-items-center">
						<img
							src={postPhoto4}
							alt=""
							className="post-photo"
						/>
						<div className="post-text">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisczing elit. Sed eu lectus tempor,
								vulputate leo eget, molestie leo. Vivamus congue
								aliquam elit, eu convallis risus semper eu.
								Donec nisl eros, mattis ac lectus ac, feugiat
								suscipit urna. Nunc vulputate eros sed turpis
								tincidunt posuere. Nullam a interdum nisi.
								Curabitur tempor aliquet ex sed commodo. In quis
								mauris lobortis, sollicitudin enim vitae,
								finibus felis.
							</p>
							<p>
								Mauris sem lorem, vehicula eu sagittis et,
								blandit in ligula. Nulla facilisi. Nam tempor
								ligula pharetra arcu ornare, pharetra maximus
								ipsum ultricies. Sed aliquam tincidunt tellus,
								id efficitur augue ullamcorper eu. Donec
								hendrerit ligula id lorem vestibulum ornare.
								Pellentesque gravida cursus feugiat. Aenean
								sagittis vehicula imperdiet. Vestibulum enim mi,
								lobortis vel pharetra a, tincidunt et ligula.
								Proin leo arcu, mattis eget odio nec, tincidunt
								ornare elit. Quisque at dolor vehicula, sodales
								sapien a, eleifend leo.
							</p>
							<p>
								Fusce sed gravida leo, et consequat turpis. In
								sollicitudin magna congue turpis luctus
								porttitor. Duis sapien erat, sagittis vel
								blandit ac, volutpat at quam. Pellentesque
								vestibulum ante purus, id vulputate augue
								dapibus laoreet. Quisque eu urna convallis,
								mollis ligula sed, porttitor sapien.
								Pellentesque ut erat malesuada, congue eros vel,
								scelerisque ex. Vivamus convallis pretium enim,
								sed vestibulum nulla malesuada sed. Nullam eget
								diam eu lacus pulvinar semper.
							</p>
							<p>
								Nulla blandit at ante in condimentum. Aliquam
								lacus augue, porttitor quis sem nec, pulvinar
								imperdiet ante. Suspendisse sodales vulputate
								faucibus. Pellentesque augue lacus, varius sit
								amet justo at, finibus scelerisque purus.
								Phasellus sagittis a turpis ac ultrices. Nam sit
								amet euismod nisi, eget venenatis tellus. Donec
								sagittis purus vel fermentum feugiat. Nulla nisi
								erat, dignissim quis diam eu, accumsan auctor
								sapien. Morbi ante neque, vestibulum et ante
								vitae, lobortis auctor eros.
							</p>
							<p>
								Phasellus ac porttitor tellus. Duis interdum dui
								nulla, eget semper est lacinia ut. Pellentesque
								vulputate turpis nec placerat suscipit.
								Vestibulum sit amet ultricies nunc. Pellentesque
								commodo, purus ut condimentum aliquam, metus
								orci ultrices augue, vitae posuere dui tellus
								sit amet nisi. Donec venenatis a dui et
								consectetur. Mauris dignissim diam libero, vitae
								semper felis eleifend in.
							</p>
							<p>
								Vestibulum blandit luctus lorem id faucibus. Nam
								in iaculis sapien. In posuere auctor mauris, id
								ornare eros hendrerit eget. Fusce ut enim sed
								ipsum faucibus egestas. Praesent efficitur dui
								accumsan nunc rhoncus, vitae egestas neque
								pellentesque. Cras eu lacus at nisi vulputate
								fringilla eget non mauris. Aenean sollicitudin
								vehicula ornare. Morbi a consectetur nisi. Ut
								sit amet scelerisque enim. Aliquam malesuada, ex
								non eleifend hendrerit, magna sem ultricies
								lorem, finibus pulvinar dolor erat interdum
								nisl. Cras mauris libero, lobortis id vestibulum
								ac, porttitor eu dolor. Donec est est, bibendum
								hendrerit libero vitae, euismod porttitor odio.
								Etiam rutrum ipsum at risus hendrerit, ac mattis
								orci pulvinar. Duis nisl velit, elementum in
								pulvinar ac, rhoncus eget augue. Maecenas
								efficitur consectetur elementum. Nunc tristique,
								leo eu fermentum porta, nunc erat suscipit
								lorem, eget hendrerit neque libero quis urna.
							</p>
							<p>
								Quisque ut blandit ante. Orci varius natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Etiam vitae mi eget
								turpis blandit posuere nec eget dolor. Nam
								commodo leo sit amet ultricies lacinia. Nam
								tempus aliquet ex, eu tincidunt nisl ornare eu.
								Nam sodales tincidunt interdum. In eget maximus
								odio. Nulla eget eros sit amet ligula
								condimentum tincidunt. Praesent sed leo iaculis,
								bibendum enim sit amet, aliquam nisi. Ut metus
								enim, euismod et lobortis eu, feugiat ac orci.
								Pellentesque vulputate pulvinar augue, sit amet
								cursus lorem lobortis ut. Nulla vitae nunc at
								est pellentesque tincidunt in vestibulum neque.
								Mauris turpis magna, convallis ac fermentum in,
								tempor eget justo.
							</p>
						</div>
					</div>
					<div className="post-comment">
						<div className="col-sm-6">
							<div className="br-textarea large">
								<label htmlFor="textarea-density-id2">
									Comentário
								</label>
								<textarea
									id="textarea-density-id2"
									placeholder="Deixe o seu comentário aqui"
								></textarea>
							</div>
							<div className="comment-buttons mt-2x d-flex justify-content-end">
								<BrButton
									label="Salvar"
									action={} // criar função para salvar comentário
									className="br-button secondary mr-3"
								/>
								{/* <button
									className="br-button secondary mr-3"
									type="button"
								>
									Salvar
								</button> */}
								<BrButton
									label="Comentário"
									action={} // criar função para salvar comentário
									className="br-button primary mr-3"
								/>
								{/* <button
									className="br-button primary mr-3"
									type="button"
								>
									Comentário
								</button> */}
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

export default Post;
