import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import List from "./pages/List";
import { Demo } from "./pages/Demo";
import Contactform from "./pages/Contactform";
import EditContact from "./pages/EditContact";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route path="/" element={<List />} />
            <Route path="/contactform" element={<Contactform />} />
            {/* Elimina o comenta la siguiente línea si existe */}
            {/* <Route path="/single/:theId" element={<Single />} /> */}
            <Route path="/demo" element={<Demo />} />
            <Route path="/edit-contact/:id" element={<EditContact/>}/>
            <Route path="/" element={<List />} />
        </Route>
    )
);