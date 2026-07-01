import { Link } from "react-router-dom";
// @ts-ignore: side-effect import of CSS without module declarations
import "../../App.css";
import logoFooter from "../../assets/ifrn/logo-footer.png";
import profSilvia from "../../assets/authors/silvia.png";
import profMarilia from "../../assets/authors/marilia.png";
import profJorgiano from "../../assets/authors/jorgiano.png";
import profFellipe from "../../assets/authors/fellipao.png";
import postPhoto1 from "../../assets/posts/students1.jpeg";
import postPhoto2 from "../../assets/posts/students2.jpeg";
import postPhoto3 from "../../assets/posts/woman1.jpeg";
import postPhoto4 from "../../assets/posts/woman2.jpeg";
import cnat from "../../assets/campi/cnat.png";
import ipanguacu from "../../assets/campi/ipanguacu.png";
import mossoro from "../../assets/campi/mossoro.png";
import natalZN from "../../assets/campi/natal-zn.png";
import saoGoncalo from "../../assets/campi/sao-goncalo-do-amarante.png";

function UnloggedHome() {
	return (
		<>
			<section>
				<div
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
				</div>

				<div className="post-section">
					<div className="post-section-header d-flex">
						<span className="h6">Mais recentes</span>
						<div
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
						</div>
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
								<div className="card-content">
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
						<Link
							className="col-sm-6 col-md-4 col-lg-3"
							to="/post"
						>
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
								<div className="card-content">
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
						</Link>
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
								<div className="card-content">
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
								<div className="card-header w-">
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
												"Ser estudantil"
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

					<div className="post-section-header d-flex mt-6x">
						<span className="h6">Mais acessados</span>
						<div
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
						</div>
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
												"Ser estudantil"
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
								<div className="card-content">
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
								<div className="card-content">
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
								<div className="card-content">
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
								<div className="card-content">
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
						<div
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
						</div>
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
						<div
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
						</div>
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
								<div className="card-content">
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
								<div className="card-content">
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
								<div className="card-content">
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
								<div className="card-content">
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
			</section>
		</>
	);
}

export default UnloggedHome;
