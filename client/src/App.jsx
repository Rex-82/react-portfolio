import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { DotfileSkeleton } from "./components/Skeletons";

const queryClient = new QueryClient();

import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dotfiles from "pages/Dotfiles";
import PageDesc from "components/PageDesc";
// import ThemeTypography from "./components/storybooks/ThemeTypography";

import Header from "components/Header";
import Footer from "components/Footer";

import CustomTheme from "utils/CustomTheme";

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<InitColorSchemeScript />
				<CssVarsProvider defaultMode="system" theme={CustomTheme}>
					<CssBaseline />
					<Router>
						<Header />
						<Routes>
							<Route
								path="/"
								element={
									<Home>
										<PageDesc
											title="Projects"
											description="Here are some projects I worked on"
										/>
									</Home>
								}
							/>
							<Route
								path="/dotfiles"
								element={
									<Suspense
										fallback={
											<>
												<PageDesc
													title="Dotfiles"
													description="Below you can see the files i use in my linux system"
												/>
												<DotfileSkeleton />
												<DotfileSkeleton />
												<DotfileSkeleton />
											</>
										}
									>
										<Dotfiles>
											<PageDesc
												title="Dotfiles"
												description="Below you can see the files i use in my linux system"
											/>
										</Dotfiles>
									</Suspense>
								}
							/>
							{/* <Route path="/typography" element={<ThemeTypography />} /> */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
					<Footer />
				</CssVarsProvider>
			</QueryClientProvider>
		</>
	);
}
