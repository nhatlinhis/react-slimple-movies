import { Fragment } from "react";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route element={<Main></Main>}></Route>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }
        ></Route>
        <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
      </Routes>

      {/* <div className="bg-slate-700">
        <span className="p-2 text-white flex items-center justify-center">
          Design by Nguyen Nhat Linh
        </span>
      </div> */}
    </Fragment>
  );
}

export default App;
