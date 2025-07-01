import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import CircularProgress from "@mui/material/CircularProgress";
import MDBox from "components/MDBox";
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import routes from "routes";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";
import brandWhite from "assets/images/logo-ct.png";
import iposLight from "assets/images/Logo_Ipos.png";
import brandDark from "assets/images/logo-ct-dark.png";
import Basic from "layouts/authentication/sign-in"; // Asegúrate de que esta ruta es correcta
import { ProtectedRoute } from "components/ProtectedRoutes";
import { Dashboard } from "@mui/icons-material";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const ced = queryParams.get("ced");

    if (ced) {
      verificarEmpleado(ced);
    }
  }, [location.search]);

  const verificarEmpleado = async (cedula) => {
    try {
      const response = await fetch(`http://10.16.9.24:5000/empleado/${cedula}`);

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await response.json();

      // Verifica si se encontraron datos del empleado
      if (data && data.cedper) {
        alert(`Trabajador ACTIVO\nNombre: ${data.nomper} ${data.apeper}\nCédula: ${data.cedper}`);
      } else {
        alert("Trabajador no encontrado o INACTIVO");
      }
    } catch (error) {
      console.error("Error al verificar:", error);
      alert("Error al verificar el trabajador");
    }
  };

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) => [
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={
              route.protected ? <ProtectedRoute>{route.component}</ProtectedRoute> : route.component
            }
            key={route.key}
          />
        );
      }

      return null;
    }),
    <Route path="/verificar-empleado" element={<VerificarEmpleado />} key="verificar-empleado" />,
  ];

  function VerificarEmpleado() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const ced = queryParams.get("ced");

      if (ced) {
        // Realizar la verificación aquí o redirigir a la página principal
        navigate("/", { state: { cedula: ced } });
      } else {
        navigate("/");
      }
    }, [location, navigate]);

    return (
      <MDBox display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress color="info" />
      </MDBox>
    );
  }

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  // Función para renderizar el contenido principal
  const renderContent = (themeToUse) => (
    <ThemeProvider theme={themeToUse}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? iposLight : iposLight}
            brandName="Sistema de Carnetización"
            routes={routes.filter(
              (route) => !route.hideWhenUnauthenticated || localStorage.getItem("authToken")
            )}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {/* {configsButton} */}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="/authentication/sign-in" element={<Basic />} />
        <Route
          path="*"
          element={
            localStorage.getItem("authToken") ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/authentication/sign-in" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      {renderContent(darkMode ? themeDarkRTL : themeRTL)}
    </CacheProvider>
  ) : (
    renderContent(darkMode ? themeDark : theme)
  );
}
