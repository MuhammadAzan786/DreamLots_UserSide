import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Forgetpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import AdminLayout from "./Layouts/AdminLayout/AdminLayout";
import BuyerLayout from "./Layouts/BuyerLayout/BuyerLayout";
import SellerLayout from "./Layouts/SellerLayout/SellerLayout";
import ProtectedRoute from "./redux/ProtectedRoute";
import DashBoard from "./Layouts/AdminLayout/DashBoard/DashBoard";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./index.css";
import theme from "./config/theme.js";
import Service from "./pages/Services/Service.jsx";
import BuyProperty from "./pages/Property/BuyProperty.jsx";
import PropertyContent from "./pages/Property/PropertyContent.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import CreatePostForm from "./pages/CreatePost/CreatePostForm.jsx";
import RentProperty from "./pages/Property/RentProperty.jsx";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/buyproperty" element={<BuyProperty />} />
            <Route path="/rentproperty" element={<RentProperty />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
            <Route path="/propertyContent" element={<PropertyContent />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/createPost" element={<CreatePostForm />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="dashboard" element={<DashBoard />} />
            </Route>

            <Route
              path="/buyer"
              element={
                <ProtectedRoute role="buyer">
                  <BuyerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
            </Route>

            <Route
              path="/seller"
              element={
                <ProtectedRoute role="seller">
                  <SellerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
  );
};

export default App;
