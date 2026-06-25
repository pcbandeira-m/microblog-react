import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnloggedHome from "./pages/UnloggedHome";
import LoggedHome from "./pages/LoggedHome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";

function App() {
	return (
		<>
			<BrowserRouter>
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
			</BrowserRouter>
		</>
	);
}

export default App;
