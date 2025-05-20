
import { Navigate } from "react-router-dom";
import { checkAdmin } from "~/services/authService";
import NotFoundPage from "~/pages/NotFound";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const isAdmin = checkAdmin();

  if (!isAdmin) {
    return <NotFoundPage  />;
  }

  return children;
};

export default AdminRoute;