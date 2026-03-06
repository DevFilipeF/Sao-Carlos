/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AIgreja from './pages/AIgreja.jsx';
import Contato from './pages/Contato.jsx';
import Cultos from './pages/Cultos.jsx';
import Eventos from './pages/Eventos.jsx';
import Home from './pages/Home.jsx';
import Ministerios from './pages/Ministerios.jsx';
import Oracao from './pages/Oracao.jsx';
import QuemSomos from './pages/QuemSomos.jsx';
import Sermoes from './pages/Sermoes.jsx';
import Sobre from './pages/Sobre.jsx';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIgreja": AIgreja,
    "Contato": Contato,
    "Cultos": Cultos,
    "Eventos": Eventos,
    "Home": Home,
    "Ministerios": Ministerios,
    "Oracao": Oracao,
    "QuemSomos": QuemSomos,
    "Sermoes": Sermoes,
    "Sobre": Sobre,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};