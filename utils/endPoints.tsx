

const serverUrl = "http://ngamez952-001-site12.ftempurl.com/index.html";

const auth = serverUrl + "/auth";
const client = serverUrl + "/client";

/**
 * EndPoints
 * ! Los endpoints estan muy desordenados y con nombres iguales..
 * 
 * ! Recomiendo ordernar los endpoints para mejorar y facilitar el desarrollo
 * 
 * ! Algunos endpoints no me funcionan, dan error en el servidor o algun otro codigo de error http
 * 
 */

export const AuthEndPoints = {
  login: auth + "/login",
  sendSMSLoginCliente: auth + "/sendSMSLoginCliente",
  loginSMSClientes: auth + "/loginSMSClientes",
  sendSMSLoginTrabajador: auth + "/sendSMSLoginTrabajador",
  loginExterno: auth + "/loginExterno",
  loginSMSTrabajador: auth + "/loginSMSTrabajador",
  reenvioConfirmarCuenta: auth + "/reenvioConfirmarCuenta",
  confirmEmail: auth + "/confirmEmail",
  forgetPassword: auth + "/forgetPassword",
  resetPassword: auth + "/resetpassword",
  listadoUsers: auth + "/listadoUsers",
  listadorRoles: auth + "/listadorRoles",
  inhabilitarUsuario: auth + "/inhabilitarUsuario",
};

export const ClienteEndPoints = {
  register:  serverUrl + "/clientes",
};

export const EmpresasEndPoints = {
  fetch:  serverUrl + "/empresas",
  register:  serverUrl + "/empresas",
  fetchId:  serverUrl + "/empresas/",
  putInformacion:  serverUrl + "/empresas/putInformacion/",
  putImagenes:  serverUrl + "/empresas/putImagenes/",
};

export const EmpresasAdminEndPoints = {
  getEmpresasAll:  serverUrl + "/getEmpresasAll",
  pendientesautorizar:  serverUrl + "/pendientesautorizar",
  autorizarEmpresa:  serverUrl + "/autorizarEmpresa/",
};

export const EmpresaServiciosEndPoints = {
  empresaServiciosbyEmpresa:  serverUrl + "/empresaServicios/byEmpresa",
  empresaServicios:  serverUrl + "/empresaServicios/",
  empresaServiciospost:  serverUrl + "/empresaServicios/",
  empresaServiciosput:  serverUrl + "/empresaServicios/putInformacion/",
};