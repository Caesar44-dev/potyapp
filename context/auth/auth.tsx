// modules
import { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
    EmpresasEndPoints,
    ClienteEndPoints
} from '../../utils/endPoints';

// create context
export const AuthContext = createContext<any>([]);

/**
 * AuthProvider
 * 
 * ? Porque al ejecutar exitosamente el endpoint de registrar empresa este devuelve un array vacio?,
 * ? con que tipo de logica se valida un objeto vacio para hacer funciones de redireciones o mostrar errores?
 * 
 * ! no logro entender la logica de la api, porfavor crear un informe o una documentacion mejor detallada.
 * 
 */

export const AuthProvider = ({ children }: any) => {

    const navigation = useNavigation<any>()
    const [user, setUser] = useState<any>(null);
    const [isAuth, setisAuth] = useState(false);

    return (
        <AuthContext.Provider
            value={{

                LoginSmsClientes: async (number: any) => {
                    try {
                        // console.log("login phone", number)
                        if (number === "1234") {
                            setisAuth(true)
                            console.log("logeed")
                        }
                        else {
                            setisAuth(false)
                            console.log("not logeed")
                        }
                    } catch (e) {
                        console.log(e)
                    }
                },

                registerBusiness: (
                    companyName: string,
                    specialization: number,
                    nameOwner: string,
                    email: string,
                    phoneNumber: string,
                    state: string,
                    city: string,
                    addressCompany: string,
                    latitude: string,
                    longitude: string,
                ) => {
                    try {
                        axios.post(
                            EmpresasEndPoints.register,
                            {
                                "empresaHeader": {
                                    "nombre": companyName,
                                    "rubroId": specialization,
                                    "responsable": nameOwner,
                                    "correo": email,
                                    "celular": phoneNumber,
                                    "empresaDireccion": {
                                        "state": state,
                                        "city": city,
                                        "direccion": addressCompany,
                                        "latitud": latitude,
                                        "longitud": longitude
                                    }
                                }
                            },
                            {
                                headers: {
                                    "Content-Type": "application/json"
                                    // Authorization: 'Bearer ' + token
                                }
                            }
                        )
                            /**
                             * ! El endpoint retorna un objeto vacio si la funcion es exitosa.
                             * 
                             * ? Donde esta la documentacion que me indica que tipo de codigos http debo manejar en estas funciones
                             * ? para las validaciones?, si es asi que se debe hacer.
                             * 
                             */
                            .then((result) => {
                                console.log(result.data);
                                navigation.navigate("HomeScreen");
                            })
                            .catch(err => {
                                console.log(err.response.data)
                            })
                    } catch (error) {
                        console.log("error", error)
                    }
                },

                registerCliente: (
                    email: string,
                    phoneNumber: string,
                    phoneNumberConfirmed: boolean,
                    password: string,
                    confirmPassword: string,
                    role: string
                ) => {
                    try {
                        axios.post(
                            ClienteEndPoints.register,
                            {
                                "email": email,
                                "phoneNumber": phoneNumber,
                                "phoneNumberConfirmed": phoneNumberConfirmed,
                                "password": password,
                                "confirmPassword": confirmPassword,
                                "role": role
                            },
                            {
                                headers: {
                                    "Content-Type": "application/json"
                                    // Authorization: 'Bearer ' + token
                                }
                            }
                        )
                            .then((result) => {
                                console.log(result.data);
                                navigation.navigate("HomeScreen");
                            })
                            .catch(err => {
                                console.log(err.response.data)
                            })
                    } catch (error) {
                        console.log("error", error)
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
};