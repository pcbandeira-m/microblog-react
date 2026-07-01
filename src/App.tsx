import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import UnloggedHome from "./pages/UnloggedHome";
import LoggedHome from "./pages/LoggedHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import logoHeader from "./assets/ifrn/logo-header.png";
import menuSandwich from "./assets/icons/icon-sandwich.svg";
import { useEffect, useState } from "react";

function App() {
	const [initialHeader, setInitialHeader] = useState<boolean>(false);

	const location = useLocation();
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setInitialHeader(["/register", "/login"].includes(location.pathname));
	}, [location.pathname]);

	return (
		<>
			<header className="br-header bg-pure-0">
				{initialHeader == true ? (
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
				) : (
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
										<Link
											to="/register"
											className="br-button primary mr-3"
										>
											Cadastrar
										</Link>
										<Link
											to="/login"
											className="br-button secondary mr-3"
										>
											Entrar
										</Link>
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
				)}
			</header>
			<main>
				<Routes>
					<Route
						path="/"
						element={<UnloggedHome />}
					/>
					<Route
						path="/loggedhome"
						element={<LoggedHome />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/post"
						element={<Post />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
